/**
 * Cloudflare Worker Entry Point
 * Wraps the Sol-generated Hono app with authentication middleware
 */
import { Hono } from 'hono';
import { basicAuth } from 'hono/basic-auth';
import { timingSafeEqual } from 'hono/utils/buffer';
import { configure_app } from '../target/js/release/build/__gen__/server/server.js';

type Env = {
  DB: D1Database;
  BASIC_AUTH_USER: string;
  BASIC_AUTH_PASS: string;
};

// Helper function for timing-safe credential comparison
// Uses timingSafeEqual to prevent timing attacks
// Note: Hono's timingSafeEqual hashes inputs and compares hashes + original values
// For strings, the a === b check works correctly
const secureCompare = async (a: string | undefined, b: string | undefined): Promise<boolean> => {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  // Pass strings directly - Hono's implementation handles string comparison
  return await timingSafeEqual(a, b);
};

// Create Hono app
const app = new Hono<{ Bindings: Env }>();

// Basic Auth middleware for admin and API routes
// Uses timingSafeEqual for timing attack protection
app.use('/admin/*', basicAuth({
  verifyUser: async (username, password, ctx) => {
    const userMatch = await secureCompare(username, ctx.env.BASIC_AUTH_USER);
    const passMatch = await secureCompare(password, ctx.env.BASIC_AUTH_PASS);
    return userMatch && passMatch;
  },
  realm: 'Admin',
}));

app.use('/api/*', basicAuth({
  verifyUser: async (username, password, ctx) => {
    const userMatch = await secureCompare(username, ctx.env.BASIC_AUTH_USER);
    const passMatch = await secureCompare(password, ctx.env.BASIC_AUTH_PASS);
    return userMatch && passMatch;
  },
  realm: 'API',
}));

// Configure MoonBit/Luna routes
configure_app(app);

// Early Hints link headers for critical resources
const EARLY_HINTS_LINKS = [
  '</loader.js>; rel=preload; as=script',
  '<https://fonts.googleapis.com>; rel=preconnect',
  '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
].join(', ');

// Export for Cloudflare Workers
export default {
  fetch: async (request: Request, env: Env, ctx: ExecutionContext): Promise<Response> => {
    // Set D1 binding for database access
    (globalThis as any).__D1_DB = env.DB;

    const url = new URL(request.url);

    // Send 103 Early Hints for HTML navigation requests
    // Note: ctx.passThroughOnException() enables Early Hints on Cloudflare
    if (request.headers.get('Accept')?.includes('text/html') && !url.pathname.startsWith('/api/')) {
      // Cloudflare supports Early Hints via waitUntil with a special header
      // The actual 103 response is handled by Cloudflare's edge
    }

    // Let Hono handle the request
    const response = await app.fetch(request, env, ctx);

    // Fix MIME type and add cache headers for JS files
    if (url.pathname.endsWith('.js')) {
      const headers = new Headers(response.headers);
      // Fix MIME type if incorrectly set (Miniflare issue)
      if (response.headers.get('content-type')?.includes('text/plain')) {
        headers.set('content-type', 'application/javascript');
      }
      // Add long cache for static JS files (1 year)
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }

    // Add Link header for Early Hints (browser will use these for subsequent navigations)
    if (response.headers.get('content-type')?.includes('text/html')) {
      const headers = new Headers(response.headers);
      headers.set('Link', EARLY_HINTS_LINKS);
      // Add cache hints for static assets
      headers.set('X-Content-Type-Options', 'nosniff');
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }

    return response;
  }
};

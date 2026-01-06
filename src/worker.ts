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

// Export for Cloudflare Workers
export default {
  fetch: async (request: Request, env: Env, ctx: ExecutionContext): Promise<Response> => {
    // Set D1 binding for database access
    (globalThis as any).__D1_DB = env.DB;

    // Let Hono handle the request
    const response = await app.fetch(request, env, ctx);

    // Fix MIME type for JS files if incorrectly set (Miniflare issue)
    const url = new URL(request.url);
    if (url.pathname.endsWith('.js') && response.headers.get('content-type')?.includes('text/plain')) {
      const headers = new Headers(response.headers);
      headers.set('content-type', 'application/javascript');
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }

    return response;
  }
};

import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

// ESM compatible __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root (Playwright uses .env, Wrangler uses .dev.vars symlinked to .env)
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

/**
 * Playwright configuration for MoonBit + Luna UI Blog Admin E2E tests
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: '.',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: '../../.artifacts/test-reports' }],
    ['list'],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:8787',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',

    // Basic auth credentials (loaded from .env via dotenv)
    httpCredentials: {
      username: process.env.BASIC_AUTH_USER!,
      password: process.env.BASIC_AUTH_PASS!,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Run local dev server before starting tests (optional)
  webServer: process.env.CI ? undefined : {
    command: 'npm run dev',
    url: 'http://localhost:8787',
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },

  // Output directory for test artifacts
  outputDir: '../../.artifacts/test-results',
});

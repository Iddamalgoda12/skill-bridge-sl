import { defineConfig } from "@playwright/test";

/**
 * Runs against an already-running stack (Spring API + `next start`), because the auth
 * flows need the real backend and database:
 *
 *   E2E_BASE_URL=http://localhost:3001 npm run test:e2e
 *
 * Uses the system Google Chrome by default so no browser download is needed; set
 * E2E_CHROMIUM=1 (after `npm run test:e2e:install`) to use Playwright's Chromium instead.
 */
export default defineConfig({
  testDir: "./e2e",
  globalTeardown: "./e2e/global-teardown.ts",
  timeout: 45_000,
  expect: { timeout: 8_000 },
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: process.env.E2E_BASE_URL ?? "http://localhost:3000",
    channel: process.env.E2E_CHROMIUM ? undefined : "chrome",
    trace: "retain-on-failure",
  },
});

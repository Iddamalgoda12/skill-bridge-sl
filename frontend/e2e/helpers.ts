import { expect, type Page } from "@playwright/test";

export const E2E_DOMAIN = "example.test";
export const uniqueEmail = (tag = "user") => `e2e-${tag}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}@${E2E_DOMAIN}`;
export const PASSWORD = "Sup3rSecret";

export const locales = ["en", "si"] as const;
export type Locale = (typeof locales)[number];

export async function setLocale(page: Page, locale: Locale) {
  const base = new URL(process.env.E2E_BASE_URL ?? "http://localhost:3000");
  await page.context().addCookies([{ name: "NEXT_LOCALE", value: locale, url: base.origin }]);
}

/** Collects anything the browser would show in devtools as a problem. */
export function watchProblems(page: Page) {
  const problems: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") problems.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("response", (response) => {
    if (response.status() >= 500) problems.push(`${response.status()} ${response.url()}`);
  });
  return problems;
}

export async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow, "page scrolls horizontally").toBeLessThanOrEqual(1);
}

export async function register(page: Page, email: string, first = "Nimal", last = "Perera") {
  await page.goto("/register");
  await page.getByLabel(/first name|මුල් නම/i).fill(first);
  await page.getByLabel(/last name|වාසගම/i).fill(last);
  await page.getByLabel(/email address|විද්‍යුත් තැපැල්/i).fill(email);
  await page.getByLabel(/^(password|මුරපදය)$/i).fill(PASSWORD);
  await page.getByRole("button", { name: /create account|ගිණුම සාදන්න/i }).click();
  await page.waitForURL("**/account");
}

/** Visible form/page alerts, excluding Next.js's always-present (empty) route announcer. */
export const alerts = (page: Page) => page.locator('[role="alert"]:not(#__next-route-announcer__)');

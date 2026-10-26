import { expect, test } from "@playwright/test";
import { setLocale, watchProblems } from "./helpers";

test("visitors can switch language and the choice survives navigation and reloads", async ({ page, context }) => {
  const problems = watchProblems(page);
  await context.clearCookies();
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("your path");

  await page.getByRole("button", { name: "සිංහල" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "si");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("ඔබේ මාර්ගය සොයාගන්න");
  await expect(page.getByRole("button", { name: "සිංහල" })).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("navigation", { name: "ප්‍රධාන සංචාලනය" }).getByRole("link", { name: "විශ්වවිද්‍යාල" }).click();
  await page.waitForURL("**/universities");
  await expect(page.locator("html")).toHaveAttribute("lang", "si");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "si");

  await page.getByRole("button", { name: "ENG" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Discover university.");
  expect(problems).toEqual([]);
});

test("the first visit follows the browser language", async ({ browser }) => {
  const context = await browser.newContext({ locale: "si-LK", extraHTTPHeaders: { "Accept-Language": "si-LK,si;q=0.9,en;q=0.5" } });
  const page = await context.newPage();
  await page.goto("/about");
  await expect(page.locator("html")).toHaveAttribute("lang", "si");
  await context.close();
});

test("server and client render the same markup (no hydration warnings) in Sinhala", async ({ page }) => {
  const problems = watchProblems(page);
  await setLocale(page, "si");
  for (const route of ["/", "/careers", "/universities", "/build-your-path"]) await page.goto(route);
  expect(problems.filter((p) => /hydrat/i.test(p))).toEqual([]);
});

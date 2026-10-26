import { expect, test } from "@playwright/test";
import { expectNoHorizontalOverflow, locales, setLocale, watchProblems } from "./helpers";

const routes = [
  "/", "/careers", "/careers/software-engineer", "/careers/doctor", "/universities", "/universities/ruhuna",
  "/universities/sliit", "/build-your-path", "/my-path", "/about", "/contact", "/login", "/register",
];
const viewports = [
  { name: "mobile", width: 375, height: 800 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "desktop", width: 1920, height: 1080 },
];
const SINHALA = /[඀-෿]/;

for (const locale of locales) {
  test.describe(`${locale}: every public page`, () => {
    for (const route of routes) {
      test(`${route} renders cleanly at all breakpoints`, async ({ page }) => {
        const problems = watchProblems(page);
        await setLocale(page, locale);

        for (const viewport of viewports) {
          await page.setViewportSize(viewport);
          const response = await page.goto(route);
          expect(response?.status(), `${route} @${viewport.name}`).toBe(200);
          await expect(page.locator("html")).toHaveAttribute("lang", locale);
          await expect(page.locator("main h1").first()).toBeVisible();
          await expectNoHorizontalOverflow(page);
          if (process.env.SHOTS) {
            await page.screenshot({ path: `${process.env.SHOTS}/${locale}${route.replace(/\//g, "_") || "_home"}-${viewport.name}.png`, fullPage: true });
          }
        }

        const text = await page.locator("main").innerText();
        if (locale === "si") expect(text, "no Sinhala copy rendered").toMatch(SINHALA);
        else expect(text).not.toMatch(SINHALA);
        // The light theme is the only theme: no toggle, no theme attribute.
        await expect(page.locator("html")).not.toHaveAttribute("data-theme", /.+/);
        await expect(page.getByRole("button", { name: /dark mode|light mode/i })).toHaveCount(0);
        expect(problems).toEqual([]);
      });
    }
  });
}

test("unknown routes show the localized not-found page", async ({ page }) => {
  await setLocale(page, "si");
  const response = await page.goto("/careers/does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("මෙම මාර්ගය තවම මෙහි නැත");
});

test("the document title and metadata follow the language", async ({ page }) => {
  await setLocale(page, "si");
  await page.goto("/about");
  await expect(page).toHaveTitle(/අප ගැන \| SkillBridge SL/);
  await setLocale(page, "en");
  await page.goto("/about");
  await expect(page).toHaveTitle("About | SkillBridge SL");
});

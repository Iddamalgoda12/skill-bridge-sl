import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { locales, setLocale } from "./helpers";

const routes = ["/", "/careers", "/careers/software-engineer", "/universities", "/universities/ruhuna", "/build-your-path", "/my-path", "/about", "/contact", "/login", "/register"];

for (const locale of locales) {
  for (const route of routes) {
    test(`${locale} ${route} has no serious accessibility violations`, async ({ page }) => {
      await setLocale(page, locale);
      await page.goto(route);
      await expect(page.locator("main h1").first()).toBeVisible();
      const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      const serious = violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(" | ")}`)).toEqual([]);
    });
  }
}

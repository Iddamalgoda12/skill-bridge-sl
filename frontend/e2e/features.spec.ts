import { expect, test } from "@playwright/test";
import { setLocale, uniqueEmail, watchProblems } from "./helpers";

test.describe("careers", () => {
  test("search, filters, sorting and the empty state work", async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto("/careers");
    const cards = page.locator(".career-card");
    await expect(cards).toHaveCount(32);

    await page.getByRole("searchbox", { name: "Search careers" }).fill("nurse");
    await expect(cards).toHaveCount(1);
    await expect(page.getByRole("status").filter({ hasText: "Showing 1 career" })).toBeVisible();

    await page.getByRole("searchbox", { name: "Search careers" }).fill("zzzz-nothing");
    await expect(page.getByText("No careers found")).toBeVisible();
    await page.getByRole("button", { name: "Clear filters" }).click();
    await expect(cards).toHaveCount(32);

    await page.locator(".category-chips").getByRole("button", { name: "Healthcare" }).click();
    await expect(cards.first().locator(".career-category")).toHaveText("Healthcare");
    await page.locator(".category-chips").getByRole("button", { name: "All careers" }).click();

    await page.getByLabel("Sort careers").selectOption("az");
    await expect(cards.first().locator("h3")).toHaveText("Accountant");
    expect(problems).toEqual([]);
  });

  test("results are searchable by their Sinhala names", async ({ page }) => {
    await setLocale(page, "si");
    await page.goto("/careers");
    await page.getByRole("searchbox").fill("වෛද්‍ය");
    await expect(page.locator(".career-card").first()).toContainText("වෛද්‍යවරයා");
    await expect(page.locator(".career-card").first().locator(".career-category")).toHaveText("සෞඛ්‍ය සේවා");
  });

  test("a career can be saved and appears in My Path", async ({ page }) => {
    await page.goto("/careers/doctor");
    await page.getByRole("button", { name: "Add to Your Path" }).first().click();
    await expect(page.getByRole("button", { name: "Saved to My Path" }).first()).toHaveAttribute("aria-pressed", "true");
    await page.goto("/my-path");
    await expect(page.locator(".saved-card").filter({ hasText: "Doctor" })).toBeVisible();

    await setLocale(page, "si");
    await page.reload();
    await expect(page.locator(".saved-card").filter({ hasText: "වෛද්‍යවරයා" })).toBeVisible();

    await page.locator(".saved-card").getByRole("button", { name: "මගේ මාර්ගයට සුරැකිණි" }).click();
    await expect(page.getByText("ඔබේ ඊළඟ පරිච්ඡේදය මෙතැනින් ඇරඹේ.")).toBeVisible();
  });
});

test.describe("universities", () => {
  test("filtering and comparing universities", async ({ page }) => {
    await page.goto("/universities");
    const cards = page.locator(".university-card");
    await expect(cards).toHaveCount(6);

    await page.getByRole("group", { name: "Browse by institution type" }).getByRole("button", { name: "Government" }).click();
    await expect(cards).toHaveCount(3);
    await page.getByLabel("Study area").selectOption("Agriculture");
    await expect(cards).toHaveCount(1);
    await page.getByRole("button", { name: "Clear filters" }).first().click();
    await expect(cards).toHaveCount(6);

    await page.getByRole("button", { name: "Compare universities" }).click();
    await page.locator(".compare-checkbox input").nth(0).check();
    await page.locator(".compare-checkbox input").nth(1).check();
    await expect(page.getByText("2 of 3 universities selected")).toBeVisible();
    await page.getByRole("button", { name: "Compare selected" }).click();
    await expect(page.getByRole("table")).toBeVisible();
    await expect(page.getByRole("columnheader")).toHaveCount(3);
    await page.getByRole("button", { name: "Close comparison" }).click();
    await expect(page.getByRole("table")).toHaveCount(0);
  });

  test("a university page shows localized details", async ({ page }) => {
    await setLocale(page, "si");
    await page.goto("/universities/ruhuna");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("රුහුණ");
    await expect(page.getByRole("navigation", { name: "විශ්වවිද්‍යාල අංශ" })).toBeVisible();
  });
});

test.describe("build your path", () => {
  test("builds, saves and removes a roadmap, re-rendered in either language", async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto("/build-your-path");
    await page.getByRole("button", { name: /A\/L Student/ }).click();
    await page.getByRole("button", { name: /Doctor/ }).click();
    await expect(page.locator("#roadmap-preview")).toContainText("Your path to");
    await expect(page.locator("#roadmap-preview h2")).toHaveText("Doctor");
    await expect(page.locator("#roadmap-preview .roadmap-timeline li")).toHaveCount(3);

    await page.getByRole("button", { name: "Add to My Path" }).click();
    await expect(page.getByRole("status").filter({ hasText: "Saved on this device" })).toBeVisible();

    await page.goto("/my-path");
    await expect(page.locator(".saved-card").filter({ hasText: "Your path to Doctor" })).toBeVisible();
    await setLocale(page, "si");
    await page.reload();
    await expect(page.locator(".saved-card").filter({ hasText: "වෛද්‍යවරයා වීමට ඔබේ මාර්ගය" })).toBeVisible();

    await page.getByRole("button", { name: "මාර්ග සිතියම ඉවත් කරන්න" }).click();
    await expect(page.locator(".saved-card")).toHaveCount(0);
    expect(problems).toEqual([]);
  });

  test("legacy roadmaps saved before localization still display", async ({ page }) => {
    await page.goto("/my-path");
    await page.evaluate(() => localStorage.setItem("skillbridge:roadmaps:v1", JSON.stringify([
      { id: "software-engineer-ol", career: "Software Engineer", stage: "ol", focus: [], milestones: [{ label: "NOW", title: "Old title", description: "Old description" }] },
    ])));
    await page.reload();
    await expect(page.locator(".saved-card")).toContainText("Old title");
  });
});

test.describe("contact form", () => {
  test("validates, then sends a message that is stored", async ({ page }) => {
    await page.goto("/contact?topic=scholarships");
    await expect(page.getByLabel("What can we help with?")).toHaveValue("scholarships");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("This field is required.")).toHaveCount(3);

    await page.getByLabel("Your name").fill("Nimal Perera");
    await page.getByLabel("Email address").fill(uniqueEmail("contact"));
    await page.getByLabel("Your message").fill("short");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText(/too short/)).toBeVisible();

    await page.getByLabel("Your message").fill("I would like help choosing between two degrees.");
    await page.getByRole("button", { name: "Send message" }).click();
    await expect(page.getByText("Your message has been sent.")).toBeVisible();
    await expect(page.getByLabel("Your name")).toHaveValue("");
  });
});

test.describe("navigation", () => {
  test("the mobile menu opens, navigates, and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toHaveCount(0);

    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: /Universities/ }).click();
    await page.waitForURL("**/universities");
  });
});

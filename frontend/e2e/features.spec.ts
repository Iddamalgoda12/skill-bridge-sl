import { expect, test } from "@playwright/test";
import { setLocale, uniqueEmail, watchProblems } from "./helpers";

test.describe("careers", () => {
  test("search, filters, sorting and the empty state work", async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto("/careers");
    const cards = page.locator(".career-card");
    const total = await cards.count();
    expect(total).toBeGreaterThan(20);
    await expect(page.getByRole("status").filter({ hasText: `Showing ${total} careers` })).toBeVisible();

    await page.getByRole("searchbox", { name: "Search careers" }).fill("nursing");
    await expect(cards).toHaveCount(1);
    await expect(page.getByRole("status").filter({ hasText: "Showing 1 career" })).toBeVisible();

    await page.getByRole("searchbox", { name: "Search careers" }).fill("zzzz-nothing");
    await expect(page.getByText("No careers found")).toBeVisible();
    await page.getByRole("button", { name: "Clear filters" }).click();
    await expect(cards).toHaveCount(total);

    await page.locator(".category-chips").getByRole("button", { name: "Healthcare" }).click();
    await expect(cards.first().locator(".career-category")).toContainText("Healthcare");
    expect(await cards.count()).toBeLessThan(total);
    await page.locator(".category-chips").getByRole("button", { name: "All careers" }).click();

    await page.getByLabel("Sort careers").selectOption("az");
    const names = await cards.locator("h3").allInnerTexts();
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })));
    expect(problems).toEqual([]);
  });

  test("results are searchable by their Sinhala names", async ({ page }) => {
    await setLocale(page, "si");
    await page.goto("/careers");
    await page.getByRole("searchbox").fill("වෛද්‍ය");
    await expect(page.locator(".career-card").first()).toContainText("වෛද්‍ය");
    await expect(page.locator(".career-card").first().locator(".career-category")).toContainText("වෛද්‍ය");
  });

  test("a career can be saved from the directory and managed in My Path", async ({ page }) => {
    await page.goto("/careers");
    const first = page.locator(".career-card").first();
    const title = (await first.locator("h3").innerText()).trim();
    await first.locator("button[aria-pressed]").click();
    await expect(first.locator("button[aria-pressed]")).toHaveAttribute("aria-pressed", "true");

    await page.goto("/my-path");
    const saved = page.locator(".saved-card").filter({ hasText: title });
    await expect(saved).toBeVisible();
    // Every saved career links onward to the builder with a translated label (no raw message keys)
    await expect(saved.getByRole("link", { name: "Build this path" })).toBeVisible();
    await expect(saved).not.toContainText("path.hero");

    await setLocale(page, "si");
    await page.reload();
    await expect(page.locator(".saved-card")).toHaveCount(1);
    await expect(page.locator(".saved-card").getByRole("link", { name: "මෙම path එක හදන්න" })).toBeVisible();

    await page.locator(".saved-card button[aria-pressed]").click();
    await expect(page.locator(".saved-card")).toHaveCount(0);
  });
});

test.describe("universities", () => {
  test("search, filters and sorting work", async ({ page }) => {
    await page.goto("/universities");
    const cards = page.locator(".university-card");
    const total = await cards.count();
    expect(total).toBeGreaterThan(20);

    await page.getByRole("searchbox").or(page.getByPlaceholder(/Search universities/)).first().fill("moratuwa");
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText("Moratuwa");
    await page.getByRole("button", { name: "Clear filters" }).first().click();
    await expect(cards).toHaveCount(total);

    await page.getByRole("group", { name: "Browse by institution type" }).getByRole("button", { name: "Government" }).click();
    const government = await cards.count();
    expect(government).toBeGreaterThan(0);
    expect(government).toBeLessThan(total);
    await page.getByRole("button", { name: "Clear filters" }).first().click();
    await expect(cards).toHaveCount(total);
  });

  test("a university page shows localized details", async ({ page }) => {
    await setLocale(page, "si");
    await page.goto("/universities/ruhuna");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("රුහුණ");
    await expect(page.getByRole("navigation", { name: "විශ්වවිද්‍යාල කොටස්" })).toBeVisible();
    await expect(page.getByRole("navigation", { name: "මඟ පෙන්වන ලකුණු (Breadcrumb)" })).toBeVisible();
  });
});

test.describe("build your path", () => {
  test("builds a roadmap, saves it as a guest, tracks a task, and removes it", async ({ page }) => {
    const problems = watchProblems(page);
    await page.goto("/build-your-path?career=doctor");
    await expect(page.locator(".milestone-step-card").first()).toBeVisible();
    await page.getByRole("button", { name: "Colombo", exact: true }).click();

    await page.locator(".save-main-btn").first().click();
    await page.waitForURL("**/my-path");
    const title = page.locator(".summary-career-title");
    await expect(title).toContainText("Medicine");
    await expect(page.locator(".path-pref-chip").first()).toBeVisible();

    const firstTask = page.locator(".m-task-checkbox").first();
    await firstTask.check();
    await expect(firstTask).toBeChecked();
    await page.reload();
    await expect(page.locator(".m-task-checkbox").first()).toBeChecked();
    await expect(page.locator(".badge-item.unlocked")).toHaveCount(1);

    await page.locator(".delete-path-btn").click();
    await page.locator(".crud-modal-card").getByRole("button", { name: /delete/i }).last().click();
    await expect(page.locator(".summary-career-title")).toHaveCount(0);
    expect(problems).toEqual([]);
  });

  test("anonymous visitors cause no failed API requests", async ({ page }) => {
    const failed: string[] = [];
    page.on("response", (r) => { if (r.status() >= 400 && r.url().includes("/api/")) failed.push(`${r.status()} ${r.url()}`); });
    await page.goto("/build-your-path?career=lawyer");
    await page.locator(".save-main-btn").first().click();
    await page.waitForURL("**/my-path");
    await page.locator(".m-task-checkbox").first().check();
    expect(failed).toEqual([]);
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

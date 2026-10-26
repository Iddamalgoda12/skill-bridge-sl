import { expect, test } from "@playwright/test";
import { PASSWORD, alerts, register, setLocale, uniqueEmail, watchProblems } from "./helpers";

test.describe("registration", () => {
  test("shows inline, accessible validation errors before sending anything", async ({ page }) => {
    await page.goto("/register");
    let requested = false;
    page.on("request", (request) => { if (request.url().includes("/api/auth/")) requested = true; });

    await page.getByRole("button", { name: "Create account" }).click();
    await expect(page.getByText("This field is required.")).toHaveCount(4);
    await expect(page.getByLabel("First name")).toBeFocused();
    await expect(page.getByLabel("First name")).toHaveAttribute("aria-invalid", "true");

    await page.getByLabel("First name").fill("Nimal");
    await page.getByLabel("Last name").fill("Perera");
    await page.getByLabel("Email address").fill("not-an-email");
    await page.getByLabel("Password").fill("abcdefgh");
    await page.getByRole("button", { name: "Create account" }).click();
    await expect(page.getByText("Enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Include at least one letter and one number.")).toBeVisible();
    expect(requested).toBe(false);
  });

  test("creates an account, lands on the account page, and rejects a duplicate", async ({ page }) => {
    const problems = watchProblems(page);
    const email = uniqueEmail("reg");
    await register(page, email);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Nimal");
    await expect(page.getByLabel("Email address")).toHaveValue(email);

    await page.getByRole("button", { name: "Log out" }).first().click();
    await page.waitForURL("**/");

    await page.goto("/register");
    await page.getByLabel("First name").fill("Again");
    await page.getByLabel("Last name").fill("Perera");
    await page.getByLabel("Email address").fill(email.toUpperCase());
    await page.getByLabel("Password").fill(PASSWORD);
    await page.getByRole("button", { name: "Create account" }).click();
    await expect(alerts(page).filter({ hasText: "already exists" })).toBeVisible();
    expect(problems.filter((p) => !/409/.test(p))).toEqual([]);
  });

  test("works in Sinhala with Sinhala messages", async ({ page }) => {
    await setLocale(page, "si");
    await page.goto("/register");
    await page.getByRole("button", { name: "ගිණුම සාදන්න" }).click();
    await expect(page.getByText("මෙම ක්ෂේත්‍රය අනිවාර්යයි.")).toHaveCount(4);
  });
});

test.describe("login, logout and protected pages", () => {
  test("anonymous visitors are redirected to log in and returned afterwards", async ({ page }) => {
    const email = uniqueEmail("login");
    await register(page, email);
    await page.getByRole("button", { name: "Log out" }).first().click();
    await page.waitForURL("**/");

    await page.goto("/account");
    await page.waitForURL("**/login?next=%2Faccount");

    await page.getByLabel("Email address").fill(email);
    await page.getByLabel("Password").fill("Wr0ngPassword");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(alerts(page)).toHaveText("Your email or password is incorrect.");
    await expect(page).toHaveURL(/\/login/);

    await page.getByLabel("Password").fill(PASSWORD);
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForURL("**/account");
    await expect(page.getByRole("link", { name: "Account" }).first()).toBeVisible();
  });

  test("the next parameter cannot be used as an open redirect", async ({ page }) => {
    const email = uniqueEmail("redir");
    await register(page, email);
    await page.getByRole("button", { name: "Log out" }).first().click();
    await page.waitForURL("**/");
    await page.goto("/login?next=https://evil.example/phish");
    await page.getByLabel("Email address").fill(email);
    await page.getByLabel("Password").fill(PASSWORD);
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForURL("**/account");
    expect(new URL(page.url()).hostname).not.toContain("evil");
  });

  test("signed-in users are sent away from the login and register pages", async ({ page }) => {
    await register(page, uniqueEmail("guest"));
    await page.goto("/login");
    await page.waitForURL("**/account");
  });

  test("a session survives a reload and ends on logout", async ({ page }) => {
    await register(page, uniqueEmail("sess"));
    await page.reload();
    await expect(page).toHaveURL(/\/account$/);
    await page.getByRole("button", { name: "Log out" }).first().click();
    await page.waitForURL("**/");
    await page.goto("/account");
    await page.waitForURL(/\/login/);
  });

  test("an expired access token is renewed transparently from the refresh cookie", async ({ page, context }) => {
    await register(page, uniqueEmail("renew"));
    const cookies = await context.cookies();
    const refresh = cookies.find((c) => c.name === "skillbridge_refresh");
    expect(refresh?.httpOnly).toBe(true);
    // Simulate the 15-minute access token having lapsed.
    await context.clearCookies({ name: "skillbridge_access" });
    await page.goto("/account");
    await expect(page).toHaveURL(/\/account$/);
    const after = await context.cookies();
    expect(after.find((c) => c.name === "skillbridge_access")).toBeTruthy();
    expect(after.find((c) => c.name === "skillbridge_refresh")?.value).not.toBe(refresh?.value);
  });

  test("a refresh token revoked by logout can no longer restore a session", async ({ page, context }) => {
    await register(page, uniqueEmail("revoke"));
    const stolen = (await context.cookies()).find((c) => c.name === "skillbridge_refresh")!;
    await page.getByRole("button", { name: "Log out" }).first().click();
    await page.waitForURL("**/");

    // An attacker replays the copied cookie after the user logged out.
    await context.addCookies([stolen]);
    await page.goto("/account");
    await page.waitForURL(/\/login/);
    expect((await context.cookies()).find((c) => c.name === "skillbridge_refresh")).toBeUndefined();
  });
});

test.describe("account management", () => {
  test("updates the profile and keeps it after a reload", async ({ page }) => {
    await register(page, uniqueEmail("prof"));
    await page.getByLabel("First name").fill("Kamal");
    await page.getByLabel("Last name").fill("Silva");
    await page.getByLabel(/About you/).fill("Future engineer");
    await page.getByRole("button", { name: "Save changes" }).click();
    await expect(page.getByText("Your profile has been updated.")).toBeVisible();
    await page.reload();
    await expect(page.getByLabel("First name")).toHaveValue("Kamal");
    await expect(page.getByLabel(/About you/)).toHaveValue("Future engineer");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Kamal");
  });

  test("validates the profile form", async ({ page }) => {
    await register(page, uniqueEmail("profval"));
    await page.getByLabel("First name").fill("");
    await page.getByRole("button", { name: "Save changes" }).click();
    await expect(page.getByText("This field is required.")).toBeVisible();
  });

  test("changing the password requires the current one, then signs the user out everywhere", async ({ page }) => {
    const email = uniqueEmail("pwd");
    await register(page, email);
    const form = page.locator("form", { has: page.getByRole("heading", { name: "Change password" }) });

    await form.getByLabel("Current password").fill("Wr0ngPassword");
    await form.getByLabel("New password", { exact: true }).fill("N3wPassword");
    await form.getByLabel("Confirm new password").fill("N3wPassword");
    await form.getByRole("button", { name: "Change password" }).click();
    await expect(form.getByText("Your current password is incorrect.")).toBeVisible();

    await form.getByLabel("Current password").fill(PASSWORD);
    await form.getByLabel("Confirm new password").fill("Different1");
    await form.getByRole("button", { name: "Change password" }).click();
    await expect(form.getByText("The passwords do not match.")).toBeVisible();

    await form.getByLabel("Confirm new password").fill("N3wPassword");
    await form.getByRole("button", { name: "Change password" }).click();
    await page.waitForURL("**/login?changed=1");
    await expect(page.getByText("Your password was changed.")).toBeVisible();

    await page.getByLabel("Email address").fill(email);
    await page.getByLabel("Password").fill(PASSWORD);
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(alerts(page)).toHaveText("Your email or password is incorrect.");
    await page.getByLabel("Password").fill("N3wPassword");
    await page.getByRole("button", { name: "Log in" }).click();
    await page.waitForURL("**/account");
  });
});

test.describe("API failures", () => {
  test("a backend outage shows a friendly message instead of a crash", async ({ page }) => {
    await page.route("**/api/auth/login", (route) => route.fulfill({ status: 503, json: { code: "UNAVAILABLE" } }));
    await page.goto("/login");
    await page.getByLabel("Email address").fill("a@example.test");
    await page.getByLabel("Password").fill("whatever1");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(alerts(page)).toContainText("temporarily unavailable");
  });

  test("a dropped connection is reported as a network problem", async ({ page }) => {
    await page.route("**/api/auth/login", (route) => route.abort());
    await page.goto("/login");
    await page.getByLabel("Email address").fill("a@example.test");
    await page.getByLabel("Password").fill("whatever1");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(alerts(page)).toContainText("Can’t reach the server");
  });

  test("API routes refuse cross-origin and unauthenticated calls", async ({ request, baseURL }) => {
    const crossOrigin = await request.post("/api/auth/login", { headers: { Origin: "http://evil.example" }, data: { email: "a@b.co", password: "x" } });
    expect(crossOrigin.status()).toBe(403);
    const anonymous = await request.patch("/api/account", { headers: { Origin: baseURL! }, data: { firstName: "A", lastName: "B", bio: "" } });
    expect(anonymous.status()).toBe(401);
  });
});

import { describe, expect, it } from "vitest";
import { newPassword, safeRedirectPath, validateContact, validateLogin, validatePasswordChange, validateProfile, validateRegister } from "./validation";

describe("newPassword", () => {
  it("accepts 8+ characters with a letter and a digit", () => {
    expect(newPassword("Sup3rSecret")).toBeUndefined();
    expect(newPassword("පරීක්ෂණය1abc")).toBeUndefined();
  });
  it("rejects empty, short and over-long (72 bytes) passwords", () => {
    expect(newPassword("")).toBe("required");
    expect(newPassword("a1b2c3d")).toBe("password_length");
    expect(newPassword("a1" + "x".repeat(71))).toBe("password_length");
    // 40 two-byte characters exceed bcrypt's 72-byte limit even though they are < 72 characters.
    expect(newPassword("a1" + "é".repeat(40))).toBe("password_length");
  });
  it("requires both a letter and a digit", () => {
    expect(newPassword("abcdefgh")).toBe("password_weak");
    expect(newPassword("12345678")).toBe("password_weak");
  });
});

describe("validateRegister", () => {
  const ok = { firstName: "Nimal", lastName: "Perera", email: "nimal@example.com", password: "Sup3rSecret" };
  it("passes valid input", () => expect(validateRegister(ok)).toEqual({}));
  it("flags each invalid field with a stable code", () => {
    expect(validateRegister({ firstName: " ", lastName: "x".repeat(101), email: "nope", password: "abc" })).toEqual({
      firstName: "required",
      lastName: "too_long",
      email: "invalid_email",
      password: "password_length",
    });
  });
  it("trims the email before validating", () => expect(validateRegister({ ...ok, email: "  nimal@example.com " })).toEqual({}));
});

describe("validateLogin", () => {
  it("only requires a password to be present (no strength rules at login)", () => {
    expect(validateLogin({ email: "a@b.co", password: "x" })).toEqual({});
    expect(validateLogin({ email: "", password: "" })).toEqual({ email: "required", password: "required" });
  });
});

describe("validateProfile / validatePasswordChange / validateContact", () => {
  it("caps the bio at 500 characters", () => {
    expect(validateProfile({ firstName: "A", lastName: "B", bio: "x".repeat(501) })).toEqual({ bio: "too_long" });
    expect(validateProfile({ firstName: "A", lastName: "B", bio: "" })).toEqual({});
  });
  it("requires the confirmation to match", () => {
    expect(validatePasswordChange({ currentPassword: "old", newPassword: "N3wPassword", confirmPassword: "N3wPassworD" })).toEqual({ confirmPassword: "mismatch" });
    expect(validatePasswordChange({ currentPassword: "", newPassword: "weak", confirmPassword: "weak" })).toEqual({ currentPassword: "required", newPassword: "password_length" });
  });
  it("validates the contact form", () => {
    expect(validateContact({ name: "N", email: "n@e.co", topic: "guidance", message: "Hello there, friend" })).toEqual({});
    expect(validateContact({ name: "", email: "x", topic: "spam", message: "short" })).toEqual({ name: "required", email: "invalid_email", topic: "invalid", message: "too_short" });
  });
});

describe("safeRedirectPath", () => {
  it("allows same-site relative paths", () => {
    expect(safeRedirectPath("/account")).toBe("/account");
    expect(safeRedirectPath("/careers/doctor?x=1")).toBe("/careers/doctor?x=1");
  });
  it("rejects open-redirect attempts", () => {
    for (const bad of ["https://evil.example", "//evil.example", "/\\evil.example", "javascript:alert(1)", "evil", "", null, undefined]) {
      expect(safeRedirectPath(bad as string | null | undefined)).toBe("/account");
    }
  });
});

/**
 * Form validation shared by the browser (instant feedback) and the BFF route
 * handlers (never trust the client). Results are stable codes that match the
 * Spring API, translated under `errors.validation.*`.
 */
export type ValidationCode =
  | "required"
  | "invalid_email"
  | "too_long"
  | "too_short"
  | "password_length"
  | "password_weak"
  | "mismatch"
  | "invalid";

export type FieldErrors<K extends string> = Partial<Record<K, ValidationCode>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** bcrypt ignores everything past 72 bytes, so the API rejects longer passwords. */
const MAX_PASSWORD_BYTES = 72;

const byteLength = (value: string) => new TextEncoder().encode(value).length;

function name(value: string): ValidationCode | undefined {
  if (!value.trim()) return "required";
  if (value.trim().length > 100) return "too_long";
}

function email(value: string): ValidationCode | undefined {
  const trimmed = value.trim();
  if (!trimmed) return "required";
  if (trimmed.length > 254) return "too_long";
  if (!EMAIL.test(trimmed)) return "invalid_email";
}

/** New passwords: 8–72 bytes with at least one letter and one digit. */
export function newPassword(value: string): ValidationCode | undefined {
  if (!value) return "required";
  if (value.length < 8 || byteLength(value) > MAX_PASSWORD_BYTES) return "password_length";
  if (!/\p{L}/u.test(value) || !/\d/.test(value)) return "password_weak";
}

function compact<K extends string>(entries: [K, ValidationCode | undefined][]): FieldErrors<K> {
  return Object.fromEntries(entries.filter(([, code]) => code)) as FieldErrors<K>;
}

export type LoginValues = { email: string; password: string };
export const validateLogin = (v: LoginValues) =>
  compact<keyof LoginValues>([
    ["email", email(v.email)],
    ["password", v.password ? undefined : "required"],
  ]);

export type RegisterValues = { firstName: string; lastName: string; email: string; password: string };
export const validateRegister = (v: RegisterValues) =>
  compact<keyof RegisterValues>([
    ["firstName", name(v.firstName)],
    ["lastName", name(v.lastName)],
    ["email", email(v.email)],
    ["password", newPassword(v.password)],
  ]);

export type ProfileValues = { firstName: string; lastName: string; bio: string };
export const validateProfile = (v: ProfileValues) =>
  compact<keyof ProfileValues>([
    ["firstName", name(v.firstName)],
    ["lastName", name(v.lastName)],
    ["bio", v.bio.length > 500 ? "too_long" : undefined],
  ]);

export type PasswordChangeValues = { currentPassword: string; newPassword: string; confirmPassword: string };
export const validatePasswordChange = (v: PasswordChangeValues) =>
  compact<keyof PasswordChangeValues>([
    ["currentPassword", v.currentPassword ? undefined : "required"],
    ["newPassword", newPassword(v.newPassword)],
    ["confirmPassword", v.confirmPassword !== v.newPassword ? "mismatch" : undefined],
  ]);

export type ContactValues = { name: string; email: string; topic: string; message: string };
export const validateContact = (v: ContactValues) =>
  compact<keyof ContactValues>([
    ["name", !v.name.trim() ? "required" : v.name.trim().length > 150 ? "too_long" : undefined],
    ["email", email(v.email)],
    ["topic", ["guidance", "scholarships", "feedback"].includes(v.topic) ? undefined : "invalid"],
    [
      "message",
      !v.message.trim() ? "required" : v.message.trim().length < 10 ? "too_short" : v.message.length > 4000 ? "too_long" : undefined,
    ],
  ]);

/** Only same-site relative paths may be used as a post-login destination. */
export function safeRedirectPath(value: string | null | undefined, fallback = "/account"): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return fallback;
  return value;
}

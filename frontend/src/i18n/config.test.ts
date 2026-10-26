import { describe, expect, it } from "vitest";
import { isLocale, negotiateLocale } from "./config";

describe("negotiateLocale", () => {
  it("falls back to English without a header", () => {
    expect(negotiateLocale(null)).toBe("en");
    expect(negotiateLocale("")).toBe("en");
  });
  it("honours Sinhala, including regional tags", () => {
    expect(negotiateLocale("si")).toBe("si");
    expect(negotiateLocale("si-LK,en;q=0.5")).toBe("si");
  });
  it("respects quality values and unsupported languages", () => {
    expect(negotiateLocale("fr,en;q=0.8,si;q=0.9")).toBe("si");
    expect(negotiateLocale("fr,de")).toBe("en");
    expect(negotiateLocale("si;q=0,en")).toBe("en");
  });
});

describe("isLocale", () => {
  it("only accepts supported locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("si")).toBe(true);
    expect(isLocale("ta")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

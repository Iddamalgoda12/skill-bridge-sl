import { describe, expect, it } from "vitest";
import en from "../../messages/en.json";
import si from "../../messages/si.json";

type Tree = { [key: string]: string | Tree };

function leaves(tree: Tree, prefix = ""): Record<string, string> {
  return Object.entries(tree).reduce<Record<string, string>>((acc, [key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === "string" ? { ...acc, [path]: value } : { ...acc, ...leaves(value, path) };
  }, {});
}

/** ICU argument names and rich-text tags that a translation must keep. */
function placeholders(message: string): string[] {
  // `{name}` / `{name, plural, …}` only; text inside plural branches is not an argument.
  const args = [...message.matchAll(/\{\s*([A-Za-z_]\w*)\s*[,}]/g)].map((m) => `{${m[1]}}`);
  // Line breaks are a per-language layout choice, so <br> need not appear in both.
  const tags = [...message.matchAll(/<\/?([a-z]+)>/g)].map((m) => `<${m[1]}>`).filter((tag) => tag !== "<br>");
  return [...new Set([...args, ...tags])].sort();
}

const english = leaves(en as Tree);
const sinhala = leaves(si as Tree);

describe("message catalogs", () => {
  it("contain the same keys in English and Sinhala", () => {
    expect(Object.keys(sinhala).sort()).toEqual(Object.keys(english).sort());
  });

  it("have no empty strings", () => {
    for (const [locale, messages] of [["en", english], ["si", sinhala]] as const) {
      const empty = Object.entries(messages).filter(([, value]) => !value.trim()).map(([key]) => key);
      expect(empty, `${locale} has empty messages`).toEqual([]);
    }
  });

  it("keep the same placeholders and rich-text tags in both languages", () => {
    const mismatched = Object.keys(english)
      // ICU plural branches legitimately differ in text, but still share argument names.
      .filter((key) => JSON.stringify(placeholders(english[key])) !== JSON.stringify(placeholders(sinhala[key])));
    expect(mismatched).toEqual([]);
  });

  it("do not leave Sinhala messages as untranslated English copies where prose is expected", () => {
    // Brand names, numbers and technical terms may legitimately match; long prose may not.
    const copied = Object.keys(english).filter((key) => english[key] === sinhala[key] && /[a-z]{4,}\s+[a-z]{3,}\s+[a-z]{3,}/i.test(english[key]));
    expect(copied).toEqual([]);
  });

  it("contain Sinhala script in translated prose", () => {
    const sinhalaScript = /[඀-෿]/;
    const missing = Object.keys(sinhala).filter((key) => /[A-Za-z]{4,}\s+[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(english[key]) && !sinhalaScript.test(sinhala[key]));
    expect(missing).toEqual([]);
  });
});

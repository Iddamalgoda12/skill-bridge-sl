"use client";
import { Globe } from "lucide-react";
import { useAppPreferences } from "./AppPreferences";
export default function LanguageSwitcher() {
  const { locale, setLocale } = useAppPreferences();
  return <div className="language-wrapper"><div className="language-switcher" aria-label="Language"><Globe size={17} /><button type="button" className={locale === "en" ? "selected" : ""} aria-pressed={locale === "en"} onClick={() => setLocale("en")}>ENG</button><button type="button" lang="si" className={locale === "si" ? "selected" : ""} aria-pressed={locale === "si"} onClick={() => setLocale("si")}>සිංහල</button></div></div>;
}

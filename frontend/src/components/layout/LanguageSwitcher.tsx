"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { setLocale } from "@/i18n/actions";
import type { Locale } from "@/i18n/config";

const options: { locale: Locale; label: string; lang: string; name: string }[] = [
  { locale: "en", label: "ENG", lang: "en", name: "English" },
  { locale: "si", label: "සිංහල", lang: "si", name: "සිංහල" },
];

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const current = useLocale();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function choose(locale: Locale) {
    if (locale === current) return;
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div className="language-wrapper">
      <div className="language-switcher" role="group" aria-label={t("language")} aria-busy={pending}>
        <Globe size={17} aria-hidden="true" />
        {options.map((option) => (
          <button
            key={option.locale}
            type="button"
            lang={option.lang}
            className={current === option.locale ? "selected" : ""}
            aria-pressed={current === option.locale}
            title={option.name}
            disabled={pending}
            onClick={() => choose(option.locale)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

"use client";

import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function BackToTopButton() {
  const t = useTranslations("footer");

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="footer-back-to-top-btn"
      aria-label={t("backToTop")}
    >
      <span>{t("backToTop")}</span>
      <ArrowUp size={13} aria-hidden="true" />
    </button>
  );
}

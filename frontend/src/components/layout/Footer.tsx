"use client";
import { useAppPreferences } from "./AppPreferences";
export default function Footer({ note = "Your future. Your path." }: { note?: string }) {
  const { t, locale } = useAppPreferences();
  return <footer className="site-footer"><span><strong>SKILLBRIDGE SL</strong> <span className="footer-tagline">• {locale === "si" ? t("footer.tagline", note) : note}</span></span><span>{t("footer.note", "An independent student-made guidance platform • Sri Lanka")}</span></footer>;
}

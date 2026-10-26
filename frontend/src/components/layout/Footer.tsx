import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="site-footer">
      <span><strong>SKILLBRIDGE SL</strong> <span className="footer-tagline">• {t("tagline")}</span></span>
      <span>{t("note")}</span>
    </footer>
  );
}

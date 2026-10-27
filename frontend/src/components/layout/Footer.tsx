import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BackToTopButton } from "./FooterClient";

export default async function Footer() {
  const t = await getTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer-compact" aria-label="SkillBridge SL Footer">
      <div className="footer-compact-container">
        <div className="footer-compact-main">
          {/* Brand & Tagline */}
          <div className="footer-compact-brand">
            <Link href="/" className="footer-compact-logo" aria-label="SkillBridge SL Home">
              <Image
                src="/Logo.png"
                width={120}
                height={42}
                alt="SkillBridge SL"
                className="footer-logo-img"
              />
            </Link>
            <span className="footer-dot-sep" aria-hidden="true">•</span>
            <p className="footer-compact-tagline">{t("tagline")}</p>
            <span className="footer-dot-sep" aria-hidden="true">•</span>
            <span className="footer-compact-note">{t("note")}</span>
          </div>

          <div className="footer-compact-right">
            <span className="footer-compact-copy">© {year} SkillBridge SL</span>
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}

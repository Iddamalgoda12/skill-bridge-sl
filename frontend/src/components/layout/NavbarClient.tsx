"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigationPanel from "./MobileNavigationPanel";

const navigation = [
  { href: "/careers", key: "careers", icon: assets.template.imgIconCompass },
  { href: "/build-your-path", key: "path", icon: assets.template.imgIconRoute },
  { href: "/universities", key: "universities", icon: assets.template.imgIconUniversity },
  { href: "/about", key: "about", icon: assets.template.imgIconInfo },
] as const;

export default function NavbarClient({ signedIn }: { signedIn: boolean }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [menuOpen]);

  const accountHref = signedIn ? "/account" : "/login";
  const accountLabel = signedIn ? t("account") : t("login");

  return (
    <header className="site-header" data-figma-node="18:2046">
      <a className="skip-link" href="#main-content">{t("skipToContent")}</a>
      <nav className="navbar" aria-label={t("mainNavigation")}>
        <Link href="/" aria-label={t("home")} className="brand">
          <Image src="/Logo.png" width={190} height={68} alt={t("logoAlt")} priority />
        </Link>
        <div className="nav-divider" />
        <div className="desktop-links">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} className={`nav-link ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
                <DesignAsset src={item.icon} />{t(item.key)}
              </Link>
            );
          })}
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <Link className="login-link" href={accountHref}>
            <DesignAsset src={assets.template.imgIconUser} />{accountLabel}
          </Link>
          <button type="button" className="menu-toggle" aria-label={menuOpen ? t("closeMenu") : t("openMenu")} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {menuOpen && <MobileNavigationPanel pathname={pathname} signedIn={signedIn} onNavigate={() => setMenuOpen(false)} />}
    </header>
  );
}

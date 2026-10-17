"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigationPanel from "./MobileNavigationPanel";
import { useAppPreferences } from "./AppPreferences";
const navigation = [
  { href: "/careers", label: "Explore Careers", icon: assets.template.imgIconCompass },
  { href: "/build-your-path", label: "Build Your Path", icon: assets.template.imgIconRoute },
  { href: "/universities", label: "Universities", icon: assets.template.imgIconUniversity },
  { href: "/about", label: "About", icon: assets.template.imgIconInfo },
];
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, t } = useAppPreferences();
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [menuOpen]);
  return <header className="site-header" data-figma-node="18:2046">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="navbar" aria-label="Main navigation">
      <Link href="/" aria-label="SkillBridge SL home" className="brand"><Image src="/Logo.png" width={190} height={68} alt="SkillBridge SL — Your future. Your path." priority /></Link><div className="nav-divider" />
      <div className="desktop-links">{navigation.map(item => <Link key={item.href} href={item.href} className={`nav-link ${pathname.startsWith(item.href) ? "active" : ""}`} aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}><DesignAsset src={item.icon} />{t(item.href === "/careers" ? "nav.careers" : item.href === "/build-your-path" ? "nav.path" : item.href === "/universities" ? "nav.universities" : "nav.about", item.label)}</Link>)}</div>
      <div className="nav-actions"><LanguageSwitcher /><button className="appearance-button" type="button" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={theme === "dark"} onClick={toggleTheme}>{theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}</button><Link className="login-link" href="/login"><DesignAsset src={assets.template.imgIconUser} />{t("nav.login", "Log in")}</Link><button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </nav>
    {menuOpen && <MobileNavigationPanel pathname={pathname} onNavigate={() => setMenuOpen(false)} />}
  </header>;
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";
import LanguageSwitcher from "./LanguageSwitcher";
const navigation = [
  { href: "/careers", label: "Explore Careers", icon: assets.template.imgIconCompass },
  { href: "/build-your-path", label: "Build Your Path", icon: assets.template.imgIconRoute },
  { href: "/universities", label: "Universities", icon: assets.template.imgIconUniversity },
  { href: "/courses", label: "Courses", icon: assets.home.imgIconBook },
  { href: "/about", label: "About", icon: assets.template.imgIconInfo },
];
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [reducedGlass, setReducedGlass] = useState(false);
  return <header className="site-header" data-figma-node="18:2046">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="navbar" aria-label="Main navigation">
      <Link href="/" aria-label="SkillBridge SL home" className="brand"><Image src="/Logo.png" width={190} height={68} alt="SkillBridge SL — Your future. Your path." priority /></Link><div className="nav-divider" />
      <div className="desktop-links">{navigation.map(item => <Link key={item.href} href={item.href} className={`nav-link ${pathname.startsWith(item.href) || (pathname === "/" && item.href === "/careers") ? "active" : ""}`} aria-current={pathname.startsWith(item.href) ? "page" : undefined}><DesignAsset src={item.icon} />{item.label}</Link>)}</div>
      <div className="nav-actions"><LanguageSwitcher /><button className="appearance-button" type="button" aria-label="Reduce glass transparency" aria-pressed={reducedGlass} onClick={() => { const next = !reducedGlass; setReducedGlass(next); document.documentElement.dataset.reduceGlass = String(next); }}><DesignAsset src={assets.template.imgIconSun} /></button><Link className="login-link" href="/login"><DesignAsset src={assets.template.imgIconUser} />Log in</Link><button type="button" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </nav>
    {menuOpen && <nav id="mobile-navigation" className="mobile-menu glass-panel" aria-label="Mobile navigation">{[...navigation, { href: "/my-path", label: "My Path", icon: assets.template.imgIconRoute }, { href: "/login", label: "Log in", icon: assets.template.imgIconUser }].map(item => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}><DesignAsset src={item.icon} />{item.label}</Link>)}</nav>}
  </header>;
}

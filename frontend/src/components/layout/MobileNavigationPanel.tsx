"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { DesignAsset } from "@/components/shared/DesignAsset";

const destinations = [
  { href: "/careers", key: "careers", icon: "/design/mobile-sidebar/icons/explore-careers-icon-background.svg", chevron: "/design/mobile-sidebar/icons/explore-careers-chevron.svg" },
  { href: "/build-your-path", key: "path", icon: "/design/mobile-sidebar/icons/build-your-path-icon-background.svg", chevron: "/design/mobile-sidebar/icons/build-your-path-chevron.svg" },
  { href: "/universities", key: "universities", icon: "/design/mobile-sidebar/icons/universities-icon-background.svg", chevron: "/design/mobile-sidebar/icons/build-your-path-chevron.svg" },
  { href: "/about", key: "about", icon: "/design/mobile-sidebar/icons/about-icon-background.svg", chevron: "/design/mobile-sidebar/icons/build-your-path-chevron.svg" },
] as const;

export default function MobileNavigationPanel({ pathname, signedIn, onNavigate }: { pathname: string; signedIn: boolean; onNavigate: () => void }) {
  const t = useTranslations("nav");
  const m = useTranslations("mobile");
  return (
    <div className="mobile-navigation-layer" role="dialog" aria-modal="true" aria-label={m("navigation")}>
      <button className="mobile-navigation-scrim" aria-label={m("closeMenu")} onClick={onNavigate} tabIndex={-1} />
      <nav id="mobile-navigation" className="mobile-menu" aria-label={m("navigation")}>
        <button type="button" className="mobile-menu-close" aria-label={m("closeMenu")} onClick={onNavigate} autoFocus><X size={20} aria-hidden="true" /></button>
        <div className="mobile-nav-intro">
          <p className="mobile-nav-eyebrow">{m("eyebrow")}</p>
          <h2>{m("title")}</h2>
          <p>{m("subtitle")}</p>
        </div>
        <div className="mobile-nav-destinations">
          {destinations.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link key={item.href} href={item.href} className={`mobile-nav-card ${active ? "active" : ""}`} onClick={onNavigate} aria-current={active ? "page" : undefined}>
                <DesignAsset className="mobile-nav-icon" src={item.icon} />
                <span className="mobile-nav-copy"><strong>{t(item.key)}</strong><small>{m(`description.${item.key}`)}</small></span>
                <DesignAsset className="mobile-nav-arrow" src={item.chevron} />
              </Link>
            );
          })}
        </div>
        <div className="mobile-nav-bottom">
          <Link href={signedIn ? "/account" : "/login"} className="mobile-nav-card mobile-login-card" onClick={onNavigate}>
            <DesignAsset className="mobile-login-icon" src="/design/mobile-sidebar/icons/account-user-icon-glass.svg" />
            <span className="mobile-nav-copy">
              <strong>{signedIn ? t("account") : t("login")}</strong>
              <small>{signedIn ? m("accountDescription") : m("loginDescription")}</small>
            </span>
            <DesignAsset className="mobile-nav-arrow" src="/design/mobile-sidebar/icons/account-arrow.svg" />
          </Link>
          <section className="mobile-guidance">
            <DesignAsset src="/design/mobile-sidebar/icons/cta-decorative-sparkle.svg" />
            <h3>{m("questions")}</h3>
            <p>{m("help")}</p>
            <Link href="/contact" className="mobile-guidance-cta" onClick={onNavigate}>
              {m("guidance")}
              <DesignAsset src="/design/mobile-sidebar/icons/arrow.svg" />
            </Link>
          </section>
        </div>
        <footer className="mobile-nav-footer">
          <strong>SKILLBRIDGE-SL</strong><span></span>
          <p><em>&quot;{m("tagline")}&quot;</em></p>
          <small>{m("footer")}</small>
        </footer>
      </nav>
    </div>
  );
}

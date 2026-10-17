"use client";

import Link from "next/link";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { useAppPreferences } from "./AppPreferences";

const destinations = [
  { href: "/careers", label: "Explore Careers", translation: "nav.careers", description: "Discover the right career for you", icon: "/design/mobile-sidebar/icons/explore-careers-icon-background.svg", descriptionKey: "mobile.careersDescription", chevron: "/design/mobile-sidebar/icons/explore-careers-chevron.svg" },
  { href: "/build-your-path", label: "Build Your Path", translation: "nav.path", description: "Create your personal roadmap", icon: "/design/mobile-sidebar/icons/build-your-path-icon-background.svg", descriptionKey: "mobile.pathDescription", chevron: "/design/mobile-sidebar/icons/build-your-path-chevron.svg" },
  { href: "/universities", label: "Universities", translation: "nav.universities", description: "Find your ideal university", icon: "/design/mobile-sidebar/icons/universities-icon-background.svg", descriptionKey: "mobile.universitiesDescription", chevron: "/design/mobile-sidebar/icons/build-your-path-chevron.svg" },
  { href: "/about", label: "About", translation: "nav.about", description: "Learn more about SkillBridge", icon: "/design/mobile-sidebar/icons/about-icon-background.svg", descriptionKey: "mobile.aboutDescription", chevron: "/design/mobile-sidebar/icons/build-your-path-chevron.svg" },
];

export default function MobileNavigationPanel({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const { t } = useAppPreferences();
  return <div className="mobile-navigation-layer">
    <button className="mobile-navigation-scrim" aria-label="Close navigation menu" onClick={onNavigate} />
    <nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation">
      <div className="mobile-nav-intro"><p className="mobile-nav-eyebrow">{t("mobile.eyebrow", "Your future starts here")}</p><h2>{t("mobile.title", "Explore your possibilities")}</h2><p>{t("mobile.subtitle", "Find a path that fits your ambitions.")}</p></div>
      <div className="mobile-nav-destinations">{destinations.map(item => { const active = pathname === item.href || pathname.startsWith(`${item.href}/`); return <Link key={item.href} href={item.href} className={`mobile-nav-card ${active ? "active" : ""}`} onClick={onNavigate} aria-current={active ? "page" : undefined}><DesignAsset className="mobile-nav-icon" src={item.icon} /><span className="mobile-nav-copy"><strong>{t(item.translation, item.label)}</strong><small>{t(item.descriptionKey, item.description)}</small></span><DesignAsset className="mobile-nav-arrow" src={item.chevron} /></Link>; })}</div>
      <div className="mobile-nav-bottom"><Link href="/login" className="mobile-nav-card mobile-login-card" onClick={onNavigate}><DesignAsset className="mobile-login-icon" src="/design/mobile-sidebar/icons/account-user-icon-glass.svg" /><span className="mobile-nav-copy"><strong>{t("nav.login", "Log in")}</strong><small>{t("mobile.loginDescription", "Save your journey and progress")}</small></span><DesignAsset className="mobile-nav-arrow" src="/design/mobile-sidebar/icons/account-arrow.svg" />
        </Link><section className="mobile-guidance"><DesignAsset src="/design/mobile-sidebar/icons/cta-decorative-sparkle.svg" /><h3>{t("mobile.questions", "Have any questions?")}</h3><p>{t("mobile.help", "Get help from the experts")}</p><Link href="/contact" className="mobile-guidance-cta" onClick={onNavigate}>{t("mobile.guidance", "Ask for personal guidance")}<DesignAsset src="/design/mobile-sidebar/icons/arrow.svg" /></Link></section>
      </div>
      <footer className="mobile-nav-footer"><strong>SKILLBRIDGE-SL</strong><span></span><p><em>&quot;Your future. Your path.&quot;</em></p><small>{t("mobile.footer", "Premium career guidance for Sri Lankan students across all disciplines.")}</small></footer>
    </nav>
  </div>;
}

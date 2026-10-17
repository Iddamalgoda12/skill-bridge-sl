import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ActionLink } from "@/components/shared/ActionLink";
import { DesignAsset } from "@/components/shared/DesignAsset";
import assets from "@/lib/design/assets.json";
const items = [
  ["Explore Careers", "Discover the right career for you", "/careers", assets.mobile.imgIconCompass],
  ["Build Your Path", "Create your personal roadmap", "/build-your-path", assets.mobile.imgIconRoute],
  ["Universities", "Find your ideal university", "/universities", assets.mobile.imgIconUniversity],
  ["About", "Learn more about SkillBridge", "/about", assets.mobile.imgIconInfo],
];
export function MobileDashboard() {
  return <div className="mobile-dashboard"><header><p className="eyebrow">YOUR FUTURE STARTS HERE</p><h1>Explore your possibilities</h1><p>Find a path that fits your ambitions.</p></header><div className="mobile-destinations">{items.map(([title,description,href,icon], index) => <Link href={href} className={`mobile-destination ${index === 0 ? "gold-glass" : ""}`} key={href}><span className="mobile-destination-icon"><DesignAsset src={icon} /></span><span><strong>{title}</strong><small>{description}</small></span><ChevronRight size={19} /></Link>)}</div><Link className="mobile-destination mobile-login" href="/login"><span className="mobile-destination-icon"><DesignAsset src={assets.mobile.imgIconUser} /></span><span><strong>Log in</strong><small>Save your journey and progress</small></span><ChevronRight size={19} /></Link><section className="mobile-guidance glass-panel"><DesignAsset src={assets.mobile.imgCtaDecorativeSparkle} className="guidance-sparkle" /><h2>Have any questions?</h2><p>Get help from the experts</p><ActionLink href="/contact" dark>Ask for personal guidance</ActionLink></section><footer className="mobile-footer"><strong>SKILLBRIDGE-SL</strong><p><em>“Your future. Your path.”</em></p><p>Premium career guidance for Sri Lankan students across all disciplines.</p></footer></div>;
}

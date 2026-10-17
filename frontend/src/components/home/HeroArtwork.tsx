import Image from "next/image";
import Link from "next/link";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";
const features = [
  { title: "Explore Careers", copy: "Find work you’ll love, starting with your strengths.", href: "/careers", icon: assets.home.imgIconCompass1, bubble: assets.home.imgFeatureIconBackdrop, slot: "explore" },
  { title: "Find Courses", copy: "Discover courses from local universities.", href: "/courses", icon: assets.home.imgIconGraduation, bubble: assets.home.imgFeatureIconBackdrop1, slot: "courses" },
  { title: "Plan Your Journey", copy: "A clear roadmap from O/Ls all the way to PhD.", href: "/build-your-path", icon: assets.home.imgIconChart, bubble: assets.home.imgFeatureIconBackdrop2, slot: "journey" },
  { title: "Compare Universities", copy: "Find the right place for your next step.", href: "/universities?compare=true", icon: assets.home.imgIconUniversity, bubble: assets.home.imgFeatureIconBackdrop3, slot: "compare" },
];
export function HeroArtwork({ compact = false, imageSrc = "/Thoughtful Student with Laptop and Pen.png", imageAlt = "A Sri Lankan student considering her future, with a laptop and pen" }: { compact?: boolean; imageSrc?: string; imageAlt?: string }) {
  return <div className={`hero-artwork ${compact ? "compact-artwork" : ""}`}><div className="student-arch"><Image src={imageSrc} alt={imageAlt} width={1122} height={1402} priority /></div>{!compact && features.map(feature => <Link className={`hero-feature feature-${feature.slot}`} href={feature.href} key={feature.slot}><div className="feature-icon"><DesignAsset src={feature.bubble} /><DesignAsset src={feature.icon} className="feature-glyph" /></div><div><strong>{feature.title}</strong><p>{feature.copy}</p></div><DesignAsset src={assets.home.imgIconArrowup} className="feature-arrow" /></Link>)}</div>;
}

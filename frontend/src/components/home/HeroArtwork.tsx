import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";

const features = [
  { key: "careers", href: "/careers", icon: assets.home.imgIconCompass1, bubble: assets.home.imgFeatureIconBackdrop, slot: "explore" },
  { key: "saved", href: "/my-path", icon: assets.template.imgIconRoute, bubble: assets.home.imgFeatureIconBackdrop1, slot: "saved" },
  { key: "path", href: "/build-your-path", icon: assets.home.imgIconChart, bubble: assets.home.imgFeatureIconBackdrop2, slot: "journey" },
  { key: "universities", href: "/universities?compare=true", icon: assets.home.imgIconUniversity, bubble: assets.home.imgFeatureIconBackdrop3, slot: "compare" },
] as const;

export async function HeroArtwork({ compact = false, imageSrc = "/Thoughtful Student with Laptop and Pen.png", imageAlt }: { compact?: boolean; imageSrc?: string; imageAlt?: string }) {
  const t = await getTranslations("home");
  return (
    <div className={`hero-artwork ${compact ? "compact-artwork" : ""}`}>
      <div className="student-arch">
        <Image src={imageSrc} alt={imageAlt ?? t("artworkAlt")} width={1122} height={1402} priority />
      </div>
      {!compact && features.map((feature) => (
        <Link className={`hero-feature feature-${feature.slot}`} href={feature.href} key={feature.slot}>
          <div className="feature-icon"><DesignAsset src={feature.bubble} /><DesignAsset src={feature.icon} className="feature-glyph" /></div>
          <div><strong>{t(`features.${feature.key}.title`)}</strong><p>{t(`features.${feature.key}.copy`)}</p></div>
          <DesignAsset src={assets.home.imgIconArrowup} className="feature-arrow" />
        </Link>
      ))}
    </div>
  );
}

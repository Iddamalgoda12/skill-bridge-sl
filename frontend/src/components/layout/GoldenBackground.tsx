import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";
export default function GoldenBackground() {
  return <div className="golden-background" aria-hidden="true" data-figma-node="18:1825">
    <div className="background-desktop">
      <DesignAsset src={assets.template.img02UpperCreamAurora} className="aurora cream-aurora" />
      <DesignAsset src={assets.template.img03ChampagneDiffusion} className="aurora champagne-aurora" />
      <DesignAsset src={assets.template.img04PaleMintAurora} className="aurora mint-aurora" />
      <DesignAsset src={assets.template.img05SoftPeachReflection} className="aurora peach-aurora" />
    </div>
    <div className="background-mobile">
      <DesignAsset src={assets.template.img02UpperCreamAurora1} className="aurora cream-aurora" />
      <DesignAsset src={assets.template.img03ChampagneDiffusion1} className="aurora champagne-aurora" />
      <DesignAsset src={assets.template.img04PaleMintAurora1} className="aurora mint-aurora" />
      <DesignAsset src={assets.template.img05SoftPeachReflection1} className="aurora peach-aurora" />
      <DesignAsset src={assets.template.img07MobileLiquidGlassOrb} className="aurora glass-orb-one" />
      <DesignAsset src={assets.template.img08MobileSecondaryGlassOrb} className="aurora glass-orb-two" />
    </div><div className="precision-grid" />
  </div>;
}

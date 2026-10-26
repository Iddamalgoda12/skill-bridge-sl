import { getTranslations } from "next-intl/server";
import assets from "@/lib/design/assets.json";
import { DesignAsset } from "@/components/shared/DesignAsset";

const stations = [
  { id: "ol", icon: assets.path.imgVectorBook1, tone: "" },
  { id: "al", icon: assets.path.imgVectorTarget, tone: "tone-mint" },
  { id: "degree", icon: assets.path.imgVectorUniversity1, tone: "tone-lavender" },
  { id: "career", icon: assets.path.imgVectorFlag, tone: "tone-peach" },
] as const;

export async function JourneyIllustration() {
  const t = await getTranslations("path.journey");
  return (
    <div className="journey-illustration glass-panel glass-gradient">
      <p className="eyebrow">{t("eyebrow")}</p>
      <span className="journey-badge eyebrow-pill"><DesignAsset src={assets.path.imgVectorSpark} />{t("badge")}</span>
      <DesignAsset src={assets.path.imgGoldenGlassPathHalo} className="journey-halo" />
      <DesignAsset src={assets.path.imgSoftMintGlassWash} className="journey-wash" />
      <div className="journey-art">
        <DesignAsset src={assets.path.imgIllustrationEditableWindingTimeline} className="journey-line" />
        {stations.map((station, i) => (
          <div key={station.id} className={`journey-station station-${i}`}>
            <span className={`station-icon ${station.tone}`}><DesignAsset src={station.icon} /></span>
            <div><strong>{t(`stations.${station.id}.title`)}</strong><p>{t(`stations.${station.id}.copy`)}</p></div>
          </div>
        ))}
      </div>
      <p className="journey-caption">{t("caption")}</p>
    </div>
  );
}

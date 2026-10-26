import { Compass, Route, Landmark, BookmarkCheck } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { HeroArtwork } from "@/components/home/HeroArtwork";
import { TrendingCareers } from "@/components/home/TrendingCareers";
import { ActionLink } from "@/components/shared/ActionLink";
import { DesignAsset } from "@/components/shared/DesignAsset";
import assets from "@/lib/design/assets.json";

export default async function HomePage() {
  const [t, locale] = await Promise.all([getTranslations("home"), getLocale()]);
  const sinhala = locale === "si";

  return (
    <div className={`home-dashboard${sinhala ? " home-dashboard-si" : ""}`}>
      <section className="home-hero">
        <div className="home-copy">
          <p className="home-eyebrow">{t("eyebrow")}</p>
          <h1>{t.rich("headline", { accent: (chunks) => <span>{chunks}</span>, br: () => <br /> })}</h1>
          <div className="idea-note">
            <DesignAsset src={assets.home.imgIdeaDoodle} />
            <p>{t.rich("ideaNote", { br: () => <br /> })}</p>
          </div>
          <p className="home-description">{t("description")}</p>
          <div className="home-actions">
            <ActionLink href="/careers" icon={<Compass size={19} />}>{t("actions.careers")}</ActionLink>
            <ActionLink href="/build-your-path" icon={<Route size={19} />}>{t("actions.path")}</ActionLink>
            <ActionLink href="/universities" icon={<Landmark size={19} />}>{t("actions.universities")}</ActionLink>
            <ActionLink href="/my-path" icon={<BookmarkCheck size={19} />}>{t("actions.saved")}</ActionLink>
          </div>
        </div>
        <HeroArtwork />
      </section>
      <TrendingCareers />
    </div>
  );
}

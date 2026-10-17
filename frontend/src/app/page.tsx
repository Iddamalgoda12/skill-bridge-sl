"use client";

import { Compass, Route, Landmark, BookmarkCheck } from "lucide-react";
import { HeroArtwork } from "@/components/home/HeroArtwork";
import { TrendingCareers } from "@/components/home/TrendingCareers";
import { ActionLink } from "@/components/shared/ActionLink";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { useAppPreferences } from "@/components/layout/AppPreferences";
import assets from "@/lib/design/assets.json";

export default function HomePage() {
  const { t, locale } = useAppPreferences();

  return <div className={`home-dashboard${locale === "si" ? " home-dashboard-si" : ""}`}>
    <section className="home-hero">
      <div className="home-copy">
        <p className="home-eyebrow">{t("home.eyebrow", "YOUR FUTURE STARTS HERE")}</p>
        <h1>{locale === "si" ? t("home.discover", "Discover your path.") : <>Discover<br /><span>your path.</span></>}</h1>
        <div className="idea-note"><DesignAsset src={assets.home.imgIdeaDoodle} /><p>Better<br />Choices<br />Brighter<br />Tomorrows</p></div>
        <p className="home-description">{t("home.description", "From wondering what’s next to knowing where to go. Find careers, study pathways and universities in one place.")}</p>
        <div className="home-actions">
          <ActionLink href="/careers" icon={<Compass size={19} />}>{t("home.careers", "Explore careers")}</ActionLink>
          <ActionLink href="/build-your-path" icon={<Route size={19} />}>{t("home.path", "Build your path")}</ActionLink>
          <ActionLink href="/universities" icon={<Landmark size={19} />}>{t("home.universities", "Universities")}</ActionLink>
          <ActionLink href="/my-path" icon={<BookmarkCheck size={19} />}>{t("home.saved", "My saved paths")}</ActionLink>
        </div>
      </div>
      <HeroArtwork />
    </section>
    <TrendingCareers />
  </div>;
}

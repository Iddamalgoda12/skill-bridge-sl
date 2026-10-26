import type { Metadata } from "next";
import { Sparkles, Heart, GraduationCap, Camera } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { GlassPanel } from "@/components/shared/GlassPanel";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { SectionHeading } from "@/components/shared/SectionHeading";
import Footer from "@/components/layout/Footer";
import assets from "@/lib/design/assets.json";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("about"))("meta") };
}

const values = [
  { id: "clarity", icon: assets.about.imgIconLightbulb, tone: "" },
  { id: "guidance", icon: assets.about.imgIconCompass1, tone: "tone-mint" },
  { id: "student", icon: assets.about.imgIconHeart1, tone: "tone-peach" },
] as const;

export default async function AboutPage() {
  const t = await getTranslations("about");
  const br = { br: () => <br /> };
  return (
    <div className="page-container about-page">
      <div className="about-hero">
        <div>
          <PageIntro badge={<><Sparkles />{t("eyebrow")}</>} title={t("title")}>
            <p>{t.rich("intro", br)}</p>
          </PageIntro>
          <GlassPanel className="personal-note">
            <span className="icon-bubble"><Heart size={23} aria-hidden="true" /></span>
            <div><h3>{t("note.title")}</h3><p className="muted">{t.rich("note.body", br)}</p></div>
          </GlassPanel>
        </div>
        <GlassPanel className="founder-card">
          <div className="founder-portrait">
            <DesignAsset src={assets.about.imgPortraitBackgroundHalo} className="portrait-halo" />
            <DesignAsset src={assets.about.imgPortraitEditablePlaceholderSilhouette} className="portrait-silhouette" />
            <span className="portrait-label"><Camera size={14} aria-hidden="true" />{t("founder.addPhoto")}</span>
            <span className="portrait-placeholder">{t("founder.placeholder")}</span>
          </div>
          <p className="eyebrow">{t("founder.eyebrow")}</p>
          <h3>{t("founder.title")}</h3>
          <p className="inline-icon"><GraduationCap size={19} aria-hidden="true" />{t("founder.faculty")}</p>
          <small className="muted">{t("founder.disclaimer")}</small>
        </GlassPanel>
      </div>
      <section className="about-story">
        <SectionHeading eyebrow={t("story.eyebrow")} title={t("story.title")} description={t("story.description")} />
        <div className="story-grid">
          <GlassPanel className="story-card">
            <h3>{t("story.hi")}</h3>
            <p>{t.rich("story.p1", br)}</p>
            <p>{t.rich("story.p2", br)}</p>
            <span className="story-tag"><GraduationCap size={16} aria-hidden="true" />{t("story.tag")}</span>
          </GlassPanel>
          <GlassPanel className="values-card">
            <h3>{t("values.title")}</h3>
            {values.map(({ id, icon, tone }) => (
              <div className="value-row" key={id}>
                <span className={`icon-bubble ${tone}`}><DesignAsset src={icon} /></span>
                <div><strong>{t(`values.${id}.title`)}</strong><p className="muted">{t(`values.${id}.copy`)}</p></div>
              </div>
            ))}
          </GlassPanel>
        </div>
      </section>
      <Footer />
    </div>
  );
}

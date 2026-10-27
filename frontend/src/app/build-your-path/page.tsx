import type { Metadata } from "next";
import { Route, Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { ActionLink } from "@/components/shared/ActionLink";
import { JourneyIllustration } from "@/components/path/JourneyIllustration";
import { PathBuilder } from "@/components/path/PathBuilder";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCards } from "@/components/shared/ResourceCards";
import assets from "@/lib/design/assets.json";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("path"))("meta") };
}

export default async function BuildYourPathPage() {
  const t = await getTranslations("path");
  return (
    <div className="page-container path-page">
      <section className="path-hero">
        <div>
          <PageIntro badge={<><Route />{t("hero.eyebrow")}</>} title={t.rich("hero.title", { accent: (chunks) => <span>{chunks}</span>, br: () => <br /> })}>
            <div className="gold-underline" />
            <p>{t.rich("hero.intro", { br: () => <br /> })}</p>
          </PageIntro>
          <div className="hero-button-row">
            <ActionLink href="#stage-selection" icon={<Route size={18} />}>{t("hero.build")}</ActionLink>
            <ActionLink href="#roadmap-preview">{t("hero.example")}</ActionLink>
          </div>
          <p className="path-hero-note inline-icon"><Check size={15} aria-hidden="true" />{t("hero.note")}</p>
        </div>
        <JourneyIllustration />
      </section>
      <PathBuilder />
      <section className="section-block">
        <SectionHeading title={t("flexible.title")} description={t("flexible.description")} />
        <ResourceCards
          items={[
            { title: t("flexible.discover.title"), description: t("flexible.discover.description"), href: "/careers", icon: assets.path.imgVectorCompass1 },
            { title: t("flexible.understand.title"), description: t("flexible.understand.description"), href: "/universities", icon: assets.path.imgVectorShield, tone: "tone-mint" },
            { title: t("flexible.progress.title"), description: t("flexible.progress.description"), href: "/my-path", icon: assets.path.imgVectorCheck2, tone: "tone-lavender" },
          ]}
        />
      </section>
    </div>
  );
}

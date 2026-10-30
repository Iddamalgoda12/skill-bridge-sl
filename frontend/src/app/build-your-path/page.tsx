import type { Metadata } from "next";
import { Route, Check, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { ActionLink } from "@/components/shared/ActionLink";
import { JourneyIllustration } from "@/components/path/JourneyIllustration";
import { InteractivePathBuilder } from "@/components/path/InteractivePathBuilder";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCards } from "@/components/shared/ResourceCards";
import assets from "@/lib/design/assets.json";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Build Your Career Path - Personalized Education Roadmap | SkillBridge SL",
    description:
      "Design your customized education and career journey in Sri Lanka. Choose from Before O/L, O/L, A/L, or University stages and get actionable milestones, subject guidance, and university degrees.",
  };
}

export default async function BuildYourPathPage() {
  const t = await getTranslations("path");
  return (
    <div className="page-container path-page">
      <section className="path-hero">
        <div>
          <PageIntro
            badge={
              <>
                <Route />
                {t("hero.eyebrow")}
              </>
            }
            title={t.rich("hero.title", {
              accent: (chunks) => <span>{chunks}</span>,
              br: () => <br />,
            })}
          >
            <div className="gold-underline" />
            <p>{t.rich("hero.intro", { br: () => <br /> })}</p>
          </PageIntro>
          <div className="hero-button-row">
            <ActionLink href="#interactive-builder" icon={<Sparkles size={18} />}>
              Start Building My Path
            </ActionLink>
            <ActionLink href="/my-path">View My Active Dashboard</ActionLink>
          </div>
          <p className="path-hero-note inline-icon">
            <Check size={15} aria-hidden="true" />
            {t("hero.note")}
          </p>
        </div>
        <JourneyIllustration />
      </section>

      {/* Main Interactive Path Builder Component */}
      <div id="interactive-builder">
        <InteractivePathBuilder />
      </div>

      <section className="section-block">
        <SectionHeading title={t("flexible.title")} description={t("flexible.description")} />
        <ResourceCards
          items={[
            {
              title: t("flexible.discover.title"),
              description: t("flexible.discover.description"),
              href: "/careers",
              icon: assets.path.imgVectorCompass1,
            },
            {
              title: t("flexible.understand.title"),
              description: t("flexible.understand.description"),
              href: "/universities",
              icon: assets.path.imgVectorShield,
              tone: "tone-mint",
            },
            {
              title: t("flexible.progress.title"),
              description: t("flexible.progress.description"),
              href: "/my-path",
              icon: assets.path.imgVectorCheck2,
              tone: "tone-lavender",
            },
          ]}
        />
      </section>
    </div>
  );
}

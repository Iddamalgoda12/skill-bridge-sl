import { notFound } from "next/navigation";
import type { Metadata } from "next";
import assets from "@/lib/design/assets.json";
import { Sparkles, Route, Check, Wallet, Clock, Briefcase, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getCareer } from "@/lib/api/catalog";
import { localizeCareer } from "@/lib/i18n/catalog";
import { PageIntro } from "@/components/shared/PageIntro";
import { HeroArtwork } from "@/components/home/HeroArtwork";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";
import { SchoolRoadmap } from "@/components/careers/SchoolRoadmap";
import { CareerRoles } from "@/components/careers/CareerRoles";
import { Employers } from "@/components/careers/Employers";
import { StudyOptions } from "@/components/careers/StudyOptions";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [career, catalog, t] = await Promise.all([getCareer((await params).slug), getTranslations("catalog"), getTranslations("careerDetail")]);
  return { title: career ? localizeCareer(catalog, career).display.title : t("notFoundTitle") };
}

const metrics = [
  { id: "pay", Icon: Wallet },
  { id: "range", Icon: Wallet },
  { id: "pathways", Icon: Clock },
  { id: "roles", Icon: Briefcase },
] as const;

export default async function CareerPage({ params }: Props) {
  const record = await getCareer((await params).slug);
  if (!record) notFound();
  const [t, catalog] = await Promise.all([getTranslations("careerDetail"), getTranslations("catalog")]);
  const career = localizeCareer(catalog, record);
  const software = career.slug === "software-engineer";

  return (
    <div className="page-container career-detail">
      <section className="career-detail-hero">
        <div>
          <PageIntro badge={<><Sparkles />{t("eyebrow")}</>} title={software ? t.rich("softwareTitle", { br: () => <br /> }) : career.display.title}>
            <p>{career.display.summary}<br />{t("startHint")}</p>
          </PageIntro>
          <div className="hero-button-row">
            <SaveButton id={career.slug} title={career.display.title} />
            <ActionLink href={software ? "#school-roadmap" : "/build-your-path"} icon={<Route size={17} />}>{t("jumpToRoadmap")}</ActionLink>
            <span className="eyebrow-pill"><Check size={14} />{t("sriLankaFocus")}</span>
          </div>
        </div>
        <HeroArtwork compact imageSrc={assets.career.imgGeneratedAiHeroPortraitTransparentPng} imageAlt={t("heroAlt")} />
      </section>

      {software ? (
        <>
          <div className="grid-4 detail-metrics">
            {metrics.map(({ id, Icon }) => (
              <div className="glass-panel" key={id}>
                <p className="eyebrow"><Icon size={19} aria-hidden="true" />{t(`metrics.${id}.label`)}</p>
                <strong>{t(`metrics.${id}.value`)}</strong>
                <small>{t(`metrics.${id}.note`)}</small>
              </div>
            ))}
          </div>
          <p className="section-footnote">{t("salaryFootnote")}</p>
          <SchoolRoadmap />
          <section className="section-block">
            <SectionHeading title={t("entry.title")} description={t("entry.description")} />
            <div className="grid-2">
              {(["public", "sliit"] as const).map((id) => (
                <article className="entry-card glass-panel" key={id}>
                  <h3><GraduationCap size={23} aria-hidden="true" />{t(`entry.${id}.title`)} <span className="small-pill">{t(`entry.${id}.pill`)}</span></h3>
                  <p>{t(`entry.${id}.body`)}</p>
                  <strong>{t(`entry.${id}.action`)}</strong>
                </article>
              ))}
            </div>
          </section>
          <CareerRoles />
          <Employers />
          <StudyOptions />
        </>
      ) : (
        <section className="section-block">
          <SectionHeading title={t("generic.title", { career: career.display.title })} description={t("generic.description")} />
          <div className="grid-2">
            <article className="entry-card glass-panel">
              <h3>{t("generic.routes")}</h3>
              <p>{career.display.entry}</p>
              <ActionLink href="/universities">{t("generic.exploreUniversities")}</ActionLink>
            </article>
            <article className="entry-card glass-panel">
              <h3>{t("generic.where")}</h3>
              <p>{career.display.employers}</p>
              <p className="muted">{t("generic.note")}</p>
            </article>
          </div>
        </section>
      )}

      <div className="comparison-bar glass-panel section-block">
        <span className="icon-bubble"><Route size={23} aria-hidden="true" /></span>
        <div><h3>{t("cta.title")}</h3><p className="muted">{t("cta.body")}</p></div>
        <SaveButton id={career.slug} title={career.display.title} />
      </div>
    </div>
  );
}

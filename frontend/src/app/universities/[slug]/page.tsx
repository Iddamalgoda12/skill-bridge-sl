import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Landmark, Calendar, MapPin, GraduationCap, Award, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getUniversity } from "@/lib/api/catalog";
import { localizeUniversity } from "@/lib/i18n/catalog";
import { PageIntro } from "@/components/shared/PageIntro";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { UniversityAcademics } from "@/components/universities/UniversityAcademics";
import { CampusGallery } from "@/components/universities/CampusGallery";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";
import { ResourceCards } from "@/components/shared/ResourceCards";
import Footer from "@/components/layout/Footer";
import assets from "@/lib/design/assets.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [university, catalog, t] = await Promise.all([getUniversity((await params).slug), getTranslations("catalog"), getTranslations("universityDetail")]);
  return { title: university ? localizeUniversity(catalog, university).display.name : t("notFoundTitle") };
}

const metrics = [
  { id: "faculties", Icon: Landmark },
  { id: "founded", Icon: Calendar },
  { id: "campus", Icon: MapPin },
  { id: "type", Icon: GraduationCap },
] as const;

export default async function UniversityPage({ params }: Props) {
  const record = await getUniversity((await params).slug);
  if (!record) notFound();
  const [t, catalog] = await Promise.all([getTranslations("universityDetail"), getTranslations("catalog")]);
  const university = localizeUniversity(catalog, record);
  const { name, location, areas, type } = university.display;
  const ruhuna = university.slug === "ruhuna";
  const tabs = [
    { id: "overview", label: t("tabs.overview") },
    ...(ruhuna ? [
      { id: "faculties", label: t("tabs.faculties") },
      { id: "degrees", label: t("tabs.degrees") },
      { id: "admissions", label: t("tabs.admissions") },
      { id: "rankings", label: t("tabs.rankings") },
    ] : []),
    { id: "campus-life", label: t("tabs.campusLife") },
    { id: "gallery", label: t("tabs.gallery") },
  ];

  return (
    <div className="page-container university-detail">
      <nav className="breadcrumbs" aria-label={t("breadcrumb")}>
        <Link href="/universities">{t("universities")}</Link><span aria-hidden="true">/</span><span>{type}</span><span aria-hidden="true">/</span><span aria-current="page">{name}</span>
      </nav>
      <section className="university-detail-hero">
        <div>
          <PageIntro badge={<><Landmark />{university.type === "Government" ? t("badge.public") : t("badge.higher")}</>} title={ruhuna ? t.rich("ruhunaTitle", { br: () => <br /> }) : name}>
            <p>{ruhuna ? t("introRuhuna") : t("intro", { name })}</p>
          </PageIntro>
          <div className="university-badges">
            {ruhuna && <span className="eyebrow-pill"><Calendar />{t("established")}</span>}
            <span className="eyebrow-pill"><MapPin />{ruhuna ? t("locationRuhuna", { location }) : t("locationOther", { location })}</span>
            {ruhuna && <span className="eyebrow-pill"><Landmark />{t("facultyCount")}</span>}
          </div>
        </div>
        <CampusGallery name={ruhuna ? t("ruhunaShort") : university.shortName} />
      </section>

      {ruhuna && (
        <div className="university-metrics glass-panel">
          {metrics.map(({ id, Icon }) => (
            <div key={id}>
              <Icon size={21} aria-hidden="true" />
              <span><strong>{t(`metrics.${id}.value`)}</strong><small>{t(`metrics.${id}.label`)}</small></span>
            </div>
          ))}
        </div>
      )}

      <nav className="section-tabs glass-panel" aria-label={t("sections")}>
        {tabs.map((tab) => <a key={tab.id} href={`#${tab.id}`}>{tab.label}</a>)}
      </nav>

      <section id="overview" className="university-overview">
        <article className="glass-panel">
          <p className="eyebrow">{t("getToKnow", { name: university.shortName })}</p>
          <h2>{ruhuna ? t("overviewTitleRuhuna") : name}</h2>
          <p>{ruhuna ? t("overviewRuhuna") : t("overviewOther", { areas: areas.join(", "), name, location })}</p>
          <strong>{t("overviewTagline", { type })}</strong>
        </article>
        {ruhuna && (
          <article id="rankings" className="ranking-card glass-panel">
            <h3><Award size={23} aria-hidden="true" />{t("rankings.title")}</h3>
            <p>{t("rankings.source")}</p>
            <div>
              <span><strong>{t("rankings.nationalValue")}</strong><small>{t("rankings.national")}</small></span>
              <span><strong>{t("rankings.worldValue")}</strong><small>{t("rankings.world")}</small></span>
            </div>
            <small>{t("rankings.note")}</small>
          </article>
        )}
      </section>

      {ruhuna && (
        <>
          <UniversityAcademics />
          <section id="admissions" className="section-block faculty-locations">
            <SectionHeading eyebrow={t("locations.eyebrow")} title={t("locations.title")} description={t("locations.description")} />
            <article className="glass-panel">
              <h3>{t("locations.heading")}</h3>
              {(["matara", "kamburupitiya", "galle"] as const).map((id) => (
                <div className="location-row" key={id}>
                  <MapPin size={18} aria-hidden="true" />
                  <span><strong>{t(`locations.items.${id}.title`)}</strong><p className="muted">{t(`locations.items.${id}.copy`)}</p></span>
                </div>
              ))}
            </article>
          </section>
        </>
      )}

      <section id="campus-life" className="section-block">
        <SectionHeading eyebrow={t("campus.eyebrow")} title={t("campus.title")} description={t("campus.description")} />
        <ResourceCards
          items={[
            { title: t("campus.library.title"), description: t("campus.library.description"), href: university.website, icon: assets.university.imgIconBook1, external: true },
            { title: t("campus.clubs.title"), description: t("campus.clubs.description"), href: university.website, icon: assets.university.imgIconUsers1, tone: "tone-mint", external: true },
            { title: t("campus.faculty.title"), description: t("campus.faculty.description"), href: ruhuna ? "https://www.eng.ruh.ac.lk" : university.website, icon: assets.university.imgIconGraduation2, tone: "tone-ice", external: true },
          ]}
        />
      </section>

      <section className="university-bottom glass-panel section-block">
        <h2>{t("ready.title", { name })}</h2>
        <p className="muted">{t("ready.body")}</p>
        <div className="hero-button-row">
          <ActionLink href={university.website} dark external icon={<ExternalLink size={17} />} arrow={false}>{t("ready.visit")}</ActionLink>
          <SaveButton id={university.slug} title={name} kind="university" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

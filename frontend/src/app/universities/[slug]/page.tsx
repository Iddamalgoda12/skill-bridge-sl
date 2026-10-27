import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Landmark,
  Calendar,
  MapPin,
  GraduationCap,
  Award,
  ExternalLink,
  Sparkles,
  Compass,
  ChevronRight,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getUniversity } from "@/lib/api/catalog";
import { localizeUniversity } from "@/lib/i18n/catalog";
import { PageIntro } from "@/components/shared/PageIntro";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { UniversityAcademics } from "@/components/universities/UniversityAcademics";
import { CampusGallery } from "@/components/universities/CampusGallery";
import { FacultyExplorer } from "@/components/universities/FacultyExplorer";
import { RuhunaHeritage } from "@/components/universities/RuhunaHeritage";
import { RuhunaAdmissions } from "@/components/universities/RuhunaAdmissions";
import { RuhunaFacilities } from "@/components/universities/RuhunaFacilities";
import { RuhunaOfficialLinks } from "@/components/universities/RuhunaOfficialLinks";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [university, catalog, t] = await Promise.all([
    getUniversity((await params).slug),
    getTranslations("catalog"),
    getTranslations("universityDetail"),
  ]);
  return {
    title: university ? localizeUniversity(catalog, university).display.name : t("notFoundTitle"),
  };
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

  const [t, catalog] = await Promise.all([
    getTranslations("universityDetail"),
    getTranslations("catalog"),
  ]);

  const university = localizeUniversity(catalog, record);
  const { name, location, areas, type } = university.display;
  const ruhuna = university.slug === "ruhuna";

  const tabs = [
    { id: "overview", label: t("tabs.overview") },
    ...(ruhuna
      ? [
          { id: "heritage", label: t("tabs.heritage") },
          { id: "gallery", label: t("tabs.gallery") },
          { id: "faculties", label: t("tabs.faculties") },
          { id: "degrees", label: t("tabs.degrees") },
          { id: "facilities", label: t("tabs.facilities") },
          { id: "admissions", label: t("tabs.admissions") },
          { id: "rankings", label: t("tabs.rankings") },
          { id: "resources", label: t("tabs.resources") },
        ]
      : [
          { id: "campus-life", label: t("tabs.campusLife") },
          { id: "gallery", label: t("tabs.gallery") },
        ]),
  ];

  return (
    <div className="page-container university-detail">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumbs" aria-label={t("breadcrumb")}>
        <Link href="/universities">{t("universities")}</Link>
        <span aria-hidden="true">/</span>
        <span>{type}</span>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{name}</span>
      </nav>

      {/* Hero Section */}
      <section className="university-detail-hero">
        <div className="hero-details-column">
          {ruhuna && (
            <div className="ruhuna-crest-badge-row">
              <div className="ruhuna-crest-wrapper">
                <Image
                  src="/images/universities/ruhuna/ruhuna-crest.png"
                  alt="University of Ruhuna Crest"
                  width={34}
                  height={48}
                  className="ruhuna-crest-img"
                  priority
                />
              </div>
              <div className="ruhuna-crest-text">
                <span className="ruhuna-state-label">National State University · Sri Lanka</span>
                <span className="ruhuna-motto-text">{t("motto")}</span>
              </div>
            </div>
          )}

          <PageIntro
            badge={
              <>
                <Landmark size={14} />
                {university.type === "Government" ? t("badge.public") : t("badge.higher")}
              </>
            }
            title={ruhuna ? t.rich("ruhunaTitle", { br: () => <br /> }) : name}
          >
            <p className="hero-lead-paragraph">{ruhuna ? t("introRuhuna") : t("intro", { name })}</p>
          </PageIntro>

          {/* Quick CTA row */}
          <div className="hero-actions-container">
            <ActionLink
              href={university.website}
              dark
              external
              icon={<ExternalLink size={16} />}
              arrow={false}
            >
              {t("ready.visit")}
            </ActionLink>
            <SaveButton id={university.slug} title={name} kind="university" />
            {ruhuna && (
              <a href="#faculties" className="glass-button hero-explore-btn">
                <span>{t("tabs.faculties")}</span>
                <ChevronRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Badges Pill Row */}
          <div className="university-badges">
            {ruhuna && (
              <>
                <span className="eyebrow-pill">
                  <Calendar size={12} />
                  {t("establishedDetail")}
                </span>
                <span className="eyebrow-pill">
                  <MapPin size={12} />
                  {t("locationRuhuna", { location })}
                </span>
                <span className="eyebrow-pill">
                  <Landmark size={12} />
                  {t("facultyCount")}
                </span>
                <span className="eyebrow-pill accent-pill">
                  <Sparkles size={12} />
                  {t("bawaHeritageBadge")}
                </span>
              </>
            )}
            {!ruhuna && (
              <span className="eyebrow-pill">
                <MapPin size={12} />
                {t("locationOther", { location })}
              </span>
            )}
          </div>
        </div>

        {/* Real Photo Gallery in Hero Area */}
        <div className="hero-gallery-column">
          <CampusGallery name={ruhuna ? t("ruhunaShort") : university.shortName} isRuhuna={ruhuna} />
        </div>
      </section>

      {/* University Visual Metrics */}
      {ruhuna && (
        <div className="university-metrics glass-panel">
          {metrics.map(({ id, Icon }) => (
            <div key={id}>
              <Icon size={22} aria-hidden="true" />
              <span>
                <strong>{t(`metrics.${id}.value`)}</strong>
                <small>{t(`metrics.${id}.label`)}</small>
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Sticky Section Navigation */}
      <nav className="section-tabs glass-panel" aria-label={t("sections")}>
        {tabs.map((tab) => (
          <a key={tab.id} href={`#${tab.id}`}>
            {tab.label}
          </a>
        ))}
      </nav>

      {/* Overview & Rankings */}
      <section id="overview" className="university-overview">
        <article className="glass-panel overview-article">
          <p className="eyebrow">{t("getToKnow", { name: university.shortName })}</p>
          <h2>{ruhuna ? t("overviewTitleRuhuna") : name}</h2>
          <p>{ruhuna ? t("overviewRuhuna") : t("overviewOther", { areas: areas.join(", "), name, location })}</p>
          <strong className="tagline-highlight">{t("overviewTagline", { type })}</strong>
        </article>

        {ruhuna && (
          <article id="rankings" className="ranking-card glass-panel">
            <div className="ranking-card-header">
              <Award size={24} aria-hidden="true" className="trophy-icon" />
              <div>
                <h3>{t("rankings.title")}</h3>
                <p className="muted">{t("rankings.source")}</p>
              </div>
            </div>
            <div className="ranking-stats-row">
              <div className="ranking-stat-box">
                <strong>{t("rankings.nationalValue")}</strong>
                <small>{t("rankings.national")}</small>
              </div>
              <div className="ranking-stat-box">
                <strong>{t("rankings.worldValue")}</strong>
                <small>{t("rankings.world")}</small>
              </div>
            </div>
            <p className="ranking-note-text muted">{t("rankings.note")}</p>
          </article>
        )}
      </section>

      {/* Ruhuna Exclusive Specialized Sections */}
      {ruhuna && (
        <>
          {/* Architectural Heritage Section */}
          <RuhunaHeritage />

          {/* Interactive All 10 Faculties Explorer */}
          <FacultyExplorer />

          {/* Degrees & Study Opportunities */}
          <UniversityAcademics />

          {/* Campus Facilities & Life */}
          <RuhunaFacilities />

          {/* Admissions Guidance for Sri Lankan Students */}
          <RuhunaAdmissions />

          {/* Verified Official Links Hub */}
          <RuhunaOfficialLinks />
        </>
      )}

      {/* Non-Ruhuna Generic Fallback */}
      {!ruhuna && (
        <section id="campus-life" className="section-block">
          <SectionHeading
            eyebrow={t("campus.eyebrow")}
            title={t("campus.title")}
            description={t("campus.description")}
          />
          <div className="glass-panel" style={{ padding: "30px", borderRadius: "24px" }}>
            <p className="muted">{t("overviewOther", { areas: areas.join(", "), name, location })}</p>
          </div>
        </section>
      )}

      {/* Bottom CTA Card */}
      <section className="university-bottom glass-panel section-block">
        <div className="bottom-cta-content">
          <span className="eyebrow-pill">
            <Compass size={13} aria-hidden="true" />
            <span>Start Your Journey</span>
          </span>
          <h2>{t("ready.title", { name })}</h2>
          <p className="muted">{t("ready.body")}</p>
          <div className="hero-button-row">
            <ActionLink
              href={university.website}
              dark
              external
              icon={<ExternalLink size={17} />}
              arrow={false}
            >
              {t("ready.visit")}
            </ActionLink>
            <SaveButton id={university.slug} title={name} kind="university" />
          </div>
        </div>
      </section>
    </div>
  );
}

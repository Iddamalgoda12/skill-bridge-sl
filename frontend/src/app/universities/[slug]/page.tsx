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
} from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { getUniversity } from "@/lib/api/catalog";
import { localizeUniversity } from "@/lib/i18n/catalog";
import { PageIntro } from "@/components/shared/PageIntro";
import { UniversityAcademics } from "@/components/universities/UniversityAcademics";
import { CampusGallery } from "@/components/universities/CampusGallery";
import { FacultyExplorer } from "@/components/universities/FacultyExplorer";
import { RuhunaHeritage } from "@/components/universities/RuhunaHeritage";
import { RuhunaAdmissions } from "@/components/universities/RuhunaAdmissions";
import { RuhunaFacilities } from "@/components/universities/RuhunaFacilities";
import { RuhunaOfficialLinks } from "@/components/universities/RuhunaOfficialLinks";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";
import { getUniversityDetail } from "@/lib/data/universityDetails";

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

export default async function UniversityPage({ params }: Props) {
  const record = await getUniversity((await params).slug);
  if (!record) notFound();

  const [t, catalog, locale] = await Promise.all([
    getTranslations("universityDetail"),
    getTranslations("catalog"),
    getLocale(),
  ]);
  const isSi = locale === "si";

  const university = localizeUniversity(catalog, record);
  const { name, location, areas, type } = university.display;
  const ruhuna = university.slug === "ruhuna";

  // Detailed verified institutional dataset
  const detail = getUniversityDetail(record.slug);

  const tabs = [
    { id: "overview", label: t("tabs.overview") },
    { id: "heritage", label: t("tabs.heritage") },
    { id: "gallery", label: t("tabs.gallery") },
    { id: "faculties", label: t("tabs.faculties") },
    { id: "degrees", label: t("tabs.degrees") },
    { id: "facilities", label: t("tabs.facilities") },
    { id: "admissions", label: t("tabs.admissions") },
    { id: "rankings", label: t("tabs.rankings") },
    { id: "resources", label: t("tabs.resources") },
  ];

  const crestSrc = detail?.crest || (ruhuna ? "/images/universities/ruhuna/ruhuna-crest.png" : null);
  const stateLabel = isSi
    ? (type === "Government" || university.type === "Government"
        ? "ජාතික රාජ්‍ය විශ්වවිද්‍යාලය · ශ්‍රී ලංකාව"
        : "පිළිගත් උපාධි ප්‍රදානය කරන ආයතනය · ශ්‍රී ලංකාව")
    : (detail?.stateLabel || (type === "Government" ? "National State University · Sri Lanka" : "Degree Awarding University · Sri Lanka"));
  const mottoText = (ruhuna && t.has("motto")) ? t("motto") : (detail?.motto || "");

  // Metrics
  const metricFaculties = detail?.metrics?.faculties || (ruhuna ? t("metrics.faculties.value") : (isSi ? `අධ්‍යයන ක්ෂේත්‍ර ${areas.length}ක්` : `${areas.length} Study Streams`));
  const metricFounded = detail?.metrics?.founded || (ruhuna ? t("metrics.founded.value") : (isSi ? "ස්ථාපිත" : "Chartered"));
  const metricCampus = detail?.metrics?.campus || (ruhuna ? t("metrics.campus.value") : location);
  const metricType = detail?.metrics?.type || (ruhuna ? t("metrics.type.value") : type);

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
          {crestSrc && (
            <div className="ruhuna-crest-badge-row">
              <div className="ruhuna-crest-wrapper">
                <Image
                  src={crestSrc}
                  alt={`${name} Official Crest`}
                  width={34}
                  height={48}
                  className="ruhuna-crest-img"
                  priority
                />
              </div>
              <div className="ruhuna-crest-text">
                <span className="ruhuna-state-label">{stateLabel}</span>
                {mottoText && <span className="ruhuna-motto-text">{mottoText}</span>}
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
            <p className="hero-lead-paragraph">
              {ruhuna
                ? t("introRuhuna")
                : detail?.overview?.description || t("intro", { name })}
            </p>
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
            <a href="#faculties" className="button button-ghost hero-secondary-btn">
              <span>{t("tabs.faculties")}</span>
            </a>
          </div>

          {/* Hero Metadata Badges */}
          <div className="hero-eyebrow-row">
            {ruhuna ? (
              <>
                <span className="eyebrow-pill">
                  <MapPin size={12} />
                  {t("locationRuhuna")}
                </span>
                <span className="eyebrow-pill">
                  <Landmark size={12} />
                  {t("establishedDetail")}
                </span>
                <span className="eyebrow-pill accent-pill">
                  <Sparkles size={12} />
                  {t("bawaHeritageBadge")}
                </span>
              </>
            ) : (
              <>
                <span className="eyebrow-pill">
                  <MapPin size={12} />
                  {t("locationOther", { location: detail?.location || location })}
                </span>
                <span className="eyebrow-pill">
                  <Landmark size={12} />
                  {isSi ? `ආරම්භය: ${detail?.metrics?.founded || "ස්ථාපිත"}` : `Est. ${detail?.metrics?.founded || "Chartered"}`}
                </span>
                {detail?.heritage?.imageBadge && (
                  <span className="eyebrow-pill accent-pill">
                    <Sparkles size={12} />
                    {detail.heritage.imageBadge}
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        {/* Real Authentic Photo Gallery in Hero Area */}
        <div className="hero-gallery-column">
          <CampusGallery
            name={ruhuna ? t("ruhunaShort") : university.shortName}
            photos={detail?.gallery}
            isRuhuna={ruhuna}
            galleryTitle={detail?.overview?.title}
            gallerySubtitle={detail?.overview?.description}
          />
        </div>
      </section>

      {/* University Visual Metrics */}
      <div className="university-metrics glass-panel">
        <div>
          <Landmark size={22} aria-hidden="true" />
          <span>
            <strong>{metricFaculties}</strong>
            <small>{t("metrics.faculties.label")}</small>
          </span>
        </div>
        <div>
          <Calendar size={22} aria-hidden="true" />
          <span>
            <strong>{metricFounded}</strong>
            <small>{t("metrics.founded.label")}</small>
          </span>
        </div>
        <div>
          <MapPin size={22} aria-hidden="true" />
          <span>
            <strong>{metricCampus}</strong>
            <small>{t("metrics.campus.label")}</small>
          </span>
        </div>
        <div>
          <GraduationCap size={22} aria-hidden="true" />
          <span>
            <strong>{metricType}</strong>
            <small>{t("metrics.type.label")}</small>
          </span>
        </div>
      </div>

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
          <h2>{ruhuna ? t("overviewTitleRuhuna") : detail?.overview?.title || name}</h2>
          <p>
            {ruhuna
              ? t("overviewRuhuna")
              : detail?.overview?.description || t("overviewOther", { areas: areas.join(", "), name, location })}
          </p>
          <strong className="tagline-highlight">
            {detail?.overview?.tagline || t("overviewTagline", { type })}
          </strong>
        </article>

        <article id="rankings" className="ranking-card glass-panel">
          <div className="ranking-card-header">
            <Award size={24} aria-hidden="true" className="trophy-icon" />
            <div>
              <h3>{t("rankings.title")}</h3>
              <p className="muted">{detail?.rankings?.source || t("rankings.source")}</p>
            </div>
          </div>
          <div className="ranking-stats-row">
            <div className="ranking-stat-box">
              <strong>{detail?.rankings?.nationalValue || t("rankings.nationalValue")}</strong>
              <small>{detail?.rankings?.nationalLabel || t("rankings.national")}</small>
            </div>
            <div className="ranking-stat-box">
              <strong>{detail?.rankings?.worldValue || t("rankings.worldValue")}</strong>
              <small>{detail?.rankings?.worldLabel || t("rankings.world")}</small>
            </div>
          </div>
          <p className="ranking-note-text muted">
            {detail?.rankings?.note || t("rankings.note")}
          </p>
        </article>
      </section>

      {/* Architectural Heritage Section */}
      <RuhunaHeritage
        heritage={detail?.heritage}
        isRuhuna={ruhuna}
        universityName={name}
      />

      {/* Interactive All Faculties Explorer */}
      <FacultyExplorer
        faculties={detail?.faculties}
        isRuhuna={ruhuna}
        universityName={name}
      />

      {/* Degrees & Study Opportunities */}
      <UniversityAcademics
        degreeGroups={detail?.degreeGroups}
        isRuhuna={ruhuna}
        universityName={name}
      />

      {/* Campus Facilities & Life */}
      <RuhunaFacilities
        facilities={detail?.facilities}
        isRuhuna={ruhuna}
        universityName={name}
      />

      {/* Admissions Guidance for Sri Lankan Students */}
      <RuhunaAdmissions
        admissions={detail?.admissions}
        isRuhuna={ruhuna}
        universityName={name}
      />

      {/* Verified Official Links Hub */}
      <RuhunaOfficialLinks
        links={detail?.officialLinks}
        isRuhuna={ruhuna}
        universityName={name}
      />

      {/* Bottom CTA Card */}
      <section className="university-bottom glass-panel section-block">
        <div className="bottom-cta-content">
          <span className="eyebrow-pill">
            <Compass size={13} aria-hidden="true" />
            <span>{isSi ? "ඔබේ ගමන අරඹන්න" : "Start Your Journey"}</span>
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

import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { Route } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getCareerDetail, getAllCareerSlugs } from "@/lib/data/careerDetails";
import { getCareer } from "@/lib/api/catalog";
import { localizeCareer } from "@/lib/i18n/catalog";
import { CareerHero } from "@/components/careers/CareerHero";
import { CareerOverviewSection } from "@/components/careers/CareerOverviewSection";
import { CareerSalaryCard } from "@/components/careers/CareerSalaryCard";
import { CareerEducationSection } from "@/components/careers/CareerEducationSection";
import { CareerUniversitiesSection } from "@/components/careers/CareerUniversitiesSection";
import { CareerRoadmapSection } from "@/components/careers/CareerRoadmapSection";
import { CareerSkillsSuitability } from "@/components/careers/CareerSkillsSuitability";
import { CareerFutureOutlook } from "@/components/careers/CareerFutureOutlook";
import { CareerRelatedSection } from "@/components/careers/CareerRelatedSection";
import { EngineeringFields } from "@/components/careers/EngineeringFields";
import { SaveButton } from "@/components/shared/SaveButton";
import { ActionLink } from "@/components/shared/ActionLink";

type Props = { params: Promise<{ slug: string }> };

// Subfield redirects for engineering specializations
const ENGINEERING_SPECIALIZATIONS = [
  "civil-engineer",
  "mechanical-engineer",
  "electrical-engineer",
  "cloud-architect",
  "cybersecurity-analyst",
  "ai-engineer",
  "data-analyst",
  "designer",
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (ENGINEERING_SPECIALIZATIONS.includes(slug)) {
    return { title: "Engineering Fields in Sri Lanka | SkillBridge SL" };
  }

  const detail = getCareerDetail(slug);
  if (detail) {
    return {
      title: `${detail.title} in Sri Lanka - Salary, Degrees, Requirements & Career Guide | SkillBridge SL`,
      description: detail.tagline,
    };
  }

  const [record, catalog, t] = await Promise.all([
    getCareer(slug),
    getTranslations("catalog"),
    getTranslations("careerDetail"),
  ]);
  return {
    title: record ? localizeCareer(catalog, record).display.title : t("notFoundTitle"),
  };
}

export function generateStaticParams() {
  return getAllCareerSlugs().map((slug) => ({ slug }));
}

export default async function CareerPage({ params }: Props) {
  const { slug } = await params;

  // Handle specialized sub-disciplines
  if (ENGINEERING_SPECIALIZATIONS.includes(slug)) {
    redirect("/careers/engineer#disciplines");
  }

  // Load detailed career record
  const detail = getCareerDetail(slug);
  const isEngineer = slug === "engineer";

  if (!detail) {
    // Fallback to legacy catalog if exists, or 404
    const record = await getCareer(slug);
    if (!record) notFound();
    redirect(`/careers/${record.slug}`);
  }

  return (
    <div className="page-container career-detail-page">
      {/* 1. Hero Section with authentic photo, badges, quick jump links & CTAs */}
      <CareerHero career={detail} />

      {/* 2. Overview: What they do, Why it matters, Responsibilities, Sri Lankan Success Story */}
      <CareerOverviewSection career={detail} />

      {/* Specialized Engineering Disciplines Explorer (Preserved for Engineer) */}
      {isEngineer && (
        <section id="disciplines" className="section-block engineering-explorer-wrap">
          <EngineeringFields />
        </section>
      )}

      {/* 3. Sri Lankan Salary Benchmarks: Entry, Mid, Senior, Govt vs Pvt, Overseas */}
      <CareerSalaryCard salary={detail.salary} careerTitle={detail.title} />

      {/* 4. O/L & A/L Requirements, Z-Score benchmarks, Alternative pathways */}
      <CareerEducationSection education={detail.education} careerTitle={detail.title} />

      {/* 5. State & Non-State Universities & Degrees in Sri Lanka (Linking to SkillBridge SL pages) */}
      <CareerUniversitiesSection
        universities={detail.universities}
        careerTitle={detail.title}
      />

      {/* 6. Step-by-Step 6-Stage Visual Career Roadmap */}
      <CareerRoadmapSection roadmap={detail.roadmap} careerTitle={detail.title} />

      {/* 7. Skills, School Subjects, Trait Fit & Interactive Self-Assessment Quiz */}
      <CareerSkillsSuitability
        skills={detail.skills}
        suitability={detail.suitability}
        careerTitle={detail.title}
      />

      {/* 8. 5-10 Year Future Outlook, AI Disruption & Emerging Specializations */}
      <CareerFutureOutlook
        futureOutlook={detail.futureOutlook}
        careerTitle={detail.title}
      />

      {/* 9. Related Career Pathways */}
      <CareerRelatedSection
        relatedCareers={detail.relatedCareers}
        currentCareerTitle={detail.title}
      />

      {/* Bottom Sticky CTA Comparison Bar */}
      <div className="career-bottom-cta glass-panel section-block">
        <div className="cta-left-content">
          <span className="cta-icon-bubble">
            <Route size={22} aria-hidden="true" />
          </span>
          <div>
            <h3>Ready to build your personalized career roadmap?</h3>
            <p className="cta-sub">
              Map out your O/L, A/L subject combinations, universities, and milestone goals on SkillBridge SL.
            </p>
          </div>
        </div>
        <div className="cta-right-actions">
          <SaveButton id={detail.slug} title={detail.title} />
          <ActionLink href="/build-your-path" icon={<Route size={16} />}>
            Build My Career Path
          </ActionLink>
        </div>
      </div>
    </div>
  );
}

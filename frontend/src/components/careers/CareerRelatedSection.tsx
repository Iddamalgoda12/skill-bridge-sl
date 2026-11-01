"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Banknote } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { careerDetails, type RelatedCareerItem } from "@/lib/data/careerDetails";

interface CareerRelatedSectionProps {
  relatedCareers: (RelatedCareerItem | string)[];
  currentCareerTitle: string;
}

function RelatedCareerCardItem({
  item,
  isSi,
}: {
  item: RelatedCareerItem | string;
  isSi: boolean;
}) {
  const [imgError, setImgError] = useState(false);
  const isObj = typeof item === "object" && item !== null;
  const slug = isObj ? item.slug : item;

  const detail = careerDetails[slug];

  const title = isSi && detail?.sinhalaTitle
    ? detail.sinhalaTitle
    : isObj
      ? item.title
      : detail?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const category = detail?.category || (isObj ? item.category : isSi ? "වෘත්තීය ක්ෂේත්‍රය" : "Career Field");
  const salaryPreview = detail?.salary?.midLevel?.label || detail?.salary?.entryLevel?.label;
  const summary = detail?.tagline || detail?.roleOverview?.whatTheyDo;

  const imageSrc = imgError
    ? "/images/careers/engineer.jpg"
    : detail?.heroImage || `/images/careers/${slug}.jpg`;

  return (
    <Link
      href={`/careers/${slug}`}
      className="related-career-card glass-panel"
    >
      <div className="related-card-media">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
          className="related-card-img"
          onError={() => setImgError(true)}
        />
        <div className="related-card-media-overlay" />
        <span className="related-cat-pill">{category}</span>
      </div>

      <div className="related-card-body">
        <h3 className="related-card-title">{title}</h3>

        {salaryPreview && (
          <div className="related-card-salary">
            <Banknote size={14} className="salary-icon" aria-hidden="true" />
            <span>{salaryPreview}</span>
          </div>
        )}

        {summary && (
          <p className="related-card-desc">{summary}</p>
        )}

        <div className="related-card-footer">
          <span>{isSi ? "සම්පූර්ණ විස්තරය බලන්න" : "View Full Career Guide"}</span>
          <ArrowRight size={14} className="related-arrow" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}

export function CareerRelatedSection({
  relatedCareers,
  currentCareerTitle,
}: CareerRelatedSectionProps) {
  const locale = useLocale();
  const isSi = locale === "si";

  if (!relatedCareers || relatedCareers.length === 0) return null;

  const shortTitle = currentCareerTitle.split("/")[0].split("(")[0].trim();

  return (
    <section className="section-block career-related-section">
      <SectionHeading
        eyebrow={isSi ? "විකල්ප වෘත්තීන් ගවේෂණය" : "EXPLORE ALTERNATIVES"}
        title={isSi ? "ශ්‍රී ලංකාවේ මේ හා සම්බන්ධ අනෙකුත් වෘත්තීය ක්ෂේත්‍ර" : "Related Career Pathways in Sri Lanka"}
        description={
          isSi
            ? `${shortTitle} හා සමාන කුසලතා, අධ්‍යාපන පදනම හෝ කර්මාන්ත ක්ෂේත්‍ර බෙදාගන්නා ශ්‍රී ලාංකික වෘත්තීන්.`
            : `Explore interconnected fields sharing similar skills, educational foundations, or industries with ${shortTitle}.`
        }
      />

      <div className="grid-3 related-careers-grid">
        {relatedCareers.map((item, idx) => (
          <RelatedCareerCardItem
            key={idx}
            item={item}
            isSi={isSi}
          />
        ))}
      </div>
    </section>
  );
}

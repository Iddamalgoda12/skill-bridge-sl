"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { Compass, ArrowRight, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { RelatedCareerItem } from "@/lib/data/careerDetails";

interface CareerRelatedSectionProps {
  relatedCareers: (RelatedCareerItem | string)[];
  currentCareerTitle: string;
}

export function CareerRelatedSection({
  relatedCareers,
  currentCareerTitle,
}: CareerRelatedSectionProps) {
  const locale = useLocale();
  const isSi = locale === "si";

  if (!relatedCareers || relatedCareers.length === 0) return null;

  const shortTitle = currentCareerTitle.split("/")[0].trim();

  return (
    <section className="section-block career-related-section">
      <SectionHeading
        eyebrow={isSi ? "විකල්ප වෘත්තීන් ගවේෂණය" : "EXPLORE ALTERNATIVES"}
        title={isSi ? "ශ්‍රී ලංකාවේ මේ හා සම්බන්ධ අනෙකුත් වෘත්තීය ක්ෂේත්‍ර" : "Related Career Pathways in Sri Lanka"}
        description={
          isSi
            ? `${shortTitle} හා සමාන කුසලතා, අධ්‍යාපන පදනම හෝ කර්මාන්ත ක්ෂේත්‍ර බෙදාගන්නා වෙනත් වෘත්තීන්.`
            : `Explore interconnected fields sharing similar skills, educational foundations, or industries with ${shortTitle}.`
        }
      />

      <div className="grid-3 related-careers-grid">
        {relatedCareers.map((item, idx) => {
          const isObj = typeof item === "object" && item !== null;
          const slug = isObj ? item.slug : item;
          const title = isObj ? item.title : slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
          const category = isObj ? item.category : (isSi ? "වෘත්තීය මග" : "Career Pathway");

          return (
            <Link
              key={idx}
              href={`/careers/${slug}`}
              className="related-career-card glass-panel"
            >
              <div className="related-card-top">
                <span className="related-icon-bubble">
                  <Briefcase size={16} aria-hidden="true" />
                </span>
                <span className="related-cat-pill">{category}</span>
              </div>

              <h3 className="related-card-title">{title}</h3>

              <div className="related-card-footer">
                <span>{isSi ? "සම්පූර්ණ විස්තරය බලන්න" : "View Full Career Guide"}</span>
                <ArrowRight size={14} className="related-arrow" aria-hidden="true" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


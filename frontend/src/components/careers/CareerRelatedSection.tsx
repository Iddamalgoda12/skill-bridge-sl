import Link from "next/link";
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
  if (!relatedCareers || relatedCareers.length === 0) return null;

  return (
    <section className="section-block career-related-section">
      <SectionHeading
        eyebrow="EXPLORE ALTERNATIVES"
        title="Related Career Pathways in Sri Lanka"
        description={`Explore interconnected fields sharing similar skills, educational foundations, or industries with ${currentCareerTitle.split("/")[0].trim()}.`}
      />

      <div className="grid-3 related-careers-grid">
        {relatedCareers.map((item, idx) => {
          const isObj = typeof item === "object" && item !== null;
          const slug = isObj ? item.slug : item;
          const title = isObj ? item.title : slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
          const category = isObj ? item.category : "Career Pathway";

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
                <span>View Full Career Guide</span>
                <ArrowRight size={14} className="related-arrow" aria-hidden="true" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


import Link from "next/link";
import { GraduationCap, ArrowUpRight, Award, Clock, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerUniversity } from "@/lib/data/careerDetails";

interface CareerUniversitiesSectionProps {
  universities: CareerUniversity[];
  careerTitle: string;
}

export function CareerUniversitiesSection({
  universities,
  careerTitle,
}: CareerUniversitiesSectionProps) {
  return (
    <section id="universities" className="section-block career-universities-section">
      <SectionHeading
        eyebrow="DEGREE PROGRAMMES & INSTITUTIONS"
        title={`Where to Study to Become a ${careerTitle.split("/")[0].trim()}`}
        description="State universities, accredited non-state institutions, and professional faculties in Sri Lanka offering verified degree pathways."
      />

      <div className="grid-3 career-uni-grid">
        {universities.map((uni, idx) => (
          <article className="career-uni-card glass-panel" key={idx}>
            <div className="uni-card-header">
              <span className="uni-icon-bubble">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <div className="uni-badge-group">
                <span className="uni-type-tag">{uni.type}</span>
                {uni.accreditation && (
                  <span className="uni-accred-tag">
                    <Award size={11} aria-hidden="true" />
                    {uni.accreditation}
                  </span>
                )}
              </div>
            </div>

            <div className="uni-degree-details">
              <h3 className="uni-degree-title">{uni.degreeName}</h3>
              <p className="uni-name-label">{uni.name}</p>
              <p className="uni-faculty-label">{uni.faculty}</p>
            </div>

            <div className="uni-footer-row">
              <span className="uni-duration">
                <Clock size={12} aria-hidden="true" />
                {uni.duration}
              </span>

              <div className="uni-links-wrap">
                {uni.websiteUrl && (
                  <a
                    href={uni.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uni-external-link"
                    title={`Visit ${uni.name} official website`}
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    Official
                  </a>
                )}
                {uni.slug && (
                  <Link
                    href={`/universities/${uni.slug}`}
                    className="uni-profile-link"
                    title={`View ${uni.name} profile on SkillBridge SL`}
                  >
                    Profile
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="section-footnote">
        * University intakes, minimum qualifying Z-scores, and entry prerequisites are subject to annual gazettes by the University Grants Commission (UGC) of Sri Lanka and university governing senates.
      </p>
    </section>
  );
}


"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
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
  const locale = useLocale();
  const isSi = locale === "si";
  const shortTitle = careerTitle.split("/")[0].trim();

  return (
    <section id="universities" className="section-block career-universities-section">
      <SectionHeading
        eyebrow={isSi ? "පිළිගත් උසස් අධ්‍යාපන ආයතන සහ උපාධි" : "DEGREE PROGRAMMES & INSTITUTIONS"}
        title={isSi ? `${shortTitle} සඳහා ශ්‍රී ලංකාවේ උපාධි පාඨමාලා` : `Where to Study to Become a ${shortTitle}`}
        description={
          isSi
            ? "ශ්‍රී ලංකාවේ රජයේ විශ්වවිද්‍යාල, උසස් අධ්‍යාපන අමාත්‍යාංශය අනුමත පෞද්ගලික ආයතන සහ වෘත්තීය පීඨ මගින් පිරිනමන උපාධි."
            : "State universities, accredited non-state institutions, and professional faculties in Sri Lanka offering verified degree pathways."
        }
      />

      <div className="grid-3 career-uni-grid">
        {universities.map((uni, idx) => (
          <article className="career-uni-card glass-panel" key={idx}>
            <div className="uni-card-header">
              <span className="uni-icon-bubble">
                <GraduationCap size={18} aria-hidden="true" />
              </span>
              <div className="uni-badge-group">
                <span className="uni-type-tag">
                  {isSi && uni.type.toLowerCase().includes("state")
                    ? "රජයේ විශ්වවිද්‍යාලය"
                    : isSi && uni.type.toLowerCase().includes("private")
                    ? "පෞද්ගලික / Non-State"
                    : uni.type}
                </span>
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
                    {isSi ? "නිල වෙබ් අඩවිය" : "Official"}
                  </a>
                )}
                {uni.slug && (
                  <Link
                    href={`/universities/${uni.slug}`}
                    className="uni-profile-link"
                    title={`View ${uni.name} profile on SkillBridge SL`}
                  >
                    {isSi ? "විස්තර" : "Profile"}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="section-footnote">
        {isSi
          ? "* වාර්ෂික විශ්වවිද්‍යාල බඳවා ගැනීම්, අවම Z-score කඩඉම් ලකුණු සහ ප්‍රවේශ සුදුසුකම් ශ්‍රී ලංකා විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාව (UGC) සහ විශ්වවිද්‍යාල පාලක සභා විසින් ගැසට් මගින් ප්‍රකාශයට පත් කරනු ලැබේ."
          : "* University intakes, minimum qualifying Z-scores, and entry prerequisites are subject to annual gazettes by the University Grants Commission (UGC) of Sri Lanka and university governing senates."}
      </p>
    </section>
  );
}


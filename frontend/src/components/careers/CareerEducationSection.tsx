import { BookOpen, GraduationCap, CheckCircle2, AlertTriangle, ArrowRightCircle, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerEducation } from "@/lib/data/careerDetails";

interface CareerEducationSectionProps {
  education: CareerEducation;
  careerTitle: string;
}

export function CareerEducationSection({ education, careerTitle }: CareerEducationSectionProps) {
  return (
    <section id="education" className="section-block career-education-section">
      <SectionHeading
        eyebrow="EDUCATIONAL ELIGIBILITY & CRITERIA"
        title={`O/L & A/L Requirements to Enter ${careerTitle.split("/")[0].trim()}`}
        description="Official Sri Lankan admission criteria, required subject streams, Z-score reality, and accessible alternative pathways."
      />

      <div className="grid-2 education-cards-grid">
        {/* Core Eligibility Requirements Card */}
        <div className="education-card glass-panel">
          <div className="education-card-header">
            <span className="education-icon-bubble">
              <BookOpen size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>School Qualifications (O/L & A/L)</h3>
              <p>Minimum prerequisites recognized by the UGC and governing councils</p>
            </div>
          </div>

          <div className="education-req-block">
            <div className="req-sub-block">
              <div className="req-label-row">
                <span className="req-tag">G.C.E. O/L</span>
                <strong>Ordinary Level Requirements</strong>
              </div>
              <p className="req-body">{education.olRequirements}</p>
            </div>

            <div className="req-sub-block">
              <div className="req-label-row">
                <span className="req-tag">G.C.E. A/L</span>
                <strong>Advanced Level Stream & Subjects</strong>
              </div>
              <p className="req-body">{education.alStream}</p>
            </div>

            <div className="req-sub-block highlight-zscore">
              <div className="req-label-row">
                <Target size={16} className="zscore-icon" aria-hidden="true" />
                <strong>State University Cutoff / Z-Score Benchmark</strong>
              </div>
              <p className="zscore-body">{education.zScoreRange}</p>
            </div>

            {education.entranceExams && (
              <div className="req-sub-block">
                <div className="req-label-row">
                  <span className="req-tag">Entrance Exams</span>
                  <strong>Aptitude Tests & Additional Screenings</strong>
                </div>
                <p className="req-body">{education.entranceExams}</p>
              </div>
            )}
          </div>
        </div>

        {/* Alternative Pathways & Competitive Reality */}
        <div className="education-card glass-panel">
          <div className="education-card-header">
            <span className="education-icon-bubble">
              <GraduationCap size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>Alternative Pathways & Realities</h3>
              <p>Routes available if you do not meet state university cutoffs</p>
            </div>
          </div>

          <div className="alternative-pathways-block">
            <h4>
              <ArrowRightCircle size={15} aria-hidden="true" /> Recognized Alternative Routes:
            </h4>
            <ul className="alternative-list">
              {education.alternativePathways.map((pathway, idx) => (
                <li key={idx} className="alternative-item">
                  <CheckCircle2 size={15} className="alt-icon" aria-hidden="true" />
                  <span>{pathway}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="competition-warning-box">
            <div className="warning-title">
              <AlertTriangle size={15} aria-hidden="true" />
              <strong>Admission Reality & District Quota Note</strong>
            </div>
            <p className="warning-body">{education.competitionNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

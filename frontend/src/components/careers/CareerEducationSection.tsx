"use client";

import { useLocale } from "next-intl";
import { BookOpen, GraduationCap, CheckCircle2, AlertTriangle, ArrowRightCircle, Target } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerEducation } from "@/lib/data/careerDetails";

interface CareerEducationSectionProps {
  education: CareerEducation;
  careerTitle: string;
}

export function CareerEducationSection({ education, careerTitle }: CareerEducationSectionProps) {
  const locale = useLocale();
  const isSi = locale === "si";
  const shortTitle = careerTitle.split("/")[0].trim();

  return (
    <section id="education" className="section-block career-education-section">
      <SectionHeading
        eyebrow={isSi ? "අධ්‍යාපන සුදුසුකම් සහ මිනුම්දඬු" : "EDUCATIONAL ELIGIBILITY & CRITERIA"}
        title={isSi ? `${shortTitle} සඳහා අවශ්‍ය O/L සහ A/L සුදුසුකම්` : `O/L & A/L Requirements to Enter ${shortTitle}`}
        description={
          isSi
            ? "ශ්‍රී ලංකාවේ විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාව (UGC) සහ වෘත්තීය ආයතන මගින් පිළිගත් නිල සුදුසුකම්, Z-score කඩඉම් සහ විකල්ප මාර්ග."
            : "Official Sri Lankan admission criteria, required subject streams, Z-score reality, and accessible alternative pathways."
        }
      />

      <div className="grid-2 education-cards-grid">
        {/* Core Eligibility Requirements Card */}
        <div className="education-card glass-panel">
          <div className="education-card-header">
            <span className="education-icon-bubble">
              <BookOpen size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>{isSi ? "පාසල් මට්ටමේ සුදුසුකම් (O/L & A/L)" : "School Qualifications (O/L & A/L)"}</h3>
              <p>{isSi ? "UGC සහ වෘත්තීය ආයතන විසින් පිළිගත් අවම මට්ටම" : "Minimum prerequisites recognized by the UGC and governing councils"}</p>
            </div>
          </div>

          <div className="education-req-block">
            <div className="req-sub-block">
              <div className="req-label-row">
                <span className="req-tag">G.C.E. O/L</span>
                <strong>{isSi ? "සාමාන්‍ය පෙළ (O/L) අවශ්‍යතා" : "Ordinary Level Requirements"}</strong>
              </div>
              <p className="req-body">{education.olRequirements}</p>
            </div>

            <div className="req-sub-block">
              <div className="req-label-row">
                <span className="req-tag">G.C.E. A/L</span>
                <strong>{isSi ? "උසස් පෙළ (A/L) විෂය ධාරාව සහ අවශ්‍ය විෂයයන්" : "Advanced Level Stream & Subjects"}</strong>
              </div>
              <p className="req-body">{education.alStream}</p>
            </div>

            <div className="req-sub-block highlight-zscore">
              <div className="req-label-row">
                <Target size={16} className="zscore-icon" aria-hidden="true" />
                <strong>{isSi ? "රජයේ විශ්වවිද්‍යාල Z-Score කඩඉම් ලකුණු" : "State University Cutoff / Z-Score Benchmark"}</strong>
              </div>
              <p className="zscore-body">{education.zScoreRange}</p>
            </div>

            {education.entranceExams && (
              <div className="req-sub-block">
                <div className="req-label-row">
                  <span className="req-tag">{isSi ? "ප්‍රවේශ විභාග" : "Entrance Exams"}</span>
                  <strong>{isSi ? "කුසලතා පරීක්ෂණ සහ සම්මුඛ පරීක්ෂණ" : "Aptitude Tests & Additional Screenings"}</strong>
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
              <h3>{isSi ? "විකල්ප අධ්‍යාපන මාර්ග සහ විසඳුම්" : "Alternative Pathways & Realities"}</h3>
              <p>{isSi ? "රජයේ විශ්වවිද්‍යාල Z-score කඩඉම නොලැබුණහොත් යා හැකි මාර්ග" : "Routes available if you do not meet state university cutoffs"}</p>
            </div>
          </div>

          <div className="alternative-pathways-block">
            <h4>
              <ArrowRightCircle size={15} aria-hidden="true" /> {isSi ? "පිළිගත් විකල්ප මාර්ග:" : "Recognized Alternative Routes:"}
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
              <strong>{isSi ? "තරඟකාරිත්වය සහ දිස්ත්‍රික් Quota සටහන" : "Admission Reality & District Quota Note"}</strong>
            </div>
            <p className="warning-body">{education.competitionNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLocale } from "next-intl";
import { Compass, CheckCircle2, Building2, SunMedium, Trophy, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerDetail } from "@/lib/data/careerDetails";

interface CareerOverviewSectionProps {
  career: CareerDetail;
}

export function CareerOverviewSection({ career }: CareerOverviewSectionProps) {
  const locale = useLocale();
  const isSi = locale === "si";
  const { roleOverview } = career;

  const displayTitle = isSi && career.sinhalaTitle ? career.sinhalaTitle : career.title.split("/")[0].trim();

  return (
    <section id="overview" className="section-block career-overview-section">
      <SectionHeading
        eyebrow={isSi ? "වෘත්තීය පැතිකඩ සහ යථාර්ථය" : "PROFESSIONAL PROFILE & REALITY"}
        title={isSi ? `${displayTitle} කෙනෙක් ඇත්තටම කරන්නේ මොනවාද?` : `What Does a ${displayTitle} Actually Do?`}
        description={
          isSi
            ? "දෛනික රාජකාරි, සැබෑ සමාජීය මෙහෙවර, සේවා පරිසරය සහ ශ්‍රී ලංකාවේ සාර්ථක වෘත්තියක් ගොඩනගා ගන්නා ආකාරය තේරුම් ගන්න."
            : "Understand the day-to-day responsibilities, real societal impact, workplace environments, and how professionals build successful careers in Sri Lanka."
        }
      />

      <div className="career-overview-grid">
        {/* Core Pillars: What & Why */}
        <div className="overview-main-col">
          <article className="overview-card glass-panel">
            <div className="overview-card-header">
              <span className="overview-icon-bubble">
                <Compass size={18} aria-hidden="true" />
              </span>
              <h3>{isSi ? "වෘත්තියේ කාර්යභාරය සහ දෛනික යථාර්ථය" : "The Role & Daily Reality"}</h3>
            </div>
            <p className="overview-body-text">{roleOverview.whatTheyDo}</p>
          </article>

          <article className="overview-card glass-panel">
            <div className="overview-card-header">
              <span className="overview-icon-bubble">
                <Trophy size={18} aria-hidden="true" />
              </span>
              <h3>{isSi ? "ශ්‍රී ලංකාවට මේ වෘත්තිය වැදගත් වන්නේ ඇයි?" : "Why This Career Matters to Sri Lanka"}</h3>
            </div>
            <p className="overview-body-text">{roleOverview.whyItMatters}</p>
          </article>

          {/* Daily Responsibilities Checklist */}
          <article className="overview-card glass-panel">
            <div className="overview-card-header">
              <span className="overview-icon-bubble">
                <CheckCircle2 size={18} aria-hidden="true" />
              </span>
              <h3>{isSi ? "ප්‍රධාන වගකීම් සහ දෛනික රාජකාරි" : "Key Responsibilities on the Job"}</h3>
            </div>
            <ul className="overview-checklist">
              {roleOverview.dailyResponsibilities.map((item, idx) => (
                <li key={idx} className="overview-check-item">
                  <CheckCircle2 size={16} className="check-bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Sidebar: Work Environment, Lifestyle, Employers, Success Story */}
        <aside className="overview-side-col">
          {/* Work Environment & Lifestyle */}
          <div className="overview-side-card glass-panel">
            <div className="side-card-header">
              <Building2 size={16} aria-hidden="true" />
              <h4>{isSi ? "සේවා පරිසරය සහ සේවා ස්ථානය" : "Workplace Environment"}</h4>
            </div>
            <p className="side-card-body">{roleOverview.workEnvironment}</p>

            <div className="side-card-divider" />

            <div className="side-card-header">
              <SunMedium size={16} aria-hidden="true" />
              <h4>{isSi ? "වැඩ කරන වේලාවන් සහ ජීවන සමබරතාව" : "Hours & Lifestyle Balance"}</h4>
            </div>
            <p className="side-card-body">{roleOverview.lifestyleAndBalance}</p>
          </div>

          {/* Typical Employers */}
          <div className="overview-side-card glass-panel">
            <div className="side-card-header">
              <Briefcase size={16} aria-hidden="true" />
              <h4>{isSi ? "ශ්‍රී ලංකාවේ ප්‍රමුඛ සේවා යෝජකයින්" : "Key Employers in Sri Lanka"}</h4>
            </div>
            <div className="employer-tags-list">
              {roleOverview.typicalEmployers.map((emp, idx) => (
                <span key={idx} className="employer-tag-pill">
                  {emp}
                </span>
              ))}
            </div>
          </div>

          {/* Realistic Sri Lankan Success Story */}
          <div className="overview-success-story-card glass-panel">
            <div className="success-story-badge">
              <Trophy size={13} aria-hidden="true" />
              {isSi ? "ශ්‍රී ලාංකීය සාර්ථකත්වයේ මග" : "Sri Lankan Success Journey"}
            </div>
            <p className="success-story-text">&ldquo;{roleOverview.sriLankanSuccessStory}&rdquo;</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

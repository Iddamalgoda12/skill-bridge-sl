import { Compass, CheckCircle2, Building2, SunMedium, Trophy, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerDetail } from "@/lib/data/careerDetails";

interface CareerOverviewSectionProps {
  career: CareerDetail;
}

export function CareerOverviewSection({ career }: CareerOverviewSectionProps) {
  const { roleOverview } = career;

  return (
    <section id="overview" className="section-block career-overview-section">
      <SectionHeading
        eyebrow="PROFESSIONAL PROFILE & REALITY"
        title={`What Does a ${career.title.split("/")[0].trim()} Actually Do?`}
        description="Understand the day-to-day responsibilities, real societal impact, workplace environments, and how professionals build successful careers in Sri Lanka."
      />

      <div className="career-overview-grid">
        {/* Core Pillars: What & Why */}
        <div className="overview-main-col">
          <article className="overview-card glass-panel">
            <div className="overview-card-header">
              <span className="overview-icon-bubble">
                <Compass size={18} aria-hidden="true" />
              </span>
              <h3>The Role & Daily Reality</h3>
            </div>
            <p className="overview-body-text">{roleOverview.whatTheyDo}</p>
          </article>

          <article className="overview-card glass-panel">
            <div className="overview-card-header">
              <span className="overview-icon-bubble">
                <Trophy size={18} aria-hidden="true" />
              </span>
              <h3>Why This Career Matters to Sri Lanka</h3>
            </div>
            <p className="overview-body-text">{roleOverview.whyItMatters}</p>
          </article>

          {/* Daily Responsibilities Checklist */}
          <article className="overview-card glass-panel">
            <div className="overview-card-header">
              <span className="overview-icon-bubble">
                <CheckCircle2 size={18} aria-hidden="true" />
              </span>
              <h3>Key Responsibilities on the Job</h3>
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
              <h4>Workplace Environment</h4>
            </div>
            <p className="side-card-body">{roleOverview.workEnvironment}</p>

            <div className="side-card-divider" />

            <div className="side-card-header">
              <SunMedium size={16} aria-hidden="true" />
              <h4>Hours & Lifestyle Balance</h4>
            </div>
            <p className="side-card-body">{roleOverview.lifestyleAndBalance}</p>
          </div>

          {/* Typical Employers */}
          <div className="overview-side-card glass-panel">
            <div className="side-card-header">
              <Briefcase size={16} aria-hidden="true" />
              <h4>Key Employers in Sri Lanka</h4>
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
              Sri Lankan Success Journey
            </div>
            <p className="success-story-text">&ldquo;{roleOverview.sriLankanSuccessStory}&rdquo;</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

import { DollarSign, Building, Globe2, Sparkles, AlertCircle, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerSalary } from "@/lib/data/careerDetails";

interface CareerSalaryCardProps {
  salary: CareerSalary;
  careerTitle: string;
}

export function CareerSalaryCard({ salary, careerTitle }: CareerSalaryCardProps) {
  const tiers = [
    {
      level: "Entry-Level",
      experience: "0 - 2 Years",
      range: salary.entryLevel.label,
      percent: 30,
      badgeClass: "badge-entry",
    },
    {
      level: "Mid-Level",
      experience: "3 - 7 Years",
      range: salary.midLevel.label,
      percent: 65,
      badgeClass: "badge-mid",
    },
    {
      level: "Senior / Leadership",
      experience: "8+ Years",
      range: salary.seniorLevel.label,
      percent: 100,
      badgeClass: "badge-senior",
    },
  ];

  return (
    <section id="salary" className="section-block career-salary-section">
      <SectionHeading
        eyebrow="SRI LANKAN JOB MARKET & REMUNERATION"
        title={`Estimated Salary & Earning Potential for ${careerTitle.split("/")[0].trim()}`}
        description="Authentic benchmarks based on official government gazettes, salary surveys, and industry collective agreements in Sri Lanka."
      />

      {/* 3 Salary Tier Visual Cards */}
      <div className="grid-3 salary-tier-grid">
        {tiers.map((t, idx) => (
          <article className="salary-tier-card glass-panel" key={idx}>
            <div className="salary-tier-header">
              <span className={`salary-tier-badge ${t.badgeClass}`}>{t.level}</span>
              <span className="salary-tier-exp">{t.experience}</span>
            </div>
            <div className="salary-tier-amount">
              <h3>{t.range}</h3>
              <p className="salary-tier-sub">Estimated Monthly Earnings</p>
            </div>
            <div className="salary-progress-wrap">
              <div
                className="salary-progress-bar"
                style={{ width: `${t.percent}%` }}
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Breakdown: Government vs Private, Overseas, Factors */}
      <div className="grid-2 salary-details-grid">
        {/* Government vs Private Comparison */}
        <div className="salary-detail-card glass-panel">
          <div className="salary-detail-header">
            <span className="salary-icon-bubble">
              <Building size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>Government vs. Private Sector</h3>
              <p>How compensation models differ across sectors in Sri Lanka</p>
            </div>
          </div>
          <div className="sector-comparison-body">
            <div className="sector-box gov-sector-box">
              <span className="sector-title">State / Public Sector:</span>
              <p>{salary.govSector}</p>
            </div>
            <div className="sector-box pvt-sector-box">
              <span className="sector-title">Private Enterprise / Conglomerates:</span>
              <p>{salary.privateSector}</p>
            </div>
          </div>
        </div>

        {/* Global, Remote & Freelancing Potential */}
        <div className="salary-detail-card glass-panel">
          <div className="salary-detail-header">
            <span className="salary-icon-bubble">
              <Globe2 size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>Global, Remote & Overseas Demand</h3>
              <p>Opportunities beyond the local Sri Lankan market</p>
            </div>
          </div>
          <p className="overseas-body-text">{salary.overseasOpportunities}</p>

          <div className="salary-factors-block">
            <h4 className="factors-title">
              <Sparkles size={14} aria-hidden="true" /> Key Factors That Increase Earnings:
            </h4>
            <ul className="factors-list">
              {salary.factors.map((factor, idx) => (
                <li key={idx} className="factor-item">
                  <TrendingUp size={13} className="factor-icon" aria-hidden="true" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Source Citation & Disclaimer */}
      <div className="salary-disclaimer-card glass-panel">
        <AlertCircle size={16} className="disclaimer-icon" aria-hidden="true" />
        <div className="disclaimer-text">
          <p>
            <strong>Data Source & Methodology:</strong> Verified from {salary.source}. Last verified in{" "}
            <span className="disclaimer-date">{salary.lastUpdated}</span>.
          </p>
          <p className="disclaimer-sub">
            * Figures are market estimates reflecting typical ranges. Actual earnings depend on qualifications, experience, location, individual skill, and organizational scale. SkillBridge SL does not guarantee employment or specific salary figures.
          </p>
        </div>
      </div>
    </section>
  );
}

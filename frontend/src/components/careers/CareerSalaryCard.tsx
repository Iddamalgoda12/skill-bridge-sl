"use client";

import { useLocale } from "next-intl";
import { DollarSign, Building, Globe2, Sparkles, AlertCircle, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerSalary } from "@/lib/data/careerDetails";

interface CareerSalaryCardProps {
  salary: CareerSalary;
  careerTitle: string;
}

export function CareerSalaryCard({ salary, careerTitle }: CareerSalaryCardProps) {
  const locale = useLocale();
  const isSi = locale === "si";

  const tiers = [
    {
      level: isSi ? "ආරම්භක මට්ටම" : "Entry-Level",
      experience: isSi ? "වසර 0 - 2 අත්දැකීම්" : "0 - 2 Years",
      range: salary.entryLevel.label,
      percent: 30,
      badgeClass: "badge-entry",
    },
    {
      level: isSi ? "මධ්‍යම මට්ටම" : "Mid-Level",
      experience: isSi ? "වසර 3 - 7 අත්දැකීම්" : "3 - 7 Years",
      range: salary.midLevel.label,
      percent: 65,
      badgeClass: "badge-mid",
    },
    {
      level: isSi ? "ජ්‍යෙෂ්ඨ / කළමනාකාරී" : "Senior / Leadership",
      experience: isSi ? "වසර 8+ අත්දැකීම්" : "8+ Years",
      range: salary.seniorLevel.label,
      percent: 100,
      badgeClass: "badge-senior",
    },
  ];

  const shortTitle = careerTitle.split("/")[0].trim();

  return (
    <section id="salary" className="section-block career-salary-section">
      <SectionHeading
        eyebrow={isSi ? "ශ්‍රී ලංකාවේ රැකියා වෙළඳපොළ සහ වැටුප්" : "SRI LANKAN JOB MARKET & REMUNERATION"}
        title={isSi ? `${shortTitle} සඳහා ඇස්තමේන්තුගත වැටුප් මට්ටම්` : `Estimated Salary & Earning Potential for ${shortTitle}`}
        description={
          isSi
            ? "රාජ්‍ය ගැසට් පත්‍ර, වැටුප් සමීක්ෂණ සහ ශ්‍රී ලංකාවේ වෘත්තීය ආයතන දත්ත මත පදනම් වූ ඇස්තමේන්තු."
            : "Authentic benchmarks based on official government gazettes, salary surveys, and industry collective agreements in Sri Lanka."
        }
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
              <p className="salary-tier-sub">{isSi ? "ඇස්තමේන්තුගත මාසික ආදායම" : "Estimated Monthly Earnings"}</p>
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
              <h3>{isSi ? "රාජ්‍ය සේවය සහ පෞද්ගලික අංශය" : "Government vs. Private Sector"}</h3>
              <p>{isSi ? "ශ්‍රී ලංකාවේ අංශ අතර වැටුප් සහ ප්‍රතිලාභ වෙනස් වන ආකාරය" : "How compensation models differ across sectors in Sri Lanka"}</p>
            </div>
          </div>
          <div className="sector-comparison-body">
            <div className="sector-box gov-sector-box">
              <span className="sector-title">{isSi ? "රාජ්‍ය / රජයේ අංශය:" : "State / Public Sector:"}</span>
              <p>{salary.govSector}</p>
            </div>
            <div className="sector-box pvt-sector-box">
              <span className="sector-title">{isSi ? "පෞද්ගලික අංශය / සමාගම්:" : "Private Enterprise / Conglomerates:"}</span>
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
              <h3>{isSi ? "විදේශ රැකියා සහ Remote අවස්ථා" : "Global, Remote & Overseas Demand"}</h3>
              <p>{isSi ? "දේශීය වෙළඳපොළෙන් ඔබ්බට ඇති ජාත්‍යන්තර අවස්ථා" : "Opportunities beyond the local Sri Lankan market"}</p>
            </div>
          </div>
          <p className="overseas-body-text">{salary.overseasOpportunities}</p>

          <div className="salary-factors-block">
            <h4 className="factors-title">
              <Sparkles size={14} aria-hidden="true" /> {isSi ? "වැටුප වැඩි වීමට බලපාන ප්‍රධාන සාධක:" : "Key Factors That Increase Earnings:"}
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
            <strong>{isSi ? "දත්ත මූලාශ්‍ර සහ ක්‍රමවේදය:" : "Data Source & Methodology:"}</strong>{" "}
            {isSi ? `මූලාශ්‍රය: ${salary.source}.` : `Verified from ${salary.source}.`}{" "}
            {isSi ? "යාවත්කාලීන කළේ: " : "Last verified in "}
            <span className="disclaimer-date">{salary.lastUpdated}</span>.
          </p>
          <p className="disclaimer-sub">
            {isSi
              ? "* මෙහි දැක්වෙන සංඛ්‍යාලේඛන ශ්‍රී ලංකාවේ සාමාන්‍ය වෙළඳපොළ ඇස්තමේන්තු වේ. සත්‍ය වැටුප පුද්ගල දක්ෂතාව, සුදුසුකම්, අත්දැකීම් සහ ආයතනය මත වෙනස් විය හැක. SkillBridge SL කිසිදු නිශ්චිත රැකියාවක් හෝ ආදායමක් සහතික නොකරයි."
              : "* Figures are market estimates reflecting typical ranges. Actual earnings depend on qualifications, experience, location, individual skill, and organizational scale. SkillBridge SL does not guarantee employment or specific salary figures."}
          </p>
        </div>
      </div>
    </section>
  );
}

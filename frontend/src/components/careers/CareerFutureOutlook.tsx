"use client";

import { useLocale } from "next-intl";
import { TrendingUp, Bot, Sparkles, Globe2, AlertTriangle } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerFutureOutlook as FutureOutlookType } from "@/lib/data/careerDetails";

interface CareerFutureOutlookProps {
  futureOutlook: FutureOutlookType;
  careerTitle: string;
}

export function CareerFutureOutlook({
  futureOutlook,
  careerTitle,
}: CareerFutureOutlookProps) {
  const locale = useLocale();
  const isSi = locale === "si";
  const shortTitle = careerTitle.split("/")[0].trim();

  return (
    <section id="future" className="section-block career-future-section">
      <SectionHeading
        eyebrow={isSi ? "ඉදිරි වසර 5–10 තුළ කර්මාන්තයේ පරිණාමය" : "5–10 YEAR INDUSTRY EVOLUTION"}
        title={isSi ? `${shortTitle} සඳහා අනාගත රැකියා ප්‍රවණතා සහ AI බලපෑම` : `Future Outlook & AI Impact on ${shortTitle}`}
        description={
          isSi
            ? "කෘත්‍රිම බුද්ධිය (AI), ස්වයංක්‍රීයකරණය, නවීන විශේෂඥ අංශ සහ ශ්‍රී ලාංකිකයින්ට හිමිවන ජාත්‍යන්තර අවස්ථා පිළිබඳ පුරෝකථනය."
            : "Anticipate technological disruption, artificial intelligence adoption, emerging high-demand specializations, and global career opportunities."
        }
      />

      <div className="grid-2 future-cards-grid">
        {/* Market Trends & AI Disruption */}
        <div className="future-card glass-panel">
          <div className="future-card-header">
            <span className="future-icon-bubble">
              <TrendingUp size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>{isSi ? "ඉදිරි වසර 5–10 තුළ ඉල්ලුමේ ප්‍රවණතාව" : "5–10 Year Industry Trend"}</h3>
              <p>{isSi ? "ශ්‍රී ලංකාවේ සහ ගෝලීය වශයෙන් මෙම ක්ෂේත්‍රය ගමන් කරන දිශාව" : "Where this profession is heading in Sri Lanka and globally"}</p>
            </div>
          </div>
          <p className="future-body-text">{futureOutlook.trendSummary}</p>

          <div className="ai-impact-box">
            <div className="ai-box-header">
              <Bot size={16} aria-hidden="true" />
              <strong>{isSi ? "AI සහ තාක්ෂණික ස්වයංක්‍රීයකරණයේ බලපෑම" : "AI & Technological Disruption"}</strong>
            </div>
            <p className="ai-box-body">{futureOutlook.aiImpact}</p>
          </div>
        </div>

        {/* Emerging Specializations & Global Scope */}
        <div className="future-card glass-panel">
          <div className="future-card-header">
            <span className="future-icon-bubble">
              <Sparkles size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>{isSi ? "වේගයෙන් වර්ධනය වන ඉහළ ඉල්ලුමක් ඇති අංශ" : "Emerging High-Demand Specializations"}</h3>
              <p>{isSi ? "ඉහළම වැටුප් හිමිවන විශේෂඥ ක්ෂේත්‍ර" : "Highest-paid niche areas to specialize in"}</p>
            </div>
          </div>

          <div className="specializations-list">
            {futureOutlook.growingSpecializations.map((spec, idx) => (
              <div key={idx} className="spec-item">
                <span className="spec-dot">•</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div className="global-scope-box">
            <div className="global-box-header">
              <Globe2 size={16} aria-hidden="true" />
              <strong>{isSi ? "ජාත්‍යන්තර රැකියා සහ විදේශ ඉල්ලුම" : "Global Demand & Portability"}</strong>
            </div>
            <p className="global-box-body">{futureOutlook.globalDemand}</p>
          </div>

          {futureOutlook.challenges && futureOutlook.challenges.length > 0 && (
            <div className="future-challenges-box">
              <div className="challenges-box-header">
                <AlertTriangle size={15} aria-hidden="true" />
                <strong>{isSi ? "අනාගත අභියෝග සහ නවීන කුසලතා සංවර්ධනය" : "Future Challenges & Continuous Upskilling"}</strong>
              </div>
              <ul className="future-chal-list">
                {futureOutlook.challenges.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


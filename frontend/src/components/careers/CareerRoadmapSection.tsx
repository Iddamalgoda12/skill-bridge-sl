"use client";

import { useLocale } from "next-intl";
import { Route, CheckCircle, Flag, Clock } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerRoadmapStep } from "@/lib/data/careerDetails";

interface CareerRoadmapSectionProps {
  roadmap: CareerRoadmapStep[];
  careerTitle: string;
}

export function CareerRoadmapSection({ roadmap, careerTitle }: CareerRoadmapSectionProps) {
  const locale = useLocale();
  const isSi = locale === "si";
  const shortTitle = careerTitle.split("/")[0].trim();

  return (
    <section id="roadmap" className="section-block career-roadmap-section">
      <SectionHeading
        eyebrow={isSi ? "පියවරෙන් පියවර වෘත්තීය ගමන් මග" : "STEP-BY-STEP PROGRESSION"}
        title={isSi ? `${shortTitle} කෙනෙක් වීමේ නිල මාර්ග සිතියම` : `Your Roadmap to Becoming a ${shortTitle}`}
        description={
          isSi
            ? "පාසල් විභාග වල සිට ශ්‍රී ලංකාවේ පිළිගත් ජ්‍යෙෂ්ඨ වෘත්තීය නායකත්වය දක්වා වූ පියවරෙන් පියවර සැලසුම."
            : "A structured step-by-step journey from school examinations to senior professional leadership in Sri Lanka."
        }
      />

      <div className="roadmap-timeline-wrapper">
        <div className="roadmap-steps-list">
          {roadmap.map((step, idx) => (
            <div className="roadmap-step-item" key={idx}>
              <div className="roadmap-step-connector">
                <div className="roadmap-node-circle">
                  <span>{step.step || idx + 1}</span>
                </div>
                {idx < roadmap.length - 1 && <div className="roadmap-node-line" />}
              </div>

              <div className="roadmap-step-content glass-panel">
                <div className="roadmap-step-header">
                  <div className="roadmap-title-wrap">
                    <h3>{step.title}</h3>
                    {step.milestone && (
                      <span className="roadmap-milestone-pill">
                        <Flag size={11} aria-hidden="true" />
                        {step.milestone}
                      </span>
                    )}
                  </div>
                  <span className="roadmap-timeframe">
                    <Clock size={12} aria-hidden="true" />
                    {step.timeline}
                  </span>
                </div>
                <p className="roadmap-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


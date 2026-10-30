"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Brain, Wrench, HeartHandshake, BookOpen, Sparkles, CheckCircle2, AlertCircle, HelpCircle, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { CareerSkills, CareerSuitability } from "@/lib/data/careerDetails";

interface CareerSkillsSuitabilityProps {
  skills: CareerSkills;
  suitability: CareerSuitability;
  careerTitle: string;
}

export function CareerSkillsSuitability({
  skills,
  suitability,
  careerTitle,
}: CareerSkillsSuitabilityProps) {
  const locale = useLocale();
  const isSi = locale === "si";
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>({});

  const toggleCheck = (index: number) => {
    setCheckedAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const totalQuestions = suitability.selfAssessmentQuestions.length;
  const answeredCount = Object.values(checkedAnswers).filter(Boolean).length;
  const scorePercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  let assessmentFeedback = isSi
    ? "ඔබේ කැමැත්තට සහ පෞරුෂයට ගැළපෙන ප්‍රකාශ තෝරන්න."
    : "Select the statements that describe your interests and traits.";
  if (answeredCount === totalQuestions) {
    assessmentFeedback = isSi
      ? "🌟 විශිෂ්ට ගැළපීමක්! ඔබගේ සහජ කුසලතා සහ පෞරුෂය මෙම වෘත්තියට 100%ක් මනාව ගැළපේ."
      : "🌟 Outstanding Match! Your natural interests and personality align exceptionally well with this career.";
  } else if (answeredCount >= Math.ceil(totalQuestions / 2)) {
    assessmentFeedback = isSi
      ? "👍 ඉතා ඉහළ ගැළපීමක්! ඔබට මෙම ක්ෂේත්‍රයේ විශිෂ්ට සාර්ථකත්වයක් අත්පත් කරගත හැක. තාක්ෂණික කුසලතා වැඩිදියුණු කරගන්න."
      : "👍 Promising Match! You demonstrate strong potential. Developing key technical skills will make you a great fit.";
  } else if (answeredCount > 0) {
    assessmentFeedback = isSi
      ? "💡 හොඳ ආරම්භයක්! මෙම ක්ෂේත්‍රයේ දෛනික රාජකාරි සහ විකල්ප අංශ තවදුරටත් අධ්‍යයනය කර බලන්න."
      : "💡 Emerging Potential! Review the day-to-day realities to explore whether this aligns with your long-term passion.";
  }

  const shortTitle = careerTitle.split("/")[0].trim();

  return (
    <section id="skills" className="section-block career-skills-section">
      <SectionHeading
        eyebrow={isSi ? "කුසලතා සහ පුද්ගල ගැළපීම" : "CAPABILITIES & PERSONAL SUITABILITY"}
        title={isSi ? `${shortTitle} සඳහා අවශ්‍ය කුසලතා සහ ඔබගේ ගැළපීම` : `Skills & Personal Fit for a ${shortTitle}`}
        description={
          isSi
            ? "අවශ්‍ය තාක්ෂණික කුසලතා, ප්‍රධාන මෘදු කුසලතා (Soft Skills) සහ ඔබ මෙම වෘත්තියට කෙතරම් ගැළපේදැයි දැනගැනීමට ස්වයං ඇගයීම."
            : "Master essential technical capabilities, cultivate high-value soft skills, and test your personal suitability with our interactive assessment."
        }
      />

      {/* Grid: Technical vs Soft Skills */}
      <div className="grid-2 skills-cards-grid">
        {/* Technical Skills */}
        <div className="skills-card glass-panel">
          <div className="skills-card-header">
            <span className="skills-icon-bubble">
              <Wrench size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>{isSi ? "අත්‍යවශ්‍ය තාක්ෂණික කුසලතා" : "Essential Technical Skills"}</h3>
              <p>{isSi ? "සේවා ස්ථානයේ සාර්ථක වීමට ප්‍රගුණ කළ යුතු හැකියාවන්" : "Core competencies required in the workplace"}</p>
            </div>
          </div>
          <div className="skill-items-list">
            {skills.technical.map((item, idx) => (
              <div key={idx} className="skill-item-row">
                <span className="skill-item-name">{item.name}</span>
                <p className="skill-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills-card glass-panel">
          <div className="skills-card-header">
            <span className="skills-icon-bubble">
              <HeartHandshake size={18} aria-hidden="true" />
            </span>
            <div>
              <h3>{isSi ? "වැදගත් මෘදු කුසලතා (Soft Skills)" : "Critical Soft Skills"}</h3>
              <p>{isSi ? "සන්නිවේදනය, නායකත්වය සහ ගැටලු නිරාකරණය" : "Communication, leadership, and emotional traits"}</p>
            </div>
          </div>
          <div className="skill-items-list">
            {skills.soft.map((item, idx) => (
              <div key={idx} className="skill-item-row">
                <span className="skill-item-name">{item.name}</span>
                <p className="skill-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* School Subjects & Recommended Projects */}
      <div className="grid-2 subjects-projects-grid">
        <div className="sub-card glass-panel">
          <div className="sub-card-header">
            <BookOpen size={16} aria-hidden="true" />
            <h4>{isSi ? "පාසලේදී වැඩි අවධානයක් දිය යුතු විෂයයන්" : "Important School Subjects"}</h4>
          </div>
          <div className="subjects-tags-row">
            {skills.importantSchoolSubjects.map((sub, idx) => (
              <span key={idx} className="subject-tag">
                {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="sub-card glass-panel">
          <div className="sub-card-header">
            <Sparkles size={16} aria-hidden="true" />
            <h4>{isSi ? "නිර්දේශිත ප්‍රායෝගික ව්‍යාපෘති & ක්‍රියාකාරකම්" : "Recommended Extracurriculars & Projects"}</h4>
          </div>
          <ul className="projects-list">
            {skills.recommendedProjects.map((proj, idx) => (
              <li key={idx} className="project-item">
                <CheckCircle2 size={14} className="proj-icon" aria-hidden="true" />
                <span>{proj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Suitability & Challenges Grid */}
      <div className="grid-2 suitability-meta-grid">
        <div className="traits-card glass-panel">
          <h4 className="traits-title">
            <Brain size={16} aria-hidden="true" />
            {isSi ? "ඔබට මේ වෘත්තිය විශේෂයෙන් ගැළපෙන්නේ නම්:" : "You Might Love This Career If:"}
          </h4>
          <ul className="traits-list">
            {suitability.traits.map((trait, idx) => (
              <li key={idx} className="trait-item">
                <CheckCircle2 size={15} className="trait-icon" aria-hidden="true" />
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="challenges-card glass-panel">
          <h4 className="challenges-title">
            <AlertCircle size={16} aria-hidden="true" />
            {isSi ? "සැලකිලිමත් විය යුතු ප්‍රධාන අභියෝග:" : "Key Challenges to Consider:"}
          </h4>
          <ul className="challenges-list">
            {suitability.challenges.map((chal, idx) => (
              <li key={idx} className="challenge-item">
                <span className="chal-bullet">•</span>
                <span>{chal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interactive Self-Assessment Quiz Card */}
      <div className="self-assessment-widget glass-panel">
        <div className="assessment-header">
          <div className="assessment-title-wrap">
            <span className="quiz-icon-bubble">
              <HelpCircle size={20} aria-hidden="true" />
            </span>
            <div>
              <h3>{isSi ? "ඔබගේ පෞද්ගලික ගැළපීම පරීක්ෂා කර බලන්න" : "Interactive Self-Suitability Check"}</h3>
              <p>{isSi ? "ඔබේ කැමැත්තට සහ දක්ෂතාවලට අදාළ ප්‍රකාශ තෝරන්න:" : "Check all statements that describe your natural strengths and interests:"}</p>
            </div>
          </div>

          <div className="assessment-score-badge">
            <Trophy size={16} aria-hidden="true" />
            <span>
              {isSi
                ? `ප්‍රශ්න ${totalQuestions}න් ${answeredCount}ක් ගැළපේ (${scorePercent}%)`
                : `${answeredCount} of ${totalQuestions} Matched (${scorePercent}%)`}
            </span>
          </div>
        </div>

        <div className="quiz-questions-list">
          {suitability.selfAssessmentQuestions.map((q, idx) => {
            const isChecked = !!checkedAnswers[idx];
            return (
              <label
                key={idx}
                className={`quiz-question-row ${isChecked ? "is-selected" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCheck(idx)}
                  className="quiz-checkbox"
                />
                <span className="quiz-question-text">{q.question}</span>
                <span className="quiz-trait-tag">{q.trait}</span>
              </label>
            );
          })}
        </div>

        <div className="assessment-result-bar">
          <p className="assessment-feedback-text">{assessmentFeedback}</p>
        </div>
      </div>
    </section>
  );
}


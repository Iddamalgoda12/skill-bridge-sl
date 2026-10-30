"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Check,
  ChevronRight,
  ArrowRight,
  Route,
  Compass,
  Building2,
  DollarSign,
  AlertCircle,
  HelpCircle,
  Trophy,
  CheckCircle2,
  MapPin,
  Wallet,
  Flame,
  Search,
} from "lucide-react";
import {
  EDUCATION_STAGES,
  SRI_LANKAN_DISTRICTS,
  AL_STREAMS,
  BUDGET_TIERS,
  STUDENT_INTERESTS,
  recommendCareersForStudent,
  generatePersonalizedPath,
  type EducationStageKey,
  type StudentProfileInput,
  type GeneratedCareerPath,
} from "@/lib/data/pathEngine";
import { careerDetails } from "@/lib/data/careerDetails";
import { saveGeneratedPath } from "@/lib/api/paths";

export function InteractivePathBuilder() {
  const router = useRouter();

  // Wizard state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stage, setStage] = useState<EducationStageKey>("ol");
  const [stream, setStream] = useState<string>("Physical Science (Maths)");
  const [district, setDistrict] = useState<string>("Colombo");
  const [budgetTier, setBudgetTier] = useState<string>("FLEXIBLE");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "tech_coding",
    "building_infra",
  ]);
  const [selectedCareerSlug, setSelectedCareerSlug] = useState<string>("software-engineer");
  const [careerSearchQuery, setCareerSearchQuery] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Student Profile Object
  const profileInput: StudentProfileInput = useMemo(
    () => ({
      educationStage: stage,
      currentStream: stream,
      district,
      budgetTier,
      interests: selectedInterests,
      targetCareerSlug: selectedCareerSlug,
    }),
    [stage, stream, district, budgetTier, selectedInterests, selectedCareerSlug]
  );

  // Recommendations
  const recommendations = useMemo(
    () => recommendCareersForStudent(profileInput),
    [profileInput]
  );

  // Live Generated Path Preview
  const generatedPath: GeneratedCareerPath = useMemo(
    () => generatePersonalizedPath(selectedCareerSlug, profileInput),
    [selectedCareerSlug, profileInput]
  );

  // Filtered career list for search
  const allCareerEntries = useMemo(() => Object.values(careerDetails), []);
  const filteredCareers = useMemo(() => {
    if (!careerSearchQuery.trim()) return allCareerEntries;
    const q = careerSearchQuery.toLowerCase();
    return allCareerEntries.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.sinhalaTitle.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [allCareerEntries, careerSearchQuery]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSaveAndStart = async () => {
    setIsSaving(true);
    try {
      await saveGeneratedPath(generatedPath);
      setSavedSuccess(true);
      setTimeout(() => {
        router.push("/my-path");
      }, 700);
    } catch {
      setIsSaving(false);
    }
  };

  return (
    <div className="interactive-builder-wrapper">
      {/* Step Progress Tracker */}
      <nav className="builder-stepper glass-panel" aria-label="Roadmap Wizard Steps">
        <div className="stepper-track">
          {[
            { num: 1, label: "Current Stage", sub: "Your starting point" },
            { num: 2, label: "Your Background", sub: "Stream, district & goals" },
            { num: 3, label: "Select Career", sub: "Dream job & matches" },
            { num: 4, label: "Review & Launch", sub: "Your actionable path" },
          ].map((st) => (
            <button
              key={st.num}
              type="button"
              className={`stepper-node ${currentStep === st.num ? "active" : currentStep > st.num ? "completed" : ""}`}
              onClick={() => setCurrentStep(st.num)}
            >
              <span className="stepper-circle">
                {currentStep > st.num ? <Check size={14} /> : st.num}
              </span>
              <div className="stepper-labels">
                <span className="stepper-label-main">{st.label}</span>
                <span className="stepper-label-sub">{st.sub}</span>
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* STEP 1: Education Stage Selection */}
      {currentStep === 1 && (
        <section className="builder-step-section glass-panel">
          <div className="step-section-header">
            <span className="step-eyebrow">STEP 1 OF 4</span>
            <h2>Where are you currently in your education journey?</h2>
            <p>
              SkillBridge SL personalizes milestones, eligibility rules, and recommendations based on your actual starting point.
            </p>
          </div>

          <div className="grid-3 stages-card-grid">
            {EDUCATION_STAGES.map((s) => {
              const isSelected = stage === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  className={`stage-select-card ${isSelected ? "selected" : ""}`}
                  onClick={() => setStage(s.id)}
                >
                  <div className="stage-card-top">
                    <span className={`stage-bubble ${s.tone}`}>
                      <GraduationCap size={20} />
                    </span>
                    {isSelected && (
                      <span className="selected-check-badge">
                        <Check size={14} />
                      </span>
                    )}
                  </div>
                  <h3 className="stage-card-title">
                    {s.label}
                    <small className="stage-sinhala">{s.sinhalaLabel}</small>
                  </h3>
                  <p className="stage-card-desc">{s.description}</p>
                </button>
              );
            })}
          </div>

          <div className="step-actions-footer">
            <div className="step-info-hint">
              <Sparkles size={16} className="hint-icon" />
              <span>You can modify your stage and educational goals at any time later.</span>
            </div>
            <button
              type="button"
              className="builder-next-btn gold-glass"
              onClick={() => setCurrentStep(2)}
            >
              <span>Continue to Background</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      )}

      {/* STEP 2: Background, Stream, District & Interests */}
      {currentStep === 2 && (
        <section className="builder-step-section glass-panel">
          <div className="step-section-header">
            <span className="step-eyebrow">STEP 2 OF 4</span>
            <h2>Tell us about your subjects, district, and interests</h2>
            <p>
              In Sri Lanka, A/L stream selection and district merit quotas directly govern university admission.
            </p>
          </div>

          <div className="grid-2 step-inputs-grid">
            {/* Stream Selection */}
            <div className="builder-field-card glass-panel">
              <label className="builder-field-label">
                <BookOpen size={16} />
                <span>
                  {stage === "before-ol" || stage === "ol"
                    ? "Planned / Preferred A/L Stream"
                    : "Current / Completed A/L Stream"}
                </span>
              </label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="builder-select-input"
              >
                {AL_STREAMS.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
              <small className="field-hint">
                Determines eligibility for university degrees (Engineering, Medicine, Management, etc.).
              </small>
            </div>

            {/* District Selection (Z-Score Quota) */}
            <div className="builder-field-card glass-panel">
              <label className="builder-field-label">
                <MapPin size={16} />
                <span>Your Home Administrative District</span>
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="builder-select-input"
              >
                {SRI_LANKAN_DISTRICTS.map((d) => (
                  <option key={d} value={d}>
                    {d} District
                  </option>
                ))}
              </select>
              <small className="field-hint">
                State university cutoff Z-scores are gazetted based on district merit quotas.
              </small>
            </div>

            {/* Budget / Study Preference */}
            <div className="builder-field-card glass-panel full-width">
              <label className="builder-field-label">
                <Wallet size={16} />
                <span>Budget & Study Preference</span>
              </label>
              <div className="budget-options-grid">
                {BUDGET_TIERS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`budget-option-pill ${budgetTier === b.id ? "selected" : ""}`}
                    onClick={() => setBudgetTier(b.id)}
                  >
                    {budgetTier === b.id && <Check size={13} />}
                    <span>{b.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interests & Strengths */}
            <div className="builder-field-card glass-panel full-width">
              <label className="builder-field-label">
                <Sparkles size={16} />
                <span>Your Interests & Natural Strengths (Select all that apply)</span>
              </label>
              <div className="interests-chips-grid">
                {STUDENT_INTERESTS.map((item) => {
                  const isChecked = selectedInterests.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`interest-chip ${isChecked ? "selected" : ""}`}
                      onClick={() => toggleInterest(item.id)}
                    >
                      {isChecked ? <Check size={14} /> : <Sparkles size={14} />}
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="step-actions-footer">
            <button
              type="button"
              className="builder-back-btn"
              onClick={() => setCurrentStep(1)}
            >
              Back
            </button>
            <button
              type="button"
              className="builder-next-btn gold-glass"
              onClick={() => setCurrentStep(3)}
            >
              <span>Explore Matched Careers</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      )}

      {/* STEP 3: Career Selection & Intelligent Recommendations */}
      {currentStep === 3 && (
        <section className="builder-step-section glass-panel">
          <div className="step-section-header">
            <span className="step-eyebrow">STEP 3 OF 4</span>
            <h2>Choose Your Target Career</h2>
            <p>
              Select your dream profession or choose from careers intelligent matched to your stream and interests.
            </p>
          </div>

          {/* Top Intelligent Matches Banner */}
          <div className="intelligent-recommendations-block glass-panel">
            <div className="rec-header">
              <div className="rec-title">
                <Flame size={18} className="flame-icon" />
                <h3>Recommended for Your Profile in {district}</h3>
              </div>
              <span className="rec-badge">{recommendations.length} Careers Analyzed</span>
            </div>

            <div className="grid-3 rec-cards-grid">
              {recommendations.slice(0, 3).map((rec) => {
                const isSelected = selectedCareerSlug === rec.career.slug;
                return (
                  <article
                    key={rec.career.slug}
                    className={`rec-career-card ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedCareerSlug(rec.career.slug)}
                  >
                    <div className="rec-card-top">
                      <span className="match-score-pill">
                        {rec.matchScore}% Match
                      </span>
                      {isSelected && (
                        <span className="active-selected-tag">Selected</span>
                      )}
                    </div>

                    <h4 className="rec-card-title">{rec.career.title}</h4>
                    <p className="rec-card-sinhala">{rec.career.sinhalaTitle}</p>

                    <div className="rec-reasons-list">
                      {rec.matchReasons.map((reason, idx) => (
                        <span key={idx} className="reason-bullet">
                          • {reason}
                        </span>
                      ))}
                    </div>

                    <div className="rec-card-footer">
                      <span className="salary-hint">{rec.career.salary.midLevel.label}</span>
                      <button
                        type="button"
                        className={`select-career-btn ${isSelected ? "btn-active" : ""}`}
                      >
                        {isSelected ? "Selected" : "Choose Path"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Search all 35 verified careers */}
          <div className="all-careers-browse-wrap">
            <div className="browse-header-row">
              <h3>Or Browse All 35 Sri Lankan Careers:</h3>
              <div className="career-search-box">
                <Search size={15} />
                <input
                  type="text"
                  placeholder="Search doctor, pilot, engineer, lawyer..."
                  value={careerSearchQuery}
                  onChange={(e) => setCareerSearchQuery(e.target.value)}
                  className="career-search-input"
                />
              </div>
            </div>

            <div className="all-careers-scroll-grid">
              {filteredCareers.map((c) => {
                const isSelected = selectedCareerSlug === c.slug;
                return (
                  <button
                    key={c.slug}
                    type="button"
                    className={`career-mini-pill ${isSelected ? "selected" : ""}`}
                    onClick={() => setSelectedCareerSlug(c.slug)}
                  >
                    {isSelected && <Check size={13} />}
                    <span>{c.title.split("/")[0].trim()}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="step-actions-footer">
            <button
              type="button"
              className="builder-back-btn"
              onClick={() => setCurrentStep(2)}
            >
              Back
            </button>
            <button
              type="button"
              className="builder-next-btn gold-glass"
              onClick={() => setCurrentStep(4)}
            >
              <span>Generate My Actionable Path</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      )}

      {/* STEP 4: Path Preview, Customization & Launch */}
      {currentStep === 4 && (
        <section className="builder-step-section glass-panel">
          <div className="step-section-header">
            <span className="step-eyebrow">STEP 4 OF 4</span>
            <h2>Review Your Personalized Career Roadmap</h2>
            <p>
              Your tailored step-by-step roadmap from <strong>{generatedPath.educationStage}</strong> to becoming a{" "}
              <strong>{generatedPath.title}</strong> in Sri Lanka.
            </p>
          </div>

          {/* Path Header Meta Banner */}
          <div className="roadmap-preview-hero glass-panel">
            <div className="preview-hero-main">
              <div className="preview-badges">
                <span className="preview-stage-pill">{stage.toUpperCase()}</span>
                <span className="preview-stream-pill">{stream}</span>
                <span className="preview-district-pill">{district} District</span>
              </div>
              <h3 className="preview-path-title">{generatedPath.title}</h3>
              <p className="preview-eligibility-text">
                <span className={`eligibility-indicator ${generatedPath.eligibilityStatus.toLowerCase()}`}>
                  {generatedPath.eligibilityStatus === "ELIGIBLE"
                    ? "✓ Verified Pathway"
                    : generatedPath.eligibilityStatus === "POTENTIALLY_ELIGIBLE"
                    ? "★ Target Achievable"
                    : "ℹ Alternative Entry Route"}
                </span>{" "}
                {generatedPath.eligibilityExplanation}
              </p>
            </div>

            <div className="preview-hero-actions">
              <button
                type="button"
                className="save-launch-btn gold-glass"
                onClick={handleSaveAndStart}
                disabled={isSaving || savedSuccess}
              >
                {savedSuccess ? (
                  <>
                    <Check size={18} />
                    <span>Path Saved! Redirecting...</span>
                  </>
                ) : isSaving ? (
                  <span>Saving your roadmap...</span>
                ) : (
                  <>
                    <Route size={18} />
                    <span>Save to My Dashboard</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Actionable Milestones & Checklists Timeline */}
          <div className="preview-milestones-timeline">
            {generatedPath.milestones.map((m, mIdx) => (
              <div key={mIdx} className="preview-milestone-card glass-panel">
                <div className="milestone-card-header">
                  <div className="milestone-number-node">
                    <span>{mIdx + 1}</span>
                  </div>
                  <div className="milestone-title-wrap">
                    <h4>{m.title}</h4>
                    <span className="milestone-est-time">
                      Estimated Duration: ~{m.durationMonths} Months
                    </span>
                  </div>
                </div>

                <p className="milestone-desc-text">{m.description}</p>

                <div className="milestone-why-box">
                  <strong>Why it matters:</strong> {m.whyItMatters}
                </div>

                {/* Milestone Checklist */}
                <div className="milestone-checklist-block">
                  <span className="checklist-heading">Actionable Tasks & Recommendations:</span>
                  <ul className="milestone-tasks-list">
                    {m.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="preview-task-item">
                        <CheckCircle2 size={15} className="task-bullet-icon" />
                        <div className="task-text-wrap">
                          <span className="task-name">{task.title}</span>
                          {task.notes && <small className="task-notes">{task.notes}</small>}
                        </div>
                        {task.resourceUrl && (
                          <Link
                            href={task.resourceUrl}
                            className="task-resource-link"
                            target={task.resourceUrl.startsWith("http") ? "_blank" : undefined}
                          >
                            Explore
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Routes & Universities Grid */}
          <div className="grid-2 preview-support-grid">
            <div className="preview-support-card glass-panel">
              <div className="support-card-header">
                <GraduationCap size={18} />
                <h4>Recommended Sri Lankan Institutions</h4>
              </div>
              <ul className="uni-recs-list">
                {generatedPath.recommendedUniversities.map((uni, idx) => (
                  <li key={idx} className="uni-rec-row">
                    <div>
                      <strong>{uni.name}</strong>
                      <p>{uni.degree}</p>
                    </div>
                    <Link href={`/universities/${uni.slug}`} className="uni-mini-link">
                      View
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="preview-support-card glass-panel">
              <div className="support-card-header">
                <Compass size={18} />
                <h4>Alternative Career Routes</h4>
              </div>
              <ul className="alt-careers-list">
                {generatedPath.alternativeOptions.map((alt, idx) => (
                  <li key={idx} className="alt-career-row">
                    <div>
                      <strong>{alt.title}</strong>
                      <p>{alt.reason}</p>
                    </div>
                    <Link href={`/careers/${alt.slug}`} className="alt-mini-link">
                      Explore
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="step-actions-footer">
            <button
              type="button"
              className="builder-back-btn"
              onClick={() => setCurrentStep(3)}
            >
              Modify Career
            </button>
            <button
              type="button"
              className="builder-next-btn gold-glass"
              onClick={handleSaveAndStart}
              disabled={isSaving || savedSuccess}
            >
              {savedSuccess ? "Saved!" : "Save & Open My Path Dashboard"}
            </button>
          </div>
        </section>
      )}
    </div>
  );
}


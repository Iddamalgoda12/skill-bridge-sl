"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Check,
  ArrowRight,
  Route,
  Building2,
  DollarSign,
  Trophy,
  CheckCircle2,
  Search,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  MapPin,
  FileText,
  School,
  Compass,
  Sliders,
  CheckCheck,
} from "lucide-react";
import { careerDetails, type CareerDetail } from "@/lib/data/careerDetails";
import { sampleCareers } from "@/lib/data/careers";
import { saveGeneratedPath } from "@/lib/api/paths";
import {
  generatePersonalizedPath,
  SRI_LANKAN_DISTRICTS,
  type StudentProfileInput,
} from "@/lib/data/pathEngine";

const CATEGORY_FILTERS = [
  "All Fields",
  "Technology",
  "Healthcare",
  "Engineering",
  "Business",
  "Creative",
  "Education",
  "Legal",
  "Hospitality",
  "Skilled Trades",
];

const CATEGORY_LABELS: Record<string, { en: string; si: string }> = {
  "All Fields": { en: "All Careers", si: "සියලු වෘත්තීන්" },
  Technology: { en: "Technology", si: "තාක්ෂණය" },
  Healthcare: { en: "Healthcare", si: "සෞඛ්‍ය හා වෛද්‍ය" },
  Engineering: { en: "Engineering", si: "ඉංජිනේරු" },
  Business: { en: "Business", si: "ව්‍යාපාර හා මූල්‍ය" },
  Creative: { en: "Creative", si: "නිර්මාණශීලී හා කලා" },
  Education: { en: "Education", si: "අධ්‍යාපන හා විද්‍යා" },
  Legal: { en: "Legal", si: "නීති ක්ෂේත්‍රය" },
  Hospitality: { en: "Hospitality", si: "සංචාරක හා හෝටල්" },
  "Skilled Trades": { en: "Aviation & Maritime", si: "ගුවන්, නාවික හා තාක්ෂණික" },
};

function formatCompactZScore(zScoreRange: string, isSi: boolean = false): string {
  if (!zScoreRange) return isSi ? "දිස්ත්‍රික් Quota" : "District Merit";
  const numbers = zScoreRange.match(/\d+\.\d+/g);
  if (numbers && numbers.length >= 2) {
    const sorted = [...numbers].map(Number).sort((a, b) => a - b);
    return `~${sorted[0].toFixed(2)} – ${sorted[sorted.length - 1].toFixed(2)}+`;
  }
  if (numbers && numbers.length === 1) {
    return `~${numbers[0]}+`;
  }
  return zScoreRange.length > 20 ? zScoreRange.slice(0, 18) + "…" : zScoreRange;
}

function formatCompactStream(stream: string, isSi: boolean = false): string {
  if (!stream) return isSi ? "ඕනෑම විෂය ධාරාවක්" : "Any Stream";
  const clean = stream.split(/\bor\b|\/|,/)[0].trim();
  return clean || stream;
}

function formatMilestoneStageSi(stageKey: string): string {
  switch (stageKey) {
    case "STAGE_1_FOUNDATION":
      return "1 වන පියවර: මූලික අධ්‍යාපනය (O/L & A/L)";
    case "STAGE_2_UNDERGRADUATE":
      return "2 වන පියවර: උපාධි අධ්‍යාපනය";
    case "STAGE_3_INTERNSHIP":
      return "3 වන පියවර: ප්‍රායෝගික පුහුණුව (Internship)";
    case "STAGE_4_PROFESSIONAL":
      return "4 වන පියවර: වෘත්තීය සුදුසුකම්";
    case "STAGE_5_SPECIALIZATION":
      return "5 වන පියවර: ප්‍රවීණත්වය සහ නායකත්වය";
    default:
      return stageKey.replace(/_/g, " ");
  }
}

export function CareerPathArchitect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const isSi = locale === "si";
  const paramCareer = searchParams.get("career");

  // State: selected career slug
  const [selectedCareerSlug, setSelectedCareerSlug] = useState<string>(() => {
    if (paramCareer && paramCareer !== "software-engineer" && careerDetails[paramCareer]) {
      return paramCareer;
    }
    return "engineer";
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Fields");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  // Student's Custom Choices
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>("");
  const [selectedUniversitySlug, setSelectedUniversitySlug] = useState<string>("");
  const [preferredRoute, setPreferredRoute] = useState<"STATE_UGC" | "PRIVATE_GLOBAL" | "PROFESSIONAL_BODY">("STATE_UGC");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Colombo");

  // Accordion state for roadmap
  const [expandedMilestones, setExpandedMilestones] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  });

  // Keep state synced with URL if changed
  useEffect(() => {
    if (paramCareer && careerDetails[paramCareer]) {
      setSelectedCareerSlug(paramCareer);
    }
  }, [paramCareer]);

  // Selected Career Object
  const career: CareerDetail = useMemo(() => {
    return careerDetails[selectedCareerSlug] || careerDetails["engineer"];
  }, [selectedCareerSlug]);

  // Sync default choices when career changes
  useEffect(() => {
    if (career.futureOutlook.growingSpecializations.length > 0) {
      setSelectedSpecialization(career.futureOutlook.growingSpecializations[0]);
    } else {
      setSelectedSpecialization("Core Discipline");
    }

    if (career.universities.length > 0) {
      setSelectedUniversitySlug(career.universities[0].slug);
    }
    setSavedSuccess(false);
  }, [career]);

  // All careers array directly mapped from sampleCareers on the careers page
  const allCareers = useMemo(() => {
    return sampleCareers.map((sc) => {
      const detail = careerDetails[sc.slug];
      return {
        slug: sc.slug,
        title: sc.title,
        category: sc.category,
        summary: sc.summary,
        employers: sc.employers,
        entry: sc.entry,
        image: sc.image || detail?.heroImage || "/images/careers/engineer.jpg",
        salaryK: sc.salaryK,
        detail,
        sinhalaTitle: detail?.sinhalaTitle || sc.title,
        salaryDisplay: detail?.salary
          ? `LKR ${Math.round(detail.salary.entryLevel.min / 1000)}k–${Math.round(detail.salary.seniorLevel.max / 1000)}k`
          : `LKR ~${Math.round(sc.salaryK || 120)}k`,
      };
    });
  }, []);

  // Filtered careers
  const filteredCareers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allCareers.filter((c) => {
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.sinhalaTitle.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.employers.toLowerCase().includes(q) ||
        (c.detail?.tagline && c.detail.tagline.toLowerCase().includes(q));

      const matchesCat =
        selectedCategory === "All Fields" ||
        (selectedCategory === "Engineering" && (c.category.toLowerCase() === "engineering" || c.slug === "engineer")) ||
        (selectedCategory === "Technology" && (c.category.toLowerCase() === "technology" || c.slug === "engineer")) ||
        c.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCat;
    });
  }, [allCareers, searchQuery, selectedCategory]);

  // Active chosen university object
  const selectedUni = useMemo(() => {
    return (
      career.universities.find((u) => u.slug === selectedUniversitySlug) ||
      career.universities[0]
    );
  }, [career, selectedUniversitySlug]);

  // Generate dynamic customized roadmap from student's exact choices
  const roadmapData = useMemo(() => {
    const profile: StudentProfileInput = {
      educationStage: "ol",
      currentStream: career.education.alStream,
      district: selectedDistrict,
      budgetTier: "FLEXIBLE",
      targetCareerSlug: career.slug,
      targetSpecialization: selectedSpecialization,
      targetUniversity: selectedUni
        ? {
            name: selectedUni.name,
            slug: selectedUni.slug,
            degreeName: selectedUni.degreeName,
            type: selectedUni.type,
            duration: selectedUni.duration,
            faculty: selectedUni.faculty,
          }
        : undefined,
      preferredRoute,
    };
    return generatePersonalizedPath(career.slug, profile);
  }, [career, selectedDistrict, selectedSpecialization, selectedUni, preferredRoute]);

  const toggleMilestone = (idx: number) => {
    setExpandedMilestones((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSavePath = async () => {
    setIsSaving(true);
    try {
      await saveGeneratedPath(roadmapData);
      setSavedSuccess(true);
      setTimeout(() => {
        router.push("/my-path");
      }, 700);
    } catch {
      setIsSaving(false);
    }
  };

  return (
    <div className="career-architect-wrapper">
      {/* ──────────────────────────────────────────────────────────────────────────
          STEP 1: CAREER SELECTION & EXPLORATION HEADER
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="career-selection-header glass-panel">
        <div className="selection-eyebrow-row">
          <span className="selection-badge">
            <Compass size={15} />
            {isSi ? "වෘත්තීය මාර්ග සැලසුම්කරු (Career Path Architect)" : "DIRECT CAREER-FIRST ROADMAP"}
          </span>
          <span className="selection-subtext">
            {isSi
              ? "ඔයා කැමති career එක තෝරන්න — O/L, A/L subjects, UGC universities සහ diplomas ඔක්කොම අපි පෙන්වන්නම්."
              : "Choose any dream profession — we map your exact Sri Lankan O/L, A/L, university degrees, and professional courses."}
          </span>
        </div>

        <div className="selection-controls-bar">
          <div className="search-input-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder={
                isSi
                  ? "කැමති career එක search කරන්න (e.g. Doctor, Software Engineer, Lawyer, Civil Engineer, Accountant...)"
                  : "Search dream career (e.g. Doctor, Software Engineer, Civil Engineer, Lawyer, Accountant...)"
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="career-search-field"
            />
          </div>

          <div className="category-filter-pills">
            {CATEGORY_FILTERS.map((cat) => {
              const label = isSi ? CATEGORY_LABELS[cat]?.si || cat : CATEGORY_LABELS[cat]?.en || cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Career Horizontal / Grid Picker */}
        <div className="career-scroll-track">
          {filteredCareers.map((c) => {
            const isSelected = c.slug === selectedCareerSlug;
            return (
              <button
                key={c.slug}
                type="button"
                className={`career-picker-chip glass-panel ${isSelected ? "selected" : ""}`}
                onClick={() => {
                  setSelectedCareerSlug(c.slug);
                }}
              >
                <div className="picker-image-wrap">
                  <Image
                    src={c.image}
                    alt={c.title}
                    width={48}
                    height={48}
                    className="picker-thumb"
                  />
                  {isSelected && (
                    <span className="picker-check-badge">
                      <Check size={12} />
                    </span>
                  )}
                </div>
                <div className="picker-text-wrap">
                  <span className="picker-title">{c.title}</span>
                  <span className="picker-sinhala">{c.sinhalaTitle}</span>
                  <span className="picker-salary">{c.salaryDisplay} / mo</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────────────
          STEP 2: THE COMPLETE SRI LANKAN CAREER BLUEPRINT
      ────────────────────────────────────────────────────────────────────────── */}
      <section className="career-blueprint-container">
        {/* HERO CAREER BANNER */}
        <div className="blueprint-hero-card glass-panel">
          <div className="blueprint-hero-grid">
            <div className="hero-img-col">
              <div className="hero-photo-frame">
                <Image
                  src={career.heroImage}
                  alt={career.title}
                  width={340}
                  height={240}
                  className="blueprint-career-photo"
                  priority
                />
                <span className="hero-category-tag">{career.category}</span>
              </div>
            </div>

            <div className="hero-content-col">
              <div className="hero-title-row">
                <div>
                  <h1 className="career-main-title">{career.title}</h1>
                  <h2 className="career-sinhala-subtitle">{career.sinhalaTitle}</h2>
                </div>
                <button
                  type="button"
                  onClick={handleSavePath}
                  disabled={isSaving}
                  className="save-path-btn gold-glass"
                >
                  {savedSuccess ? (
                    <>
                      <CheckCircle2 size={18} />
                      <span>{isSi ? "Save වුණා! My Path එකට යනවා..." : "Saved! Opening Dashboard..."}</span>
                    </>
                  ) : (
                    <>
                      <Route size={18} />
                      <span>{isSaving ? (isSi ? "Save වෙනවා..." : "Saving...") : (isSi ? "මගේ Path එකට Save කරන්න" : "Save to My Profile")}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="career-tagline-text">{career.tagline}</p>
              <p className="career-role-desc">{career.roleOverview.whatTheyDo}</p>

              {/* 4 Quick Stat Badges */}
              <div className="blueprint-stats-grid">
                <div
                  className="stat-card glass-panel"
                  title={
                    isSi
                      ? `ආරම්භක වැටුප: LKR ${career.salary.entryLevel.min.toLocaleString()} | ජ්‍යෙෂ්ඨ වැටුප: LKR ${career.salary.seniorLevel.max.toLocaleString()}`
                      : `Entry-level: LKR ${career.salary.entryLevel.min.toLocaleString()} | Senior: LKR ${career.salary.seniorLevel.max.toLocaleString()}`
                  }
                >
                  <DollarSign size={17} className="stat-icon tone-gold" />
                  <div>
                    <span className="stat-label">
                      {isSi ? "සාමාන්‍ය වැටුප" : "Sri Lanka Salary"}
                    </span>
                    <strong className="stat-val">
                      LKR {Math.round(career.salary.entryLevel.min / 1000)}k – {Math.round(career.salary.seniorLevel.max / 1000)}k
                    </strong>
                  </div>
                </div>

                <div
                  className="stat-card glass-panel"
                  title={career.education.alStream}
                >
                  <BookOpen size={17} className="stat-icon tone-mint" />
                  <div>
                    <span className="stat-label">
                      {isSi ? "අවශ්‍ය A/L Stream" : "Required A/L Stream"}
                    </span>
                    <strong className="stat-val">
                      {formatCompactStream(career.education.alStream, isSi)}
                    </strong>
                  </div>
                </div>

                <div
                  className="stat-card glass-panel"
                  title={career.education.zScoreRange}
                >
                  <Trophy size={17} className="stat-icon tone-peach" />
                  <div>
                    <span className="stat-label">
                      {isSi ? "UGC Z-Score ඉලක්කය" : "UGC Z-Score Target"}
                    </span>
                    <strong className="stat-val">
                      {formatCompactZScore(career.education.zScoreRange, isSi)}
                    </strong>
                  </div>
                </div>

                <div
                  className="stat-card glass-panel"
                  title={selectedUni?.name || "State University"}
                >
                  <Building2 size={17} className="stat-icon tone-lavender" />
                  <div>
                    <span className="stat-label">
                      {isSi ? "ඉලක්ක විශ්වවිද්‍යාලය" : "Target University"}
                    </span>
                    <strong className="stat-val">
                      {selectedUni?.name || "State University"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            NEW: STUDENT'S PERSONAL CHOICES & CUSTOMIZATION SUITE
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="customization-suite-card glass-panel">
          <div className="suite-header">
            <span className="section-bubble tone-forest">
              <Sliders size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "ඔයාගෙම තේරීම් අනුව customize කරගන්න" : "STEP 2: PERSONALIZE YOUR PATHWAY"}
              </span>
              <h3 className="section-title">
                {isSi
                  ? `ඔයා කැමති Field එක සහ Target University එක තෝරන්න`
                  : `Customize Your Choices for ${career.title}`}
              </h3>
              <p className="section-desc">
                {isSi
                  ? "ඔයා කැමති specialization එක, ඉගෙනගන්න කැමති university එක සහ දිස්ත්‍රික්කය තෝරන්න. Roadmap එක ඒ අනුව ස්වයංක්‍රීයව වෙනස් වේ."
                  : "Select your preferred field of specialization, target university, and home district. The entire Sri Lankan roadmap reconfigures around your choices."}
              </p>
            </div>
          </div>

          <div className="customization-blocks-grid">
            {/* CHOICE 1: FIELD SPECIALIZATION */}
            <div className="custom-choice-block glass-panel">
              <div className="choice-block-header">
                <span className="choice-num-badge">1</span>
                <div>
                  <h4 className="choice-title">
                    {isSi ? "ඔයා කැමති Specialization එක / Field එක" : "Which Field / Specialization do you prefer?"}
                  </h4>
                  <p className="choice-hint">
                    {isSi ? "මේ career එක යටතේ ලංකාවේ වැඩි ඉල්ලුමක් ඇති අංශ:" : "High-growth industry focus areas in Sri Lanka:"}
                  </p>
                </div>
              </div>

              <div className="specializations-chips-wrap">
                {career.futureOutlook.growingSpecializations.map((spec, sIdx) => {
                  const isChecked = selectedSpecialization === spec;
                  return (
                    <button
                      key={sIdx}
                      type="button"
                      className={`specialization-choice-pill ${isChecked ? "active" : ""}`}
                      onClick={() => setSelectedSpecialization(spec)}
                    >
                      {isChecked ? <CheckCheck size={15} /> : <Sparkles size={14} />}
                      <span>{spec}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CHOICE 2: PRIMARY STUDY PATHWAY */}
            <div className="custom-choice-block glass-panel">
              <div className="choice-block-header">
                <span className="choice-num-badge">2</span>
                <div>
                  <h4 className="choice-title">
                    {isSi ? "ඔයා යන්න බලාපොරොත්තු වන අධ්‍යාපන ක්‍රමය" : "Which Study Route fits your goals?"}
                  </h4>
                  <p className="choice-hint">
                    {isSi ? "රජයේ විශ්වවිද්‍යාල, පෞද්ගලික ආයතන හෝ වෘත්තීය පාඨමාලා:" : "State university, direct private intake, or chartered diploma:"}
                  </p>
                </div>
              </div>

              <div className="route-options-grid">
                <button
                  type="button"
                  className={`route-choice-card ${preferredRoute === "STATE_UGC" ? "active" : ""}`}
                  onClick={() => setPreferredRoute("STATE_UGC")}
                >
                  <div className="route-card-top">
                    <span className="route-badge-pill tone-mint">
                      {isSi ? "රජයේ UGC ක්‍රමය" : "State UGC Merit"}
                    </span>
                    {preferredRoute === "STATE_UGC" && <CheckCircle2 size={16} className="route-active-check" />}
                  </div>
                  <strong>{isSi ? "නොමිලේ රජයේ විශ්වවිද්‍යාල" : "State Free University Intake"}</strong>
                  <p>
                    {isSi
                      ? "A/L Z-Score මත පදනම්ව නොමිලේ උපාධිය සම්පූර්ණ කිරීම."
                      : "Tuition-free degrees based on A/L district merit cutoffs."}
                  </p>
                </button>

                <button
                  type="button"
                  className={`route-choice-card ${preferredRoute === "PRIVATE_GLOBAL" ? "active" : ""}`}
                  onClick={() => setPreferredRoute("PRIVATE_GLOBAL")}
                >
                  <div className="route-card-top">
                    <span className="route-badge-pill tone-lavender">
                      {isSi ? "පෞද්ගලික / Foreign" : "Direct / International"}
                    </span>
                    {preferredRoute === "PRIVATE_GLOBAL" && <CheckCircle2 size={16} className="route-active-check" />}
                  </div>
                  <strong>{isSi ? "SLIIT / NSBM / IIT ආයතන" : "Accredited Private Institutes"}</strong>
                  <p>
                    {isSi
                      ? "A/L 3 'S' සාමාර්ථ හෝ Foundation හරහා සෘජුවම ඇතුළත් වීම."
                      : "Direct entry with 3 'S' passes or recognized Foundation."}
                  </p>
                </button>

                <button
                  type="button"
                  className={`route-choice-card ${preferredRoute === "PROFESSIONAL_BODY" ? "active" : ""}`}
                  onClick={() => setPreferredRoute("PROFESSIONAL_BODY")}
                >
                  <div className="route-card-top">
                    <span className="route-badge-pill tone-peach">
                      {isSi ? "වෘත්තීය Charter" : "Professional Body"}
                    </span>
                    {preferredRoute === "PROFESSIONAL_BODY" && <CheckCircle2 size={16} className="route-active-check" />}
                  </div>
                  <strong>{isSi ? "IESL / CA / CIMA / SLIATE" : "Chartered Diplomas & Bodies"}</strong>
                  <p>
                    {isSi
                      ? "SLIATE HND, NVQ 5-6 හෝ වෘත්තීය ආයතන විභාග හරහා සුදුසුකම් ලැබීම."
                      : "Professional council exams or free government HND diplomas."}
                  </p>
                </button>
              </div>
            </div>

            {/* CHOICE 3: DISTRICT QUOTA */}
            <div className="custom-choice-block glass-panel full-row">
              <div className="district-choice-row">
                <div className="district-info-left">
                  <span className="choice-num-badge">3</span>
                  <div>
                    <h4 className="choice-title">
                      {isSi ? "ඔයාගෙ පාසල් දිස්ත්‍රික්කය (UGC Z-Score Quota එකට)" : "Select Your Home Administrative District"}
                    </h4>
                    <p className="choice-hint">
                      {isSi
                        ? "ලංකාවේ විශ්වවිද්‍යාල ප්‍රවේශයේදී Z-score කඩඉම් ලකුණු දිස්ත්‍රික්ක අනුව වෙනස් වේ."
                        : "Sri Lankan state university admission operates strictly on district merit quotas."}
                    </p>
                  </div>
                </div>

                <div className="district-select-wrap">
                  <MapPin size={16} className="district-pin-icon" />
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="district-dropdown-input"
                  >
                    {SRI_LANKAN_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist} District
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            SECTION 1: WHAT TO DO FOR G.C.E. O/L (ORDINARY LEVEL)
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-section-card glass-panel">
          <div className="section-card-header">
            <span className="section-bubble tone-forest">
              <BookOpen size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "1 වන පියවර: O/L පදනම" : "STAGE 1: FOUNDATION"}
              </span>
              <h3 className="section-title">
                {isSi ? "G.C.E. O/L (සාමාන්‍ය පෙළ) වලදී කළ යුතු දේවල්" : "What to Do for G.C.E. O/L (Ordinary Level)"}
              </h3>
              <p className="section-desc">
                {isSi
                  ? "ඔයාගෙ O/L ප්‍රතිඵල මත A/L stream එකට සුදුසුකම් ලැබෙන අතර, විශ්වවිද්‍යාල සඳහා අනිවාර්ය credits සපුරාගත යුතුය."
                  : "Your O/L results determine qualification for competitive A/L streams and provide mandatory prerequisites for Sri Lankan universities."}
              </p>
            </div>
          </div>

          <div className="grid-2 blueprint-inner-grid">
            {/* Core Required Subjects */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <CheckCircle2 size={16} className="heading-icon" />
                {isSi ? "අනිවාර්ය විෂයයන් සහ ඉලක්කගත සාමාර්ථ" : "Mandatory Subjects & Minimum Grades"}
              </h4>
              <p className="inner-card-highlight">{career.education.olRequirements}</p>
              <ul className="guidance-bullets">
                <li>
                  <strong>{isSi ? "ගණිතය (Mathematics):" : "Mathematics:"}</strong>{" "}
                  {isSi
                    ? "විද්‍යා, තාක්ෂණවේද සහ වාණිජ අංශ සඳහා අවම 'C' හෝ 'A' සාමාර්ථයක් අවශ්‍ය වේ."
                    : "Minimum Credit ('C') or Distinction ('A') required to enter Science, Technology, and Commerce streams."}
                </li>
                <li>
                  <strong>{isSi ? "ඉංග්‍රීසි (English Language):" : "English Language:"}</strong>{" "}
                  {isSi
                    ? "විශ්වවිද්‍යාල දේශන, තාක්ෂණික පොත්පත් සහ වෘත්තීය විභාග සඳහා අත්‍යවශ්‍ය වේ."
                    : "Essential for university lectures, technical documentation, and professional examinations."}
                </li>
                <li>
                  <strong>{isSi ? "විද්‍යාව (Science):" : "Science:"}</strong>{" "}
                  {isSi
                    ? "ගණිත (Physical Science) සහ ජීව විද්‍යා (Bio Science) අංශ සඳහා අනිවාර්ය පූර්ව අවශ්‍යතාවයකි."
                    : "Core prerequisite for Physical Science (Maths) and Biological Science streams."}
                </li>
              </ul>
            </div>

            {/* Recommended Elective Basket Subjects */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <Sparkles size={16} className="heading-icon" />
                {isSi ? "තෝරාගත හැකි නිර්දේශිත කාණ්ඩ විෂයයන්" : "Recommended Elective Basket Subjects"}
              </h4>
              <p className="inner-card-highlight">
                {isSi
                  ? "මෙම විෂයයන් හැදෑරීමෙන් A/L වලට කලින්ම ශක්තිමත් පදනමක් ලැබේ:"
                  : "Key subjects that provide a strong early foundation:"}
              </p>
              <div className="subject-tags-list">
                {career.skills.importantSchoolSubjects.map((sub, i) => (
                  <span key={i} className="subject-pill">
                    {sub}
                  </span>
                ))}
              </div>
              <p className="guidance-note">
                💡 <em>{isSi ? "උපදෙස:" : "Junior Tip:"}</em>{" "}
                {isSi
                  ? "ප්‍රමුඛ පාසල් වල A/L පන්ති වලට තේරී පත්වීමට ගණිතය, විද්‍යාව සහ ඉංග්‍රීසි ඇතුළුව අවම 'A' සාමාර්ථ 6ක් හෝ 8ක් ඉලක්ක කරන්න."
                  : "Aim for at least 6 'A' passes including Mathematics, Science, and English to secure admission into premier A/L schools and top streams."}
              </p>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            SECTION 2: WHAT TO DO FOR G.C.E. A/L (ADVANCED LEVEL)
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-section-card glass-panel">
          <div className="section-card-header">
            <span className="section-bubble tone-gold">
              <GraduationCap size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "2 වන පියවර: උසස් පෙළ සුදුසුකම" : "STAGE 2: UNIVERSITY QUALIFICATION"}
              </span>
              <h3 className="section-title">
                {isSi ? "G.C.E. A/L (උසස් පෙළ) වලදී කළ යුතු දේවල්" : "What to Do for G.C.E. A/L (Advanced Level)"}
              </h3>
              <p className="section-desc">
                {isSi
                  ? "නිල UGC Stream එක, අවශ්‍ය ප්‍රධාන විෂයයන් සහ ශ්‍රී ලංකාවේ දිස්ත්‍රික් Z-score ඉලක්ක."
                  : "Official UGC stream combinations, subject prerequisites, and district quota Z-score benchmarks in Sri Lanka."}
              </p>
            </div>
          </div>

          <div className="grid-2 blueprint-inner-grid">
            {/* A/L Stream & Subject Combination */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <Layers size={16} className="heading-icon" />
                {isSi ? "නියමිත UGC A/L Stream එක" : "Official UGC Stream & Subject Combination"}
              </h4>
              <div className="stream-badge-box">
                <span className="stream-title-label">{isSi ? "අවශ්‍ය Stream එක:" : "Required Stream:"}</span>
                <span className="stream-name-highlight">{career.education.alStream}</span>
              </div>
              <ul className="guidance-bullets">
                <li>
                  <strong>{isSi ? "ප්‍රධාන විෂයයන් 3:" : "Core 3 Subjects:"}</strong>{" "}
                  {isSi
                    ? "රජයේ විශ්වවිද්‍යාල වල අදාළ පීඨයට සෘජුවම ඇතුළත් වීමට UGC Handbook එකට අනුව විෂයයන් 3ම හැදෑරිය යුතුය."
                    : "Must align strictly with UGC admission handbooks for direct intake into state university faculties."}
                </li>
                <li>
                  <strong>{isSi ? "සාමාන්‍ය පොදු පරීක්ෂණය:" : "Common General Test:"}</strong>{" "}
                  {isSi
                    ? "රජයේ විශ්වවිද්‍යාල ප්‍රවේශය සඳහා අවම ලකුණු 30ක් ලබාගැනීම අනිවාර්ය වේ."
                    : "Mandatory minimum score of 30 marks required to be eligible for state university registration."}
                </li>
                <li>
                  <strong>{isSi ? "සාමාන්‍ය ඉංග්‍රීසි (General English):" : "General English:"}</strong>{" "}
                  {isSi
                    ? "විශ්වවිද්‍යාල පාඨමාලා වලදී සහ විදේශීය උපාධි වලදී මනා වාසියක් සපයයි."
                    : "Tested during A/L; higher scores provide preference in merit quotas and international degree credits."}
                </li>
              </ul>
            </div>

            {/* Z-Score Benchmark & District Quotas */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <Trophy size={16} className="heading-icon" />
                {isSi ? "UGC Z-Score කඩඉම් ලකුණු සහ දිස්ත්‍රික් Quota" : "UGC Z-Score Target & District Merit Quota"}
              </h4>
              <div className="zscore-banner-box">
                <span className="zscore-label">{isSi ? "සාමාන්‍ය කඩඉම් Z-Score එක:" : "Typical State Cutoff Z-Score:"}</span>
                <span className="zscore-value">{career.education.zScoreRange}</span>
              </div>
              <p className="competition-text">{career.education.competitionNote}</p>
              <div className="district-info-note">
                <MapPin size={15} />
                <span>
                  <strong>{selectedDistrict} District:</strong>{" "}
                  {selectedDistrict === "Colombo" || selectedDistrict === "Gampaha" || selectedDistrict === "Kandy"
                    ? isSi
                      ? "කොළඹ, ගම්පහ සහ මහනුවර දිස්ත්‍රික්ක වල ඉහළම Z-Score තරඟකාරිත්වයක් පවතී. උපරිම ලකුණු ඉලක්ක කරන්න."
                      : "Colombo, Gampaha, and Kandy face the highest merit cutoffs. Target the upper quartile of the Z-score range."
                    : isSi
                      ? `${selectedDistrict} දිස්ත්‍රික්කයේ UGC දිස්ත්‍රික් Quota ප්‍රතිලාභය හිමිවන බැවින් තරමක් අඩු Z-score එකකින්ද සුදුසුකම් ලැබිය හැක.`
                      : `${selectedDistrict} benefits from favorable UGC district merit quotas with lower cutoff thresholds than Western Province.`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            SECTION 3: BEST SRI LANKAN UNIVERSITIES (STATE & PRIVATE WITH SELECTION)
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-section-card glass-panel">
          <div className="section-card-header">
            <span className="section-bubble tone-mint">
              <Building2 size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "3 වන පියවර: විශ්වවිද්‍යාල සහ උපාධි පාඨමාලා" : "STAGE 3: UNIVERSITIES & DEGREE PROGRAMMES"}
              </span>
              <h3 className="section-title">
                {isSi
                  ? `ලංකාවේ හොඳම Universities — ඔයා කැමති University එක තෝරන්න`
                  : `Top Sri Lankan Universities — Click to Set Your Target`}
              </h3>
              <p className="section-desc">
                {isSi
                  ? "පහත ලැයිස්තුවේ ඇති ඕනෑම University card එකක් මත click කර එය ඔයාගෙ 'Target University' එක ලෙස තෝරාගන්න."
                  : "Click any university below to lock it in as your personal Target University for this roadmap."}
              </p>
            </div>
          </div>

          <div className="state-universities-list">
            {career.universities.map((uni, idx) => {
              const isTargetUni = selectedUniversitySlug === uni.slug;
              const isState = uni.type.toLowerCase().includes("state") || !uni.type.toLowerCase().includes("private");

              return (
                <div
                  key={idx}
                  className={`university-entry-card glass-panel ${isTargetUni ? "is-target-selected" : ""} ${!isState ? "private-card" : ""}`}
                  onClick={() => setSelectedUniversitySlug(uni.slug)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="uni-main-info">
                    <div className="uni-icon-col">
                      {isState ? <School size={22} className="uni-icon" /> : <Building2 size={22} className="uni-icon private-icon" />}
                    </div>
                    <div>
                      <div className="uni-title-row">
                        <h4 className="uni-name">{uni.name}</h4>
                        <span className={`uni-type-tag ${!isState ? "private-tag" : ""}`}>{uni.type}</span>
                        {isTargetUni && (
                          <span className="target-uni-badge">
                            <CheckCheck size={13} />
                            {isSi ? "මගේ Target University එක ✓" : "My Target University ✓"}
                          </span>
                        )}
                      </div>
                      <p className="uni-degree-title">{uni.degreeName}</p>
                      <div className="uni-meta-row">
                        <span className="meta-item">
                          <Building2 size={13} /> {uni.faculty}
                        </span>
                        <span className="meta-item">
                          <Award size={13} /> {uni.duration}
                        </span>
                        {uni.accreditation && (
                          <span className="meta-item accreditation-pill">
                            ✓ {uni.accreditation}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="uni-link-col" onClick={(e) => e.stopPropagation()}>
                    <button
                      type="button"
                      className={`select-as-target-btn ${isTargetUni ? "selected" : ""}`}
                      onClick={() => setSelectedUniversitySlug(uni.slug)}
                    >
                      {isTargetUni ? (
                        <>
                          <Check size={14} />
                          <span>{isSi ? "තෝරාගෙන ඇත" : "Selected Target"}</span>
                        </>
                      ) : (
                        <span>{isSi ? "Target එකක් ලෙස තෝරන්න" : "Select as Target"}</span>
                      )}
                    </button>
                    <Link
                      href={`/universities/${uni.slug}`}
                      className="glass-button uni-view-btn"
                    >
                      <span>{isSi ? "විස්තර බලන්න" : "Explore"}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            SECTION 4: PROFESSIONAL BODIES, CHARTER & DIPLOMAS
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-section-card glass-panel">
          <div className="section-card-header">
            <span className="section-bubble tone-peach">
              <Award size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "4 වන පියවර: වෘත්තීය ආයතන සහ Diplomas" : "STAGE 4: CHARTER & DIPLOMAS"}
              </span>
              <h3 className="section-title">
                {isSi ? "වෘත්තීය බලපත්‍ර සහ Alternative Diplomas" : "Chartered Bodies, Professional Licensure & Diplomas"}
              </h3>
              <p className="section-desc">
                {isSi
                  ? "ශ්‍රී ලංකාවේ පිළිගත් වෘත්තීය ආයතන වල ලියාපදිංචි වීම සහ විකල්ප ඩිප්ලෝමා මාර්ග."
                  : "Sri Lankan regulatory bodies, international chartered institutes, and vocational diploma alternatives."}
              </p>
            </div>
          </div>

          <div className="grid-2 blueprint-inner-grid">
            {/* Professional Chartered Bodies & Specializations */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <Award size={16} className="heading-icon" />
                {isSi ? "වෘත්තීය බලපත්‍ර සහ Chartered ආයතන" : "Chartered Licensure & Professional Credentials"}
              </h4>
              <p className="inner-card-highlight">
                {isSi
                  ? "ශ්‍රී ලංකාවේ නීත්‍යානුකූලව වෘත්තියේ යෙදීමට සහ පිළිගැනීමට අවශ්‍ය ආයතන:"
                  : "Key professional exams and industry licensing in Sri Lanka:"}
              </p>
              <div className="cert-row-item">
                <CheckCircle2 size={16} className="cert-check" />
                <div>
                  <strong className="cert-name">
                    {isSi ? "වෘත්තීය ලියාපදිංචි ආයතනය / පාලක සභාව" : "Professional Licensure / Entrance Body"}
                  </strong>
                  <span className="cert-body">{career.education.entranceExams}</span>
                </div>
              </div>
              <div style={{ marginTop: "12px" }}>
                <span className="stream-title-label">
                  {isSi ? "වැඩි ඉල්ලුමක් ඇති Specializations:" : "High-Growth Specializations:"}
                </span>
                <div className="subject-tags-list" style={{ marginTop: "6px" }}>
                  {career.futureOutlook.growingSpecializations.map((spec, idx) => (
                    <span key={idx} className="subject-pill">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Alternative Government Diplomas & NVQ */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <FileText size={16} className="heading-icon" />
                {isSi ? "විකල්ප රජයේ ඩිප්ලෝමා සහ NVQ මාර්ග" : "Alternative Pathways & Vocational Diplomas"}
              </h4>
              <p className="inner-card-highlight">
                {isSi
                  ? "A/L ලකුණු මදි වූවොත් හෝ විකල්ප මඟකින් යෑමට කැමති අයට:"
                  : "Sri Lankan pathways for students seeking alternative routes:"}
              </p>
              <ul className="guidance-bullets">
                {career.education.alternativePathways.map((alt, idx) => (
                  <li key={idx}>
                    <strong>{isSi ? `විකල්ප මාර්ගය ${idx + 1}:` : `Pathway ${idx + 1}:`}</strong> {alt}
                  </li>
                ))}
                <li>
                  <strong>{isSi ? "SLIATE රජයේ ඩිප්ලෝමා:" : "SLIATE Government Diplomas:"}</strong>{" "}
                  {isSi
                    ? "අධ්‍යාපන අමාත්‍යාංශය යටතේ නොමිලේ පවත්වනු ලබන උසස් ජාතික ඩිප්ලෝමා (HNDIT, HNDE, HNDA)."
                    : "Tuition-free higher national diplomas (HNDIT, HNDE, HNDA) under the Ministry of Education."}
                </li>
                <li>
                  <strong>{isSi ? "NVQ මට්ටම 4–6:" : "NVQ Level 4–6:"}</strong>{" "}
                  {isSi
                    ? "NAITA, VTA සහ ජර්මානු කාර්මික අභ්‍යාස ආයතනය (CGTTI / German Tech) මගින් පිරිනමන ජාතික වෘත්තීය සුදුසුකම්."
                    : "National Vocational Qualifications provided by NAITA, VTA, and Ceylon German Technical Training Institute (CGTTI)."}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            SECTION 5: ACTIONABLE 5-STAGE ROADMAP (DYNAMICALLY RECONFIGURED)
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-section-card glass-panel">
          <div className="section-card-header">
            <span className="section-bubble tone-forest">
              <Route size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "5 වන පියවර: ක්‍රියාකාරී Roadmap එක" : "STAGE 5: ACTION PLAN"}
              </span>
              <h3 className="section-title">
                {isSi
                  ? `ඔයාගෙ ${career.sinhalaTitle} Roadmap එක`
                  : `Your Actionable Roadmap for ${career.title}`}
              </h3>
              <p className="section-desc">
                {isSi
                  ? `ඔයා තෝරාගත් ${selectedSpecialization} සහ ${selectedUni?.name || "University"} ඉලක්ක කරගත් පියවරෙන් පියවර සැලැස්ම.`
                  : `Personalized plan tailored to ${selectedSpecialization} at ${selectedUni?.name || "University"}.`}
              </p>
            </div>
          </div>

          <div className="milestones-timeline-stack">
            {roadmapData.milestones.map((m, idx) => {
              const isExpanded = !!expandedMilestones[idx];
              return (
                <div key={idx} className="milestone-step-card glass-panel">
                  <div
                    className="milestone-card-header"
                    onClick={() => toggleMilestone(idx)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="milestone-title-wrap">
                      <span className="step-number-circle">{idx + 1}</span>
                      <div>
                        <div className="milestone-stage-tag">
                          {isSi ? formatMilestoneStageSi(m.stageKey) : m.stageKey.replace(/_/g, " ")}
                        </div>
                        <h4 className="milestone-title">{m.title}</h4>
                      </div>
                    </div>

                    <div className="milestone-toggle-col">
                      <span className="milestone-duration-pill">
                        ⏱ {isSi ? `මාස ~${m.durationMonths}` : `${m.durationMonths} Months`}
                      </span>
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="milestone-card-body">
                      <p className="milestone-desc-text">{m.description}</p>
                      <div className="milestone-why-box">
                        <strong>{isSi ? "ලංකාවේදී මෙහි වැදගත්කම:" : "Why it matters in Sri Lanka:"}</strong>{" "}
                        {m.whyItMatters}
                      </div>

                      {/* Checklist Tasks */}
                      <div className="milestone-tasks-container">
                        <span className="tasks-eyebrow">
                          {isSi ? "සම්පූර්ණ කළ යුතු Tasks:" : "Actionable Checklist Tasks:"}
                        </span>
                        <div className="tasks-grid">
                          {m.tasks.map((task, tIdx) => (
                            <div key={tIdx} className="milestone-task-item glass-panel">
                              <CheckCircle2 size={16} className="task-check-icon" />
                              <div className="task-info">
                                <span className="task-title">{task.title}</span>
                                {task.notes && <span className="task-notes">{task.notes}</span>}
                              </div>
                              {task.resourceUrl && (
                                <Link
                                  href={task.resourceUrl}
                                  className="task-resource-link"
                                >
                                  <span>{isSi ? "විස්තර" : "View"}</span>
                                  <ArrowRight size={13} />
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────────────────────
            SECTION 6: STICKY BOTTOM SAVE & REDIRECT ACTION BAR
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-save-bar glass-panel">
          <div className="save-bar-info">
            <Route size={24} className="save-bar-icon" />
            <div>
              <strong className="save-bar-title">
                {isSi ? "මේ Roadmap එක ඔයාගෙ Profile එකට Save කරන්න සූදානම්ද?" : "Ready to follow this pathway?"}
              </strong>
              <p className="save-bar-desc">
                {isSi
                  ? `${career.sinhalaTitle} (${selectedSpecialization}) roadmap එක ${selectedUni?.name || "University"} සමඟ Save කර My Path පිටුවෙන් track කරන්න.`
                  : `Save your customized ${career.title} roadmap (${selectedSpecialization}) at ${selectedUni?.name || "University"} to your dashboard.`}
              </p>
            </div>
          </div>

          <div className="save-bar-actions">
            <button
              type="button"
              onClick={handleSavePath}
              disabled={isSaving}
              className="glass-button gold-glass save-main-btn"
            >
              {savedSuccess ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>{isSi ? "Save වුණා! My Path එකට යනවා..." : "Saved! Opening My Path..."}</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>
                    {isSaving
                      ? (isSi ? "Save වෙනවා..." : "Saving Roadmap...")
                      : (isSi ? "Save කර My Path එකට යන්න" : "Save & Open My Path Dashboard")}
                  </span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

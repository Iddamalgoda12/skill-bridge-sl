"use client";

import { Fragment, useState, useMemo, useEffect, useRef } from "react";
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
  School,
  Compass,
  Sliders,
  CheckCheck,
  Cpu,
  Zap,
  Cog,
  Radio,
  Bot,
  FlaskConical,
  HeartPulse,
  Ship,
  Pickaxe,
  Plane,
  Cloud,
  Shield,
  Brain,
  Palette,
  Database,
} from "lucide-react";
import { careerDetails, type CareerDetail } from "@/lib/data/careerDetails";
import { sampleCareers } from "@/lib/data/careers";
import { saveGeneratedPath, fetchUserPaths, type PathPreferences, type CareerPathRecord } from "@/lib/api/paths";
import { MILESTONE_PHASES, getMilestonePhase } from "@/lib/data/milestonePhases";
import {
  generatePersonalizedPath,
  SRI_LANKAN_DISTRICTS,
  type StudentProfileInput,
} from "@/lib/data/pathEngine";
import { getCareerOlGuidance } from "@/lib/data/olGuidance";
import {
  ENGINEERING_DISCIPLINES,
  getEngineeringDiscipline,
  type EngineeringDiscipline,
} from "@/lib/data/engineeringDisciplines";

const ENG_ICON_MAP: Record<string, typeof Building2> = {
  Building2,
  Cpu,
  Zap,
  Cog,
  Radio,
  Bot,
  FlaskConical,
  HeartPulse,
  Ship,
  Layers,
  Pickaxe,
  Plane,
  Cloud,
  Shield,
  Brain,
  Palette,
  Database,
};

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

const DISTRICT_SI: Record<string, string> = {
  Colombo: "කොළඹ", Gampaha: "ගම්පහ", Kalutara: "කළුතර", Kandy: "මහනුවර", Matale: "මාතලේ", "Nuwara Eliya": "නුවරඑළිය",
  Galle: "ගාල්ල", Matara: "මාතර", Hambantota: "හම්බන්තොට", Jaffna: "යාපනය", Kilinochchi: "කිලිනොච්චිය", Mannar: "මන්නාරම",
  Vavuniya: "වවුනියාව", Mullaitivu: "මුලතිව්", Batticaloa: "මඩකලපුව", Ampara: "අම්පාර", Trincomalee: "ත්‍රිකුණාමලය",
  Kurunegala: "කුරුණෑගල", Puttalam: "පුත්තලම", Anuradhapura: "අනුරාධපුරය", Polonnaruwa: "පොළොන්නරුව", Badulla: "බදුල්ල",
  Monaragala: "මොණරාගල", Ratnapura: "රත්නපුර", Kegalle: "කෑගල්ල",
};

// Districts where state-university cut-offs are usually highest
const HIGH_CUTOFF_DISTRICTS = ["Colombo", "Gampaha", "Kandy", "Galle", "Matara", "Kurunegala"];

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

  const selectedChipRef = useRef<HTMLButtonElement | null>(null);

  // Saved paths: used to warn about duplicates and to reuse the district chosen before
  const [savedPaths, setSavedPaths] = useState<CareerPathRecord[]>([]);
  useEffect(() => {
    let cancelled = false;
    fetchUserPaths().then((list) => {
      if (cancelled) return;
      setSavedPaths(list);
      const saved = paramCareer && list.find((p) => p.targetCareerSlug === paramCareer && p.district);
      if (saved && saved.district) setSelectedDistrict(saved.district);
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedChipRef.current) {
      selectedChipRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedCareerSlug]);

  // Selected Career Object
  const career: CareerDetail = useMemo(() => {
    return careerDetails[selectedCareerSlug] || careerDetails["engineer"];
  }, [selectedCareerSlug]);

  // Engineering Disciplines support
  const paramField = searchParams.get("field");
  const [selectedEngineeringFieldId, setSelectedEngineeringFieldId] = useState<string>(() => {
    if (paramField && getEngineeringDiscipline(paramField)) {
      return paramField;
    }
    return "software-engineering";
  });
  const [engCategoryFilter, setEngCategoryFilter] = useState<"all" | "civil" | "mechanical" | "computing" | "specialized">("all");

  const isEngineer = career.slug === "engineer";

  // Follow the URL when it changes (adjusting state during render instead of in an effect)
  const [syncedCareerParam, setSyncedCareerParam] = useState(paramCareer);
  if (paramCareer !== syncedCareerParam) {
    setSyncedCareerParam(paramCareer);
    if (paramCareer && careerDetails[paramCareer]) {
      if (paramCareer === "software-engineer") {
        setSelectedCareerSlug("engineer");
        setSelectedEngineeringFieldId("software-engineering");
      } else {
        setSelectedCareerSlug(paramCareer);
      }
      setSelectedCategory("All Fields");
      setSearchQuery("");
    }
  }
  const [syncedFieldParam, setSyncedFieldParam] = useState(paramField);
  if (paramField !== syncedFieldParam) {
    setSyncedFieldParam(paramField);
    if (paramField && getEngineeringDiscipline(paramField)) setSelectedEngineeringFieldId(paramField);
  }

  const selectedEngineeringDiscipline = useMemo(() => {
    if (!isEngineer) return undefined;
    return getEngineeringDiscipline(selectedEngineeringFieldId) || ENGINEERING_DISCIPLINES[0];
  }, [isEngineer, selectedEngineeringFieldId]);

  const filteredEngineeringDisciplines = useMemo(() => {
    if (engCategoryFilter === "all") return ENGINEERING_DISCIPLINES;
    return ENGINEERING_DISCIPLINES.filter((d) => d.category === engCategoryFilter);
  }, [engCategoryFilter]);

  // Active available universities (dynamically scoped if engineer)
  const availableUniversities = useMemo(() => {
    if (isEngineer && selectedEngineeringDiscipline) {
      return selectedEngineeringDiscipline.universities.map((u) => ({
        name: u.name,
        slug: u.slug || "moratuwa",
        type: u.type === "STATE" ? "State University" : "Private / Defence University",
        degreeName: u.degreeName,
        faculty: u.faculty,
        duration: u.duration,
        accreditation: "Washington Accord / IESL",
      }));
    }
    return career.universities;
  }, [isEngineer, selectedEngineeringDiscipline, career.universities]);

  // Reset university/specialisation to sensible defaults whenever the career or discipline changes
  const defaultsKey = `${career.slug}|${selectedEngineeringDiscipline?.id ?? ""}`;
  const [appliedDefaultsKey, setAppliedDefaultsKey] = useState("");
  if (appliedDefaultsKey !== defaultsKey) {
    setAppliedDefaultsKey(defaultsKey);
    if (isEngineer && selectedEngineeringDiscipline) {
      if (selectedEngineeringDiscipline.universities.length > 0) {
        setSelectedUniversitySlug(selectedEngineeringDiscipline.universities[0].slug || "moratuwa");
      }
      setSelectedSpecialization(selectedEngineeringDiscipline.specialisations[0] ?? selectedEngineeringDiscipline.titleEn);
    } else {
      setSelectedSpecialization(career.futureOutlook.growingSpecializations[0] ?? "Core Discipline");
      if (career.universities.length > 0) setSelectedUniversitySlug(career.universities[0].slug);
    }
    setSavedSuccess(false);
  }

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
      availableUniversities.find((u) => u.slug === selectedUniversitySlug) ||
      availableUniversities[0]
    );
  }, [availableUniversities, selectedUniversitySlug]);

  // Authentic O/L curriculum guidance (Ministry of Education & Department of Examinations)
  const olGuidance = useMemo(() => {
    return getCareerOlGuidance(career.slug, career.category, selectedEngineeringDiscipline?.id);
  }, [career.slug, career.category, selectedEngineeringDiscipline]);

  // Generate dynamic customized roadmap from student's exact choices
  const roadmapData = useMemo(() => {
    const profile: StudentProfileInput = {
      educationStage: "ol",
      currentStream: selectedEngineeringDiscipline ? selectedEngineeringDiscipline.alStream : career.education.alStream,
      district: selectedDistrict,
      budgetTier: "FLEXIBLE",
      targetCareerSlug: career.slug,
      targetSpecialization: selectedEngineeringDiscipline
        ? `${selectedEngineeringDiscipline.titleEn}${selectedSpecialization ? ` (${selectedSpecialization})` : ""}`
        : selectedSpecialization,
      engineeringFieldId: selectedEngineeringDiscipline?.id,
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
    return generatePersonalizedPath(career.slug, profile, isSi);
  }, [career, selectedDistrict, selectedSpecialization, selectedEngineeringDiscipline, selectedUni, preferredRoute, isSi]);

  const olGuideContent = (
          <div className="grid-2 blueprint-inner-grid">
            {/* Core Required Subjects */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <CheckCircle2 size={16} className="heading-icon" />
                {isSi ? "අනිවාර්ය ප්‍රධාන විෂයයන් 6 සහ ඉලක්කගත සාමාර්ථ" : "Mandatory 6 Core Subjects & Minimum Grades"}
              </h4>
              <p className="inner-card-highlight">
                {isSi ? olGuidance.sinhalaCoreSummary : olGuidance.coreSummary}
              </p>
              <ul className="guidance-bullets">
                <li>
                  <strong>{isSi ? "ගණිතය (Mathematics):" : "Mathematics:"}</strong>{" "}
                  {isSi
                    ? "විද්‍යා, තාක්ෂණවේද සහ වාණිජ අංශ සඳහා අවම 'C' හෝ 'A' සාමාර්ථයක් අවශ්‍ය වේ."
                    : "Minimum Credit ('C') or Distinction ('A') required to enter Science, Technology, and Commerce streams."}
                </li>
                <li>
                  <strong>{isSi ? "විද්‍යාව (Science):" : "Science:"}</strong>{" "}
                  {isSi
                    ? "භෞතික හා ජීව විද්‍යා ධාරාවන්ට ඇතුළත් වීමට 'A' හෝ 'C' සාමාර්ථයක් අනිවාර්ය වේ."
                    : "Distinction ('A') or Credit ('C') prerequisite for Physical and Biological Science streams."}
                </li>
                <li>
                  <strong>{isSi ? "ඉංග්‍රීසි (English Language):" : "English Language:"}</strong>{" "}
                  {isSi
                    ? "විශ්වවිද්‍යාල උපාධි පාඨමාලා, තාක්ෂණික පොත්පත් සහ රැකියා වෙළඳපොළ සඳහා අත්‍යවශ්‍ය වේ."
                    : "Essential for university undergraduate degrees, technical documentation, and professional examinations."}
                </li>
                <li>
                  <strong>{isSi ? "මව්බස (Sinhala / Tamil):" : "Mother Tongue:"}</strong>{" "}
                  {isSi
                    ? "රාජ්‍ය සේවයට සහ උසස් පෙළ හැදෑරීමට මූලික සුදුසුකමකි."
                    : "Sinhala or Tamil Language & Literature; official medium of secondary education."}
                </li>
                <li>
                  <strong>{isSi ? "ආගම සහ ඉතිහාසය:" : "Religion & History:"}</strong>{" "}
                  {isSi
                    ? "සාමාන්‍ය පෙළ සම්පූර්ණ කිරීම සඳහා වන අනිවාර්ය ජාතික විෂය මාලාවේ කොටසකි."
                    : "Compulsory subjects fulfilling the 6 mandatory core passes at G.C.E. O/L."}
                </li>
              </ul>
            </div>

            {/* Recommended Elective Basket Subjects */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <Sparkles size={16} className="heading-icon" />
                {isSi ? "තෝරාගත යුතු O/L කාණ්ඩ විෂයයන් 3" : "Recommended O/L Elective Basket Subjects"}
              </h4>
              <p className="inner-card-highlight">
                {isSi
                  ? "ශ්‍රී ලංකා O/L විෂය මාලාවේ එක් එක් කාණ්ඩයෙන් 1 බැගින් තෝරාගත යුතුය:"
                  : "Choose 1 subject from each of the 3 official Ministry of Education baskets:"}
              </p>

              <div className="ol-baskets-container">
                {/* Basket 1 */}
                <div className="ol-basket-row">
                  <div className="ol-basket-badge-row">
                    <span className="ol-basket-label">
                      {isSi ? olGuidance.basket1.sinhalaBasketTitle : olGuidance.basket1.basketTitle}
                    </span>
                    <span className="ol-subject-badge">
                      {isSi ? olGuidance.basket1.sinhalaRecommendedSubject : olGuidance.basket1.recommendedSubject}
                    </span>
                  </div>
                  <p className="ol-basket-reason">
                    {isSi ? olGuidance.basket1.sinhalaReason : olGuidance.basket1.reason}
                  </p>
                  <p className="ol-basket-alt">
                    <em>{isSi ? "විකල්ප:" : "Alternatives:"}</em> {isSi ? olGuidance.basket1.sinhalaAlternatives : olGuidance.basket1.alternatives}
                  </p>
                </div>

                {/* Basket 2 */}
                <div className="ol-basket-row">
                  <div className="ol-basket-badge-row">
                    <span className="ol-basket-label">
                      {isSi ? olGuidance.basket2.sinhalaBasketTitle : olGuidance.basket2.basketTitle}
                    </span>
                    <span className="ol-subject-badge">
                      {isSi ? olGuidance.basket2.sinhalaRecommendedSubject : olGuidance.basket2.recommendedSubject}
                    </span>
                  </div>
                  <p className="ol-basket-reason">
                    {isSi ? olGuidance.basket2.sinhalaReason : olGuidance.basket2.reason}
                  </p>
                  <p className="ol-basket-alt">
                    <em>{isSi ? "විකල්ප:" : "Alternatives:"}</em> {isSi ? olGuidance.basket2.sinhalaAlternatives : olGuidance.basket2.alternatives}
                  </p>
                </div>

                {/* Basket 3 */}
                <div className="ol-basket-row">
                  <div className="ol-basket-badge-row">
                    <span className="ol-basket-label">
                      {isSi ? olGuidance.basket3.sinhalaBasketTitle : olGuidance.basket3.basketTitle}
                    </span>
                    <span className="ol-subject-badge">
                      {isSi ? olGuidance.basket3.sinhalaRecommendedSubject : olGuidance.basket3.recommendedSubject}
                    </span>
                  </div>
                  <p className="ol-basket-reason">
                    {isSi ? olGuidance.basket3.sinhalaReason : olGuidance.basket3.reason}
                  </p>
                  <p className="ol-basket-alt">
                    <em>{isSi ? "විකල්ප:" : "Alternatives:"}</em> {isSi ? olGuidance.basket3.sinhalaAlternatives : olGuidance.basket3.alternatives}
                  </p>
                </div>

                {/* Optional 10th Subject: Additional Mathematics */}
                <div className="ol-add-maths-card">
                  <div className="ol-add-maths-header">
                    <span className="ol-add-maths-title">
                      ➕ {isSi ? "අතිරේක ගණිතය (Additional Mathematics)" : "Additional Mathematics (Optional 10th Subject)"}
                    </span>
                    <span className="ol-add-maths-badge">
                      {isSi ? olGuidance.additionalMaths.sinhalaBadgeText : olGuidance.additionalMaths.badgeText}
                    </span>
                  </div>
                  <p className="ol-add-maths-desc">
                    {isSi ? olGuidance.additionalMaths.sinhalaReason : olGuidance.additionalMaths.reason}
                  </p>
                </div>
              </div>

              <p className="guidance-note">
                💡 <em>{isSi ? "උපදෙස:" : "Junior Tip:"}</em>{" "}
                {isSi ? olGuidance.sinhalaJuniorTip : olGuidance.juniorTip}
              </p>
            </div>
          </div>
  );

  const alGuideContent = (
          <div className="grid-2 blueprint-inner-grid">
            {/* A/L Stream & Subject Combination */}
            <div className="inner-detail-card glass-panel">
              <h4 className="detail-card-heading">
                <Layers size={16} className="heading-icon" />
                {isSi ? "නියමිත UGC A/L Stream එක" : "Official UGC Stream & Subject Combination"}
              </h4>
              <div className="stream-badge-box">
                <span className="stream-title-label">{isSi ? "අවශ්‍ය Stream එක:" : "Required Stream:"}</span>
                <span className="stream-name-highlight">
                  {isEngineer && selectedEngineeringDiscipline
                    ? selectedEngineeringDiscipline.alStream
                    : career.education.alStream}
                </span>
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
                <span className="zscore-value">
                  {isEngineer && selectedEngineeringDiscipline
                    ? selectedEngineeringDiscipline.zScoreTarget
                    : career.education.zScoreRange}
                </span>
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
  );

  const toggleMilestone = (idx: number) => {
    setExpandedMilestones((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleSavePath = async () => {
    if (isSaving) return;
    setIsSaving(true);
    try {
      await saveGeneratedPath(roadmapData, {
        specialization: selectedSpecialization || undefined,
        universityName: selectedUni?.name,
        universitySlug: selectedUni?.slug,
        degreeName: selectedUni?.degreeName,
        route: preferredRoute,
        engineeringFieldId: selectedEngineeringDiscipline?.id,
      } satisfies PathPreferences);
      setSavedSuccess(true);
      setTimeout(() => {
        window.location.href = "/my-path";
      }, 450);
    } catch (err) {
      console.error("Save path error:", err);
      setSavedSuccess(true);
      setTimeout(() => {
        window.location.href = "/my-path";
      }, 450);
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

        <h2 className="selection-heading-title">
          <Sparkles size={22} className="sparkle-gold-icon" />
          {isSi ? "ඔබගේ Career එක තෝරන්න" : "Choose Your Career"}
        </h2>

        <div className="selection-controls-bar">
          <div className="search-input-wrap">
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              type="search"
              aria-label={isSi ? "වෘත්තියක් සොයන්න" : "Search careers"}
              placeholder={
                isSi
                  ? "කැමති career එක search කරන්න (e.g. Engineer, Doctor, Lawyer, Accountant...)"
                  : "Search dream career (e.g. Engineer, Doctor, Lawyer, Accountant...)"
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
                ref={isSelected ? selectedChipRef : undefined}
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
                  <span className="picker-sinhala" lang="si">{c.sinhalaTitle}</span>
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
                  <h2 className="career-main-title">
                    {isEngineer && selectedEngineeringDiscipline
                      ? selectedEngineeringDiscipline.titleEn
                      : career.title}
                  </h2>
                  <p className="career-sinhala-subtitle" lang="si">
                    {isEngineer && selectedEngineeringDiscipline
                      ? selectedEngineeringDiscipline.titleSi
                      : career.sinhalaTitle}
                  </p>
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

              <p className="career-tagline-text">
                {isEngineer && selectedEngineeringDiscipline
                  ? (isSi ? `${selectedEngineeringDiscipline.degree} — ${selectedEngineeringDiscipline.summarySi}` : `${selectedEngineeringDiscipline.degree} — ${selectedEngineeringDiscipline.summaryEn}`)
                  : career.tagline}
              </p>
              <p className="career-role-desc">
                {isEngineer && selectedEngineeringDiscipline
                  ? (isSi ? selectedEngineeringDiscipline.summarySi : selectedEngineeringDiscipline.summaryEn)
                  : career.roleOverview.whatTheyDo}
              </p>

              {/* 4 Quick Stat Badges */}
              <div className="blueprint-stats-grid">
                <div
                  className="stat-card glass-panel"
                  title={
                    isEngineer && selectedEngineeringDiscipline
                      ? selectedEngineeringDiscipline.salaryLkr
                      : isSi
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
                      {isEngineer && selectedEngineeringDiscipline
                        ? selectedEngineeringDiscipline.salaryLkr.replace("/ mo", "").trim()
                        : `LKR ${Math.round(career.salary.entryLevel.min / 1000)}k – ${Math.round(career.salary.seniorLevel.max / 1000)}k`}
                    </strong>
                  </div>
                </div>

                <div
                  className="stat-card glass-panel"
                  title={
                    isEngineer && selectedEngineeringDiscipline
                      ? selectedEngineeringDiscipline.alStream
                      : career.education.alStream
                  }
                >
                  <BookOpen size={17} className="stat-icon tone-mint" />
                  <div>
                    <span className="stat-label">
                      {isSi ? "අවශ්‍ය A/L Stream" : "Required A/L Stream"}
                    </span>
                    <strong className="stat-val">
                      {isEngineer && selectedEngineeringDiscipline
                        ? formatCompactStream(selectedEngineeringDiscipline.alStream, isSi)
                        : formatCompactStream(career.education.alStream, isSi)}
                    </strong>
                  </div>
                </div>

                <div
                  className="stat-card glass-panel"
                  title={
                    isEngineer && selectedEngineeringDiscipline
                      ? selectedEngineeringDiscipline.zScoreTarget
                      : career.education.zScoreRange
                  }
                >
                  <Trophy size={17} className="stat-icon tone-peach" />
                  <div>
                    <span className="stat-label">
                      {isSi ? "UGC Z-Score ඉලක්කය" : "UGC Z-Score Target"}
                    </span>
                    <strong className="stat-val">
                      {isEngineer && selectedEngineeringDiscipline
                        ? formatCompactZScore(selectedEngineeringDiscipline.zScoreTarget, isSi)
                        : formatCompactZScore(career.education.zScoreRange, isSi)}
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
                    {isSi
                      ? isEngineer
                        ? "ශ්‍රී ලංකාවේ ඉංජිනේරු ක්ෂේත්‍ර 17 න් ඔබ කැමති ක්ෂේත්‍රය තෝරන්න (O/L, A/L සහ University ඒ අනුව වෙනස් වේ):"
                        : "මේ career එක යටතේ ලංකාවේ වැඩි ඉල්ලුමක් ඇති අංශ:"
                      : isEngineer
                        ? "Choose from all 17 recognized Sri Lankan engineering disciplines:"
                        : "High-growth industry focus areas in Sri Lanka:"}
                  </p>
                </div>
              </div>

              {isEngineer ? (
                <div className="eng-selector-container">
                  <div className="eng-filter-tabs-row">
                    {[
                      { id: "all", labelEn: `All Disciplines (${ENGINEERING_DISCIPLINES.length})`, labelSi: `සියලු ක්ෂේත්‍ර (${ENGINEERING_DISCIPLINES.length})` },
                      { id: "computing", labelEn: "Software, Cloud & Tech", labelSi: "මෘදුකාංග, Cloud හා Tech" },
                      { id: "civil", labelEn: "Infrastructure & Civil", labelSi: "සිවිල් හා යටිතල පහසුකම්" },
                      { id: "mechanical", labelEn: "Machinery, Power & Robotics", labelSi: "යාන්ත්‍රික, විදුලි හා රොබෝ" },
                      { id: "specialized", labelEn: "High-Tech & Specialized", labelSi: "අභ්‍යවකාශ, නාවික හා ජෛව" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        className={`eng-filter-tab-pill ${engCategoryFilter === tab.id ? "active" : ""}`}
                        onClick={() => setEngCategoryFilter(tab.id as typeof engCategoryFilter)}
                      >
                        {isSi ? tab.labelSi : tab.labelEn}
                      </button>
                    ))}
                  </div>

                  <div className="eng-disciplines-grid">
                    {filteredEngineeringDisciplines.map((disc) => {
                      const IconComponent = ENG_ICON_MAP[disc.iconName] || Building2;
                      const isSelected = selectedEngineeringFieldId === disc.id;
                      return (
                        <button
                          key={disc.id}
                          type="button"
                          className={`eng-disc-card ${isSelected ? "selected" : ""}`}
                          onClick={() => setSelectedEngineeringFieldId(disc.id)}
                        >
                          <div className="eng-disc-icon-box">
                            <IconComponent size={20} />
                          </div>
                          <div className="eng-disc-content">
                            <div className="eng-disc-top-row">
                              <span className="eng-disc-badge">{disc.badge}</span>
                              {isSelected && <CheckCheck size={16} style={{ color: "#2e7559" }} />}
                            </div>
                            <strong className="eng-disc-title">
                              {isSi ? disc.titleSi : disc.titleEn}
                            </strong>
                            <span className="eng-disc-title-si">
                              {isSi ? disc.titleEn : disc.titleSi}
                            </span>
                            <span className="eng-disc-salary">
                              {disc.salaryLkr}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {selectedEngineeringDiscipline && (
                    <div className="eng-active-detail-panel">
                      <div className="eng-active-header-row">
                        <div>
                          <h5 style={{ fontWeight: 700, color: "#1e293b", fontSize: "14px", margin: 0 }}>
                            {isSi ? "තෝරාගත් ඉංජිනේරු ක්ෂේත්‍රය:" : "Selected Engineering Pathway:"}{" "}
                            <span style={{ color: "#2e7559" }}>
                              {isSi ? selectedEngineeringDiscipline.titleSi : selectedEngineeringDiscipline.titleEn}
                            </span>
                          </h5>
                          <span className="eng-active-degree-tag" style={{ marginTop: "4px", display: "inline-block" }}>
                            🎓 {selectedEngineeringDiscipline.degree}
                          </span>
                        </div>
                        <div style={{ fontSize: "12px", color: "#475569" }}>
                          <strong>{isSi ? "ඉලක්ක Z-Score:" : "Cutoff Benchmark:"}</strong>{" "}
                          {selectedEngineeringDiscipline.zScoreTarget.split(",")[0]}
                        </div>
                      </div>

                      <div>
                        <h6 className="eng-subspecs-title">
                          {isSi ? "ප්‍රධාන විශේෂීකරණ ක්ෂේත්‍ර (Specialisations):" : "High-Growth Specialisations in this Field:"}
                        </h6>
                        <div className="specializations-chips-wrap">
                          {selectedEngineeringDiscipline.specialisations.map((spec, sIdx) => {
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

                      <div style={{ fontSize: "12px", color: "#475569", marginTop: "4px" }}>
                        <strong>{isSi ? "ප්‍රමුඛ ලාංකික සේවා යෝජකයින්:" : "Top Sri Lankan Employers:"}</strong>{" "}
                        {selectedEngineeringDiscipline.employers.join(" · ")}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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
              )}
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
              {(() => {
                const districtName = (d: string) => (isSi ? DISTRICT_SI[d] || d : d);
                const highCutoff = HIGH_CUTOFF_DISTRICTS.includes(selectedDistrict);
                return (
                  <>
                    <div className="district-info-left">
                      <span className="choice-num-badge">3</span>
                      <div>
                        <h4 className="choice-title">
                          {isSi ? "ඔයාගෙ පාසල් දිස්ත්‍රික්කය (UGC Z-Score Quota එකට)" : "Select Your School's District"}
                        </h4>
                        <p className="choice-hint">
                          {isSi
                            ? "ලංකාවේ විශ්වවිද්‍යාල ප්‍රවේශයේදී Z-score කඩඉම් ලකුණු දිස්ත්‍රික්ක අනුව වෙනස් වේ."
                            : "State university cut-off marks differ by district. Choose the district of the school where you study A/L."}
                        </p>
                      </div>
                    </div>

                    <div className="district-grid" role="group" aria-label={isSi ? "දිස්ත්‍රික්ක" : "Districts"}>
                      {SRI_LANKAN_DISTRICTS.map((dist) => (
                        <button
                          key={dist}
                          type="button"
                          aria-pressed={selectedDistrict === dist}
                          className={`district-chip ${selectedDistrict === dist ? "active" : ""}`}
                          onClick={() => setSelectedDistrict(dist)}
                        >
                          {selectedDistrict === dist ? <Check size={14} /> : <MapPin size={14} className="district-chip-pin" />}
                          {districtName(dist)}
                        </button>
                      ))}
                    </div>

                    <div className={`district-insight ${highCutoff ? "high" : "favourable"}`}>
                      <MapPin size={16} />
                      <p>
                        <strong>
                          {districtName(selectedDistrict)} {isSi ? "දිස්ත්‍රික්කය" : "District"}
                          {" · "}
                          {highCutoff ? (isSi ? "ඉහළ තරඟකාරිත්වය" : "High competition") : (isSi ? "හිතකර quota" : "Favourable quota")}
                        </strong>{" "}
                        {highCutoff
                          ? isSi
                            ? "මෙහි Z-score කඩඉම් සාමාන්‍යයෙන් ඉහළයි. ඉලක්කගත පරාසයේ ඉහළ කොටස සඳහා සූදානම් වන්න."
                            : "Cut-offs here are usually among the highest. Aim for the upper part of the target Z-score range."
                          : isSi
                          ? "මෙහි දිස්ත්‍රික් quota මගින් සාපේක්ෂව පහළ කඩඉම් ලැබිය හැක. නිශ්චිත අගයන් UGC අත්පොතෙන් බලන්න."
                          : "District quota can mean lower cut-offs here. Confirm exact figures in the UGC handbook."}
                      </p>
                    </div>
                  </>
                );
              })()}
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
                {isSi ? "2 වන පියවර: විශ්වවිද්‍යාල සහ උපාධි පාඨමාලා" : "STAGE 2: UNIVERSITIES & DEGREE PROGRAMMES"}
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
            {availableUniversities.map((uni, idx) => {
              const isTargetUni = selectedUniversitySlug === uni.slug;
              const isState = uni.type.toLowerCase().includes("state") || !uni.type.toLowerCase().includes("private");

              return (
                <div
                  key={idx}
                  className={`university-entry-card glass-panel ${isTargetUni ? "is-target-selected" : ""} ${!isState ? "private-card" : ""}`}
                  onClick={() => setSelectedUniversitySlug(uni.slug)}
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
            SECTION 4: ACTIONABLE ROADMAP (DYNAMICALLY RECONFIGURED)
        ────────────────────────────────────────────────────────────────────────── */}
        <div className="blueprint-section-card glass-panel">
          <div className="section-card-header">
            <span className="section-bubble tone-forest">
              <Route size={20} />
            </span>
            <div>
              <span className="section-eyebrow">
                {isSi ? "3 වන පියවර: ක්‍රියාකාරී Roadmap එක" : "STAGE 3: ACTION PLAN"}
              </span>
              <h3 className="section-title">
                {isSi
                  ? `ඔයාගෙ ${isEngineer && selectedEngineeringDiscipline ? selectedEngineeringDiscipline.titleSi : career.sinhalaTitle} Roadmap එක`
                  : `Your Actionable Roadmap for ${isEngineer && selectedEngineeringDiscipline ? selectedEngineeringDiscipline.titleEn : career.title}`}
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
              const phase = getMilestonePhase(m.stageKey);
              const showPhase = idx === 0 || getMilestonePhase(roadmapData.milestones[idx - 1].stageKey) !== phase;
              return (
                <Fragment key={idx}>
                {showPhase && (
                  <div className="milestone-phase-heading">
                    {isSi ? MILESTONE_PHASES[phase].si : MILESTONE_PHASES[phase].en}
                  </div>
                )}
                <div className="milestone-step-card glass-panel">
                  <div
                    className="milestone-card-header"
                    onClick={() => toggleMilestone(idx)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="milestone-title-wrap">
                      <span className="step-number-circle">{idx + 1}</span>
                      <div>
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

                      {m.stageKey === "OL_MASTERY" && olGuideContent}
                      {m.stageKey === "AL_STREAM_PREP" && alGuideContent}

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
                                  target={task.resourceUrl.startsWith("http") ? "_blank" : undefined}
                                  rel={task.resourceUrl.startsWith("http") ? "noopener noreferrer" : undefined}
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
                </Fragment>
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
                  ? `${isEngineer && selectedEngineeringDiscipline ? selectedEngineeringDiscipline.titleSi : career.sinhalaTitle} (${selectedSpecialization}) roadmap එක ${selectedUni?.name || "University"} සමඟ Save කර My Path පිටුවෙන් track කරන්න.`
                  : `Save your customized ${isEngineer && selectedEngineeringDiscipline ? selectedEngineeringDiscipline.titleEn : career.title} roadmap (${selectedSpecialization}) at ${selectedUni?.name || "University"} to your dashboard.`}
              </p>
            </div>
          </div>

          {(() => {
            const sameCareer = savedPaths.filter((sp) => sp.targetCareerSlug === career.slug);
            if (sameCareer.length === 0) return null;
            const replaces = sameCareer.some((sp) => sp.title === roadmapData.title);
            return (
              <p className="save-bar-notice">
                {replaces
                  ? isSi
                    ? "මෙම තේරීම් සඳහා ඔබට දැනටමත් roadmap එකක් ඇත. Save කළොත් එය නව එකකින් ප්‍රතිස්ථාපනය වන අතර task ප්‍රගතිය නැවත ආරම්භ වේ."
                    : "You already saved this exact path. Saving again replaces it, and your task progress starts over."
                  : isSi
                  ? "මෙම වෘත්තිය සඳහා ඔබට වෙනත් roadmap එකක් ඇත. මෙය එයට අමතරව අලුත් roadmap එකක් ලෙස එකතු වේ."
                  : "You already have another path for this career. This will be added as a separate path in My Path."}
              </p>
            );
          })()}

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

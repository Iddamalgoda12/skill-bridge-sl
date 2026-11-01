// Intelligent Sri Lanka Career Path Generator & Recommendation Engine
// Sourced from UGC Admission Handbooks, Ministry of Education curriculum guidelines,
// and professional regulatory bodies (SLMC, IESL, SLIA, IQSSL, CA Sri Lanka, CAASL).

import { careerDetails, getCareerDetail, type CareerDetail } from "./careerDetails";
import { getCareerOlGuidance } from "./olGuidance";
import {
  getOlPrepTasks,
  getOlCareerMilestone,
  getAfterOlMilestone,
  getAlPrepTasks,
  getAlCareerMilestone,
  getAlApplicationMilestone,
} from "./studentStageGuidance";
import {
  getEngineeringDiscipline,
  ENGINEERING_DISCIPLINES,
  type EngineeringDiscipline,
} from "./engineeringDisciplines";

export type EducationStageKey =
  | "before-ol"
  | "ol"
  | "after-ol"
  | "al"
  | "after-al"
  | "university";

export interface StudentProfileInput {
  educationStage: EducationStageKey;
  currentStream?: string;
  district?: string;
  budgetTier?: string;
  interests?: string[];
  skills?: string[];
  olTargetOrActual?: Record<string, string>; // e.g. { maths: 'A', english: 'A', science: 'B' }
  alTargetOrActual?: Record<string, string>; // e.g. { zScore: '1.85', stream: 'Physical Science' }
  targetCareerSlug?: string;
  targetSpecialization?: string;
  engineeringFieldId?: string;
  targetUniversity?: { name: string; slug: string; degreeName: string; type: string; duration?: string; faculty?: string };
  preferredRoute?: "STATE_UGC" | "PRIVATE_GLOBAL" | "PROFESSIONAL_BODY";
}

export interface GeneratedTask {
  title: string;
  resourceUrl?: string;
  resourceType?: "CAREER" | "UNIVERSITY" | "COURSE" | "OFFICIAL_GUIDE";
  notes?: string;
}

export interface GeneratedMilestone {
  stageKey: string;
  title: string;
  description: string;
  whyItMatters: string;
  prerequisites?: string;
  durationMonths: number;
  tasks: GeneratedTask[];
}

export interface GeneratedCareerPath {
  title: string;
  targetCareerSlug: string;
  educationStage: EducationStageKey;
  currentStream: string;
  district: string;
  budgetTier: string;
  eligibilityStatus: "ELIGIBLE" | "POTENTIALLY_ELIGIBLE" | "ALTERNATIVE_PATHWAY";
  eligibilityExplanation: string;
  alternativeOptions: { slug: string; title: string; reason: string }[];
  milestones: GeneratedMilestone[];
  recommendedUniversities: { name: string; slug: string; degree: string; type: string }[];
  recommendedSubjects: string[];
}

export const EDUCATION_STAGES = [
  {
    id: "before-ol" as const,
    label: "Before O/L (Grades 7–9)",
    sinhalaLabel: "සාමාන්‍ය පෙළට පෙර",
    description: "Discovering passions, school subjects, and world careers.",
    tone: "tone-lavender",
  },
  {
    id: "ol" as const,
    label: "O/L Student (Grades 10–11)",
    sinhalaLabel: "සාමාන්‍ය පෙළ ශිෂ්‍ය",
    description: "Preparing for G.C.E. O/L exams and securing key credits.",
    tone: "tone-ice",
  },
  {
    id: "after-ol" as const,
    label: "After O/L (Awaiting Results)",
    sinhalaLabel: "සාමාන්‍ය පෙළ අවසන්",
    description: "Choosing the optimal A/L stream and subject combination.",
    tone: "tone-mint",
  },
  {
    id: "al" as const,
    label: "A/L Student (Grades 12–13)",
    sinhalaLabel: "උසස් පෙළ ශිෂ්‍ය",
    description: "Studying for G.C.E. A/L and targeting university Z-scores.",
    tone: "tone-peach",
  },
  {
    id: "after-al" as const,
    label: "After A/L (Awaiting Results / UGC)",
    sinhalaLabel: "උසස් පෙළ අවසන්",
    description: "Exploring state university admission and private alternatives.",
    tone: "tone-lavender",
  },
  {
    id: "university" as const,
    label: "University / Higher Education",
    sinhalaLabel: "විශ්වවිද්‍යාල ශිෂ්‍ය",
    description: "Pursuing degree, internships, charter, and career launch.",
    tone: "tone-mint",
  },
];

export const SRI_LANKAN_DISTRICTS = [
  "Colombo", "Gampaha", "Kalutara",
  "Kandy", "Matale", "Nuwara Eliya",
  "Galle", "Matara", "Hambantota",
  "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu",
  "Batticaloa", "Ampara", "Trincomalee",
  "Kurunegala", "Puttalam",
  "Anuradhapura", "Polonnaruwa",
  "Badulla", "Monaragala",
  "Ratnapura", "Kegalle"
];

export const AL_STREAMS = [
  "Physical Science (Maths)",
  "Biological Science (Bio)",
  "Commerce",
  "Arts",
  "Technology (Engineering Tech / Bio Tech)",
  "General / Open Stream"
];

export const BUDGET_TIERS = [
  { id: "GOVERNMENT_FREE", label: "Government Free Education (UGC State Universities)" },
  { id: "MODERATE_PRIVATE", label: "Private University in Sri Lanka (LKR 1.2M – 3.0M)" },
  { id: "PROFESSIONAL_INSTITUTE", label: "Professional Qualifications (CIMA, ACCA, CA, CIM, SLIA)" },
  { id: "FLEXIBLE", label: "Flexible (Consider Both State Merit & Private Options)" },
  { id: "SCHOLARSHIP_SEEKING", label: "Seeking Financial Scholarships / Mahapola Bursary" },
];

export const STUDENT_INTERESTS = [
  { id: "tech_coding", label: "Coding, AI & Software Development", icon: "Laptop" },
  { id: "health_medicine", label: "Medicine, Surgery & Patient Care", icon: "Heart" },
  { id: "building_infra", label: "Civil Engineering, Architecture & Construction", icon: "Building" },
  { id: "finance_markets", label: "Accounting, Banking & Corporate Investments", icon: "TrendingUp" },
  { id: "aviation_maritime", label: "Aircraft Flying, Radar & Merchant Ships", icon: "Compass" },
  { id: "nature_wildlife", label: "Wildlife, Oceans, Agriculture & Forests", icon: "Leaf" },
  { id: "design_fashion", label: "Creative Design, Fashion & Digital Media", icon: "Palette" },
  { id: "law_justice", label: "Law, Advocacy, Courtrooms & Justice", icon: "Scale" },
];

/**
 * Intelligent Career Recommender
 * Evaluates student stage, stream, interests, and results to rank suitable careers.
 */
export function recommendCareersForStudent(profile: StudentProfileInput): {
  career: CareerDetail;
  matchScore: number;
  matchReasons: string[];
  eligibility: "ELIGIBLE" | "POTENTIALLY_ELIGIBLE" | "ALTERNATIVE_PATHWAY";
}[] {
  const allCareers = Object.values(careerDetails).filter((career) => career.slug !== "software-engineer");

  return allCareers
    .map((career) => {
      let score = 50; // base score
      const matchReasons: string[] = [];
      let eligibility: "ELIGIBLE" | "POTENTIALLY_ELIGIBLE" | "ALTERNATIVE_PATHWAY" = "POTENTIALLY_ELIGIBLE";

      // 1. Stream Compatibility
      if (profile.currentStream) {
        const streamLower = profile.currentStream.toLowerCase();
        const reqStreamLower = career.education.alStream.toLowerCase();

        if (reqStreamLower.includes("any") || reqStreamLower.includes("any stream")) {
          score += 25;
          matchReasons.push("Accessible from any A/L stream");
          eligibility = "ELIGIBLE";
        } else if (streamLower.includes("maths") && reqStreamLower.includes("math")) {
          score += 30;
          matchReasons.push("Matches your Physical Science (Maths) stream");
          eligibility = "ELIGIBLE";
        } else if (streamLower.includes("bio") && reqStreamLower.includes("bio")) {
          score += 30;
          matchReasons.push("Matches your Biological Science stream");
          eligibility = "ELIGIBLE";
        } else if (streamLower.includes("commerce") && reqStreamLower.includes("commerce")) {
          score += 30;
          matchReasons.push("Matches your Commerce stream");
          eligibility = "ELIGIBLE";
        } else if (streamLower.includes("arts") && reqStreamLower.includes("arts")) {
          score += 30;
          matchReasons.push("Matches your Arts stream");
          eligibility = "ELIGIBLE";
        } else if (streamLower.includes("tech") && reqStreamLower.includes("tech")) {
          score += 25;
          matchReasons.push("Technology stream entry pathways available");
          eligibility = "ELIGIBLE";
        } else if (profile.educationStage === "before-ol" || profile.educationStage === "ol") {
          // Pre-A/L students can still freely choose their future stream
          score += 15;
          matchReasons.push("You can choose the required A/L stream after O/Ls");
          eligibility = "POTENTIALLY_ELIGIBLE";
        } else {
          score -= 15;
          matchReasons.push("Different A/L stream than standard; alternative entry routes required");
          eligibility = "ALTERNATIVE_PATHWAY";
        }
      }

      // 2. Student Interest Alignment
      if (profile.interests && profile.interests.length > 0) {
        const catLower = career.category.toLowerCase();
        const titleLower = career.title.toLowerCase();

        for (const interest of profile.interests) {
          if (interest === "tech_coding" && (catLower.includes("tech") || titleLower.includes("software") || titleLower.includes("engineer"))) {
            score += 25;
            matchReasons.push("Aligns strongly with your interest in technology and coding");
          }
          if (interest === "health_medicine" && (catLower.includes("health") || titleLower.includes("doctor") || titleLower.includes("dentist") || titleLower.includes("nurse"))) {
            score += 25;
            matchReasons.push("Aligns with your passion for healthcare and medicine");
          }
          if (interest === "building_infra" && (catLower.includes("built") || titleLower.includes("architect") || titleLower.includes("surveyor") || titleLower.includes("civil"))) {
            score += 25;
            matchReasons.push("Aligns with your interest in architecture and structural engineering");
          }
          if (interest === "finance_markets" && (catLower.includes("business") || titleLower.includes("accountant") || titleLower.includes("banker") || titleLower.includes("analyst"))) {
            score += 25;
            matchReasons.push("Directly fits your financial and business aspirations");
          }
          if (interest === "aviation_maritime" && (catLower.includes("aviation") || catLower.includes("maritime") || titleLower.includes("pilot") || titleLower.includes("marine") || titleLower.includes("traffic"))) {
            score += 30;
            matchReasons.push("Direct match for your aviation / maritime interest");
          }
          if (interest === "nature_wildlife" && (catLower.includes("science") || catLower.includes("tourism") || titleLower.includes("wildlife") || titleLower.includes("biologist") || titleLower.includes("naturalist") || titleLower.includes("tea"))) {
            score += 25;
            matchReasons.push("Great fit for your love of nature and ecological sciences");
          }
          if (interest === "design_fashion" && (catLower.includes("creative") || titleLower.includes("fashion") || titleLower.includes("architect") || titleLower.includes("marketer"))) {
            score += 25;
            matchReasons.push("Matches your creative and artistic design talents");
          }
          if (interest === "law_justice" && (catLower.includes("legal") || titleLower.includes("lawyer"))) {
            score += 30;
            matchReasons.push("Matches your passion for legal reasoning and justice");
          }
        }
      }

      // 3. District Quota Context
      if (profile.district) {
        if (career.slug === "doctor" || career.slug === "engineer" || career.slug === "dentist") {
          const highCutoffDistricts = ["Colombo", "Gampaha", "Kandy", "Galle", "Matara", "Kurunegala"];
          if (highCutoffDistricts.includes(profile.district)) {
            matchReasons.push(`Competitive quota in ${profile.district}; high Z-score target recommended`);
          } else {
            matchReasons.push(`Favorable district merit quota in ${profile.district}`);
            score += 10;
          }
        }
      }

      return {
        career,
        matchScore: Math.min(100, Math.max(10, score)),
        matchReasons: matchReasons.slice(0, 3),
        eligibility,
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Generates an Actionable, Customized Roadmap
 * from the student's exact current stage to the target career!
 */
export function generatePersonalizedPath(
  targetCareerSlug: string,
  profile: StudentProfileInput,
  isSi = false
): GeneratedCareerPath {
  const t = (en: string, si: string) => (isSi ? si : en);
  const career = getCareerDetail(targetCareerSlug) || careerDetails["engineer"];
  const isEngineer = career.slug === "engineer";
  const engDiscipline = isEngineer
    ? (profile.engineeringFieldId ? getEngineeringDiscipline(profile.engineeringFieldId) : undefined) ||
      getEngineeringDiscipline(profile.targetSpecialization || "") ||
      getEngineeringDiscipline("software-engineering")
    : undefined;

  const stage = profile.educationStage || "ol";
  const stream = profile.currentStream || (engDiscipline ? engDiscipline.alStream : career.education.alStream);
  const district = profile.district || "Colombo";
  const budget = profile.budgetTier || "FLEXIBLE";

  const milestones: GeneratedMilestone[] = [];

  // Determine eligibility status
  let eligibilityStatus: "ELIGIBLE" | "POTENTIALLY_ELIGIBLE" | "ALTERNATIVE_PATHWAY" = "ELIGIBLE";
  let eligibilityExplanation = engDiscipline
    ? `You meet the educational foundations for ${engDiscipline.titleEn}. Follow the roadmap milestones to attain required IESL / university benchmarks.`
    : `You meet the educational foundations for ${career.title}. Follow the milestones to achieve required benchmarks.`;

  const reqStreamLower = (engDiscipline ? engDiscipline.alStream : career.education.alStream).toLowerCase();
  const studentStreamLower = stream.toLowerCase();

  if (
    !reqStreamLower.includes("any") &&
    (stage === "after-ol" || stage === "al" || stage === "after-al" || stage === "university")
  ) {
    if (reqStreamLower.includes("math") && !studentStreamLower.includes("math")) {
      eligibilityStatus = "ALTERNATIVE_PATHWAY";
      eligibilityExplanation = `${career.title} typically requires Physical Science (Maths). Alternative diploma / private pathways are recommended.`;
    } else if (reqStreamLower.includes("bio") && !studentStreamLower.includes("bio")) {
      eligibilityStatus = "ALTERNATIVE_PATHWAY";
      eligibilityExplanation = `${career.title} requires Biological Science for state medical intake. Alternative foreign / allied health degrees recommended.`;
    }
  }

  // Obtain authentic O/L curriculum guidance for this career
  const olGuidance = getCareerOlGuidance(career.slug, career.category, engDiscipline?.id);

  // Build stage-specific milestones
  // Stage 1: Before O/L
  if (stage === "before-ol") {
    milestones.push({
      stageKey: "FOUNDATION_EXPLORATION",
      title: "Foundational Exploration & Junior School Subjects",
      description: "Build strong fundamental understanding in Mathematics, Science, and English while exploring career passions.",
      whyItMatters: "Junior secondary school builds the intellectual confidence and curiosity needed to excel in national examinations.",
      prerequisites: "Grade 7–9 School Curriculum",
      durationMonths: 12,
      tasks: [
        {
          title: "Explore career guide for " + career.title,
          resourceUrl: `/careers/${career.slug}`,
          resourceType: "CAREER",
          notes: "Read the daily responsibilities and Sri Lankan success stories."
        },
        {
          title: `Focus on core subjects: Mathematics, Science, and English (early target: ${olGuidance.basket3.recommendedSubject})`,
          notes: "Target distinction 'A' grades in term tests to build eligibility for premier A/L streams."
        },
        {
          title: "Join relevant school clubs (Science Society, ICT Club, English Debating, Commerce Society)",
          notes: "Develop communication and curiosity outside textbooks."
        }
      ]
    });
  }

  const careerLabel = career.title.split("/")[0].replace(/\(.*?\)/g, "").trim();
  const alStreamLabel = engDiscipline ? engDiscipline.alStream : career.education.alStream;

  // Stage 2: O/L preparation (for before-ol and ol): one prep milestone plus career-specific actions
  if (stage === "before-ol" || stage === "ol") {
    const olMonths = stage === "ol" ? 10 : 24;
    const basketList = isSi
      ? [olGuidance.basket1.sinhalaRecommendedSubject, olGuidance.basket2.sinhalaRecommendedSubject, olGuidance.basket3.sinhalaRecommendedSubject]
      : [olGuidance.basket1.recommendedSubject, olGuidance.basket2.recommendedSubject, olGuidance.basket3.recommendedSubject];
    milestones.push({
      stageKey: "OL_MASTERY",
      title: t("G.C.E. O/L Examination Mastery", "G.C.E. O/L විභාග සූදානම"),
      description: t(
        `Attain required O/L Credit passes: ${career.education.olRequirements}`,
        `අවශ්‍ය O/L සම්මාන සාමාර්ථ ලබාගන්න: ${isSi ? olGuidance.sinhalaCoreSummary : career.education.olRequirements}`
      ),
      whyItMatters: t(
        "O/L credits in Mathematics and English Language are mandatory legal prerequisites across all Sri Lankan universities and professional bodies.",
        "ගණිතය සහ ඉංග්‍රීසි භාෂාව සඳහා O/L සම්මාන සාමාර්ථ ශ්‍රී ලංකාවේ සියලු විශ්වවිද්‍යාල සහ වෘත්තීය ආයතන සඳහා අනිවාර්ය පූර්ව අවශ්‍යතා වේ."
      ),
      prerequisites: t("Completion of Grade 10 & 11 syllabus", "Grade 10 සහ 11 විෂය නිර්දේශය අවසන් කිරීම"),
      durationMonths: olMonths,
      tasks: [
        {
          title: t(
            `Confirm your elective baskets with your school: ${basketList.join(", ")}`,
            `ඔබේ විකල්ප කාණ්ඩ විෂයයන් පාසලෙන් තහවුරු කරගන්න: ${basketList.join(", ")}`
          ),
          notes: t(
            "Choose 1 subject from each of the 3 Ministry of Education baskets.",
            "අධ්‍යාපන අමාත්‍යාංශයේ කාණ්ඩ 3න් එක් එක් කාණ්ඩයෙන් විෂයයක් බැගින් තෝරන්න."
          )
        },
        {
          title: olGuidance.additionalMaths.recommended
            ? t(
                `Take Additional Mathematics as your optional 10th subject (${olGuidance.additionalMaths.badgeText})`,
                `අතිරේක ගණිතය ඔබේ විකල්ප 10 වන විෂයය ලෙස හදාරන්න (${olGuidance.additionalMaths.sinhalaBadgeText})`
              )
            : t(
                "Decide whether to take Additional Mathematics (optional 10th subject)",
                "අතිරේක ගණිතය (විකල්ප 10 වන විෂයය) හැදෑරිය යුතුදැයි තීරණය කරන්න"
              ),
          notes: isSi ? olGuidance.additionalMaths.sinhalaReason : olGuidance.additionalMaths.reason
        },
        ...getOlPrepTasks(stage === "ol", isSi),
      ]
    });
    milestones.push(getOlCareerMilestone(career, careerLabel, olMonths, isSi));
  }

  // Between O/L and A/L: results, school and stream choice
  if (stage === "after-ol") {
    milestones.push(getAfterOlMilestone(careerLabel, alStreamLabel, isSi));
  }

  // Stage 3: A/L study (for before-ol, ol, after-ol, al): one prep milestone plus career-specific actions
  if (stage === "before-ol" || stage === "ol" || stage === "after-ol" || stage === "al") {
    const streamTitle = alStreamLabel;
    const zScoreTarget = engDiscipline ? engDiscipline.zScoreTarget : career.education.zScoreRange;
    const careerName = engDiscipline ? (isSi ? engDiscipline.titleSi : engDiscipline.titleEn) : (isSi ? career.sinhalaTitle : career.title);
    const highCompetition = ["Colombo", "Gampaha", "Kandy"].includes(district);

    milestones.push({
      stageKey: "AL_STREAM_PREP",
      title: t(
        `A/L Preparation in ${streamTitle.split("or")[0].split("(")[0].trim()}`,
        `${streamTitle.split("or")[0].split("(")[0].trim()} සඳහා A/L සූදානම`
      ),
      description: t(
        `Follow the recommended A/L stream and target Z-score benchmark: ${zScoreTarget}`,
        `නිර්දේශිත A/L අංශය අනුගමනය කර ඉලක්කගත Z-score කඩඉම ලබාගන්න: ${zScoreTarget}`
      ),
      whyItMatters: t(
        `State university intake in Sri Lanka is strictly based on A/L Z-score district quotas (${district} quota applies).`,
        `ශ්‍රී ලංකාවේ රාජ්‍ය විශ්වවිද්‍යාල ඇතුළත් කිරීම සම්පූර්ණයෙන්ම A/L Z-score සහ දිස්ත්‍රික් quota මත රඳා පවතී (${district} quota අදාළ වේ).`
      ),
      prerequisites: t("Qualifying O/L examination passes", "සුදුසුකම් ලත් O/L විභාග සාමාර්ථ"),
      durationMonths: stage === "al" ? 12 : 24,
      tasks: [
        {
          title: t(`Lock in required A/L subject combination: ${streamTitle}`, `අවශ්‍ය A/L විෂය සංයෝජනය තහවුරු කරගන්න: ${streamTitle}`),
          notes: t(`Essential core subjects for ${careerName}.`, `${careerName} සඳහා අත්‍යවශ්‍ය ප්‍රධාන විෂයයන්.`)
        },
        {
          title: t(
            "Study your 3 core A/L subjects to the UGC handbook combination for your target faculty",
            "ඔබේ ඉලක්කගත පීඨයට අදාළ UGC අත්පොතේ සංයෝජනයට අනුව ප්‍රධාන A/L විෂයයන් 3 හදාරන්න"
          ),
          notes: t(
            "Subject combinations must match the UGC admission handbook for direct intake into state university faculties.",
            "රාජ්‍ය විශ්වවිද්‍යාල පීඨවලට සෘජුවම ඇතුළත් වීමට විෂය සංයෝජන UGC ඇතුළත් කිරීමේ අත්පොතට ගැළපිය යුතුයි."
          )
        },
        {
          title: t(`Aim for the typical state cut-off Z-score: ${zScoreTarget}`, `සාමාන්‍ය රාජ්‍ය කඩඉම් Z-score එක ඉලක්ක කරන්න: ${zScoreTarget}`),
          notes: career.education.competitionNote
        },
        {
          title: t(
            "Pass the Common General Test (minimum 30 marks) and sit General English",
            "Common General Test එක සමත් වන්න (අවම ලකුණු 30) සහ General English පත්‍රයට පෙනී සිටින්න"
          ),
          notes: t(
            "The Common General Test is needed for state university registration; General English is tested during A/L. Confirm current rules in the UGC handbook.",
            "රාජ්‍ය විශ්වවිද්‍යාල ලියාපදිංචියට Common General Test අවශ්‍ය වේ; General English A/L අතරතුර පරීක්ෂා කෙරේ. වත්මන් නීති UGC අත්පොතෙන් තහවුරු කරගන්න."
          )
        },
        ...getAlPrepTasks(isSi),
        {
          title: career.education.entranceExams
            ? t(`Prepare for ${career.education.entranceExams}`, `${career.education.entranceExams} සඳහා සූදානම් වන්න`)
            : t(`Target qualifying district Z-Score: ${zScoreTarget}`, `සුදුසුකම් ලබන දිස්ත්‍රික් Z-Score එක ඉලක්ක කරන්න: ${zScoreTarget}`),
          notes: t(
            `District context: ${district} quota applies. ${highCompetition ? "Colombo, Gampaha, and Kandy face the highest merit cut-offs, so target the upper range." : "Other districts often benefit from district-quota cut-offs lower than the Western Province."} Compare last year's cut-offs for your target degrees.`,
            `දිස්ත්‍රික් සන්දර්භය: ${district} quota අදාළ වේ. ${highCompetition ? "කොළඹ, ගම්පහ සහ මහනුවර ඉහළම merit කඩඉම් වලට මුහුණ දේ; ඉහළ පරාසය ඉලක්ක කරන්න." : "අනෙකුත් දිස්ත්‍රික්කවලට බොහෝවිට බස්නාහිර පළාතට වඩා පහළ දිස්ත්‍රික් quota කඩඉම් වල වාසිය ලැබේ."} ඔබේ ඉලක්කගත උපාධිවල පසුගිය වසරේ කඩඉම් සසඳන්න.`
          )
        }
      ]
    });
    milestones.push(getAlCareerMilestone(career, careerLabel, isSi));
  }

  // UGC application and backup routes (A/L students and those awaiting results)
  if (stage === "al" || stage === "after-al") {
    milestones.push(getAlApplicationMilestone(careerLabel, isSi));
  }

  // Stage 4: University / Degree Admission (Applicable to all stages)
  const defaultUni = engDiscipline
    ? {
        name: engDiscipline.universities[0].name,
        slug: engDiscipline.universities[0].slug || "moratuwa",
        degreeName: engDiscipline.degree,
        type: engDiscipline.universities[0].type === "STATE" ? "State University" : "Private University",
        duration: engDiscipline.universities[0].duration,
        faculty: engDiscipline.universities[0].faculty
      }
    : career.universities[0];

  const chosenUni = profile.targetUniversity || defaultUni || {
    name: "Recognized Sri Lankan University",
    slug: "colombo",
    degreeName: "Bachelor's Honours Degree",
    type: "State University",
    duration: "3 - 4 Years",
    faculty: "Faculty of Applied Sciences"
  };

  const chosenSpecialization = profile.targetSpecialization || (engDiscipline ? engDiscipline.titleEn : career.futureOutlook.growingSpecializations[0]) || "Core Discipline";

  milestones.push({
    stageKey: "DEGREE_ADMISSION",
    title: `University Degree: ${chosenUni.degreeName} at ${chosenUni.name}`,
    description: `Enroll in ${chosenUni.degreeName} (${chosenUni.faculty || "Undergraduate Faculty"}) at ${chosenUni.name} with focus on ${chosenSpecialization}.`,
    whyItMatters: "A recognized undergraduate degree provides the foundational qualification for career licensure, charter, and high-paying jobs in Sri Lanka and abroad.",
    prerequisites: profile.preferredRoute === "PRIVATE_GLOBAL"
      ? "3 'S' passes in G.C.E. A/L or recognized Foundation Diploma"
      : `Qualifying A/L Z-score benchmark (${district} district quota applies)`,
    durationMonths: chosenUni.duration?.includes("5") ? 60 : 48,
    tasks: [
      {
        title: `Explore ${chosenUni.name} profile and faculty details on SkillBridge SL`,
        resourceUrl: `/universities/${chosenUni.slug}`,
        resourceType: "UNIVERSITY",
        notes: `Review degree accreditation, facilities, and campus life at ${chosenUni.name}.`
      },
      {
        title: profile.preferredRoute === "PRIVATE_GLOBAL"
          ? `Submit direct undergraduate admission application to ${chosenUni.name}`
          : `Rank ${chosenUni.degreeName} at ${chosenUni.name} in your UGC preference list`,
        resourceUrl: profile.preferredRoute === "PRIVATE_GLOBAL" ? `/universities/${chosenUni.slug}` : "https://ugc.ac.lk",
        resourceType: "OFFICIAL_GUIDE",
        notes: "Prioritize your preferred degree programme and check entry benchmarks."
      },
      {
        title: `Excel in foundational coursework and maintain strong GPA in ${chosenSpecialization}`,
        notes: "Target First Class or Second Upper honours."
      }
    ]
  });

  // Stage 5: Specialization Training, Internships & Licensure
  if (engDiscipline) {
    milestones.push({
      stageKey: "PRACTICAL_TRAINING",
      title: `Specialization & IESL Associate Practice: ${engDiscipline.titleEn}`,
      description: `Complete mandatory 6-month industrial internship and master practical engineering tools: ${engDiscipline.keyToolsAndProjects.slice(0, 3).join(", ")}.`,
      whyItMatters: "IESL and international employers require verified industrial internship training under registered professional engineers.",
      prerequisites: "Undergraduate degree study (3rd/4th year) or recognized HND",
      durationMonths: 18,
      tasks: [
        {
          title: `Complete 6-month industrial internship at premier Sri Lankan firms: ${engDiscipline.employers.slice(0, 3).join(", ")}`,
          notes: `Document your engineering logbook under a mentor engineer for ${engDiscipline.titleEn}.`
        },
        {
          title: `Master industry tools: ${engDiscipline.keyToolsAndProjects.join(", ")}`,
          notes: "Build real projects and portfolio artifacts proving domain competence."
        },
        {
          title: "Register as an Associate Member of IESL (AMIE-SL) upon graduation",
          resourceUrl: "https://iesl.lk",
          resourceType: "OFFICIAL_GUIDE",
          notes: "Initiate formal candidate training towards Chartered Engineer (CEng) licensure."
        }
      ]
    });
  } else {
    milestones.push({
      stageKey: "PRACTICAL_TRAINING",
      title: `Specialization & Industry Licensure: ${chosenSpecialization}`,
      description: `Complete mandatory industrial training, practical articleship, and gain specialized competencies in ${chosenSpecialization}.`,
      whyItMatters: "Employers and professional councils require verified real-world practical experience before conferring full chartered or registered status.",
      prerequisites: "Undergraduate degree study (3rd/4th year) or professional exams",
      durationMonths: 18,
      tasks: [
        {
          title: "Complete industrial training / articleship at approved Sri Lankan firms",
          notes: `Gain hands-on industry experience in ${chosenSpecialization} under chartered mentors.`
        },
        {
          title: "Build portfolio and master key technical tools: " + career.skills.technical.slice(0, 2).map(t => t.name).join(", "),
          notes: "Document projects and real-world outcomes."
        },
        {
          title: "Apply for graduate membership in professional governing body",
          notes: "Steps toward full charter and professional licensure."
        }
      ]
    });
  }

  // Stage 6: Career Launch & Senior Progression
  if (engDiscipline) {
    milestones.push({
      stageKey: "CAREER_LAUNCH",
      title: `Career Launch: ${engDiscipline.industryRoleTitle}`,
      description: `Progress from graduate trainee to senior engineer and achieve full IESL Chartered status (${engDiscipline.charteredTitle}).`,
      whyItMatters: "Chartered Engineers in Sri Lanka command senior corporate leadership, government directorships, and global Washington Accord mobility.",
      prerequisites: "Degree completion & monitored professional practice",
      durationMonths: 36,
      tasks: [
        {
          title: `Apply for positions as ${engDiscipline.industryRoleTitle}`,
          notes: `Target top organizations: ${engDiscipline.employers.slice(0, 3).join(", ")}`
        },
        {
          title: "Complete 3–4 years of mentored engineering experience and professional logbooks",
          notes: "Document design reports, project safety leadership, and budget compliance."
        },
        {
          title: `Pass IESL Professional Review Examination for ${engDiscipline.charteredTitle}`,
          resourceUrl: "https://iesl.lk",
          resourceType: "OFFICIAL_GUIDE",
          notes: "Achieve globally mobile CEng / IntPE professional standing."
        }
      ]
    });
  } else {
    milestones.push({
      stageKey: "CAREER_LAUNCH",
      title: `Career Launch as a ${career.title.split("/")[0].trim()}`,
      description: `Enter the profession, achieve full registration, and advance from entry-level to senior leadership roles.`,
      whyItMatters: "Progress toward your long-term earnings potential and contribute meaningfully to Sri Lanka and the global industry.",
      prerequisites: "Degree completion & licensure",
      durationMonths: 24,
      tasks: [
        {
          title: "Apply for entry-level positions: " + career.salary.entryLevel.label,
          notes: `Target top employers: ${career.roleOverview.typicalEmployers.slice(0, 2).join(", ")}`
        },
        {
          title: "Cultivate executive soft skills: " + career.skills.soft.slice(0, 2).map(s => s.name).join(", "),
          notes: "Leadership, negotiation, and teamwork."
        },
        {
          title: "Plan 5-year progression to senior level: " + career.salary.seniorLevel.label,
          resourceUrl: `/careers/${career.slug}#roadmap`,
          resourceType: "CAREER",
          notes: "Review career progression ladder and emerging specializations."
        }
      ]
    });
  }

  const englishPractice = career.category === "Healthcare"
    ? "Practise patient conversations, explaining care clearly, and concise handovers."
    : career.category === "Legal"
    ? "Practise client interviews, structured case summaries, and clear professional emails."
    : career.category === "Business"
    ? "Practise presentations, meeting contributions, customer calls, and concise reports."
    : career.category === "Hospitality"
    ? "Practise welcoming guests, explaining services, and resolving requests politely."
    : career.slug === "teacher" || career.slug === "university-lecturer"
    ? "Practise giving instructions, explaining a lesson, and offering useful feedback."
    : engDiscipline || career.category === "Engineering"
    ? "Practise explaining a design decision, presenting a project, and writing a short technical update."
    : "Practise introducing your work, explaining a project, asking clear questions, and answering interview questions.";

  // English communication is a continuing skill goal across every career route.
  milestones.splice(Math.max(0, milestones.length - 1), 0, {
    stageKey: "CAREER_COMMUNICATION",
    title: "Build English communication for your career",
    description: "Choose a class that matches your current level, then keep practising English alongside your studies and work experience.",
    whyItMatters: `Clear English can support study, teamwork, interviews, and career growth in ${engDiscipline?.titleEn || career.title}. The level and situations you need will depend on your role.`,
    prerequisites: "Start from your current level; ask the provider about placement and entry requirements.",
    durationMonths: 12,
    tasks: [
      {
        title: "Choose age- and level-appropriate English classes",
        resourceUrl: "https://www.britishcouncil.lk/english",
        resourceType: "COURSE",
        notes: "British Council Sri Lanka has courses for ages 11–17 and adults; its adult modules span A1 to C1. Check the right age group, level check, and current details.",
      },
      {
        title: "Build a foundation with OUSL English for General Communication (over age 16)",
        resourceUrl: "https://ou.ac.lk/programme/certificate-in-english-for-general-communication/",
        resourceType: "COURSE",
        notes: "One-year certificate covering speaking, listening, reading, writing, and introductory workplace communication. Check the next intake and entry requirements.",
      },
      {
        title: "Explore English for Employment at the Open University of Sri Lanka",
        resourceUrl: "https://ou.ac.lk/programme/short-course-in-english-for-employment/",
        resourceType: "COURSE",
        notes: "A 20-week, 80-hour course for people seeking work, employees, and entrepreneurs. Check the official page for the next intake and current fee.",
      },
      {
        title: `Practise English for ${engDiscipline?.titleEn || career.title}`,
        notes: englishPractice,
      },
    ],
  });

  // Alternatives to consider
  const alternativeOptions = (career.relatedCareers || []).slice(0, 3).map((item) => {
    const isObj = typeof item === "object" && item !== null;
    const s = isObj ? item.slug : item;
    const rel = getCareerDetail(s);
    return {
      slug: s,
      title: rel ? rel.title : s.replace(/-/g, " "),
      reason: rel ? rel.tagline : "Alternative related pathway sharing similar core strengths."
    };
  });

  // Path name as a student would say it: goal, university, and A/L stream (e.g. "Medicine (MBBS) via University of Colombo · Bio stream")
  const GOAL_NAMES: Record<string, { en: string; si: string }> = {
    doctor: { en: "Medicine (MBBS)", si: "වෛද්‍ය විද්‍යාව (MBBS)" },
    dentist: { en: "Dental Surgery (BDS)", si: "දන්ත වෛද්‍ය විද්‍යාව (BDS)" },
    veterinarian: { en: "Veterinary Science", si: "සත්ව වෛද්‍ය විද්‍යාව" },
    "ayurvedic-doctor": { en: "Ayurveda Medicine (BAMS)", si: "ආයුර්වේද වෛද්‍ය විද්‍යාව (BAMS)" },
    nurse: { en: "Nursing", si: "හෙද සේවය" },
    lawyer: { en: "Attorney-at-Law (LLB)", si: "නීතිඥ (LLB)" },
    accountant: { en: "Chartered Accountancy", si: "වරලත් ගිණුම්කරණය" },
    banker: { en: "Banking", si: "බැංකු සේවය" },
    teacher: { en: "School Teaching", si: "ගුරු වෘත්තිය" },
    "airline-pilot": { en: "Commercial Pilot (CPL)", si: "වාණිජ ගුවන් නියමු (CPL)" },
    "marine-officer": { en: "Merchant Navy Officer", si: "වෙළඳ නාවික නිලධාරී" },
    "software-engineer": { en: "Software Engineering", si: "මෘදුකාංග ඉංජිනේරු විද්‍යාව" },
    architect: { en: "Architecture (B.Arch)", si: "ගෘහ නිර්මාණ ශිල්පය (B.Arch)" },
  };
  const goalName = engDiscipline
    ? { en: /engineer/i.test(engDiscipline.titleEn) ? engDiscipline.titleEn : `${engDiscipline.titleEn} Engineering`, si: engDiscipline.titleSi }
    : GOAL_NAMES[career.slug] || {
        en: (profile.targetSpecialization || career.title).split("/")[0].replace(/\(.*?\)/g, "").trim(),
        si: (career.sinhalaTitle || career.title).split("/")[0].trim(),
      };
  const streamKey = stream.toLowerCase();
  const streamName = /\bany\b/.test(streamKey)
    ? undefined
    : streamKey.includes("bio")
    ? { en: "Bio", si: "ජීව විද්‍යා" }
    : streamKey.includes("math") || streamKey.includes("physical")
    ? { en: "Maths", si: "ගණිත" }
    : streamKey.includes("commerce")
    ? { en: "Commerce", si: "වාණිජ" }
    : streamKey.includes("art")
    ? { en: "Arts", si: "කලා" }
    : streamKey.includes("tech")
    ? { en: "Technology", si: "තාක්ෂණ" }
    : undefined;
  const routeNote =
    profile.preferredRoute === "PRIVATE_GLOBAL" ? { en: "private route", si: "පෞද්ගලික මාර්ගය" }
    : profile.preferredRoute === "PROFESSIONAL_BODY" ? { en: "professional route", si: "වෘත්තීය මාර්ගය" }
    : undefined;
  const pathTitle = isSi
    ? `${goalName.si} — ${chosenUni.name}${streamName ? ` (${streamName.si} අංශය)` : ""}${routeNote ? ` · ${routeNote.si}` : ""}`
    : `${goalName.en} via ${chosenUni.name}${streamName ? ` · ${streamName.en} stream` : ""}${routeNote ? ` · ${routeNote.en}` : ""}`;

  const uniList = engDiscipline
    ? engDiscipline.universities.map(u => ({
        name: u.name,
        slug: u.slug || "moratuwa",
        degree: u.degreeName,
        type: u.type === "STATE" ? "State University" : "Private / Defence University"
      }))
    : career.universities.map(u => ({
        name: u.name,
        slug: u.slug,
        degree: u.degreeName,
        type: u.type
      }));

  return {
    title: pathTitle,
    targetCareerSlug: career.slug,
    educationStage: stage,
    currentStream: stream,
    district,
    budgetTier: budget,
    eligibilityStatus,
    eligibilityExplanation,
    alternativeOptions,
    milestones,
    recommendedUniversities: uniList,
    recommendedSubjects: [
      "Mathematics",
      "Science",
      "English Language",
      olGuidance.basket3.recommendedSubject,
      olGuidance.basket1.recommendedSubject,
      ...(olGuidance.additionalMaths.recommended ? ["Additional Mathematics"] : [])
    ]
  };
}


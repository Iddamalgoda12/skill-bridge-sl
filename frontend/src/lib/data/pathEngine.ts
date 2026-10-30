// Intelligent Sri Lanka Career Path Generator & Recommendation Engine
// Sourced from UGC Admission Handbooks, Ministry of Education curriculum guidelines,
// and professional regulatory bodies (SLMC, IESL, SLIA, IQSSL, CA Sri Lanka, CAASL).

import { careerDetails, getCareerDetail, type CareerDetail } from "./careerDetails";

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
  const allCareers = Object.values(careerDetails);

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
  profile: StudentProfileInput
): GeneratedCareerPath {
  const career = getCareerDetail(targetCareerSlug) || careerDetails["engineer"];
  const stage = profile.educationStage || "ol";
  const stream = profile.currentStream || "General / Open Stream";
  const district = profile.district || "Colombo";
  const budget = profile.budgetTier || "FLEXIBLE";

  const milestones: GeneratedMilestone[] = [];

  // Determine eligibility status
  let eligibilityStatus: "ELIGIBLE" | "POTENTIALLY_ELIGIBLE" | "ALTERNATIVE_PATHWAY" = "ELIGIBLE";
  let eligibilityExplanation = `You meet the educational foundations for ${career.title}. Follow the milestones to achieve required benchmarks.`;

  const reqStreamLower = career.education.alStream.toLowerCase();
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
          title: "Focus on key school subjects: " + career.skills.importantSchoolSubjects.slice(0, 3).join(", "),
          notes: "Target distinction grades in term tests."
        },
        {
          title: "Join relevant school clubs (Science Society, ICT Club, English Debating, Commerce Society)",
          notes: "Develop communication and curiosity outside textbooks."
        }
      ]
    });
  }

  // Stage 2: O/L Preparation (For before-ol and ol)
  if (stage === "before-ol" || stage === "ol") {
    milestones.push({
      stageKey: "OL_MASTERY",
      title: "G.C.E. O/L Examination Mastery",
      description: `Attain required O/L Credit passes: ${career.education.olRequirements}`,
      whyItMatters: "O/L credits in Mathematics and English Language are mandatory legal prerequisites across all Sri Lankan universities and professional bodies.",
      prerequisites: "Completion of Grade 10 & 11 syllabus",
      durationMonths: stage === "ol" ? 10 : 24,
      tasks: [
        {
          title: "Complete past 10 years of G.C.E. O/L past papers in Mathematics & Science",
          notes: "Focus on time management and clear step-by-step working."
        },
        {
          title: "Achieve distinction 'A' or 'C' in English Language & Mathematics",
          notes: "Minimum requirement for university admission eligibility."
        },
        {
          title: "Select elective basket subjects matching future interest (ICT, Health Science, Commerce, Art)",
          notes: "Provides early head start for A/L."
        }
      ]
    });
  }

  // Stage 3: A/L Stream Selection & Study (For before-ol, ol, after-ol, al)
  if (stage === "before-ol" || stage === "ol" || stage === "after-ol" || stage === "al") {
    milestones.push({
      stageKey: "AL_STREAM_PREP",
      title: `A/L Preparation in ${career.education.alStream.split("or")[0].trim()}`,
      description: `Follow the recommended A/L stream and target Z-score benchmark: ${career.education.zScoreRange}`,
      whyItMatters: `State university intake in Sri Lanka is strictly based on A/L Z-score district quotas (${district} quota applies).`,
      prerequisites: "Qualifying O/L examination passes",
      durationMonths: stage === "al" ? 12 : 24,
      tasks: [
        {
          title: "Lock in required A/L subject combination",
          notes: `Target stream: ${career.education.alStream}`
        },
        {
          title: "Complete comprehensive syllabus coverage & model paper revision",
          notes: "Focus on essay structured questions and multiple-choice precision."
        },
        {
          title: career.education.entranceExams ? `Prepare for ${career.education.entranceExams}` : "Target qualifying district Z-Score",
          notes: `District context: ${district} quota requirements.`
        }
      ]
    });
  }

  // Stage 4: University / Degree Admission (Applicable to all stages)
  const chosenUni = profile.targetUniversity || career.universities[0] || {
    name: "Recognized Sri Lankan University",
    slug: "colombo",
    degreeName: "Bachelor's Honours Degree",
    type: "State University",
    duration: "3 - 4 Years",
    faculty: "Faculty of Applied Sciences"
  };

  const chosenSpecialization = profile.targetSpecialization || career.futureOutlook.growingSpecializations[0] || "Core Discipline";

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
          : `List ${chosenUni.name} preferences in UGC Sri Lanka University Admission Handbook`,
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

  // Stage 6: Career Launch & Senior Progression
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

  return {
    title: profile.targetSpecialization
      ? `${career.title.split("/")[0].trim()} (${profile.targetSpecialization}) Roadmap`
      : `${career.title.split("/")[0].trim()} Career Roadmap`,
    targetCareerSlug: career.slug,
    educationStage: stage,
    currentStream: stream,
    district,
    budgetTier: budget,
    eligibilityStatus,
    eligibilityExplanation,
    alternativeOptions,
    milestones,
    recommendedUniversities: career.universities.map(u => ({
      name: u.name,
      slug: u.slug,
      degree: u.degreeName,
      type: u.type
    })),
    recommendedSubjects: career.skills.importantSchoolSubjects
  };
}


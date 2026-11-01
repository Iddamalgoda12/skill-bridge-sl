// Shared by the Build Your Path page and the My Path dashboard so both group milestones the same way.

export type MilestonePhase = "school" | "advanced" | "degree" | "career";

export const MILESTONE_PHASES: Record<MilestonePhase, { en: string; si: string }> = {
  school: { en: "School: G.C.E. O/L", si: "පාසල: සාමාන්‍ය පෙළ (O/L)" },
  advanced: { en: "G.C.E. A/L & University Entry", si: "උසස් පෙළ සහ විශ්වවිද්‍යාල ප්‍රවේශය" },
  degree: { en: "University & Professional Training", si: "විශ්වවිද්‍යාලය සහ වෘත්තීය පුහුණුව" },
  career: { en: "Career Launch", si: "වෘත්තිය ආරම්භය" },
};

export function getMilestonePhase(stageKey: string): MilestonePhase {
  if (stageKey === "FOUNDATION_EXPLORATION" || stageKey.startsWith("OL_") || stageKey === "STAGE_1_FOUNDATION") return "school";
  if (stageKey === "AFTER_OL_PLANNING" || stageKey.startsWith("AL_")) return "advanced";
  if (stageKey === "CAREER_COMMUNICATION") return "degree";
  if (stageKey.startsWith("CAREER_LAUNCH") || stageKey === "STAGE_4_CAREER") return "career";
  return "degree";
}

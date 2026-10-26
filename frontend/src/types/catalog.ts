export type Career = { slug: string; title: string; category: string; summary: string; /** Indicative average monthly pay in thousands of LKR. */ salaryK?: number | null; /** Pay depends on the post held, so no single figure applies. */ salaryVaries?: boolean; employers: string; entry: string; image?: string; };
export type University = { slug: string; name: string; shortName: string; type: "Government" | "Non-state"; location: string; areas: string[]; illustration: string; website: string; };
export type RoadmapStage = "ol" | "al" | "after-al" | "university";
export type GoalId = "software" | "doctor" | "designer";
/** Stored by id so it renders in whichever language is active. */
export type Roadmap = { id: string; goal: GoalId; stage: RoadmapStage; focus: string[] };
/** Roadmaps saved before localization carried their English text with them. */
export type LegacyRoadmap = { id: string; career: string; stage: RoadmapStage; focus: string[]; milestones: { label: string; title: string; description: string }[] };

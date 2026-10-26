import type { GoalId, Roadmap, RoadmapStage } from "@/types/catalog";

// Labels and copy live in the message files (path.stages.*, path.goals.*, path.focus.*, path.roadmap.*).
export const stages: { id: RoadmapStage; tone: string }[] = [
  { id: "ol", tone: "" },
  { id: "al", tone: "tone-mint" },
  { id: "after-al", tone: "tone-lavender" },
  { id: "university", tone: "tone-peach" },
];

export const goals: { id: GoalId; focus: string[] }[] = [
  { id: "software", focus: ["maths", "english", "ict", "coding", "creative"] },
  { id: "doctor", focus: ["biology", "chemistry", "english", "communication", "scientific"] },
  { id: "designer", focus: ["art", "english", "digital", "creative", "portfolio"] },
];

/** Milestones run O/L → A/L → degree → career launch; later stages start further along. */
export const MILESTONE_COUNT = 4;
const STAGE_OFFSET: Record<RoadmapStage, number> = { ol: 0, al: 1, "after-al": 2, university: 3 };

export const milestoneIndexes = (stage: RoadmapStage) =>
  Array.from({ length: MILESTONE_COUNT - STAGE_OFFSET[stage] }, (_, i) => i + STAGE_OFFSET[stage] + 1);

export const createRoadmap = (goal: GoalId, stage: RoadmapStage, focus: string[]): Roadmap => ({
  id: `${goal}-${stage}`,
  goal,
  stage,
  focus,
});

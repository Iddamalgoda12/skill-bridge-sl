export type Career = { slug: string; title: string; category: string; summary: string; salary: string | null; employers: string; entry: string; image?: string; };
export type University = { slug: string; name: string; shortName: string; type: "Government" | "Non-state"; location: string; areas: string[]; illustration: string; website: string; };
export type RoadmapStage = "ol" | "al" | "after-al" | "university";
export type Roadmap = { id: string; career: string; stage: RoadmapStage; focus: string[]; milestones: { label: string; title: string; description: string }[]; };

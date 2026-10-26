import type { LegacyRoadmap, Roadmap } from "@/types/catalog";

export type SavedItem = { id: string; title: string; kind: "career" | "university" };

const ITEMS_KEY = "skillbridge:shortlist:v1";
const ROADMAPS_KEY = "skillbridge:roadmaps:v1";
/** One event for every saved-content change so all subscribed components refresh. */
const CHANGE_EVENT = "skillbridge:shortlist-change";

function read(key: string, valid: (entry: unknown) => boolean): string {
  try {
    const raw = localStorage.getItem(key) || "[]";
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.every(valid) ? raw : "[]";
  } catch {
    return "[]";
  }
}

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null;

export const savedItems = {
  snapshot(): string {
    return read(ITEMS_KEY, (item) => isObject(item) && typeof item.id === "string" && typeof item.title === "string" && ["career", "university"].includes(String(item.kind)));
  },
  toggle(item: SavedItem) {
    const current: SavedItem[] = JSON.parse(this.snapshot());
    const found = current.some((x) => x.id === item.id && x.kind === item.kind);
    localStorage.setItem(ITEMS_KEY, JSON.stringify(found ? current.filter((x) => x.id !== item.id || x.kind !== item.kind) : [...current, item]));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  },
};

export type StoredRoadmap = Roadmap | LegacyRoadmap;
export const isLegacyRoadmap = (roadmap: StoredRoadmap): roadmap is LegacyRoadmap => "milestones" in roadmap;

export const savedRoadmaps = {
  snapshot(): string {
    return read(ROADMAPS_KEY, (entry) => isObject(entry) && typeof entry.id === "string" && (typeof entry.goal === "string" || (typeof entry.career === "string" && Array.isArray(entry.milestones))));
  },
  save(roadmap: Roadmap) {
    const existing: StoredRoadmap[] = JSON.parse(this.snapshot());
    localStorage.setItem(ROADMAPS_KEY, JSON.stringify([...existing.filter((r) => r.id !== roadmap.id), roadmap]));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  },
  remove(id: string) {
    const existing: StoredRoadmap[] = JSON.parse(this.snapshot());
    localStorage.setItem(ROADMAPS_KEY, JSON.stringify(existing.filter((r) => r.id !== id)));
    window.dispatchEvent(new Event(CHANGE_EVENT));
  },
};

export function subscribeSaved(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

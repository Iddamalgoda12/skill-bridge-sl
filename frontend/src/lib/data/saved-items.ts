export type SavedItem = { id: string; title: string; kind: "career" | "university" };
const key = "skillbridge:shortlist:v1";
const event = "skillbridge:shortlist-change";
export const savedItems = {
  snapshot(): string {
    try { const raw = localStorage.getItem(key) || "[]"; const parsed = JSON.parse(raw); return Array.isArray(parsed) && parsed.every(item => typeof item.id === "string" && typeof item.title === "string" && ["career","university"].includes(item.kind)) ? raw : "[]"; } catch { return "[]"; }
  },
  toggle(item: SavedItem) {
    const current: SavedItem[] = JSON.parse(this.snapshot());
    const found = current.some(x => x.id === item.id && x.kind === item.kind);
    localStorage.setItem(key, JSON.stringify(found ? current.filter(x => x.id !== item.id || x.kind !== item.kind) : [...current,item]));
    window.dispatchEvent(new Event(event));
  },
};
export function subscribeSaved(callback: () => void) {
  window.addEventListener(event, callback); window.addEventListener("storage", callback);
  return () => { window.removeEventListener(event, callback); window.removeEventListener("storage", callback); };
}

"use client";
import { useSyncExternalStore, useState } from "react";
import { Bookmark, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { savedItems, subscribeSaved } from "@/lib/data/saved-items";
export function SaveButton({ id, title, kind = "career", compact = false, iconAsset }: { id: string; title: string; kind?: "career" | "university"; compact?: boolean; iconAsset?: string }) {
  const serialized = useSyncExternalStore(subscribeSaved, savedItems.snapshot, () => "[]");
  const saved = (JSON.parse(serialized) as { id: string; kind: string }[]).some(item => item.id === id && item.kind === kind);
  const [error, setError] = useState("");
  return <><Button type="button" className={`glass-button save-button ${compact ? "compact-save" : ""}`} aria-label={`${saved ? "Remove" : "Save"} ${title}`} aria-pressed={saved} onClick={() => { try { savedItems.toggle({ id,title,kind }); setError(""); } catch { setError("Your browser could not save this item. Please enable local storage."); } }}>{saved ? <Check size={16} /> : iconAsset ? <DesignAsset src={iconAsset} /> : <Bookmark size={16} />}{!compact && (saved ? "Saved to My Path" : kind === "university" ? "Add to my university list" : "Add to Your Path")}</Button>{error && <p role="alert" className="status-message">{error}</p>}</>;
}

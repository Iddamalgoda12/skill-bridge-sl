"use client";
import { useSyncExternalStore, useState } from "react";
import { useTranslations } from "next-intl";
import { Bookmark, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesignAsset } from "@/components/shared/DesignAsset";
import { savedItems, subscribeSaved } from "@/lib/data/saved-items";

export function SaveButton({ id, title, kind = "career", compact = false, iconAsset }: { id: string; title: string; kind?: "career" | "university"; compact?: boolean; iconAsset?: string }) {
  const t = useTranslations("save");
  const serialized = useSyncExternalStore(subscribeSaved, savedItems.snapshot, () => "[]");
  const saved = (JSON.parse(serialized) as { id: string; kind: string }[]).some((item) => item.id === id && item.kind === kind);
  const [error, setError] = useState(false);

  function toggle(e?: React.MouseEvent) {
    e?.stopPropagation();
    try {
      savedItems.toggle({ id, title, kind });
      setError(false);
    } catch {
      setError(true);
    }
  }

  return (
    <>
      <Button type="button" variant="glass" className={`glass-button save-button ${compact ? "compact-save" : ""}`} aria-label={compact ? (saved ? t("removeLabel", { title }) : t("saveLabel", { title })) : undefined} aria-pressed={saved} onClick={toggle}>
        {saved ? <Check size={16} /> : iconAsset ? <DesignAsset src={iconAsset} /> : <Bookmark size={16} />}
        {!compact && (saved ? t("saved") : kind === "university" ? t("addUniversity") : t("addCareer"))}
      </Button>
      {error && <p role="alert" className="status-message">{t("storageError")}</p>}
    </>
  );
}

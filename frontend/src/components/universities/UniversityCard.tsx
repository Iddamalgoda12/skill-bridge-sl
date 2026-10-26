import Link from "next/link";
import { useTranslations } from "next-intl";
import { MapPin, ArrowUpRight } from "lucide-react";
import { DesignAsset } from "@/components/shared/DesignAsset";
import type { LocalizedUniversity } from "@/lib/i18n/catalog";

export function UniversityCard({ university, compare, selected, onSelect }: { university: LocalizedUniversity; compare?: boolean; selected?: boolean; onSelect?: () => void }) {
  const t = useTranslations("universities.card");
  const { display } = university;
  return (
    <article className="university-card glass-panel">
      <div className="university-illustration">
        <DesignAsset src={university.illustration} />
        <span className="institution-short-name">{university.shortName}</span>
        <span className="institution-type"><span className={university.type === "Government" ? "type-dot" : "type-dot non-state"} />{display.type}</span>
      </div>
      <div className="university-card-body">
        <h3><Link href={`/universities/${university.slug}`}>{display.name}</Link></h3>
        <p className="muted inline-icon"><MapPin size={14} aria-hidden="true" />{t("location", { location: display.location })}</p>
        <div className="university-card-bottom">
          <span>{display.areas.join(" · ")}</span>
          <Link className="square-arrow" href={`/universities/${university.slug}`} aria-label={t("explore", { name: display.name })}><ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        {compare && <label className="compare-checkbox"><input type="checkbox" checked={selected} onChange={onSelect} />{t("compare")}</label>}
      </div>
    </article>
  );
}

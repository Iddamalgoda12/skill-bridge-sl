import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { DesignAsset } from "@/components/shared/DesignAsset";
import type { University } from "@/types/catalog";
export function UniversityCard({ university, compare, selected, onSelect }: { university: University; compare?: boolean; selected?: boolean; onSelect?: () => void }) {
  return <article className="university-card glass-panel"><div className="university-illustration"><DesignAsset src={university.illustration} /><span className="institution-short-name">{university.shortName}</span><span className="institution-type"><span className={university.type === "Government" ? "type-dot" : "type-dot non-state"} />{university.type}</span></div><div className="university-card-body"><h3><Link href={`/universities/${university.slug}`}>{university.name}</Link></h3><p className="muted inline-icon"><MapPin size={14} />{university.location}, Sri Lanka</p><div className="university-card-bottom"><span>{university.areas.join(" · ")}</span><Link className="square-arrow" href={`/universities/${university.slug}`} aria-label={`Explore ${university.name}`}><ArrowUpRight size={18} /></Link></div>{compare && <label className="compare-checkbox"><input type="checkbox" checked={selected} onChange={onSelect} />Compare this university</label>}</div></article>;
}

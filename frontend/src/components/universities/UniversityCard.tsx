import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import type { LocalizedUniversity } from "@/lib/i18n/catalog";

export function UniversityCard({ university }: { university: LocalizedUniversity }) {
  const t = useTranslations("universities.card");
  const { display } = university;
  const imageSrc = university.image || `/images/universities/cards/${university.slug}.jpg`;

  return (
    <Link
      href={`/universities/${university.slug}`}
      className="university-card glass-panel university-card-link"
      aria-label={display.name}
    >
      <div className="university-illustration university-card-media">
        <Image
          src={imageSrc}
          alt={display.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="university-card-img"
        />
        <div className="university-card-image-gradient" />
        <span className="institution-short-name">{university.shortName}</span>
        <span className="institution-type">
          <span className={university.type === "Government" ? "type-dot" : "type-dot non-state"} />
          {display.type}
        </span>
      </div>
      <div className="university-card-body">
        <h3>{display.name}</h3>
        <p className="muted inline-icon">
          <MapPin size={14} aria-hidden="true" />
          {t("location", { location: display.location })}
        </p>
        <div className="university-card-bottom">
          <span>{display.areas.join(" · ")}</span>
        </div>
      </div>
    </Link>
  );
}

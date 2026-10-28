import Image from "next/image";
import { Landmark, BookOpen, Trophy, Compass, Users2, Cpu } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { FacilityItem } from "@/lib/data/universityDetails";

const toneToClass: Record<string, string> = {
  emerald: "tone-mint",
  amber: "tone-peach",
  blue: "tone-ice",
  purple: "tone-lavender",
  mint: "tone-mint",
  peach: "tone-peach",
  ice: "tone-ice",
  lavender: "tone-lavender",
};

export async function RuhunaFacilities({
  facilities: propFacilities,
  isRuhuna = true,
  universityName,
}: {
  facilities?: FacilityItem[];
  isRuhuna?: boolean;
  universityName?: string;
}) {
  const t = await getTranslations("universityDetail.facilitiesSection");

  const ruhunaFacilities = [
    {
      id: "tagore",
      icon: Landmark,
      image: "/images/universities/ruhuna/facility-tagore.jpg",
      title: t("tagoreFacilityTitle"),
      desc: t("tagoreFacilityDesc"),
      badge: "1,500 Capacity",
      tone: "tone-lavender",
    },
    {
      id: "library",
      icon: BookOpen,
      image: "/images/universities/ruhuna/facility-library.jpg",
      title: t("libraryFacilityTitle"),
      desc: t("libraryFacilityDesc"),
      badge: "200,000+ Volumes",
      tone: "tone-mint",
    },
    {
      id: "sports",
      icon: Trophy,
      image: "/images/universities/ruhuna/facility-sports.jpg",
      title: t("sportsFacilityTitle"),
      desc: t("sportsFacilityDesc"),
      badge: "Full Gymnasium",
      tone: "tone-peach",
    },
    {
      id: "marine",
      icon: Compass,
      image: "/images/universities/ruhuna/facility-marine.jpg",
      title: t("marineFacilityTitle"),
      desc: t("marineFacilityDesc"),
      badge: "Coastal Hatcheries",
      tone: "tone-ice",
    },
    {
      id: "clubs",
      icon: Users2,
      image: "/images/universities/ruhuna/facility-clubs.jpg",
      title: t("societiesFacilityTitle"),
      desc: t("societiesFacilityDesc"),
      badge: "Active Communities",
      tone: "tone-lavender",
    },
    {
      id: "labs",
      icon: Cpu,
      image: "/images/universities/ruhuna/facility-labs.jpg",
      title: t("labsFacilityTitle"),
      desc: t("labsFacilityDesc"),
      badge: "Research Infrastructure",
      tone: "tone-ice",
    },
  ];

  const items = propFacilities || (isRuhuna ? ruhunaFacilities : []);

  const eyebrowText = isRuhuna ? t("eyebrow") : "CAMPUS INFRASTRUCTURE & LIFE";
  const titleText = isRuhuna
    ? t("title")
    : `World-Class Amenities at ${universityName || "the University"}`;
  const descText = isRuhuna
    ? t("description")
    : `From cutting-edge digital libraries and specialised research centres to vibrant residential hostels and athletic arenas.`;

  return (
    <section id="facilities" className="section-block ruhuna-facilities-section">
      <div className="section-heading-centered">
        <p className="eyebrow">{eyebrowText}</p>
        <h2 className="section-title">{titleText}</h2>
        <p className="section-description muted">{descText}</p>
      </div>

      <div className="facilities-cards-grid">
        {items.map((item, idx) => {
          const toneClass = toneToClass[item.tone] || "tone-ice";
          const iconList = [BookOpen, Trophy, Landmark, Compass, Cpu, Users2];
          const Icon = "icon" in item && item.icon ? (item.icon as typeof BookOpen) : iconList[idx % iconList.length];

          return (
            <article className="facility-item-card glass-panel" key={item.id}>
              <div className="facility-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="facility-card-image"
                />
                <div className="facility-image-gradient" />
                <span className="facility-floating-badge">{item.badge}</span>
              </div>
              <div className="facility-card-content">
                <div className="facility-card-top">
                  <span className={`icon-bubble ${toneClass}`}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p className="facility-desc muted">{item.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

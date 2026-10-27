import Image from "next/image";
import { Landmark, BookOpen, Trophy, Compass, Users2, Cpu } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function RuhunaFacilities() {
  const t = await getTranslations("universityDetail.facilitiesSection");

  const facilities = [
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

  return (
    <section id="facilities" className="section-block ruhuna-facilities-section">
      <div className="section-heading-centered">
        <p className="eyebrow">{t("eyebrow")}</p>
        <h2 className="section-title">{t("title")}</h2>
        <p className="section-description muted">{t("description")}</p>
      </div>

      <div className="facilities-cards-grid">
        {facilities.map((item) => {
          const Icon = item.icon;
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
                  <span className={`icon-bubble ${item.tone}`}>
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

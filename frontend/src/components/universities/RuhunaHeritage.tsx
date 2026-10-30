import Image from "next/image";
import { Landmark, Sparkles, Building2, BookOpen, Compass } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import type { HeritageData } from "@/lib/data/universityDetails";

export async function RuhunaHeritage({
  heritage: propHeritage,
  isRuhuna = true,
  universityName,
}: {
  heritage?: HeritageData;
  isRuhuna?: boolean;
  universityName?: string;
}) {
  const [t, locale] = await Promise.all([
    getTranslations("universityDetail.heritage"),
    getLocale(),
  ]);
  const isSi = locale === "si";

  if (isRuhuna && !propHeritage) {
    return (
      <section id="heritage" className="section-block ruhuna-heritage-section">
        <div className="glass-panel heritage-main-card">
          <div className="heritage-content">
            <span className="eyebrow-pill">
              <Sparkles size={12} aria-hidden="true" />
              <span>{t("eyebrow")}</span>
            </span>
            <h2 className="heritage-title">{t("title")}</h2>
            <p className="heritage-description">{t("description")}</p>

            <div className="heritage-pillars-grid">
              <div className="heritage-pillar-item">
                <div className="pillar-icon-box">
                  <Building2 size={18} aria-hidden="true" />
                </div>
                <div>
                  <h4>{t("bawaCard1Title")}</h4>
                  <p>{t("bawaCard1Desc")}</p>
                </div>
              </div>

              <div className="heritage-pillar-item">
                <div className="pillar-icon-box">
                  <Compass size={18} aria-hidden="true" />
                </div>
                <div>
                  <h4>{t("bawaCard2Title")}</h4>
                  <p>{t("bawaCard2Desc")}</p>
                </div>
              </div>
            </div>

            <div className="tagore-highlight-box">
              <div className="tagore-icon">
                <Landmark size={22} aria-hidden="true" />
              </div>
              <div>
                <h3>{t("tagoreTitle")}</h3>
                <p>{t("tagoreDesc")}</p>
              </div>
            </div>
          </div>

          <div className="heritage-visual">
            <div className="heritage-image-frame">
              <Image
                src="/images/universities/ruhuna/bawa-architecture.jpg"
                alt="Geoffrey Bawa Architecture at University of Ruhuna"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="heritage-photo"
              />
              <div className="heritage-photo-overlay" />
              <div className="heritage-photo-caption">
                <strong>Geoffrey Bawa Pavilions & Natural Rock Outcrops</strong>
                <small>Wellamadama Coastal Campus, Matara</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Dynamic heritage for all universities
  const heritage = propHeritage;
  if (!heritage) return null;

  return (
    <section id="heritage" className="section-block ruhuna-heritage-section">
      <div className="glass-panel heritage-main-card">
        <div className="heritage-content">
          <span className="eyebrow-pill">
            <Sparkles size={12} aria-hidden="true" />
            <span>{heritage.eyebrow || (isSi ? "කැම්පස් උරුමය සහ ගෘහ නිර්මාණ ශිල්පය" : "CAMPUS HERITAGE & ARCHITECTURE")}</span>
          </span>
          <h2 className="heritage-title">{heritage.title}</h2>
          <p className="heritage-description">{heritage.description}</p>

          <div className="heritage-pillars-grid">
            {heritage.pillars.map((pillar, idx) => (
              <div className="heritage-pillar-item" key={idx}>
                <div className="pillar-icon-box">
                  {idx === 0 ? (
                    <Building2 size={18} aria-hidden="true" />
                  ) : idx === 1 ? (
                    <BookOpen size={18} aria-hidden="true" />
                  ) : (
                    <Compass size={18} aria-hidden="true" />
                  )}
                </div>
                <div>
                  <h4>{pillar.title}</h4>
                  {pillar.subtitle && <small className="pillar-subtitle muted">{pillar.subtitle}</small>}
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {heritage.landmarkTitle && (
            <div className="tagore-highlight-box">
              <div className="tagore-icon">
                <Landmark size={22} aria-hidden="true" />
              </div>
              <div>
                <h3>{heritage.landmarkTitle}</h3>
                <p>{heritage.landmarkDesc}</p>
              </div>
            </div>
          )}
        </div>

        <div className="heritage-visual">
          <div className="heritage-image-frame">
            <Image
              src={heritage.image}
              alt={`${heritage.landmarkTitle || universityName || "University"} Campus Heritage`}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="heritage-photo"
            />
            <div className="heritage-photo-overlay" />
            <div className="heritage-photo-caption">
              <strong>{heritage.landmarkTitle || "Iconic Campus Architecture"}</strong>
              <small>{heritage.imageBadge}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Landmark, Waves, Trees, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function RuhunaHeritage() {
  const t = await getTranslations("universityDetail.heritage");

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
                <Waves size={18} aria-hidden="true" />
              </div>
              <div>
                <h4>{t("bawaCard1Title")}</h4>
                <p>{t("bawaCard1Desc")}</p>
              </div>
            </div>

            <div className="heritage-pillar-item">
              <div className="pillar-icon-box">
                <Trees size={18} aria-hidden="true" />
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

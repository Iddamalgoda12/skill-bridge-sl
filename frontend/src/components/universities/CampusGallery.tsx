"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

interface PhotoItem {
  id: string;
  src: string;
  badgeKey: string;
  titleKey: string;
  descKey: string;
  aspect: string;
  location: string;
  credit: string;
}

const RUHUNA_PHOTOS: PhotoItem[] = [
  {
    id: "aerial",
    src: "/images/universities/ruhuna/hero-aerial.jpg",
    badgeKey: "photo1Badge",
    titleKey: "photo1Title",
    descKey: "photo1Desc",
    aspect: "16/10",
    location: "Wellamadama, Matara",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
  },
  {
    id: "bawa",
    src: "/images/universities/ruhuna/bawa-architecture.jpg",
    badgeKey: "photo2Badge",
    titleKey: "photo2Title",
    descKey: "photo2Desc",
    aspect: "4/3",
    location: "Main Campus, Matara",
    credit: "Wikimedia Commons · Public Domain",
  },
  {
    id: "engineering",
    src: "/images/universities/ruhuna/faculty-engineering.jpg",
    badgeKey: "photo3Badge",
    titleKey: "photo3Title",
    descKey: "photo3Desc",
    aspect: "4/3",
    location: "Hapugala, Galle",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
  },
  {
    id: "walkways",
    src: "/images/universities/ruhuna/campus-walkway.jpg",
    badgeKey: "photo4Badge",
    titleKey: "photo4Title",
    descKey: "photo4Desc",
    aspect: "16/9",
    location: "Wellamadama, Matara",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
  },
  {
    id: "labs",
    src: "/images/universities/ruhuna/engineering-labs.jpg",
    badgeKey: "photo5Badge",
    titleKey: "photo5Title",
    descKey: "photo5Desc",
    aspect: "4/3",
    location: "Dept. of Electrical & Information Engineering",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
  },
];

export function CampusGallery({ name, isRuhuna = true }: { name: string; isRuhuna?: boolean }) {
  const t = useTranslations("universityDetail.gallery");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : RUHUNA_PHOTOS.length - 1));
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null && prev < RUHUNA_PHOTOS.length - 1 ? prev + 1 : 0));
    },
    [selectedIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isRuhuna) {
    return (
      <section id="gallery" className="campus-gallery glass-panel" aria-label={t("label", { name })}>
        <p className="eyebrow">{t("eyebrow")}</p>
        <div className="campus-photo main-campus-photo" style={{ background: "linear-gradient(135deg, rgba(232, 216, 171, 0.4), rgba(46, 117, 89, 0.15))" }}>
          <Camera size={26} aria-hidden="true" />
          <strong>{t("main", { name })}</strong>
        </div>
      </section>
    );
  }

  const activePhoto = selectedIndex !== null ? RUHUNA_PHOTOS[selectedIndex] : null;

  return (
    <section id="gallery" className="campus-gallery-real glass-panel" aria-label={t("label", { name })}>
      <div className="gallery-header-row">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h3 className="gallery-title">{t("title")}</h3>
        </div>
        <span className="gallery-badge-verified">
          <ShieldCheck size={14} aria-hidden="true" />
          <span>Authentic Photography</span>
        </span>
      </div>

      <p className="gallery-subtitle muted">{t("subtitle")}</p>

      {/* Interactive Photo Grid */}
      <div className="ruhuna-gallery-grid">
        {/* Main Hero Photo */}
        <div
          className="gallery-card hero-photo-card"
          onClick={() => setSelectedIndex(0)}
          role="button"
          tabIndex={0}
          aria-label={`${t(RUHUNA_PHOTOS[0].titleKey)} - ${t("viewFull")}`}
        >
          <div className="gallery-img-wrapper">
            <Image
              src={RUHUNA_PHOTOS[0].src}
              alt={t(RUHUNA_PHOTOS[0].titleKey)}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              priority
              className="gallery-img"
            />
            <div className="gallery-gradient-overlay" />
          </div>
          <div className="gallery-card-content">
            <span className="gallery-card-badge">{t(RUHUNA_PHOTOS[0].badgeKey)}</span>
            <h4>{t(RUHUNA_PHOTOS[0].titleKey)}</h4>
            <p className="gallery-card-desc">{t(RUHUNA_PHOTOS[0].descKey)}</p>
            <div className="gallery-card-footer">
              <span className="gallery-location">
                <MapPin size={12} /> {RUHUNA_PHOTOS[0].location}
              </span>
              <span className="gallery-zoom-hint">
                <Maximize2 size={13} /> {t("viewFull")}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="gallery-thumb-grid">
          {RUHUNA_PHOTOS.slice(1).map((photo, idx) => {
            const actualIndex = idx + 1;
            return (
              <div
                key={photo.id}
                className="gallery-card thumb-photo-card"
                onClick={() => setSelectedIndex(actualIndex)}
                role="button"
                tabIndex={0}
                aria-label={`${t(photo.titleKey)} - ${t("viewFull")}`}
              >
                <div className="gallery-img-wrapper">
                  <Image
                    src={photo.src}
                    alt={t(photo.titleKey)}
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                    className="gallery-img"
                  />
                  <div className="gallery-gradient-overlay" />
                </div>
                <div className="gallery-card-content compact">
                  <span className="gallery-card-badge">{t(photo.badgeKey)}</span>
                  <h5>{t(photo.titleKey)}</h5>
                  <div className="gallery-card-footer">
                    <span className="gallery-location">
                      <MapPin size={11} /> {photo.location}
                    </span>
                    <span className="gallery-zoom-hint icon-only">
                      <Maximize2 size={12} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="gallery-attribution-footer">
        <small className="muted">{t("attribution")}</small>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="gallery-lightbox-modal glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedIndex(null)}
              aria-label={t("close")}
            >
              <X size={20} />
            </button>

            <div className="lightbox-image-container">
              <Image
                src={activePhoto.src}
                alt={t(activePhoto.titleKey)}
                fill
                sizes="(max-width: 1200px) 95vw, 1100px"
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-details">
              <div className="lightbox-header">
                <span className="eyebrow-pill">{t(activePhoto.badgeKey)}</span>
                <span className="gallery-location">
                  <MapPin size={13} /> {activePhoto.location}
                </span>
              </div>
              <h3>{t(activePhoto.titleKey)}</h3>
              <p className="lightbox-desc">{t(activePhoto.descKey)}</p>
              <div className="lightbox-footer">
                <small className="muted">{activePhoto.credit}</small>
                <div className="lightbox-nav-buttons">
                  <button
                    className="lightbox-nav-btn"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev !== null && prev > 0 ? prev - 1 : RUHUNA_PHOTOS.length - 1
                      )
                    }
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="lightbox-nav-btn"
                    onClick={() =>
                      setSelectedIndex((prev) =>
                        prev !== null && prev < RUHUNA_PHOTOS.length - 1 ? prev + 1 : 0
                      )
                    }
                    aria-label="Next photo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

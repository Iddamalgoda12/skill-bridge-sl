"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, MapPin, ShieldCheck } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import type { PhotoItem } from "@/lib/data/universityDetails";

const RUHUNA_FALLBACK_PHOTOS: PhotoItem[] = [
  {
    id: "aerial",
    src: "/images/universities/ruhuna/hero-aerial.jpg",
    badgeKey: "photo1Badge",
    titleKey: "photo1Title",
    descKey: "photo1Desc",
    title: "Wellamadama Oceanfront Campus Aerial",
    desc: "Sprawling across picturesque coastal bluffs where the Indian Ocean meets modern lecture theatres.",
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
    title: "Geoffrey Bawa Architecture & Pavilions",
    desc: "Renowned tropical modernism masterwork seamlessly integrating open pavilions with natural rock outcrops.",
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
    title: "Faculty of Engineering Hapugala Complex",
    desc: "Sri Lanka's historic southern engineering hub situated amidst tranquil waterways in Galle.",
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
    title: "Covered Walkways & Tropical Courtyards",
    desc: "Covered corridors framed by palm groves, facilitating breeze and sheltered movement during monsoons.",
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
    title: "Engineering Computing & Electronics Labs",
    desc: "Equipped with automated manufacturing lines, high-frequency testbenches, and networking servers.",
    aspect: "4/3",
    location: "Dept. of Electrical & Information Engineering",
    credit: "Wikimedia Commons · CC BY-SA 3.0",
  },
];

export function CampusGallery({
  name,
  photos,
  isRuhuna = true,
  galleryTitle,
  gallerySubtitle,
}: {
  name: string;
  photos?: PhotoItem[];
  isRuhuna?: boolean;
  galleryTitle?: string;
  gallerySubtitle?: string;
}) {
  const t = useTranslations("universityDetail.gallery");
  const locale = useLocale();
  const isSi = locale === "si";
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photoList = (photos && photos.length > 0) ? photos : RUHUNA_FALLBACK_PHOTOS;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photoList.length - 1));
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) => (prev !== null && prev < photoList.length - 1 ? prev + 1 : 0));
    },
    [selectedIndex, photoList.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const activePhoto = selectedIndex !== null ? photoList[selectedIndex] : null;

  // Resolve title, description, and badge with i18n support for Ruhuna fallback
  const getPhotoTitle = (p: PhotoItem) => {
    if (isRuhuna && p.titleKey && t.has(p.titleKey)) return t(p.titleKey);
    return p.title;
  };

  const getPhotoDesc = (p: PhotoItem) => {
    if (isRuhuna && p.descKey && t.has(p.descKey)) return t(p.descKey);
    return p.desc;
  };

  const getPhotoBadge = (p: PhotoItem) => {
    if (isRuhuna && p.badgeKey && t.has(p.badgeKey)) return t(p.badgeKey);
    return p.badge || (isSi ? "කැම්පස් ජීවිතය" : "Campus Life");
  };

  const displayTitle = galleryTitle || (isRuhuna ? t("title") : (isSi ? `${name} කැම්පස් ඡායාරූප ගැලරිය` : `Explore ${name} in Pictures`));
  const displaySubtitle = gallerySubtitle || (isRuhuna ? t("subtitle") : (isSi ? "විශ්වවිද්‍යාල භූමිය, නවීන පර්යේෂණාගාර සහ ශිෂ්‍ය පීඨ වල සැබෑ ඡායාරූප." : `Authentic verified photography from campus grounds, laboratories, and student faculties.`));

  return (
    <section id="gallery" className="campus-gallery-real glass-panel" aria-label={t("label", { name })}>
      <div className="gallery-header-row">
        <div>
          <p className="eyebrow">{t("eyebrow")}</p>
          <h3 className="gallery-title">{displayTitle}</h3>
        </div>
        <span className="gallery-badge-verified">
          <ShieldCheck size={14} aria-hidden="true" />
          <span>{isSi ? "තහවුරු කළ සැබෑ ඡායාරූප" : "Authentic Photography"}</span>
        </span>
      </div>

      <p className="gallery-subtitle muted">{displaySubtitle}</p>

      {/* Interactive Photo Grid */}
      <div className="ruhuna-gallery-grid">
        {/* Main Hero Photo */}
        <div
          className="gallery-card hero-photo-card"
          onClick={() => setSelectedIndex(0)}
          role="button"
          tabIndex={0}
          aria-label={`${getPhotoTitle(photoList[0])} - ${t("viewFull")}`}
        >
          <div className="gallery-img-wrapper">
            <Image
              src={photoList[0].src}
              alt={getPhotoTitle(photoList[0])}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              priority
              className="gallery-img"
            />
            <div className="gallery-gradient-overlay" />
          </div>
          <div className="gallery-card-content">
            <span className="gallery-card-badge">{getPhotoBadge(photoList[0])}</span>
            <h4>{getPhotoTitle(photoList[0])}</h4>
            <p className="gallery-card-desc">{getPhotoDesc(photoList[0])}</p>
            <div className="gallery-card-footer">
              <span className="gallery-location">
                <MapPin size={12} /> {photoList[0].location}
              </span>
              <span className="gallery-zoom-hint">
                <Maximize2 size={13} /> {t("viewFull")}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="gallery-thumb-grid">
          {photoList.slice(1).map((photo, idx) => {
            const actualIndex = idx + 1;
            return (
              <div
                key={photo.id}
                className="gallery-card thumb-photo-card"
                onClick={() => setSelectedIndex(actualIndex)}
                role="button"
                tabIndex={0}
                aria-label={`${getPhotoTitle(photo)} - ${t("viewFull")}`}
              >
                <div className="gallery-img-wrapper">
                  <Image
                    src={photo.src}
                    alt={getPhotoTitle(photo)}
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                    className="gallery-img"
                  />
                  <div className="gallery-gradient-overlay" />
                </div>
                <div className="gallery-card-content compact">
                  <span className="gallery-card-badge">{getPhotoBadge(photo)}</span>
                  <h5>{getPhotoTitle(photo)}</h5>
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
        <small className="muted">
          {photoList[0].credit
            ? (isSi ? `ඡායාරූප අනුග්‍රහය: ${photoList[0].credit}` : `Photography courtesy of ${photoList[0].credit}`)
            : t("attribution")}
        </small>
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
                alt={getPhotoTitle(activePhoto)}
                fill
                sizes="(max-width: 1200px) 95vw, 1100px"
                className="lightbox-image"
              />
            </div>

            <div className="lightbox-details">
              <div className="lightbox-header">
                <span className="eyebrow-pill">{getPhotoBadge(activePhoto)}</span>
                <span className="gallery-location">
                  <MapPin size={13} /> {activePhoto.location}
                </span>
              </div>
              <h3>{getPhotoTitle(activePhoto)}</h3>
              <p className="lightbox-desc">{getPhotoDesc(activePhoto)}</p>
              <div className="lightbox-footer">
                <small className="muted">{activePhoto.credit}</small>
                <div className="lightbox-nav-buttons">
                  <button
                    className="lightbox-nav-btn"
                    onClick={() =>
                    setSelectedIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : photoList.length - 1
                    )
                  }
                  aria-label={isSi ? "පෙර ඡායාරූපය" : "Previous photo"}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="lightbox-nav-btn"
                  onClick={() =>
                    setSelectedIndex((prev) =>
                      prev !== null && prev < photoList.length - 1 ? prev + 1 : 0
                    )
                  }
                  aria-label={isSi ? "ඊළඟ ඡායාරූපය" : "Next photo"}
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

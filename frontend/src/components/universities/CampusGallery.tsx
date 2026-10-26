import { Camera } from "lucide-react";
import { getTranslations } from "next-intl/server";

/** Intentional image slots from the Figma design. Populate from university.gallery when available. */
export async function CampusGallery({ name }: { name: string }) {
  const t = await getTranslations("universityDetail.gallery");
  return (
    <section id="gallery" className="campus-gallery glass-panel" aria-label={t("label", { name })}>
      <p className="eyebrow">{t("eyebrow")}</p>
      <div className="campus-photo main-campus-photo"><Camera size={26} aria-hidden="true" /><strong>{t("main", { name })}</strong></div>
      <div className="campus-small-photos">
        {(["life", "buildings"] as const).map((key) => (
          <div className="campus-photo" key={key}><Camera size={22} aria-hidden="true" /><strong>{t(key)}</strong></div>
        ))}
      </div>
      <small>{t("placeholder")}</small>
    </section>
  );
}

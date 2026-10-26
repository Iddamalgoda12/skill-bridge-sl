import { getTranslations } from "next-intl/server";

/** Placeholder shown while a data-backed page streams in. Purely visual; announced once to assistive tech. */
export async function PageSkeleton({ cards = 6 }: { cards?: number }) {
  const t = await getTranslations("states");
  return (
    <div className="page-container" role="status" aria-live="polite" aria-busy="true">
      <span className="sr-only">{t("loading")}</span>
      <div className="skeleton skeleton-title" aria-hidden="true" />
      <div className="skeleton skeleton-line" aria-hidden="true" />
      <div className="skeleton-grid" aria-hidden="true">
        {Array.from({ length: cards }, (_, i) => <div className="skeleton skeleton-card glass-panel" key={i} />)}
      </div>
    </div>
  );
}

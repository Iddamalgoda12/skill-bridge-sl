"use client";
import { useTranslations } from "next-intl";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations("states.error");
  return (
    <div className="page-container">
      <div className="glass-panel empty-state" role="alert">
        <h1>{t("title")}</h1>
        <p>{t("body")}</p>
        <button className="glass-button" onClick={reset}>{t("retry")}</button>
      </div>
    </div>
  );
}

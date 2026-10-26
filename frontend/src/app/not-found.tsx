import { getTranslations } from "next-intl/server";
import { ActionLink } from "@/components/shared/ActionLink";

export default async function NotFound() {
  const t = await getTranslations("states.notFound");
  return (
    <div className="page-container">
      <div className="glass-panel empty-state">
        <h1>{t("title")}</h1>
        <p>{t("body")}</p>
        <ActionLink href="/">{t("home")}</ActionLink>
      </div>
    </div>
  );
}

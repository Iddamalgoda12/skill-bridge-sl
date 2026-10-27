import type { Metadata } from "next";
import { Route } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { SavedPaths } from "@/components/path/SavedPaths";
import { getCareers, getUniversities } from "@/lib/api/catalog";
import { localizeCareer, localizeUniversity } from "@/lib/i18n/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("myPath"))("meta") };
}

export default async function MyPathPage() {
  const [t, catalog, careers, universities] = await Promise.all([getTranslations("myPath"), getTranslations("catalog"), getCareers(), getUniversities()]);
  const translator = catalog;
  const titles = Object.fromEntries([
    ...careers.map((c) => [`career:${c.slug}`, localizeCareer(translator, c).display.title]),
    ...universities.map((u) => [`university:${u.slug}`, localizeUniversity(translator, u).display.name]),
  ]);
  return (
    <div className="page-container">
      <PageIntro badge={<><Route />{t("eyebrow")}</>} title={t("title")}>
        <p>{t("intro")}</p>
      </PageIntro>
      <SavedPaths titles={titles} />
    </div>
  );
}

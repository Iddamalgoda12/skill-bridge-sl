import type { Metadata } from "next";
import { Route } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { StudentPathDashboard } from "@/components/path/StudentPathDashboard";
import { SavedPaths } from "@/components/path/SavedPaths";
import { getCareers, getUniversities } from "@/lib/api/catalog";
import { localizeCareer, localizeUniversity } from "@/lib/i18n/catalog";

export async function generateMetadata(): Promise<Metadata> {
  // Signed-in or not, this page shows personal progress: keep it out of search results
  return { title: (await getTranslations("myPath"))("meta"), robots: { index: false } };
}

export default async function MyPathPage() {
  const [t, catalog, careers, universities] = await Promise.all([getTranslations("myPath"), getTranslations("catalog"), getCareers(), getUniversities()]);
  // Names of bookmarked items in the visitor's language (stored titles are only a fallback)
  const titles = Object.fromEntries([
    ...careers.map((c) => [`career:${c.slug}`, localizeCareer(catalog, c).display.title]),
    ...universities.map((u) => [`university:${u.slug}`, localizeUniversity(catalog, u).display.name]),
  ]);

  return (
    <div className="page-container my-path-page">
      <StudentPathDashboard
        intro={
        <PageIntro
          badge={
            <>
              <Route />
              {t("eyebrow")}
            </>
          }
          title={t("title")}
        >
          <p>{t("intro")}</p>
        </PageIntro>
        }
      />
      <SavedPaths titles={titles} hideEmpty />
    </div>
  );
}

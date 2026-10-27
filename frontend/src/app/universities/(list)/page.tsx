import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { UniversityDirectory } from "@/components/universities/UniversityDirectory";
import Footer from "@/components/layout/Footer";
import { getUniversities } from "@/lib/api/catalog";
import { localizeUniversity } from "@/lib/i18n/catalog";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("universities"))("meta") };
}

export default async function UniversitiesPage() {
  const [universities, t, catalog] = await Promise.all([
    getUniversities(),
    getTranslations("universities"),
    getTranslations("catalog"),
  ]);

  return (
    <div className="page-container universities-page">
      <PageIntro badge={<><Landmark />{t("eyebrow")}</>} title={t("title")}>
        <p>{t.rich("intro", { br: () => <br /> })}</p>
      </PageIntro>
      <UniversityDirectory
        universities={universities.map((u) => localizeUniversity(catalog, u))}
      />
      <Footer />
    </div>
  );
}

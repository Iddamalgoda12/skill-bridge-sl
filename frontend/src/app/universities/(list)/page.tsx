import type { Metadata } from "next";
import { Landmark } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { UniversityDirectory } from "@/components/universities/UniversityDirectory";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResourceCards } from "@/components/shared/ResourceCards";
import Footer from "@/components/layout/Footer";
import { getUniversities } from "@/lib/api/catalog";
import { localizeUniversity } from "@/lib/i18n/catalog";
import assets from "@/lib/design/assets.json";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("universities"))("meta") };
}

export default async function UniversitiesPage({ searchParams }: { searchParams: Promise<{ compare?: string }> }) {
  const [universities, query, t, catalog] = await Promise.all([getUniversities(), searchParams, getTranslations("universities"), getTranslations("catalog")]);
  return (
    <div className="page-container universities-page">
      <PageIntro badge={<><Landmark />{t("eyebrow")}</>} title={t("title")}>
        <p>{t.rich("intro", { br: () => <br /> })}</p>
      </PageIntro>
      <UniversityDirectory universities={universities.map((u) => localizeUniversity(catalog, u))} initialCompare={query.compare === "true"} />
      <section className="section-block">
        <SectionHeading title={t("resources.title")} description={t("resources.description")} />
        <ResourceCards
          items={[
            { title: t("resources.admission.title"), description: t("resources.admission.description"), href: "/universities/ruhuna#admissions", icon: assets.universities.imgIconGraduation1, tone: "tone-mint" },
            { title: t("resources.funding.title"), description: t("resources.funding.description"), href: "/contact?topic=scholarships", icon: assets.universities.imgIconWallet1 },
            { title: t("resources.guidance.title"), description: t("resources.guidance.description"), href: "/build-your-path", icon: assets.universities.imgIconCompass1, tone: "tone-ice" },
          ]}
        />
      </section>
      <Footer />
    </div>
  );
}

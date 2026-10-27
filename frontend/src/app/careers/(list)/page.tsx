import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CareerDirectory } from "@/components/careers/CareerDirectory";
import { getCareers } from "@/lib/api/catalog";
import { localizeCareer } from "@/lib/i18n/catalog";
import { HeroArtwork } from "@/components/home/HeroArtwork";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("careers"))("meta") };
}

export default async function CareersPage() {
  const [careers, catalog] = await Promise.all([getCareers(), getTranslations("catalog")]);
  return (
    <div className="page-container careers-page">
      <CareerDirectory artwork={<HeroArtwork compact />} careers={careers.map((career) => localizeCareer(catalog, career))} />
    </div>
  );
}

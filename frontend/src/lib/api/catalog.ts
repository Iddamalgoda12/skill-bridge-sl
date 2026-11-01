import "server-only";
import { sampleCareers } from "@/lib/data/careers";
import { sampleUniversities } from "@/lib/data/universities";
import { getCareerDetail as getSampleCareerDetail } from "@/lib/data/careerDetails";
import { getUniversityDetail as getSampleUniversityDetail } from "@/lib/data/universityDetails";
import type { Career, University } from "@/types/catalog";
import type { CareerDetail } from "@/lib/data/careerDetails";
import type { UniversityDetail } from "@/lib/data/universityDetails";
/** Sample mode is explicit; API failures never masquerade as sample results. */
async function catalog<T>(resource: string, sample: T[], required: (keyof T)[]): Promise<T[]> {
  if (process.env.CATALOG_DATA_SOURCE === "sample") return sample;
  const base = process.env.API_BASE_URL || "http://localhost:8080/api";
  const response = await fetch(`${base.replace(/\/$/, "")}/${resource}`, { cache: "no-store", signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error(`Catalog request failed: ${resource} (${response.status})`);
  const data: unknown = await response.json();
  if (!Array.isArray(data) || data.some(item => !item || required.some(key => !(key in item)))) throw new Error(`Invalid ${resource} response`);
  return data as T[];
}
export const getCareers = () => catalog<Career>("careers/public", sampleCareers, ["slug", "title", "category"]);
export const getUniversities = () => catalog<University>("universities/public", sampleUniversities, ["slug", "name", "areas", "type"]);
async function profile<T>(resource: string, slug: string, sample: T | undefined): Promise<T | undefined> {
  if (process.env.CATALOG_DATA_SOURCE === "sample") return sample;
  const base = process.env.API_BASE_URL || "http://localhost:8080/api";
  const response = await fetch(`${base.replace(/\/$/, "")}/${resource}/public/${encodeURIComponent(slug)}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (response.status === 404) return undefined;
  if (!response.ok) throw new Error(`Catalog request failed: ${resource}/${slug} (${response.status})`);
  return await response.json() as T;
}
export const getCareerProfile = (slug: string) => profile<CareerDetail>("careers", slug, getSampleCareerDetail(slug));
export const getUniversityProfile = (slug: string) => profile<UniversityDetail>("universities", slug, getSampleUniversityDetail(slug));
const ENGINEERING_SLUGS = [
  "cloud-architect",
  "cybersecurity-analyst",
  "ai-engineer",
  "data-analyst",
  "designer",
  "civil-engineer",
  "mechanical-engineer",
  "electrical-engineer",
];

export async function getCareer(slug: string) {
  const target = ENGINEERING_SLUGS.includes(slug) ? "engineer" : slug;
  return (await getCareers()).find(item => item.slug === target);
}
export async function getUniversity(slug: string) { return (await getUniversities()).find(item => item.slug === slug); }

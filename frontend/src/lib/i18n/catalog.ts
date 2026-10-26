import type { Career, University } from "@/types/catalog";

/** The slice of next-intl's translator the catalog helpers need (works for server and client). */
export type Translator = {
  (key: string, values?: Record<string, string | number>): string;
  has(key: string): boolean;
};

/**
 * Catalog records come from the API or the local fixtures in English. The
 * message files hold translations keyed by slug; anything not translated yet
 * falls back to the record's own text instead of showing a raw key.
 */
const pick = (t: Translator, key: string, fallback: string) => (t.has(key) ? t(key) : fallback);

export type LocalizedCareer = Career & { display: { title: string; summary: string; employers: string; entry: string; category: string } };

/** `t` must be scoped to the `catalog` namespace. */
export function localizeCareer(t: Translator, career: Career): LocalizedCareer {
  return {
    ...career,
    display: {
      title: pick(t, `career.${career.slug}.title`, career.title),
      summary: pick(t, `career.${career.slug}.summary`, career.summary),
      employers: pick(t, `career.${career.slug}.employers`, career.employers),
      entry: pick(t, `career.${career.slug}.entry`, career.entry),
      category: pick(t, `category.${career.category}`, career.category),
    },
  };
}

export function formatSalary(t: Translator, career: Pick<Career, "salaryK" | "salaryVaries">): string {
  if (career.salaryVaries) return t("salary.varies");
  if (career.salaryK != null) return t("salary.average", { amount: career.salaryK });
  return t("salary.unknown");
}

export type LocalizedUniversity = University & { display: { name: string; location: string; areas: string[]; type: string } };

export function localizeUniversity(t: Translator, university: University): LocalizedUniversity {
  return {
    ...university,
    display: {
      name: pick(t, `university.${university.slug}.name`, university.name),
      location: pick(t, `location.${university.location}`, university.location),
      areas: university.areas.map((area) => pick(t, `area.${area}`, area)),
      type: pick(t, `institutionType.${university.type}`, university.type),
    },
  };
}

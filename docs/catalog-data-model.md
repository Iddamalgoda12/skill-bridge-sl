# Career and university catalog data

Flyway migration `V8__career_and_university_catalogs.sql` creates and seeds the public catalog from the existing frontend datasets.

| Table | Relational fields | Profile data |
| --- | --- | --- |
| `career_catalog` | Slug, title, category, publication state, display order | Listing fields such as summary, employers, entry route, image, and salary indicator in `catalog_data` JSONB |
| `career_profiles` | Career/profile slug | Full career guide in `profile_data` JSONB |
| `university_catalog` | Slug, name, institution type, location, publication state, display order | Listing fields such as areas, website, and image in `catalog_data` JSONB |
| `university_profiles` | University slug, with a foreign key to `university_catalog` | Full institution profile in `profile_data` JSONB |

The profile sections are JSONB because the existing career and university pages use nested, varied sections (roadmaps, faculties, admissions, gallery items, and similar content). Their slug and directory/filter fields remain relational and indexed. The career catalog also contains an unpublished `software-engineer` alias row so every career profile has a valid foreign key; it remains excluded from directory results because the current site redirects that slug to the Engineer page.

Spring Boot serves public read endpoints under `/api/careers/public` and `/api/universities/public`, with `/{slug}` endpoints for full profiles. Set `CATALOG_DATA_SOURCE=api` in the frontend environment to use those endpoints. `CATALOG_DATA_SOURCE=sample` selects the original static data for local fallback work; API errors are surfaced instead of silently switching sources.

To change seeded catalog content, update the source records under `frontend/src/lib/data/` and create a new Flyway migration for the database change. V8 is an initial seed migration and should remain immutable after it has run in an environment.

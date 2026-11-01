-- The Engineer career covers multiple engineering paths; it is not a Civil Engineer profile.
UPDATE career_catalog
SET title = 'Engineer',
    catalog_data = jsonb_set(catalog_data, '{title}', to_jsonb('Engineer'::TEXT), TRUE),
    updated_at = NOW()
WHERE slug = 'engineer';

UPDATE career_profiles
SET profile_data = jsonb_set(
        jsonb_set(profile_data, '{title}', to_jsonb('Engineer'::TEXT), TRUE),
        '{sinhalaTitle}', to_jsonb('ඉංජිනේරු'::TEXT), TRUE
    ),
    updated_at = NOW()
WHERE slug = 'engineer';

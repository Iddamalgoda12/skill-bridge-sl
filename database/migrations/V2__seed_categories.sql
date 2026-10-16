-- ============================================================================
-- V2__seed_categories.sql
-- SkillBridgeSL – Seed default skill categories
-- ============================================================================

INSERT INTO categories (id, name, slug, description) VALUES
    (uuid_generate_v4(), 'Programming',        'programming',       'Software development, algorithms, and coding'),
    (uuid_generate_v4(), 'Data Science',       'data-science',      'Analytics, ML, and data engineering'),
    (uuid_generate_v4(), 'Design',             'design',            'UI/UX, graphic, and product design'),
    (uuid_generate_v4(), 'Business',           'business',          'Entrepreneurship, management, and strategy'),
    (uuid_generate_v4(), 'Marketing',          'marketing',         'Digital marketing, SEO, and growth'),
    (uuid_generate_v4(), 'DevOps',             'devops',            'Cloud infrastructure, CI/CD, and SRE'),
    (uuid_generate_v4(), 'Cybersecurity',      'cybersecurity',     'Security, ethical hacking, and compliance'),
    (uuid_generate_v4(), 'Mobile Development', 'mobile-development','iOS, Android, and cross-platform apps')
ON CONFLICT (slug) DO NOTHING;


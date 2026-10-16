-- ============================================================================
-- V1__init_schema.sql
-- SkillBridgeSL – Initial Database Schema
-- Flyway migration V1 – runs once on first startup
-- ============================================================================

-- ─── Extensions ──────────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";   -- uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";    -- crypt(), gen_salt()
CREATE EXTENSION IF NOT EXISTS "pg_trgm";     -- trigram full-text search

-- ─── Enums ───────────────────────────────────────────────────────────────────
CREATE TYPE user_role      AS ENUM ('STUDENT', 'INSTRUCTOR', 'ADMIN');
CREATE TYPE course_status  AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE enroll_status  AS ENUM ('ACTIVE', 'COMPLETED', 'CANCELLED');
CREATE TYPE lesson_type    AS ENUM ('VIDEO', 'ARTICLE', 'QUIZ', 'ASSIGNMENT');

-- ─── users ───────────────────────────────────────────────────────────────────
CREATE TABLE users (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email         VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name    VARCHAR(100) NOT NULL,
    last_name     VARCHAR(100) NOT NULL,
    role          user_role    NOT NULL DEFAULT 'STUDENT',
    avatar_url    TEXT,
    bio           TEXT,
    is_active     BOOLEAN      NOT NULL DEFAULT TRUE,
    is_verified   BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_email      ON users (email);
CREATE INDEX idx_users_role       ON users (role);
CREATE INDEX idx_users_is_active  ON users (is_active);

-- ─── refresh_tokens ──────────────────────────────────────────────────────────
CREATE TABLE refresh_tokens (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id     UUID         NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    token       TEXT         NOT NULL UNIQUE,
    expires_at  TIMESTAMPTZ  NOT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens (user_id);
CREATE INDEX idx_refresh_tokens_token   ON refresh_tokens (token);

-- ─── categories ──────────────────────────────────────────────────────────────
CREATE TABLE categories (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name        VARCHAR(100) NOT NULL UNIQUE,
    slug        VARCHAR(120) NOT NULL UNIQUE,
    description TEXT,
    icon_url    TEXT,
    parent_id   UUID REFERENCES categories (id) ON DELETE SET NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- ─── courses ─────────────────────────────────────────────────────────────────
CREATE TABLE courses (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    instructor_id   UUID          NOT NULL REFERENCES users (id) ON DELETE RESTRICT,
    category_id     UUID          REFERENCES categories (id) ON DELETE SET NULL,
    title           VARCHAR(255)  NOT NULL,
    slug            VARCHAR(280)  NOT NULL UNIQUE,
    description     TEXT,
    thumbnail_url   TEXT,
    price           NUMERIC(10,2) NOT NULL DEFAULT 0.00,
    status          course_status NOT NULL DEFAULT 'DRAFT',
    level           VARCHAR(50)   DEFAULT 'BEGINNER',  -- BEGINNER | INTERMEDIATE | ADVANCED
    language        VARCHAR(50)   DEFAULT 'en',
    tags            TEXT[],
    duration_mins   INTEGER,
    created_at      TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_courses_instructor  ON courses (instructor_id);
CREATE INDEX idx_courses_category    ON courses (category_id);
CREATE INDEX idx_courses_status      ON courses (status);
CREATE INDEX idx_courses_slug        ON courses (slug);
CREATE INDEX idx_courses_tags        ON courses USING GIN (tags);

-- ─── sections ────────────────────────────────────────────────────────────────
CREATE TABLE sections (
    id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id    UUID         NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
    title        VARCHAR(255) NOT NULL,
    description  TEXT,
    position     INTEGER      NOT NULL DEFAULT 0,
    created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_sections_course ON sections (course_id);

-- ─── lessons ─────────────────────────────────────────────────────────────────
CREATE TABLE lessons (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_id      UUID         NOT NULL REFERENCES sections (id) ON DELETE CASCADE,
    title           VARCHAR(255) NOT NULL,
    type            lesson_type  NOT NULL DEFAULT 'VIDEO',
    content_url     TEXT,
    content_text    TEXT,
    duration_secs   INTEGER,
    position        INTEGER      NOT NULL DEFAULT 0,
    is_free_preview BOOLEAN      NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_lessons_section ON lessons (section_id);

-- ─── enrollments ─────────────────────────────────────────────────────────────
CREATE TABLE enrollments (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id         UUID          NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    course_id       UUID          NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
    status          enroll_status NOT NULL DEFAULT 'ACTIVE',
    enrolled_at     TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
    completed_at    TIMESTAMPTZ,
    UNIQUE (user_id, course_id)
);

CREATE INDEX idx_enrollments_user   ON enrollments (user_id);
CREATE INDEX idx_enrollments_course ON enrollments (course_id);

-- ─── lesson_progress ─────────────────────────────────────────────────────────
CREATE TABLE lesson_progress (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enrollment_id   UUID         NOT NULL REFERENCES enrollments (id) ON DELETE CASCADE,
    lesson_id       UUID         NOT NULL REFERENCES lessons (id) ON DELETE CASCADE,
    is_completed    BOOLEAN      NOT NULL DEFAULT FALSE,
    completed_at    TIMESTAMPTZ,
    UNIQUE (enrollment_id, lesson_id)
);

CREATE INDEX idx_lesson_progress_enrollment ON lesson_progress (enrollment_id);

-- ─── reviews ─────────────────────────────────────────────────────────────────
CREATE TABLE reviews (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_id   UUID         NOT NULL REFERENCES courses (id) ON DELETE CASCADE,
    user_id     UUID         NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    rating      SMALLINT     NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment     TEXT,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    UNIQUE (course_id, user_id)
);

CREATE INDEX idx_reviews_course ON reviews (course_id);
CREATE INDEX idx_reviews_user   ON reviews (user_id);

-- ─── Trigger: auto-update updated_at ─────────────────────────────────────────
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at_users
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER set_updated_at_courses
    BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER set_updated_at_lessons
    BEFORE UPDATE ON lessons
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER set_updated_at_reviews
    BEFORE UPDATE ON reviews
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();


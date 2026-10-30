-- ============================================================================
-- V6__career_paths_and_roadmaps.sql
-- SkillBridgeSL – Build Your Path & Student Roadmap System
-- Flyway migration V6
-- ============================================================================

-- ─── student_career_paths ───────────────────────────────────────────────────
CREATE TABLE student_career_paths (
    id                 UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id            UUID         NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    title              VARCHAR(255) NOT NULL,
    target_career_slug VARCHAR(100) NOT NULL,
    education_stage    VARCHAR(50)  NOT NULL,
    current_stream     VARCHAR(50),
    district           VARCHAR(50),
    budget_tier        VARCHAR(50),
    is_active          BOOLEAN      NOT NULL DEFAULT TRUE,
    completion_percent INTEGER      NOT NULL DEFAULT 0,
    notes              TEXT,
    preferences_json   TEXT,
    created_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_career_paths_user   ON student_career_paths (user_id);
CREATE INDEX idx_career_paths_active ON student_career_paths (user_id, is_active);
CREATE INDEX idx_career_paths_slug   ON student_career_paths (target_career_slug);

-- ─── path_milestones ────────────────────────────────────────────────────────
CREATE TABLE path_milestones (
    id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    path_id         UUID         NOT NULL REFERENCES student_career_paths (id) ON DELETE CASCADE,
    stage_key       VARCHAR(50)  NOT NULL,
    title           VARCHAR(255) NOT NULL,
    description     TEXT,
    why_it_matters  TEXT,
    prerequisites   TEXT,
    status          VARCHAR(30)  NOT NULL DEFAULT 'PENDING',
    target_date     DATE,
    duration_months INTEGER,
    position        INTEGER      NOT NULL DEFAULT 0,
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_path_milestones_path     ON path_milestones (path_id);
CREATE INDEX idx_path_milestones_position ON path_milestones (path_id, position);
CREATE INDEX idx_path_milestones_status   ON path_milestones (status);

-- ─── milestone_tasks ────────────────────────────────────────────────────────
CREATE TABLE milestone_tasks (
    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    milestone_id  UUID         NOT NULL REFERENCES path_milestones (id) ON DELETE CASCADE,
    title         VARCHAR(255) NOT NULL,
    is_completed  BOOLEAN      NOT NULL DEFAULT FALSE,
    completed_at  TIMESTAMPTZ,
    position      INTEGER      NOT NULL DEFAULT 0,
    resource_url  TEXT,
    resource_type VARCHAR(50),
    notes         TEXT,
    created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_milestone_tasks_milestone ON milestone_tasks (milestone_id);
CREATE INDEX idx_milestone_tasks_position  ON milestone_tasks (milestone_id, position);

-- ─── student_achievements ───────────────────────────────────────────────────
CREATE TABLE student_achievements (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id     UUID         NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    path_id     UUID         REFERENCES student_career_paths (id) ON DELETE SET NULL,
    badge_key   VARCHAR(60)  NOT NULL,
    title       VARCHAR(150) NOT NULL,
    description TEXT,
    unlocked_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
    UNIQUE (user_id, badge_key, path_id)
);

CREATE INDEX idx_student_achievements_user ON student_achievements (user_id);

-- ─── Trigger: auto-update updated_at ────────────────────────────────────────
CREATE TRIGGER set_updated_at_career_paths
    BEFORE UPDATE ON student_career_paths
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER set_updated_at_path_milestones
    BEFORE UPDATE ON path_milestones
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();


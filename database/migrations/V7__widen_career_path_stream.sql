-- ============================================================================
-- V7__widen_career_path_stream.sql
-- Widen current_stream column on student_career_paths to allow full stream names
-- ============================================================================

ALTER TABLE student_career_paths ALTER COLUMN current_stream TYPE VARCHAR(255);


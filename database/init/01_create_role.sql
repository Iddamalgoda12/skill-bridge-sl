-- ============================================================================
-- database/init/01_create_role.sql
-- Runs ONCE when Docker starts a fresh postgres:17 container.
-- Creates the application DB role if it doesn't exist yet.
-- (Flyway handles table creation via migrations in the backend.)
-- ============================================================================

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_catalog.pg_roles
        WHERE rolname = 'skillbridge'
    ) THEN
        CREATE ROLE skillbridge WITH LOGIN PASSWORD 'skillbridge_secret';
    END IF;
END
$$;

-- Grant required privileges on the database
GRANT ALL PRIVILEGES ON DATABASE skillbridgesl TO skillbridge;
GRANT USAGE ON SCHEMA public TO skillbridge;
GRANT CREATE ON SCHEMA public TO skillbridge;


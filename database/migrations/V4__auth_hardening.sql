-- Auth hardening.
-- 1. Refresh tokens become opaque, rotating, revocable credentials. The `token`
--    column now stores the SHA-256 hash of the token, never the token itself.
-- 2. Email uniqueness is case-insensitive.

ALTER TABLE refresh_tokens
    ADD COLUMN family_id  UUID        NOT NULL DEFAULT uuid_generate_v4(),
    ADD COLUMN revoked_at TIMESTAMPTZ;

ALTER TABLE refresh_tokens ALTER COLUMN family_id DROP DEFAULT;

COMMENT ON COLUMN refresh_tokens.token IS 'SHA-256 hex digest of the opaque refresh token';

-- Redundant with the UNIQUE constraint's own index.
DROP INDEX IF EXISTS idx_refresh_tokens_token;
CREATE INDEX idx_refresh_tokens_family  ON refresh_tokens (family_id);
CREATE INDEX idx_refresh_tokens_expires ON refresh_tokens (expires_at);

CREATE UNIQUE INDEX uq_users_email_lower ON users (LOWER(email));

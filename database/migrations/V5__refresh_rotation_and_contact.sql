-- Distinguish rotation from revocation so a refresh that races a concurrent
-- request can be retried inside a short grace window without weakening
-- logout / password-change / theft revocation.
ALTER TABLE refresh_tokens ADD COLUMN rotated_at TIMESTAMPTZ;

-- Messages submitted through the public contact form.
CREATE TABLE contact_messages (
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name       VARCHAR(150)  NOT NULL,
    email      VARCHAR(254)  NOT NULL,
    topic      VARCHAR(40)   NOT NULL,
    message    VARCHAR(4000) NOT NULL,
    created_at TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_contact_messages_created ON contact_messages (created_at DESC);

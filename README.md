# SkillBridgeSL

SkillBridgeSL is a full-stack learning platform with a Next.js frontend, a Spring Boot API, and a local PostgreSQL database.

## Requirements

- PostgreSQL 17 (or a compatible PostgreSQL version) installed and running locally
- Java 25
- Maven 3.9+
- Node.js 22+ and npm

## First-time setup

### 1. Create the local database

Open `psql` as a PostgreSQL administrator and run:

```sql
CREATE ROLE skillbridge WITH LOGIN PASSWORD 'skillbridge_secret';
CREATE DATABASE skillbridgesl OWNER skillbridge;
```

If the role or database already exists, keep it and confirm the credentials match `backend/src/main/resources/application-local.yml`, or set `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` in your shell before starting the backend.

### 2. Start the backend

In a terminal from the repository root:

```bash
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=local
```

On first startup, Spring Boot runs Flyway migrations from `../database/migrations` and validates the schema. The API listens at `http://localhost:8080/api`.

### 3. Install and start the frontend

In a second terminal from the repository root:

```bash
cd frontend
npm ci
npm run dev
```

Open `http://localhost:3000`. The frontend's API proxy targets `http://localhost:8080/api` by default. Set `NEXT_PUBLIC_API_URL` in `frontend/.env.local` if your backend uses another address.

## Useful URLs

- Frontend: http://localhost:3000
- API: http://localhost:8080/api
- Swagger UI: http://localhost:8080/api/swagger-ui.html
- Health: http://localhost:8080/api/actuator/health

## Development commands

Run backend tests from `backend/` with `mvn test`. Tests use the local PostgreSQL database configured by `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD`; start PostgreSQL before running them.

Run the frontend production build from `frontend/` with `npm run build`, or run its linter with `npm run lint`.

## Database migrations

Flyway migration files live in `database/migrations/` and follow the naming convention `V{version}__{description}.sql`. Spring Boot applies pending migrations on backend startup. Add a new migration file rather than editing one that has already been applied.

## Project structure

```text
backend/                 Spring Boot API and Maven project
database/migrations/     Flyway SQL migrations
frontend/                Next.js app and npm project
```

## Authentication

The browser never sees a token. Next.js route handlers (`/api/auth/*`, `/api/account/*`) act as a
backend-for-frontend: they call Spring and keep a 15-minute access token and a 7-day, single-use,
rotating refresh token in `HttpOnly`, `SameSite=Lax` cookies. `src/proxy.ts` silently renews an expired
access token and guards `/account`; Spring re-checks authorization on every call. Refresh tokens are
stored hashed, revoked on logout/password change, and reuse outside a 10 s grace window revokes the whole
token family. `JWT_SECRET` is mandatory outside the `local` profile (see `.env.example`).

## Languages

English and Sinhala (`frontend/messages/{en,si}.json`, `next-intl`, cookie-based, no URL prefix).
Add text to **both** files; `npm test` fails if the keys, placeholders or Sinhala script drift apart.
Backend validation returns stable codes (`password_weak`, `EMAIL_EXISTS`, …) that the UI translates.

## Testing

```bash
cd backend && set -a && source .env && set +a && ./mvnw test     # needs local PostgreSQL; tests roll back
cd frontend && npm run lint && npm run typecheck && npm test      # unit tests
# browser tests need the API and a production build running:
NEXT_DIST_DIR=.next-e2e npx next build && NEXT_DIST_DIR=.next-e2e npx next start -p 3001 &
E2E_BASE_URL=http://localhost:3001 npm run test:e2e              # uses system Chrome; cleans up @example.test users
```
Set `AUTH_RATE_LIMIT=100000` on the API while running e2e (many registrations from one address).

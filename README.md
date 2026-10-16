# SkillBridgeSL – Full-Stack Monorepo

> **SkillBridgeSL** is an online learning platform built with a modern full-stack setup.

---

## 🏗️ Project Structure

```
skillbridgesl/
├── frontend/               # Next.js 16 + React 19 + TypeScript + Tailwind v4 + shadcn/ui
│   ├── src/
│   │   ├── app/            # App Router pages (home, about, contact, courses)
│   │   ├── components/     # Shared React components (Navbar, UI)
│   │   └── lib/
│   ├── Dockerfile
│   └── next.config.ts
│
├── backend/                # Spring Boot 3.5 · Java 25 · Maven
│   ├── src/main/java/com/skillbridgesl/
│   │   ├── config/         # SecurityConfig, CorsConfig
│   │   ├── controller/     # REST controllers (AuthController, …)
│   │   ├── service/        # Business logic (AuthService, …)
│   │   ├── repository/     # Spring Data JPA repositories
│   │   ├── model/          # JPA entities (User, Course, Section, Lesson, …)
│   │   ├── dto/            # Java Records (request/response DTOs)
│   │   ├── exception/      # Domain exceptions + GlobalExceptionHandler
│   │   └── security/       # JwtService + JwtAuthenticationFilter
│   ├── src/main/resources/
│   │   ├── application.yml
│   │   ├── application-local.yml
│   │   └── application-prod.yml
│   ├── Dockerfile
│   └── pom.xml
│
├── database/
│   ├── migrations/         # Flyway SQL migrations (V1, V2, …) – shared source of truth
│   └── init/               # Docker-entrypoint init scripts (role creation)
│
├── docker-compose.yml      # Runs all three services
├── .env.example            # Copy to .env and fill in secrets
└── README.md
```

---

## 🚀 Tech Stack

| Layer       | Technology                                        |
|-------------|---------------------------------------------------|
| Frontend    | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |
| UI Library  | shadcn/ui, Radix UI, Lucide React                 |
| Backend     | Spring Boot 3.5, Java 25, Maven                   |
| Auth        | JWT (JJWT 0.12), Spring Security 6                |
| ORM         | Spring Data JPA (Hibernate 6)                     |
| DB          | PostgreSQL 17                                     |
| Migrations  | Flyway 10 – `database/migrations/` (outside JAR) |
| Docs        | SpringDoc OpenAPI 2 (Swagger UI)                  |
| Tests       | JUnit 5, Testcontainers, Spring Security Test     |
| Containers  | Docker + Docker Compose                           |

---

## ⚡ Getting Started

### Prerequisites
- Docker + Docker Compose v2
- Java 25 (for local backend dev)
- Node.js 22+ (for local frontend dev)

### 1. Environment Setup
```bash
cp .env.example .env
# Edit .env – especially JWT_SECRET in production
```

### 2. Run Everything with Docker Compose
```bash
docker compose up --build
```

| Service   | URL                                       |
|-----------|-------------------------------------------|
| Frontend  | http://localhost:3000                     |
| Backend   | http://localhost:8080/api                 |
| Swagger   | http://localhost:8080/api/swagger-ui.html |
| Health    | http://localhost:8080/api/actuator/health |

---

## 🛠️ Local Development

### Backend (Spring Boot)
```bash
cd backend

# Run with local profile (verbose SQL, dev tools hot-reload)
mvn spring-boot:run -Dspring-boot.run.profiles=local

# Run tests (Testcontainers spins up PostgreSQL automatically)
mvn test
```

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev   # → http://localhost:3000
```

---

## 🗄️ Database Migrations (Flyway)

Migration files live **outside the JAR** in `database/migrations/` — the single source of truth across all environments.

```
database/migrations/
  V1__init_schema.sql      ← Full initial schema
  V2__seed_categories.sql  ← Default categories
  V3__...                  ← Add your next migration here
```

**Naming convention:** `V{version}__{description}.sql`

| Environment  | How migrations run                                      |
|--------------|---------------------------------------------------------|
| Local dev    | Auto on Spring Boot startup (`../database/migrations`)  |
| Docker       | Baked into image at `/app/migrations` via Dockerfile    |
| Kubernetes   | Flyway init container before the app pod starts         |
| CI/CD        | `cd backend && mvn flyway:migrate`                      |

---

## 🔐 API Authentication

All protected endpoints require:
```
Authorization: Bearer <access_token>
```

| Endpoint             | Method | Auth     | Description          |
|----------------------|--------|----------|----------------------|
| `/auth/register`     | POST   | Public   | Create account       |
| `/auth/login`        | POST   | Public   | Get JWT tokens       |
| `/auth/refresh`      | POST   | Public   | Refresh access token |
| `/courses/public/**` | GET    | Public   | Browse courses       |
| `/actuator/health`   | GET    | Public   | Health check         |
| Everything else      | *      | Required | JWT Bearer required  |

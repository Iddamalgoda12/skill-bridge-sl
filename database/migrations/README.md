# SkillBridgeSL – Database Migrations
#
# All Flyway migration files live here, outside the Spring Boot JAR.
# This means migrations can be run independently of the application
# (e.g. as a Kubernetes init container, CI/CD gate, or Flyway CLI).
#
# ── Naming convention ─────────────────────────────────────────────────────────
#   V{version}__{description}.sql        ← versioned (runs once, in order)
#   R__{description}.sql                 ← repeatable (re-runs when checksum changes)
#   U{version}__{description}.sql        ← undo (requires Flyway Teams)
#
# ── How migrations are applied ────────────────────────────────────────────────
#
#   LOCAL DEV (Spring Boot auto-run on startup):
#     The app reads from filesystem:../../database/migrations via application-local.yml
#     Just start the app – Flyway runs automatically.
#
#   DOCKER COMPOSE (volume-mounted):
#     ./database/migrations is mounted into the container at /app/migrations
#     FLYWAY_LOCATIONS=filesystem:/app/migrations (set in docker-compose.yml)
#
#   PRODUCTION / KUBERNETES (init container):
#     Run the official Flyway Docker image as an init container before deploying the app:
#
#       docker run --rm flyway/flyway:10 \
#         -url=jdbc:postgresql://host:5432/skillbridgesl \
#         -user=skillbridge \
#         -password=secret \
#         -locations=filesystem:/flyway/sql \
#         -volume $(pwd)/database/migrations:/flyway/sql \
#         migrate
#
#   CI/CD (Maven):
#     cd backend && mvn flyway:migrate
#     (Flyway plugin reads filesystem:../database/migrations from pom.xml)
#
# ── Adding a new migration ─────────────────────────────────────────────────────
#   1. Create V{next}__{description}.sql in this directory
#   2. Never edit an already-applied migration file (breaks Flyway checksum)
#   3. Restart the backend – Flyway will detect and apply it automatically


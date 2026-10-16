# ─── Build stage ──────────────────────────────────────────────────────────────
# NOTE: Build context is the REPO ROOT (set in docker-compose.yml).
#       This lets us COPY database/migrations/ into the image.
FROM eclipse-temurin:25-jdk-alpine AS builder

WORKDIR /build

# Cache Maven dependencies first (only re-runs when pom.xml changes)
COPY backend/pom.xml .
COPY backend/.mvn/ .mvn/
COPY backend/mvnw .
RUN chmod +x mvnw && ./mvnw dependency:go-offline -B

# Compile and package (skip tests – run them in CI separately)
COPY backend/src/ src/
RUN ./mvnw package -DskipTests -B

# ─── Runtime stage ─────────────────────────────────────────────────────────────
FROM eclipse-temurin:25-jre-alpine AS runtime

# Non-root user for security
RUN addgroup -S spring && adduser -S spring -G spring

WORKDIR /app

# Copy the fat JAR from the build stage
COPY --from=builder /build/target/*.jar app.jar

# ── Copy Flyway migrations from the repo root ──────────────────────────────────
# Migrations live outside the JAR in database/migrations/ so they can be:
#   • run independently (Flyway CLI / Kubernetes init container)
#   • versioned separately from the application code
# They are baked into the image here so the container is self-contained.
COPY database/migrations/ /app/migrations/

USER spring:spring

# JVM tuning for containers (Java 25 auto-detects container CPU/memory limits)
ENV JAVA_OPTS="-XX:+UseContainerSupport \
               -XX:MaxRAMPercentage=75.0 \
               -XX:+UseG1GC \
               -Djava.security.egd=file:/dev/./urandom"

EXPOSE 8080

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]

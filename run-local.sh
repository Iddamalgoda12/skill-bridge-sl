#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_DIR/backend"

if [[ ! -f "$BACKEND_DIR/.env" ]]; then
  echo "Missing $BACKEND_DIR/.env. Create it with your local database settings." >&2
  exit 1
fi

set -a
source "$BACKEND_DIR/.env"
set +a

if ! command -v pg_isready >/dev/null 2>&1; then
  echo "pg_isready was not found. Install the PostgreSQL client tools, then retry." >&2
  exit 1
fi

PG_HOST=localhost
PG_PORT=5432
if [[ "${DB_URL:-}" =~ ^jdbc:postgresql://([^:/?]+)(:([0-9]+))?/ ]]; then
  PG_HOST="${BASH_REMATCH[1]}"
  PG_PORT="${BASH_REMATCH[3]:-5432}"
fi

if ! pg_isready -q -h "$PG_HOST" -p "$PG_PORT"; then
  echo "PostgreSQL is not accepting connections at $PG_HOST:$PG_PORT. Start its service, then retry." >&2
  exit 1
fi

backend_pid=""
frontend_pid=""
cleanup() {
  trap - EXIT INT TERM
  if [[ -n "$backend_pid" ]]; then kill "$backend_pid" 2>/dev/null || true; fi
  if [[ -n "$frontend_pid" ]]; then kill "$frontend_pid" 2>/dev/null || true; fi
  if [[ -n "$backend_pid" ]]; then wait "$backend_pid" 2>/dev/null || true; fi
  if [[ -n "$frontend_pid" ]]; then wait "$frontend_pid" 2>/dev/null || true; fi
}
trap cleanup EXIT INT TERM

echo "Starting backend and frontend. Press Ctrl+C to stop both."
(cd "$BACKEND_DIR" && exec ./mvnw spring-boot:run) &
backend_pid=$!
(cd "$PROJECT_DIR/frontend" && exec npm run dev) &
frontend_pid=$!

wait -n "$backend_pid" "$frontend_pid"

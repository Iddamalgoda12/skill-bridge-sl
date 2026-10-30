#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_DIR/backend"

KILL_PORTS=false
for arg in "$@"; do
  case "$arg" in
    -k|--kill|--force)
      KILL_PORTS=true
      shift
      ;;
  esac
done

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

# Built-in bash port checker (fast and 100% reliable)
is_port_in_use() {
  local port="$1"
  (exec 6<>/dev/tcp/127.0.0.1/"$port") 2>/dev/null && { exec 6>&-; return 0; } || return 1
}

# Function to find next available port
find_free_port() {
  local port="$1"
  while is_port_in_use "$port"; do
    port=$((port + 1))
  done
  echo "$port"
}

BACKEND_PORT="${SERVER_PORT:-8080}"
FRONTEND_PORT="${PORT:-3000}"

# Handle backend port collisions
if is_port_in_use "$BACKEND_PORT"; then
  if [[ "$KILL_PORTS" == "true" ]]; then
    echo "Stopping existing process on port $BACKEND_PORT..."
    fuser -k -9 "$BACKEND_PORT/tcp" 2>/dev/null || true
    sleep 0.5
  else
    NEW_BACKEND_PORT=$(find_free_port 8081)
    echo "⚠ Port $BACKEND_PORT is already in use."
    echo "→ Starting SkillBridge SL backend on available port $NEW_BACKEND_PORT instead."
    echo "  (Tip: Run './run-local.sh --kill' if you want to force-free port $BACKEND_PORT)."
    BACKEND_PORT="$NEW_BACKEND_PORT"
  fi
fi

# Handle frontend port collisions
if is_port_in_use "$FRONTEND_PORT"; then
  if [[ "$KILL_PORTS" == "true" ]]; then
    echo "Stopping existing process on port $FRONTEND_PORT..."
    fuser -k -9 "$FRONTEND_PORT/tcp" 2>/dev/null || true
    sleep 0.5
  else
    NEW_FRONTEND_PORT=$(find_free_port 3001)
    echo "⚠ Port $FRONTEND_PORT is in use. Starting frontend on port $NEW_FRONTEND_PORT."
    FRONTEND_PORT="$NEW_FRONTEND_PORT"
  fi
fi

export SERVER_PORT="$BACKEND_PORT"
export PORT="$FRONTEND_PORT"
export API_BASE_URL="http://localhost:$BACKEND_PORT/api"

backend_pid=""
frontend_pid=""
cleanup() {
  trap - EXIT INT TERM
  echo ""
  echo "Shutting down SkillBridge SL..."
  if [[ -n "$backend_pid" ]]; then
    kill -TERM -"$backend_pid" 2>/dev/null || kill "$backend_pid" 2>/dev/null || true
  fi
  if [[ -n "$frontend_pid" ]]; then
    kill -TERM -"$frontend_pid" 2>/dev/null || kill "$frontend_pid" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

echo "Starting SkillBridge SL backend on :$BACKEND_PORT and frontend on :$FRONTEND_PORT..."
echo "API Base URL: $API_BASE_URL"

set -m # Enable job control for process groups
(cd "$BACKEND_DIR" && exec ./mvnw spring-boot:run -Dspring-boot.run.arguments="--server.port=$BACKEND_PORT") &
backend_pid=$!

(cd "$PROJECT_DIR/frontend" && exec npm run dev -- -p "$FRONTEND_PORT") &
frontend_pid=$!

wait -n "$backend_pid" "$frontend_pid"

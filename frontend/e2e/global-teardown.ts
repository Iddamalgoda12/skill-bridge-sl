import { execFileSync } from "node:child_process";

/**
 * Removes the accounts and messages the suite created (all use @example.test).
 * Needs `psql` and the DB_* variables; if unavailable it only warns, since the
 * rows are harmless and identifiable.
 */
export default function globalTeardown() {
  const url = process.env.DB_URL ?? "jdbc:postgresql://localhost:5432/skillbridgesl_db";
  const match = url.match(/^jdbc:postgresql:\/\/([^:/]+)(?::(\d+))?\/([^?]+)/);
  if (!match) return;
  const [, host, port = "5432", database] = match;
  try {
    execFileSync(
      "psql",
      ["-h", host, "-p", port, "-U", process.env.DB_USERNAME ?? "skillbridge", "-d", database, "-v", "ON_ERROR_STOP=1", "-c",
        "DELETE FROM contact_messages WHERE email LIKE 'e2e-%@example.test'; DELETE FROM users WHERE email LIKE 'e2e-%@example.test';"],
      { env: { ...process.env, PGPASSWORD: process.env.DB_PASSWORD ?? "" }, stdio: "pipe" },
    );
  } catch (error) {
    console.warn(`e2e cleanup skipped (rows use *@example.test): ${(error as Error).message.split("\n")[0]}`);
  }
}

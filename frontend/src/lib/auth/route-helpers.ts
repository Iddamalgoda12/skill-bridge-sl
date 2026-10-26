import "server-only";
import { NextResponse } from "next/server";
import type { FieldErrors } from "./validation";

export type ApiFailure = { code: string; violations?: Record<string, string> };

export const failure = (status: number, code: string, violations?: Record<string, string>) =>
  NextResponse.json<ApiFailure>({ code, ...(violations ? { violations } : {}) }, { status });

export const validationFailure = (errors: FieldErrors<string>) => failure(400, "VALIDATION_FAILED", errors as Record<string, string>);

export const forbiddenOrigin = () => failure(403, "FORBIDDEN");

export async function readJson(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = await request.json();
    return body && typeof body === "object" && !Array.isArray(body) ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export const str = (value: unknown) => (typeof value === "string" ? value : "");

/** Translates a Spring problem+json reply into the client-facing failure shape. */
export async function relayBackendError(upstream: Response) {
  const problem = await upstream.json().catch(() => null);
  const code = typeof problem?.code === "string" ? problem.code : upstream.status >= 500 ? "INTERNAL_ERROR" : "BAD_REQUEST";
  const violations = problem?.violations && typeof problem.violations === "object" ? problem.violations : undefined;
  return failure(upstream.status === 429 ? 429 : upstream.status >= 500 ? 502 : upstream.status, code, violations);
}

export const unavailable = () => failure(503, "UNAVAILABLE");

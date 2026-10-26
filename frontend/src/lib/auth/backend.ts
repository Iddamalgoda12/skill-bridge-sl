import "server-only";
import type { NextRequest, NextResponse } from "next/server";
import { ACCESS_COOKIE, REFRESH_COOKIE, type AuthPayload } from "./constants";

const REFRESH_MAX_AGE = 7 * 24 * 60 * 60;

export function apiBase(): string {
  return (process.env.API_BASE_URL || "http://localhost:8080/api").replace(/\/$/, "");
}

/**
 * The visitor's address as seen by the reverse proxy in front of Next.js, forwarded so the
 * API can rate-limit per visitor instead of treating every BFF call as one client.
 */
export function clientAddressHeaders(request: NextRequest): Record<string, string> {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded ? { "X-Forwarded-For": forwarded } : {};
}

/** Server-to-server call to Spring. Never cached; always bounded in time. */
export function backendFetch(path: string, init: RequestInit & { accessToken?: string } = {}): Promise<Response> {
  const { accessToken, headers, ...rest } = init;
  return fetch(`${apiBase()}${path}`, {
    ...rest,
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...headers,
    },
  });
}

const cookieBase = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
});

export function setAuthCookies(cookies: Pick<NextResponse["cookies"], "set">, payload: Pick<AuthPayload, "accessToken" | "refreshToken" | "expiresIn">) {
  cookies.set(ACCESS_COOKIE, payload.accessToken, {
    ...cookieBase(),
    maxAge: Math.max(60, Math.min(Math.floor(payload.expiresIn) || 900, 3600)),
  });
  cookies.set(REFRESH_COOKIE, payload.refreshToken, { ...cookieBase(), maxAge: REFRESH_MAX_AGE });
}

export function clearAuthCookies(cookies: Pick<NextResponse["cookies"], "delete">) {
  cookies.delete(ACCESS_COOKIE);
  cookies.delete(REFRESH_COOKIE);
}

/** Exchanges a refresh token for a rotated pair; null if the token is no longer valid. */
export async function refreshTokens(refreshToken: string): Promise<AuthPayload | null> {
  try {
    const response = await backendFetch("/auth/refresh", { method: "POST", body: JSON.stringify({ refreshToken }) });
    if (!response.ok) return null;
    const data = await response.json();
    return typeof data?.accessToken === "string" && typeof data?.refreshToken === "string" ? data : null;
  } catch {
    return null;
  }
}

/**
 * Cheap, unverified expiry check of a JWT. Only used to decide whether to
 * refresh; Spring verifies the signature on every request that matters.
 */
export function isAccessTokenFresh(token: string | undefined, skewSeconds = 30): boolean {
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.exp === "number" && payload.exp * 1000 - skewSeconds * 1000 > Date.now();
  } catch {
    return false;
  }
}

/**
 * Rejects cross-site browser requests to state-changing route handlers.
 * Browsers always send Origin on POST/PATCH; requests with neither Origin nor
 * Sec-Fetch-Site are non-browser clients, which have no ambient cookies to abuse.
 */
export function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (origin) return origin === request.nextUrl.origin;
  const site = request.headers.get("sec-fetch-site");
  return !site || site === "same-origin" || site === "none";
}

export type BackendCall = { response: Response; refreshed: AuthPayload | null };

/**
 * Calls Spring as the signed-in user from a route handler, transparently
 * refreshing once if the access token has lapsed. The caller must persist
 * `refreshed` (if any) onto its outgoing response.
 */
export async function callAsUser(request: NextRequest, path: string, init: RequestInit = {}): Promise<BackendCall | null> {
  let access = request.cookies.get(ACCESS_COOKIE)?.value;
  const refresh = request.cookies.get(REFRESH_COOKIE)?.value;
  let refreshed: AuthPayload | null = null;

  if (!isAccessTokenFresh(access)) {
    if (!refresh) return null;
    refreshed = await refreshTokens(refresh);
    if (!refreshed) return null;
    access = refreshed.accessToken;
  }
  const response = await backendFetch(path, { ...init, accessToken: access });
  return { response, refreshed };
}

export function withSessionCookies(response: NextResponse, call: BackendCall | null): NextResponse {
  if (call?.refreshed) setAuthCookies(response.cookies, call.refreshed);
  if (!call) clearAuthCookies(response.cookies);
  return response;
}

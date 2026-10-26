import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { ACCESS_COOKIE, REFRESH_COOKIE, type SessionUser } from "./constants";
import { backendFetch } from "./backend";

/** Cheap check used for navigation chrome only; real authorization is done by Spring. */
export async function hasSessionCookie(): Promise<boolean> {
  const store = await cookies();
  return Boolean(store.get(ACCESS_COOKIE)?.value || store.get(REFRESH_COOKIE)?.value);
}

/**
 * The authenticated user, as confirmed by the API (null if signed out or the
 * token is rejected). `proxy.ts` keeps the access cookie fresh before render.
 */
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
  const accessToken = (await cookies()).get(ACCESS_COOKIE)?.value;
  if (!accessToken) return null;
  try {
    const response = await backendFetch("/users/me", { accessToken });
    return response.ok ? ((await response.json()) as SessionUser) : null;
  } catch {
    return null;
  }
});

import { NextResponse, type NextRequest } from "next/server";
import { ACCESS_COOKIE, GUEST_ONLY_PATHS, PROTECTED_PREFIXES, REFRESH_COOKIE } from "@/lib/auth/constants";
import { clearAuthCookies, isAccessTokenFresh, refreshTokens, setAuthCookies } from "@/lib/auth/backend";

const matches = (pathname: string, prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`);

function contentSecurityPolicy(nonce: string, secure: boolean) {
  const dev = process.env.NODE_ENV === "development";
  return [
    "default-src 'self'",
    // 'strict-dynamic' lets the nonced Next.js bootstrap load its own chunks.
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${dev ? " 'unsafe-eval'" : ""}`,
    // Inline style attributes are used for image crops; no inline <script> is allowed.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    // Only meaningful (and only safe) when the page itself was served over HTTPS.
    ...(secure ? ["upgrade-insecure-requests"] : []),
  ].join("; ");
}

/**
 * Runs before every page render:
 *  1. issues a per-request CSP nonce;
 *  2. silently renews an expired access token from the refresh cookie, so Server
 *     Components always read fresh cookies (route handlers renew on their own);
 *  3. optimistically gates /account and bounces signed-in users off /login.
 * Authorization is still enforced by Spring on every API call.
 */
export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const nonce = btoa(crypto.randomUUID());
  const secure = request.nextUrl.protocol === "https:" || request.headers.get("x-forwarded-proto") === "https";
  const csp = contentSecurityPolicy(nonce, secure);

  const access = request.cookies.get(ACCESS_COOKIE)?.value;
  const refresh = request.cookies.get(REFRESH_COOKIE)?.value;
  const isPrefetch = request.headers.has("next-router-prefetch") || request.headers.get("purpose") === "prefetch";

  let signedIn = isAccessTokenFresh(access);
  let renewed: Awaited<ReturnType<typeof refreshTokens>> = null;
  let invalidated = false;

  if (!signedIn && refresh && !isPrefetch) {
    renewed = await refreshTokens(refresh);
    signedIn = Boolean(renewed);
    invalidated = !renewed;
  } else if (!signedIn && refresh && isPrefetch) {
    // Don't spend (rotate) a refresh token on a speculative request.
    signedIn = true;
  }

  const protectedPath = PROTECTED_PREFIXES.some((prefix) => matches(pathname, prefix));
  const guestOnly = GUEST_ONLY_PATHS.some((path) => matches(pathname, path));

  let response: NextResponse;
  if (protectedPath && !signedIn) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", `${pathname}${search}`);
    response = NextResponse.redirect(login);
  } else if (guestOnly && signedIn) {
    response = NextResponse.redirect(new URL("/account", request.url));
  } else {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set("Content-Security-Policy", csp);
    if (renewed) {
      // Make the rotated tokens visible to this very render, not just the next request.
      const jar = new Map(request.cookies.getAll().map((c) => [c.name, c.value]));
      jar.set(ACCESS_COOKIE, renewed.accessToken);
      jar.set(REFRESH_COOKIE, renewed.refreshToken);
      requestHeaders.set("cookie", [...jar].map(([k, v]) => `${k}=${v}`).join("; "));
    } else if (invalidated) {
      const jar = request.cookies.getAll().filter((c) => c.name !== ACCESS_COOKIE && c.name !== REFRESH_COOKIE);
      requestHeaders.set("cookie", jar.map((c) => `${c.name}=${c.value}`).join("; "));
    }
    response = NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (renewed) setAuthCookies(response.cookies, renewed);
  if (invalidated) clearAuthCookies(response.cookies);
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      // Pages only: skip API routes, Next internals and static files.
      source: "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpe?g|svg|webp|gif|ico|json|txt|xml)$).*)",
    },
  ],
};

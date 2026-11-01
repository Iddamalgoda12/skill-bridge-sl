module.exports = [
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/auth/constants.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCESS_COOKIE",
    ()=>ACCESS_COOKIE,
    "GUEST_ONLY_PATHS",
    ()=>GUEST_ONLY_PATHS,
    "PROTECTED_PREFIXES",
    ()=>PROTECTED_PREFIXES,
    "REFRESH_COOKIE",
    ()=>REFRESH_COOKIE
]);
const ACCESS_COOKIE = "skillbridge_access";
const REFRESH_COOKIE = "skillbridge_refresh";
const PROTECTED_PREFIXES = [
    "/account"
];
const GUEST_ONLY_PATHS = [
    "/login",
    "/register"
];
}),
"[project]/src/lib/auth/backend.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiBase",
    ()=>apiBase,
    "backendFetch",
    ()=>backendFetch,
    "callAsUser",
    ()=>callAsUser,
    "clearAuthCookies",
    ()=>clearAuthCookies,
    "clientAddressHeaders",
    ()=>clientAddressHeaders,
    "isAccessTokenFresh",
    ()=>isAccessTokenFresh,
    "isSameOrigin",
    ()=>isSameOrigin,
    "refreshTokens",
    ()=>refreshTokens,
    "setAuthCookies",
    ()=>setAuthCookies,
    "withSessionCookies",
    ()=>withSessionCookies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/constants.ts [middleware] (ecmascript)");
;
;
const REFRESH_MAX_AGE = 7 * 24 * 60 * 60;
function apiBase() {
    return (process.env.API_BASE_URL || "http://localhost:8080/api").replace(/\/$/, "");
}
function clientAddressHeaders(request) {
    const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    return forwarded ? {
        "X-Forwarded-For": forwarded
    } : {};
}
function backendFetch(path, init = {}) {
    const { accessToken, headers, ...rest } = init;
    return fetch(`${apiBase()}${path}`, {
        ...rest,
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...accessToken ? {
                Authorization: `Bearer ${accessToken}`
            } : {},
            ...headers
        }
    });
}
const cookieBase = ()=>({
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        path: "/"
    });
function setAuthCookies(cookies, payload) {
    cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"], payload.accessToken, {
        ...cookieBase(),
        maxAge: Math.max(60, Math.min(Math.floor(payload.expiresIn) || 900, 3600))
    });
    cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"], payload.refreshToken, {
        ...cookieBase(),
        maxAge: REFRESH_MAX_AGE
    });
}
function clearAuthCookies(cookies) {
    cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"]);
    cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"]);
}
async function refreshTokens(refreshToken) {
    try {
        const response = await backendFetch("/auth/refresh", {
            method: "POST",
            body: JSON.stringify({
                refreshToken
            })
        });
        if (!response.ok) return null;
        const data = await response.json();
        return typeof data?.accessToken === "string" && typeof data?.refreshToken === "string" ? data : null;
    } catch  {
        return null;
    }
}
function isAccessTokenFresh(token, skewSeconds = 30) {
    if (!token) return false;
    try {
        const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
        return typeof payload.exp === "number" && payload.exp * 1000 - skewSeconds * 1000 > Date.now();
    } catch  {
        return false;
    }
}
function isSameOrigin(request) {
    const origin = request.headers.get("origin");
    if (origin) return origin === request.nextUrl.origin;
    const site = request.headers.get("sec-fetch-site");
    return !site || site === "same-origin" || site === "none";
}
async function callAsUser(request, path, init = {}) {
    let access = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"])?.value;
    const refresh = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"])?.value;
    let refreshed = null;
    if (!isAccessTokenFresh(access)) {
        if (!refresh) return null;
        refreshed = await refreshTokens(refresh);
        if (!refreshed) return null;
        access = refreshed.accessToken;
    }
    const response = await backendFetch(path, {
        ...init,
        accessToken: access
    });
    return {
        response,
        refreshed
    };
}
function withSessionCookies(response, call) {
    if (call?.refreshed) setAuthCookies(response.cookies, call.refreshed);
    if (!call) clearAuthCookies(response.cookies);
    return response;
}
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/constants.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/backend.ts [middleware] (ecmascript)");
;
;
;
const matches = (pathname, prefix)=>pathname === prefix || pathname.startsWith(`${prefix}/`);
function contentSecurityPolicy(nonce, secure) {
    const dev = ("TURBOPACK compile-time value", "development") === "development";
    return [
        "default-src 'self'",
        // 'strict-dynamic' lets the nonced Next.js bootstrap load its own chunks.
        `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${("TURBOPACK compile-time truthy", 1) ? " 'unsafe-eval'" : "TURBOPACK unreachable"}`,
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
        ...secure ? [
            "upgrade-insecure-requests"
        ] : []
    ].join("; ");
}
async function proxy(request) {
    const { pathname, search } = request.nextUrl;
    const nonce = btoa(crypto.randomUUID());
    const secure = request.nextUrl.protocol === "https:" || request.headers.get("x-forwarded-proto") === "https";
    const csp = contentSecurityPolicy(nonce, secure);
    const access = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"])?.value;
    const refresh = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"])?.value;
    const isPrefetch = request.headers.has("next-router-prefetch") || request.headers.get("purpose") === "prefetch";
    let signedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["isAccessTokenFresh"])(access);
    let renewed = null;
    let invalidated = false;
    if (!signedIn && refresh && !isPrefetch) {
        renewed = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["refreshTokens"])(refresh);
        signedIn = Boolean(renewed);
        invalidated = !renewed;
    } else if (!signedIn && refresh && isPrefetch) {
        // Don't spend (rotate) a refresh token on a speculative request.
        signedIn = true;
    }
    const protectedPath = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["PROTECTED_PREFIXES"].some((prefix)=>matches(pathname, prefix));
    const guestOnly = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["GUEST_ONLY_PATHS"].some((path)=>matches(pathname, path));
    let response;
    if (protectedPath && !signedIn) {
        const login = new URL("/login", request.url);
        login.searchParams.set("next", `${pathname}${search}`);
        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(login);
    } else if (guestOnly && signedIn) {
        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/account", request.url));
    } else {
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-nonce", nonce);
        requestHeaders.set("Content-Security-Policy", csp);
        if (renewed) {
            // Make the rotated tokens visible to this very render, not just the next request.
            const jar = new Map(request.cookies.getAll().map((c)=>[
                    c.name,
                    c.value
                ]));
            jar.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"], renewed.accessToken);
            jar.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"], renewed.refreshToken);
            requestHeaders.set("cookie", [
                ...jar
            ].map(([k, v])=>`${k}=${v}`).join("; "));
        } else if (invalidated) {
            const jar = request.cookies.getAll().filter((c)=>c.name !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"] && c.name !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"]);
            requestHeaders.set("cookie", jar.map((c)=>`${c.name}=${c.value}`).join("; "));
        }
        response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
            request: {
                headers: requestHeaders
            }
        });
    }
    if (renewed) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["setAuthCookies"])(response.cookies, renewed);
    if (invalidated) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["clearAuthCookies"])(response.cookies);
    response.headers.set("Content-Security-Policy", csp);
    return response;
}
const config = {
    matcher: [
        {
            // Pages only: skip API routes, Next internals and static files.
            source: "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpe?g|svg|webp|gif|ico|json|txt|xml)$).*)"
        }
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0g2xww7._.js.map
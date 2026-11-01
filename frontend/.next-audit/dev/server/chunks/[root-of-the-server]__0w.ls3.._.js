module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/auth/constants.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/auth/backend.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/constants.ts [app-route] (ecmascript)");
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
    cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"], payload.accessToken, {
        ...cookieBase(),
        maxAge: Math.max(60, Math.min(Math.floor(payload.expiresIn) || 900, 3600))
    });
    cookies.set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"], payload.refreshToken, {
        ...cookieBase(),
        maxAge: REFRESH_MAX_AGE
    });
}
function clearAuthCookies(cookies) {
    cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"]);
    cookies.delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"]);
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
    let access = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ACCESS_COOKIE"])?.value;
    const refresh = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"])?.value;
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
"[project]/src/lib/auth/route-helpers.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "failure",
    ()=>failure,
    "forbiddenOrigin",
    ()=>forbiddenOrigin,
    "readJson",
    ()=>readJson,
    "relayBackendError",
    ()=>relayBackendError,
    "str",
    ()=>str,
    "unavailable",
    ()=>unavailable,
    "validationFailure",
    ()=>validationFailure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
const failure = (status, code, violations)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        code,
        ...violations ? {
            violations
        } : {}
    }, {
        status
    });
const validationFailure = (errors)=>failure(400, "VALIDATION_FAILED", errors);
const forbiddenOrigin = ()=>failure(403, "FORBIDDEN");
async function readJson(request) {
    try {
        const body = await request.json();
        return body && typeof body === "object" && !Array.isArray(body) ? body : null;
    } catch  {
        return null;
    }
}
const str = (value)=>typeof value === "string" ? value : "";
async function relayBackendError(upstream) {
    const problem = await upstream.json().catch(()=>null);
    const code = typeof problem?.code === "string" ? problem.code : upstream.status >= 500 ? "INTERNAL_ERROR" : "BAD_REQUEST";
    const violations = problem?.violations && typeof problem.violations === "object" ? problem.violations : undefined;
    return failure(upstream.status === 429 ? 429 : upstream.status >= 500 ? 502 : upstream.status, code, violations);
}
const unavailable = ()=>failure(503, "UNAVAILABLE");
}),
"[project]/src/app/api/auth/logout/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/constants.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/backend.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/route-helpers.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSameOrigin"])(request)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenOrigin"])();
    const refreshToken = request.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["REFRESH_COOKIE"])?.value;
    // Revoke server-side so a copied cookie cannot be replayed. If the API is
    // unreachable the browser is still signed out locally.
    if (refreshToken) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["backendFetch"])("/auth/logout", {
            method: "POST",
            body: JSON.stringify({
                refreshToken
            })
        }).catch(()=>null);
    }
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clearAuthCookies"])(response.cookies);
    return response;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0w.ls3.._.js.map
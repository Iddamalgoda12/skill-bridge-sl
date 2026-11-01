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
"[project]/src/lib/auth/validation.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Form validation shared by the browser (instant feedback) and the BFF route
 * handlers (never trust the client). Results are stable codes that match the
 * Spring API, translated under `errors.validation.*`.
 */ __turbopack_context__.s([
    "newPassword",
    ()=>newPassword,
    "safeRedirectPath",
    ()=>safeRedirectPath,
    "validateContact",
    ()=>validateContact,
    "validateLogin",
    ()=>validateLogin,
    "validatePasswordChange",
    ()=>validatePasswordChange,
    "validateProfile",
    ()=>validateProfile,
    "validateRegister",
    ()=>validateRegister
]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** bcrypt ignores everything past 72 bytes, so the API rejects longer passwords. */ const MAX_PASSWORD_BYTES = 72;
const byteLength = (value)=>new TextEncoder().encode(value).length;
function name(value) {
    if (!value.trim()) return "required";
    if (value.trim().length > 100) return "too_long";
}
function email(value) {
    const trimmed = value.trim();
    if (!trimmed) return "required";
    if (trimmed.length > 254) return "too_long";
    if (!EMAIL.test(trimmed)) return "invalid_email";
}
function newPassword(value) {
    if (!value) return "required";
    if (value.length < 8 || byteLength(value) > MAX_PASSWORD_BYTES) return "password_length";
    if (!/\p{L}/u.test(value) || !/\d/.test(value)) return "password_weak";
}
function compact(entries) {
    return Object.fromEntries(entries.filter(([, code])=>code));
}
const validateLogin = (v)=>compact([
        [
            "email",
            email(v.email)
        ],
        [
            "password",
            v.password ? undefined : "required"
        ]
    ]);
const validateRegister = (v)=>compact([
        [
            "firstName",
            name(v.firstName)
        ],
        [
            "lastName",
            name(v.lastName)
        ],
        [
            "email",
            email(v.email)
        ],
        [
            "password",
            newPassword(v.password)
        ]
    ]);
const validateProfile = (v)=>compact([
        [
            "firstName",
            name(v.firstName)
        ],
        [
            "lastName",
            name(v.lastName)
        ],
        [
            "bio",
            v.bio.length > 500 ? "too_long" : undefined
        ]
    ]);
const validatePasswordChange = (v)=>compact([
        [
            "currentPassword",
            v.currentPassword ? undefined : "required"
        ],
        [
            "newPassword",
            newPassword(v.newPassword)
        ],
        [
            "confirmPassword",
            v.confirmPassword !== v.newPassword ? "mismatch" : undefined
        ]
    ]);
const validateContact = (v)=>compact([
        [
            "name",
            !v.name.trim() ? "required" : v.name.trim().length > 150 ? "too_long" : undefined
        ],
        [
            "email",
            email(v.email)
        ],
        [
            "topic",
            [
                "guidance",
                "scholarships",
                "feedback"
            ].includes(v.topic) ? undefined : "invalid"
        ],
        [
            "message",
            !v.message.trim() ? "required" : v.message.trim().length < 10 ? "too_short" : v.message.length > 4000 ? "too_long" : undefined
        ]
    ]);
function safeRedirectPath(value, fallback = "/account") {
    if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return fallback;
    return value;
}
}),
"[project]/src/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/backend.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/route-helpers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/validation.ts [app-route] (ecmascript)");
;
;
;
;
async function POST(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSameOrigin"])(request)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forbiddenOrigin"])();
    const body = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readJson"])(request);
    const values = {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["str"])(body?.name),
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["str"])(body?.email),
        topic: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["str"])(body?.topic),
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["str"])(body?.message)
    };
    const errors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$validation$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateContact"])(values);
    if (Object.keys(errors).length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validationFailure"])(errors);
    try {
        const upstream = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["backendFetch"])("/contact", {
            method: "POST",
            body: JSON.stringify(values),
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clientAddressHeaders"])(request)
        });
        if (!upstream.ok) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["relayBackendError"])(upstream);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        }, {
            status: 201
        });
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$route$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unavailable"])();
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12sgygy._.js.map
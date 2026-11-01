(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/universities/UniversityCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversityCard",
    ()=>UniversityCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function UniversityCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "22db0223094d73627d6f6fa9c62427de0c38984ee45cf1a024d5295a837f3490") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "22db0223094d73627d6f6fa9c62427de0c38984ee45cf1a024d5295a837f3490";
    }
    const { university } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("universities.card");
    const { display } = university;
    const imageSrc = university.image || `/images/universities/cards/${university.slug}.jpg`;
    const t1 = `/universities/${university.slug}`;
    let t2;
    if ($[1] !== display.name || $[2] !== imageSrc) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: imageSrc,
            alt: display.name,
            fill: true,
            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
            className: "university-card-img"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[1] = display.name;
        $[2] = imageSrc;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "university-card-image-gradient"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== university.shortName) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "institution-short-name",
            children: university.shortName
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = university.shortName;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = university.type === "Government" ? "type-dot" : "type-dot non-state";
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t5
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== display.type || $[10] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "institution-type",
            children: [
                t6,
                display.type
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[9] = display.type;
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t2 || $[13] !== t4 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "university-illustration university-card-media",
            children: [
                t2,
                t3,
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t4;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== display.name) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: display.name
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[16] = display.name;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            size: 14,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== display.location || $[20] !== t) {
        t11 = t("location", {
            location: display.location
        });
        $[19] = display.location;
        $[20] = t;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted inline-icon",
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== display.areas) {
        t13 = display.areas.join(" \xB7 ");
        $[24] = display.areas;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "university-card-bottom",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: t13
            }, void 0, false, {
                fileName: "[project]/src/components/universities/UniversityCard.tsx",
                lineNumber: 120,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t12 || $[29] !== t14 || $[30] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "university-card-body",
            children: [
                t9,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t14;
        $[30] = t9;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[32] !== t1 || $[33] !== t15 || $[34] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t1,
            className: "university-card glass-panel university-card-link",
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityCard.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[32] = t1;
        $[33] = t15;
        $[34] = t8;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    return t16;
}
_s(UniversityCard, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = UniversityCard;
var _c;
__turbopack_context__.k.register(_c, "UniversityCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function SectionHeading(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "f7f3d171eeb73a4e5e062d5f7479774e270ead607c0e96a4b33708d3975b9767") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f7f3d171eeb73a4e5e062d5f7479774e270ead607c0e96a4b33708d3975b9767";
    }
    const { title, description, eyebrow, action } = t0;
    let t1;
    if ($[1] !== eyebrow) {
        t1 = eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "eyebrow",
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SectionHeading.tsx",
            lineNumber: 19,
            columnNumber: 21
        }, this);
        $[1] = eyebrow;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SectionHeading.tsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== description) {
        t3 = description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SectionHeading.tsx",
            lineNumber: 35,
            columnNumber: 25
        }, this);
        $[5] = description;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t1 || $[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SectionHeading.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== action || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-heading",
            children: [
                t4,
                action
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SectionHeading.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[11] = action;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            glass: "",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "bc38fb320774200ed2727708c321883b7e87094db27597609afac872218384fc") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc38fb320774200ed2727708c321883b7e87094db27597609afac872218384fc";
    }
    let className;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ className, variant: t1, size: t2, asChild: t3, ...props } = t0);
        $[1] = t0;
        $[2] = className;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        className = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const variant = t1 === undefined ? "default" : t1;
    const size = t2 === undefined ? "default" : t2;
    const asChild = t3 === undefined ? false : t3;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    let t4;
    if ($[7] !== className || $[8] !== size || $[9] !== variant) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        }));
        $[7] = className;
        $[8] = size;
        $[9] = variant;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== Comp || $[12] !== props || $[13] !== size || $[14] !== t4 || $[15] !== variant) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            "data-slot": "button",
            "data-variant": variant,
            "data-size": size,
            className: t4,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/button.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[11] = Comp;
        $[12] = props;
        $[13] = size;
        $[14] = t4;
        $[15] = variant;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    return t5;
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/universities/UniversityDirectory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversityDirectory",
    ()=>UniversityDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/school.mjs [app-client] (ecmascript) <export default as School>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$universities$2f$UniversityCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/universities/UniversityCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const ALL = "all";
const types = [
    {
        value: ALL,
        key: "all",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        value: "Government",
        key: "government",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
    },
    {
        value: "Non-state",
        key: "nonState",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"]
    }
];
function UniversityDirectory(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(192);
    if ($[0] !== "b8810e46dc7415462c9d7f1c2ca51d998fef2a2cc991b15404b0b125d4b4be59") {
        for(let $i = 0; $i < 192; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b8810e46dc7415462c9d7f1c2ca51d998fef2a2cc991b15404b0b125d4b4be59";
    }
    const { universities } = t0;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("universities");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL);
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    const [more, setMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] !== universities) {
        t1 = new Map(universities.map(_UniversityDirectoryUniversitiesMap));
        $[1] = universities;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = [
            ...t1
        ];
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const locations = t2;
    let t3;
    if ($[5] !== universities) {
        t3 = new Map(universities.flatMap(_UniversityDirectoryUniversitiesFlatMap));
        $[5] = universities;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] !== t3) {
        t4 = [
            ...t3
        ];
        $[7] = t3;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const areas = t4;
    let t5;
    if ($[9] !== area || $[10] !== location || $[11] !== search || $[12] !== sort || $[13] !== type || $[14] !== universities) {
        const needle = search.trim().toLowerCase();
        let t6;
        if ($[16] !== type) {
            t6 = ({
                "UniversityDirectory[universities.filter()]": (u_1)=>type === ALL || u_1.type === type
            })["UniversityDirectory[universities.filter()]"];
            $[16] = type;
            $[17] = t6;
        } else {
            t6 = $[17];
        }
        let t7;
        if ($[18] !== location) {
            t7 = ({
                "UniversityDirectory[(anonymous)()]": (u_2)=>!location || u_2.location === location
            })["UniversityDirectory[(anonymous)()]"];
            $[18] = location;
            $[19] = t7;
        } else {
            t7 = $[19];
        }
        let t8;
        if ($[20] !== area) {
            t8 = ({
                "UniversityDirectory[(anonymous)()]": (u_3)=>!area || u_3.areas.includes(area)
            })["UniversityDirectory[(anonymous)()]"];
            $[20] = area;
            $[21] = t8;
        } else {
            t8 = $[21];
        }
        let t9;
        if ($[22] !== sort) {
            t9 = ({
                "UniversityDirectory[(anonymous)()]": (a_0, b)=>sort === "az" ? a_0.display.name.localeCompare(b.display.name) : sort === "za" ? b.display.name.localeCompare(a_0.display.name) : 0
            })["UniversityDirectory[(anonymous)()]"];
            $[22] = sort;
            $[23] = t9;
        } else {
            t9 = $[23];
        }
        t5 = universities.filter(t6).filter(t7).filter(t8).filter({
            "UniversityDirectory[(anonymous)()]": (u_4)=>{
                if (!needle) {
                    return true;
                }
                const haystack = `${u_4.name} ${u_4.shortName} ${u_4.display.name} ${u_4.display.location} ${u_4.display.areas.join(" ")} ${u_4.areas.join(" ")}`.toLowerCase();
                return haystack.includes(needle);
            }
        }["UniversityDirectory[(anonymous)()]"]).sort(t9);
        $[9] = area;
        $[10] = location;
        $[11] = search;
        $[12] = sort;
        $[13] = type;
        $[14] = universities;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const filtered = t5;
    let t6;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = function clear() {
            setQuery("");
            setSearch("");
            setType(ALL);
            setLocation("");
            setArea("");
            setSort("featured");
        };
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    const clear = t6;
    let t7;
    if ($[25] !== query) {
        t7 = ({
            "UniversityDirectory[<form>.onSubmit]": (e)=>{
                e.preventDefault();
                setSearch(query);
            }
        })["UniversityDirectory[<form>.onSubmit]"];
        $[25] = query;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    let t8;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            size: 20,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[27] = t8;
    } else {
        t8 = $[27];
    }
    let t9;
    if ($[28] !== t) {
        t9 = t("search.label");
        $[28] = t;
        $[29] = t9;
    } else {
        t9 = $[29];
    }
    let t10;
    if ($[30] !== t) {
        t10 = t("search.placeholder");
        $[30] = t;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "UniversityDirectory[<input>.onChange]": (e_0)=>{
                setQuery(e_0.target.value);
                setSearch(e_0.target.value);
            }
        })["UniversityDirectory[<input>.onChange]"];
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== query || $[34] !== t10 || $[35] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "search-input",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "search",
                    "aria-label": t9,
                    placeholder: t10,
                    value: query,
                    onChange: t11
                }, void 0, false, {
                    fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                    lineNumber: 206,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[33] = query;
        $[34] = t10;
        $[35] = t9;
        $[36] = t12;
    } else {
        t12 = $[36];
    }
    let t13;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            size: 18,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[37] = t13;
    } else {
        t13 = $[37];
    }
    let t14;
    if ($[38] !== t) {
        t14 = t("search.submit");
        $[38] = t;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 18,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    let t16;
    if ($[41] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "glass",
            className: "glass-button button-dark",
            type: "submit",
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[41] = t14;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] !== t12 || $[44] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "search-row",
            children: [
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 246,
            columnNumber: 11
        }, this);
        $[43] = t12;
        $[44] = t16;
        $[45] = t17;
    } else {
        t17 = $[45];
    }
    let t18;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            size: 15,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[46] = t18;
    } else {
        t18 = $[46];
    }
    let t19;
    if ($[47] !== t) {
        t19 = t("filters.location");
        $[47] = t;
        $[48] = t19;
    } else {
        t19 = $[48];
    }
    let t20;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "UniversityDirectory[<select>.onChange]": (e_1)=>setLocation(e_1.target.value)
        })["UniversityDirectory[<select>.onChange]"];
        $[49] = t20;
    } else {
        t20 = $[49];
    }
    let t21;
    if ($[50] !== t) {
        t21 = t("filters.allLocations");
        $[50] = t;
        $[51] = t21;
    } else {
        t21 = $[51];
    }
    let t22;
    if ($[52] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: t21
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[52] = t21;
        $[53] = t22;
    } else {
        t22 = $[53];
    }
    let t23;
    if ($[54] !== locations) {
        t23 = locations.map(_UniversityDirectoryLocationsMap);
        $[54] = locations;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== location || $[57] !== t19 || $[58] !== t22 || $[59] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "select-control",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    "aria-label": t19,
                    value: location,
                    onChange: t20,
                    children: [
                        t22,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                    lineNumber: 303,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[56] = location;
        $[57] = t19;
        $[58] = t22;
        $[59] = t23;
        $[60] = t24;
    } else {
        t24 = $[60];
    }
    let t25;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            size: 15,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[61] = t25;
    } else {
        t25 = $[61];
    }
    let t26;
    if ($[62] !== t) {
        t26 = t("filters.area");
        $[62] = t;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "UniversityDirectory[<select>.onChange]": (e_2)=>setArea(e_2.target.value)
        })["UniversityDirectory[<select>.onChange]"];
        $[64] = t27;
    } else {
        t27 = $[64];
    }
    let t28;
    if ($[65] !== t) {
        t28 = t("filters.allAreas");
        $[65] = t;
        $[66] = t28;
    } else {
        t28 = $[66];
    }
    let t29;
    if ($[67] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 346,
            columnNumber: 11
        }, this);
        $[67] = t28;
        $[68] = t29;
    } else {
        t29 = $[68];
    }
    let t30;
    if ($[69] !== areas) {
        t30 = areas.map(_UniversityDirectoryAreasMap);
        $[69] = areas;
        $[70] = t30;
    } else {
        t30 = $[70];
    }
    let t31;
    if ($[71] !== area || $[72] !== t26 || $[73] !== t29 || $[74] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "select-control",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    "aria-label": t26,
                    value: area,
                    onChange: t27,
                    children: [
                        t29,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                    lineNumber: 362,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 362,
            columnNumber: 11
        }, this);
        $[71] = area;
        $[72] = t26;
        $[73] = t29;
        $[74] = t30;
        $[75] = t31;
    } else {
        t31 = $[75];
    }
    let t32;
    if ($[76] !== more) {
        t32 = ({
            "UniversityDirectory[<button>.onClick]": ()=>setMore(!more)
        })["UniversityDirectory[<button>.onClick]"];
        $[76] = more;
        $[77] = t32;
    } else {
        t32 = $[77];
    }
    let t33;
    if ($[78] !== t) {
        t33 = t("filters.degreeType");
        $[78] = t;
        $[79] = t33;
    } else {
        t33 = $[79];
    }
    let t34;
    if ($[80] !== more || $[81] !== t32 || $[82] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "filter-button",
            type: "button",
            onClick: t32,
            "aria-expanded": more,
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[80] = more;
        $[81] = t32;
        $[82] = t33;
        $[83] = t34;
    } else {
        t34 = $[83];
    }
    let t35;
    if ($[84] !== more) {
        t35 = ({
            "UniversityDirectory[<button>.onClick]": ()=>setMore(!more)
        })["UniversityDirectory[<button>.onClick]"];
        $[84] = more;
        $[85] = t35;
    } else {
        t35 = $[85];
    }
    let t36;
    if ($[86] !== t) {
        t36 = t("filters.funding");
        $[86] = t;
        $[87] = t36;
    } else {
        t36 = $[87];
    }
    let t37;
    if ($[88] !== more || $[89] !== t35 || $[90] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "filter-button",
            type: "button",
            onClick: t35,
            "aria-expanded": more,
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[88] = more;
        $[89] = t35;
        $[90] = t36;
        $[91] = t37;
    } else {
        t37 = $[91];
    }
    let t38;
    if ($[92] !== more) {
        t38 = ({
            "UniversityDirectory[<button>.onClick]": ()=>setMore(!more)
        })["UniversityDirectory[<button>.onClick]"];
        $[92] = more;
        $[93] = t38;
    } else {
        t38 = $[93];
    }
    let t39;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
            size: 15,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[94] = t39;
    } else {
        t39 = $[94];
    }
    let t40;
    if ($[95] !== t) {
        t40 = t("filters.more");
        $[95] = t;
        $[96] = t40;
    } else {
        t40 = $[96];
    }
    let t41;
    if ($[97] !== more || $[98] !== t38 || $[99] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "filter-button gold-glass",
            type: "button",
            onClick: t38,
            "aria-expanded": more,
            children: [
                t39,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[97] = more;
        $[98] = t38;
        $[99] = t40;
        $[100] = t41;
    } else {
        t41 = $[100];
    }
    let t42;
    if ($[101] !== t) {
        t42 = t("filters.clear");
        $[101] = t;
        $[102] = t42;
    } else {
        t42 = $[102];
    }
    let t43;
    if ($[103] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "clear-filters",
            type: "button",
            onClick: clear,
            children: t42
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 472,
            columnNumber: 11
        }, this);
        $[103] = t42;
        $[104] = t43;
    } else {
        t43 = $[104];
    }
    let t44;
    if ($[105] !== t24 || $[106] !== t31 || $[107] !== t34 || $[108] !== t37 || $[109] !== t41 || $[110] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "filter-row",
            children: [
                t24,
                t31,
                t34,
                t37,
                t41,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 480,
            columnNumber: 11
        }, this);
        $[105] = t24;
        $[106] = t31;
        $[107] = t34;
        $[108] = t37;
        $[109] = t41;
        $[110] = t43;
        $[111] = t44;
    } else {
        t44 = $[111];
    }
    let t45;
    if ($[112] !== more || $[113] !== t) {
        t45 = more && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "notice filter-notice",
            children: t("filters.moreNotice")
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 493,
            columnNumber: 19
        }, this);
        $[112] = more;
        $[113] = t;
        $[114] = t45;
    } else {
        t45 = $[114];
    }
    let t46;
    if ($[115] !== t17 || $[116] !== t44 || $[117] !== t45 || $[118] !== t7) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "university-search glass-panel",
            role: "search",
            onSubmit: t7,
            children: [
                t17,
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 502,
            columnNumber: 11
        }, this);
        $[115] = t17;
        $[116] = t44;
        $[117] = t45;
        $[118] = t7;
        $[119] = t46;
    } else {
        t46 = $[119];
    }
    let t47;
    if ($[120] !== t) {
        t47 = t("category.title");
        $[120] = t;
        $[121] = t47;
    } else {
        t47 = $[121];
    }
    let t48;
    if ($[122] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: t47
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[122] = t47;
        $[123] = t48;
    } else {
        t48 = $[123];
    }
    let t49;
    if ($[124] !== t) {
        t49 = t("category.subtitle");
        $[124] = t;
        $[125] = t49;
    } else {
        t49 = $[125];
    }
    let t50;
    if ($[126] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: t49
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        $[126] = t49;
        $[127] = t50;
    } else {
        t50 = $[127];
    }
    let t51;
    if ($[128] !== t48 || $[129] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        $[128] = t48;
        $[129] = t50;
        $[130] = t51;
    } else {
        t51 = $[130];
    }
    let t52;
    if ($[131] !== t) {
        t52 = t("category.title");
        $[131] = t;
        $[132] = t52;
    } else {
        t52 = $[132];
    }
    let t53;
    if ($[133] !== t || $[134] !== type) {
        t53 = types.map({
            "UniversityDirectory[types.map()]": (t54)=>{
                const { value: value_1, key, Icon } = t54;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: type === value_1 ? "selected" : "",
                    "aria-pressed": type === value_1,
                    onClick: {
                        "UniversityDirectory[types.map() > <button>.onClick]": ()=>setType(value_1)
                    }["UniversityDirectory[types.map() > <button>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 17,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                            lineNumber: 571,
                            columnNumber: 67
                        }, this),
                        t(`category.${key}`)
                    ]
                }, value_1, true, {
                    fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                    lineNumber: 569,
                    columnNumber: 16
                }, this);
            }
        }["UniversityDirectory[types.map()]"]);
        $[133] = t;
        $[134] = type;
        $[135] = t53;
    } else {
        t53 = $[135];
    }
    let t54;
    if ($[136] !== t52 || $[137] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "segmented-control glass-panel",
            role: "group",
            "aria-label": t52,
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 582,
            columnNumber: 11
        }, this);
        $[136] = t52;
        $[137] = t53;
        $[138] = t54;
    } else {
        t54 = $[138];
    }
    let t55;
    if ($[139] !== t51 || $[140] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "institution-category",
            children: [
                t51,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 591,
            columnNumber: 11
        }, this);
        $[139] = t51;
        $[140] = t54;
        $[141] = t55;
    } else {
        t55 = $[141];
    }
    let t56;
    if ($[142] !== t) {
        t56 = t("results.title");
        $[142] = t;
        $[143] = t56;
    } else {
        t56 = $[143];
    }
    let t57;
    if ($[144] !== t) {
        t57 = t("results.description");
        $[144] = t;
        $[145] = t57;
    } else {
        t57 = $[145];
    }
    let t58;
    if ($[146] !== t) {
        t58 = t("sort.label");
        $[146] = t;
        $[147] = t58;
    } else {
        t58 = $[147];
    }
    let t59;
    if ($[148] === Symbol.for("react.memo_cache_sentinel")) {
        t59 = ({
            "UniversityDirectory[<select>.onChange]": (e_3)=>setSort(e_3.target.value)
        })["UniversityDirectory[<select>.onChange]"];
        $[148] = t59;
    } else {
        t59 = $[148];
    }
    let t60;
    if ($[149] !== t) {
        t60 = t("sort.featured");
        $[149] = t;
        $[150] = t60;
    } else {
        t60 = $[150];
    }
    let t61;
    if ($[151] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "featured",
            children: t60
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 641,
            columnNumber: 11
        }, this);
        $[151] = t60;
        $[152] = t61;
    } else {
        t61 = $[152];
    }
    let t62;
    if ($[153] !== t) {
        t62 = t("sort.az");
        $[153] = t;
        $[154] = t62;
    } else {
        t62 = $[154];
    }
    let t63;
    if ($[155] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "az",
            children: t62
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 657,
            columnNumber: 11
        }, this);
        $[155] = t62;
        $[156] = t63;
    } else {
        t63 = $[156];
    }
    let t64;
    if ($[157] !== t) {
        t64 = t("sort.za");
        $[157] = t;
        $[158] = t64;
    } else {
        t64 = $[158];
    }
    let t65;
    if ($[159] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "za",
            children: t64
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 673,
            columnNumber: 11
        }, this);
        $[159] = t64;
        $[160] = t65;
    } else {
        t65 = $[160];
    }
    let t66;
    if ($[161] !== sort || $[162] !== t58 || $[163] !== t61 || $[164] !== t63 || $[165] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            "aria-label": t58,
            className: "sort-select",
            value: sort,
            onChange: t59,
            children: [
                t61,
                t63,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 681,
            columnNumber: 11
        }, this);
        $[161] = sort;
        $[162] = t58;
        $[163] = t61;
        $[164] = t63;
        $[165] = t65;
        $[166] = t66;
    } else {
        t66 = $[166];
    }
    let t67;
    if ($[167] !== t56 || $[168] !== t57 || $[169] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            title: t56,
            description: t57,
            action: t66
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 693,
            columnNumber: 11
        }, this);
        $[167] = t56;
        $[168] = t57;
        $[169] = t66;
        $[170] = t67;
    } else {
        t67 = $[170];
    }
    let t68;
    if ($[171] !== filtered.length || $[172] !== t) {
        t68 = t("results.count", {
            count: filtered.length
        });
        $[171] = filtered.length;
        $[172] = t;
        $[173] = t68;
    } else {
        t68 = $[173];
    }
    let t69;
    if ($[174] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "sr-only",
            role: "status",
            children: t68
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 714,
            columnNumber: 11
        }, this);
        $[174] = t68;
        $[175] = t69;
    } else {
        t69 = $[175];
    }
    let t70;
    if ($[176] !== filtered) {
        t70 = filtered.map(_UniversityDirectoryFilteredMap);
        $[176] = filtered;
        $[177] = t70;
    } else {
        t70 = $[177];
    }
    let t71;
    if ($[178] !== t70) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid-3",
            children: t70
        }, void 0, false, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 730,
            columnNumber: 11
        }, this);
        $[178] = t70;
        $[179] = t71;
    } else {
        t71 = $[179];
    }
    let t72;
    if ($[180] !== filtered.length || $[181] !== t) {
        t72 = filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel empty-state",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: t("results.empty")
                }, void 0, false, {
                    fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                    lineNumber: 738,
                    columnNumber: 91
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "glass-button",
                    onClick: clear,
                    children: t("filters.clear")
                }, void 0, false, {
                    fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
                    lineNumber: 738,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 738,
            columnNumber: 36
        }, this);
        $[180] = filtered.length;
        $[181] = t;
        $[182] = t72;
    } else {
        t72 = $[182];
    }
    let t73;
    if ($[183] !== t67 || $[184] !== t69 || $[185] !== t71 || $[186] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "university-results",
            children: [
                t67,
                t69,
                t71,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
            lineNumber: 747,
            columnNumber: 11
        }, this);
        $[183] = t67;
        $[184] = t69;
        $[185] = t71;
        $[186] = t72;
        $[187] = t73;
    } else {
        t73 = $[187];
    }
    let t74;
    if ($[188] !== t46 || $[189] !== t55 || $[190] !== t73) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t46,
                t55,
                t73
            ]
        }, void 0, true);
        $[188] = t46;
        $[189] = t55;
        $[190] = t73;
        $[191] = t74;
    } else {
        t74 = $[191];
    }
    return t74;
}
_s(UniversityDirectory, "244mC09qRIT4dflz7WlTMxGH5vI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = UniversityDirectory;
function _UniversityDirectoryFilteredMap(u_5) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$universities$2f$UniversityCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversityCard"], {
        university: u_5
    }, u_5.slug, false, {
        fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
        lineNumber: 769,
        columnNumber: 10
    }, this);
}
function _UniversityDirectoryAreasMap(t0) {
    const [value_0, label_0] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: value_0,
        children: label_0
    }, value_0, false, {
        fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
        lineNumber: 773,
        columnNumber: 10
    }, this);
}
function _UniversityDirectoryLocationsMap(t0) {
    const [value, label] = t0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: value,
        children: label
    }, value, false, {
        fileName: "[project]/src/components/universities/UniversityDirectory.tsx",
        lineNumber: 777,
        columnNumber: 10
    }, this);
}
function _UniversityDirectoryUniversitiesFlatMap(u_0) {
    return u_0.areas.map({
        "UniversityDirectory[universities.flatMap() > u_0.areas.map()]": (a, i)=>[
                a,
                u_0.display.areas[i]
            ]
    }["UniversityDirectory[universities.flatMap() > u_0.areas.map()]"]);
}
function _UniversityDirectoryUniversitiesMap(u) {
    return [
        u.location,
        u.display.location
    ];
}
var _c;
__turbopack_context__.k.register(_c, "UniversityDirectory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_047k_m6._.js.map
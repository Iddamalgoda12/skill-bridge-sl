(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/universities/CampusGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CampusGallery",
    ()=>CampusGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.mjs [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const RUHUNA_FALLBACK_PHOTOS = [
    {
        id: "aerial",
        src: "/images/universities/ruhuna/hero-aerial.jpg",
        badgeKey: "photo1Badge",
        titleKey: "photo1Title",
        descKey: "photo1Desc",
        title: "Wellamadama Oceanfront Campus Aerial",
        desc: "Sprawling across picturesque coastal bluffs where the Indian Ocean meets modern lecture theatres.",
        aspect: "16/10",
        location: "Wellamadama, Matara",
        credit: "Wikimedia Commons · CC BY-SA 3.0"
    },
    {
        id: "bawa",
        src: "/images/universities/ruhuna/bawa-architecture.jpg",
        badgeKey: "photo2Badge",
        titleKey: "photo2Title",
        descKey: "photo2Desc",
        title: "Geoffrey Bawa Architecture & Pavilions",
        desc: "Renowned tropical modernism masterwork seamlessly integrating open pavilions with natural rock outcrops.",
        aspect: "4/3",
        location: "Main Campus, Matara",
        credit: "Wikimedia Commons · Public Domain"
    },
    {
        id: "engineering",
        src: "/images/universities/ruhuna/faculty-engineering.jpg",
        badgeKey: "photo3Badge",
        titleKey: "photo3Title",
        descKey: "photo3Desc",
        title: "Faculty of Engineering Hapugala Complex",
        desc: "Sri Lanka's historic southern engineering hub situated amidst tranquil waterways in Galle.",
        aspect: "4/3",
        location: "Hapugala, Galle",
        credit: "Wikimedia Commons · CC BY-SA 3.0"
    },
    {
        id: "walkways",
        src: "/images/universities/ruhuna/campus-walkway.jpg",
        badgeKey: "photo4Badge",
        titleKey: "photo4Title",
        descKey: "photo4Desc",
        title: "Covered Walkways & Tropical Courtyards",
        desc: "Covered corridors framed by palm groves, facilitating breeze and sheltered movement during monsoons.",
        aspect: "16/9",
        location: "Wellamadama, Matara",
        credit: "Wikimedia Commons · CC BY-SA 3.0"
    },
    {
        id: "labs",
        src: "/images/universities/ruhuna/engineering-labs.jpg",
        badgeKey: "photo5Badge",
        titleKey: "photo5Title",
        descKey: "photo5Desc",
        title: "Engineering Computing & Electronics Labs",
        desc: "Equipped with automated manufacturing lines, high-frequency testbenches, and networking servers.",
        aspect: "4/3",
        location: "Dept. of Electrical & Information Engineering",
        credit: "Wikimedia Commons · CC BY-SA 3.0"
    }
];
function activateOnKey(event, action) {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        action();
    }
}
function CampusGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(126);
    if ($[0] !== "571072ab706dc9904f24d686339030832bc471cc58344800b592e931e01e224b") {
        for(let $i = 0; $i < 126; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "571072ab706dc9904f24d686339030832bc471cc58344800b592e931e01e224b";
    }
    const { name, photos, isRuhuna: t1, galleryTitle, gallerySubtitle } = t0;
    const isRuhuna = t1 === undefined ? true : t1;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("universityDetail.gallery");
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const isSi = locale === "si";
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const photoList = photos && photos.length > 0 ? photos : RUHUNA_FALLBACK_PHOTOS;
    let t2;
    if ($[1] !== photoList.length || $[2] !== selectedIndex) {
        t2 = ({
            "CampusGallery[handleKeyDown]": (e)=>{
                if (selectedIndex === null) {
                    return;
                }
                if (e.key === "Escape") {
                    setSelectedIndex(null);
                }
                if (e.key === "ArrowLeft") {
                    setSelectedIndex({
                        "CampusGallery[handleKeyDown > setSelectedIndex()]": (prev)=>prev !== null && prev > 0 ? prev - 1 : photoList.length - 1
                    }["CampusGallery[handleKeyDown > setSelectedIndex()]"]);
                }
                if (e.key === "ArrowRight") {
                    setSelectedIndex({
                        "CampusGallery[handleKeyDown > setSelectedIndex()]": (prev_0)=>prev_0 !== null && prev_0 < photoList.length - 1 ? prev_0 + 1 : 0
                    }["CampusGallery[handleKeyDown > setSelectedIndex()]"]);
                }
            }
        })["CampusGallery[handleKeyDown]"];
        $[1] = photoList.length;
        $[2] = selectedIndex;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleKeyDown = t2;
    let t3;
    let t4;
    if ($[4] !== handleKeyDown) {
        t3 = ({
            "CampusGallery[useEffect()]": ()=>{
                window.addEventListener("keydown", handleKeyDown);
                return ()=>window.removeEventListener("keydown", handleKeyDown);
            }
        })["CampusGallery[useEffect()]"];
        t4 = [
            handleKeyDown
        ];
        $[4] = handleKeyDown;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const activePhoto = selectedIndex !== null ? photoList[selectedIndex] : null;
    let t5;
    if ($[7] !== isRuhuna || $[8] !== t) {
        t5 = ({
            "CampusGallery[getPhotoTitle]": (p)=>{
                if (isRuhuna && p.titleKey && t.has(p.titleKey)) {
                    return t(p.titleKey);
                }
                return p.title;
            }
        })["CampusGallery[getPhotoTitle]"];
        $[7] = isRuhuna;
        $[8] = t;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const getPhotoTitle = t5;
    let t6;
    if ($[10] !== isRuhuna || $[11] !== t) {
        t6 = ({
            "CampusGallery[getPhotoDesc]": (p_0)=>{
                if (isRuhuna && p_0.descKey && t.has(p_0.descKey)) {
                    return t(p_0.descKey);
                }
                return p_0.desc;
            }
        })["CampusGallery[getPhotoDesc]"];
        $[10] = isRuhuna;
        $[11] = t;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const getPhotoDesc = t6;
    let t7;
    if ($[13] !== isRuhuna || $[14] !== isSi || $[15] !== t) {
        t7 = ({
            "CampusGallery[getPhotoBadge]": (p_1)=>{
                if (isRuhuna && p_1.badgeKey && t.has(p_1.badgeKey)) {
                    return t(p_1.badgeKey);
                }
                return p_1.badge || (isSi ? "\u0D9A\u0DD0\u0DB8\u0DCA\u0DB4\u0DC3\u0DCA \u0DA2\u0DD3\u0DC0\u0DD2\u0DAD\u0DBA" : "Campus Life");
            }
        })["CampusGallery[getPhotoBadge]"];
        $[13] = isRuhuna;
        $[14] = isSi;
        $[15] = t;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const getPhotoBadge = t7;
    let t8;
    if ($[17] !== galleryTitle || $[18] !== isRuhuna || $[19] !== isSi || $[20] !== name || $[21] !== t) {
        t8 = galleryTitle || (isRuhuna ? t("title") : isSi ? `${name} කැම්පස් ඡායාරූප ගැලරිය` : `Explore ${name} in Pictures`);
        $[17] = galleryTitle;
        $[18] = isRuhuna;
        $[19] = isSi;
        $[20] = name;
        $[21] = t;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    const displayTitle = t8;
    let t9;
    if ($[23] !== gallerySubtitle || $[24] !== isRuhuna || $[25] !== isSi || $[26] !== t) {
        t9 = gallerySubtitle || (isRuhuna ? t("subtitle") : isSi ? "\u0DC0\u0DD2\u0DC1\u0DCA\u0DC0\u0DC0\u0DD2\u0DAF\u0DCA\u200D\u0DBA\u0DCF\u0DBD \u0DB7\u0DD6\u0DB8\u0DD2\u0DBA, \u0DB1\u0DC0\u0DD3\u0DB1 \u0DB4\u0DBB\u0DCA\u0DBA\u0DDA\u0DC2\u0DAB\u0DCF\u0D9C\u0DCF\u0DBB \u0DC3\u0DC4 \u0DC1\u0DD2\u0DC2\u0DCA\u200D\u0DBA \u0DB4\u0DD3\u0DA8 \u0DC0\u0DBD \u0DC3\u0DD0\u0DB6\u0DD1 \u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4." : "Authentic verified photography from campus grounds, laboratories, and student faculties.");
        $[23] = gallerySubtitle;
        $[24] = isRuhuna;
        $[25] = isSi;
        $[26] = t;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    const displaySubtitle = t9;
    let t10;
    if ($[28] !== name || $[29] !== t) {
        t10 = t("label", {
            name
        });
        $[28] = name;
        $[29] = t;
        $[30] = t10;
    } else {
        t10 = $[30];
    }
    let t11;
    if ($[31] !== t) {
        t11 = t("eyebrow");
        $[31] = t;
        $[32] = t11;
    } else {
        t11 = $[32];
    }
    let t12;
    if ($[33] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "eyebrow",
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[33] = t11;
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== displayTitle) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "gallery-title",
            children: displayTitle
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[35] = displayTitle;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== t12 || $[38] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[37] = t12;
        $[38] = t13;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
            size: 14,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[40] = t15;
    } else {
        t15 = $[40];
    }
    const t16 = isSi ? "\u0DAD\u0DC4\u0DC0\u0DD4\u0DBB\u0DD4 \u0D9A\u0DC5 \u0DC3\u0DD0\u0DB6\u0DD1 \u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4" : "Authentic Photography";
    let t17;
    if ($[41] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gallery-badge-verified",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/components/universities/CampusGallery.tsx",
                    lineNumber: 272,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[41] = t16;
        $[42] = t17;
    } else {
        t17 = $[42];
    }
    let t18;
    if ($[43] !== t14 || $[44] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-header-row",
            children: [
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[43] = t14;
        $[44] = t17;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== displaySubtitle) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "gallery-subtitle muted",
            children: displaySubtitle
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[46] = displaySubtitle;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    let t21;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "CampusGallery[<div>.onClick]": ()=>setSelectedIndex(0)
        })["CampusGallery[<div>.onClick]"];
        t21 = ({
            "CampusGallery[<div>.onKeyDown]": (e_0)=>activateOnKey(e_0, {
                    "CampusGallery[<div>.onKeyDown > activateOnKey()]": ()=>setSelectedIndex(0)
                }["CampusGallery[<div>.onKeyDown > activateOnKey()]"])
        })["CampusGallery[<div>.onKeyDown]"];
        $[48] = t20;
        $[49] = t21;
    } else {
        t20 = $[48];
        t21 = $[49];
    }
    const t22 = photoList[0].src;
    let t23;
    if ($[50] !== getPhotoTitle || $[51] !== photoList[0]) {
        t23 = getPhotoTitle(photoList[0]);
        $[50] = getPhotoTitle;
        $[51] = photoList[0];
        $[52] = t23;
    } else {
        t23 = $[52];
    }
    let t24;
    if ($[53] !== photoList[0].src || $[54] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: t22,
            alt: t23,
            fill: true,
            sizes: "(max-width: 900px) 100vw, 55vw",
            priority: true,
            className: "gallery-img"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[53] = photoList[0].src;
        $[54] = t23;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-gradient-overlay"
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-img-wrapper",
            children: [
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, this);
        $[57] = t24;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    let t27;
    if ($[59] !== getPhotoBadge || $[60] !== photoList[0]) {
        t27 = getPhotoBadge(photoList[0]);
        $[59] = getPhotoBadge;
        $[60] = photoList[0];
        $[61] = t27;
    } else {
        t27 = $[61];
    }
    let t28;
    if ($[62] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gallery-card-badge",
            children: t27
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[62] = t27;
        $[63] = t28;
    } else {
        t28 = $[63];
    }
    let t29;
    if ($[64] !== getPhotoTitle || $[65] !== photoList[0]) {
        t29 = getPhotoTitle(photoList[0]);
        $[64] = getPhotoTitle;
        $[65] = photoList[0];
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    let t30;
    if ($[67] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            children: t29
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[67] = t29;
        $[68] = t30;
    } else {
        t30 = $[68];
    }
    let t31;
    if ($[69] !== getPhotoDesc || $[70] !== photoList[0]) {
        t31 = getPhotoDesc(photoList[0]);
        $[69] = getPhotoDesc;
        $[70] = photoList[0];
        $[71] = t31;
    } else {
        t31 = $[71];
    }
    let t32;
    if ($[72] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "gallery-card-desc",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[72] = t31;
        $[73] = t32;
    } else {
        t32 = $[73];
    }
    let t33;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            size: 12
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 399,
            columnNumber: 11
        }, this);
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    let t34;
    if ($[75] !== photoList[0].location) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gallery-location",
            children: [
                t33,
                " ",
                photoList[0].location
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[75] = photoList[0].location;
        $[76] = t34;
    } else {
        t34 = $[76];
    }
    let t35;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
            size: 13
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 414,
            columnNumber: 11
        }, this);
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] !== t) {
        t36 = t("viewFull");
        $[78] = t;
        $[79] = t36;
    } else {
        t36 = $[79];
    }
    let t37;
    if ($[80] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "gallery-zoom-hint",
            children: [
                t35,
                " ",
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 429,
            columnNumber: 11
        }, this);
        $[80] = t36;
        $[81] = t37;
    } else {
        t37 = $[81];
    }
    let t38;
    if ($[82] !== t34 || $[83] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-card-footer",
            children: [
                t34,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 437,
            columnNumber: 11
        }, this);
        $[82] = t34;
        $[83] = t37;
        $[84] = t38;
    } else {
        t38 = $[84];
    }
    let t39;
    if ($[85] !== t28 || $[86] !== t30 || $[87] !== t32 || $[88] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-card-content",
            children: [
                t28,
                t30,
                t32,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[85] = t28;
        $[86] = t30;
        $[87] = t32;
        $[88] = t38;
        $[89] = t39;
    } else {
        t39 = $[89];
    }
    let t40;
    if ($[90] !== t26 || $[91] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-card hero-photo-card",
            onClick: t20,
            onKeyDown: t21,
            role: "button",
            tabIndex: 0,
            children: [
                t26,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 457,
            columnNumber: 11
        }, this);
        $[90] = t26;
        $[91] = t39;
        $[92] = t40;
    } else {
        t40 = $[92];
    }
    let t41;
    if ($[93] !== getPhotoBadge || $[94] !== getPhotoTitle || $[95] !== photoList) {
        let t42;
        if ($[97] !== getPhotoBadge || $[98] !== getPhotoTitle) {
            t42 = ({
                "CampusGallery[(anonymous)()]": (photo, idx)=>{
                    const actualIndex = idx + 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-card thumb-photo-card",
                        onClick: {
                            "CampusGallery[(anonymous)() > <div>.onClick]": ()=>setSelectedIndex(actualIndex)
                        }["CampusGallery[(anonymous)() > <div>.onClick]"],
                        onKeyDown: {
                            "CampusGallery[(anonymous)() > <div>.onKeyDown]": (e_1)=>activateOnKey(e_1, {
                                    "CampusGallery[(anonymous)() > <div>.onKeyDown > activateOnKey()]": ()=>setSelectedIndex(actualIndex)
                                }["CampusGallery[(anonymous)() > <div>.onKeyDown > activateOnKey()]"])
                        }["CampusGallery[(anonymous)() > <div>.onKeyDown]"],
                        role: "button",
                        tabIndex: 0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gallery-img-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: photo.src,
                                        alt: getPhotoTitle(photo),
                                        fill: true,
                                        sizes: "(max-width: 700px) 50vw, 25vw",
                                        className: "gallery-img"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 477,
                                        columnNumber: 128
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gallery-gradient-overlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 477,
                                        columnNumber: 254
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                lineNumber: 477,
                                columnNumber: 91
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gallery-card-content compact",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gallery-card-badge",
                                        children: getPhotoBadge(photo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 477,
                                        columnNumber: 350
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        children: getPhotoTitle(photo)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 477,
                                        columnNumber: 416
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gallery-card-footer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gallery-location",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 519
                                                    }, this),
                                                    " ",
                                                    photo.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                lineNumber: 477,
                                                columnNumber: 484
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gallery-zoom-hint icon-only",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                    lineNumber: 477,
                                                    columnNumber: 609
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                lineNumber: 477,
                                                columnNumber: 563
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 477,
                                        columnNumber: 447
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                lineNumber: 477,
                                columnNumber: 304
                            }, this)
                        ]
                    }, photo.id, true, {
                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                        lineNumber: 471,
                        columnNumber: 18
                    }, this);
                }
            })["CampusGallery[(anonymous)()]"];
            $[97] = getPhotoBadge;
            $[98] = getPhotoTitle;
            $[99] = t42;
        } else {
            t42 = $[99];
        }
        t41 = photoList.slice(1).map(t42);
        $[93] = getPhotoBadge;
        $[94] = getPhotoTitle;
        $[95] = photoList;
        $[96] = t41;
    } else {
        t41 = $[96];
    }
    let t42;
    if ($[100] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-thumb-grid",
            children: t41
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[100] = t41;
        $[101] = t42;
    } else {
        t42 = $[101];
    }
    let t43;
    if ($[102] !== t40 || $[103] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ruhuna-gallery-grid",
            children: [
                t40,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 504,
            columnNumber: 11
        }, this);
        $[102] = t40;
        $[103] = t42;
        $[104] = t43;
    } else {
        t43 = $[104];
    }
    let t44;
    if ($[105] !== isSi || $[106] !== photoList[0].credit || $[107] !== t) {
        t44 = photoList[0].credit ? isSi ? `ඡායාරූප අනුග්‍රහය: ${photoList[0].credit}` : `Photography courtesy of ${photoList[0].credit}` : t("attribution");
        $[105] = isSi;
        $[106] = photoList[0].credit;
        $[107] = t;
        $[108] = t44;
    } else {
        t44 = $[108];
    }
    let t45;
    if ($[109] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-attribution-footer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                className: "muted",
                children: t44
            }, void 0, false, {
                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                lineNumber: 523,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[109] = t44;
        $[110] = t45;
    } else {
        t45 = $[110];
    }
    let t46;
    if ($[111] !== activePhoto || $[112] !== getPhotoBadge || $[113] !== getPhotoDesc || $[114] !== getPhotoTitle || $[115] !== isSi || $[116] !== photoList.length || $[117] !== t) {
        t46 = activePhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "gallery-lightbox-overlay",
            onClick: {
                "CampusGallery[<div>.onClick]": ()=>setSelectedIndex(null)
            }["CampusGallery[<div>.onClick]"],
            role: "dialog",
            "aria-modal": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-lightbox-modal glass-panel",
                onClick: _CampusGalleryDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lightbox-close-btn",
                        onClick: {
                            "CampusGallery[<button>.onClick]": ()=>setSelectedIndex(null)
                        }["CampusGallery[<button>.onClick]"],
                        "aria-label": t("close"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/universities/CampusGallery.tsx",
                            lineNumber: 535,
                            columnNumber: 71
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                        lineNumber: 533,
                        columnNumber: 159
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lightbox-image-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: activePhoto.src,
                            alt: getPhotoTitle(activePhoto),
                            fill: true,
                            sizes: "(max-width: 1200px) 95vw, 1100px",
                            className: "lightbox-image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/universities/CampusGallery.tsx",
                            lineNumber: 535,
                            columnNumber: 137
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                        lineNumber: 535,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lightbox-details",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lightbox-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow-pill",
                                        children: getPhotoBadge(activePhoto)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 535,
                                        columnNumber: 354
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gallery-location",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                lineNumber: 535,
                                                columnNumber: 455
                                            }, this),
                                            " ",
                                            activePhoto.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 535,
                                        columnNumber: 420
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                lineNumber: 535,
                                columnNumber: 321
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: getPhotoTitle(activePhoto)
                            }, void 0, false, {
                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                lineNumber: 535,
                                columnNumber: 511
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "lightbox-desc",
                                children: getPhotoDesc(activePhoto)
                            }, void 0, false, {
                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                lineNumber: 535,
                                columnNumber: 548
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lightbox-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "muted",
                                        children: activePhoto.credit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 535,
                                        columnNumber: 641
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lightbox-nav-buttons",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "lightbox-nav-btn",
                                                onClick: {
                                                    "CampusGallery[<button>.onClick]": ()=>setSelectedIndex({
                                                            "CampusGallery[<button>.onClick > setSelectedIndex()]": (prev_1)=>prev_1 !== null && prev_1 > 0 ? prev_1 - 1 : photoList.length - 1
                                                        }["CampusGallery[<button>.onClick > setSelectedIndex()]"])
                                                }["CampusGallery[<button>.onClick]"],
                                                "aria-label": isSi ? "\u0DB4\u0DD9\u0DBB \u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4\u0DBA" : "Previous photo",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 162
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                lineNumber: 535,
                                                columnNumber: 732
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "lightbox-nav-btn",
                                                onClick: {
                                                    "CampusGallery[<button>.onClick]": ()=>setSelectedIndex({
                                                            "CampusGallery[<button>.onClick > setSelectedIndex()]": (prev_2)=>prev_2 !== null && prev_2 < photoList.length - 1 ? prev_2 + 1 : 0
                                                        }["CampusGallery[<button>.onClick > setSelectedIndex()]"])
                                                }["CampusGallery[<button>.onClick]"],
                                                "aria-label": isSi ? "\u0D8A\u0DC5\u0D9F \u0DA1\u0DCF\u0DBA\u0DCF\u0DBB\u0DD6\u0DB4\u0DBA" : "Next photo",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 158
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                                lineNumber: 539,
                                                columnNumber: 196
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                        lineNumber: 535,
                                        columnNumber: 694
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                                lineNumber: 535,
                                columnNumber: 608
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/universities/CampusGallery.tsx",
                        lineNumber: 535,
                        columnNumber: 287
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/universities/CampusGallery.tsx",
                lineNumber: 533,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 531,
            columnNumber: 26
        }, this);
        $[111] = activePhoto;
        $[112] = getPhotoBadge;
        $[113] = getPhotoDesc;
        $[114] = getPhotoTitle;
        $[115] = isSi;
        $[116] = photoList.length;
        $[117] = t;
        $[118] = t46;
    } else {
        t46 = $[118];
    }
    let t47;
    if ($[119] !== t10 || $[120] !== t18 || $[121] !== t19 || $[122] !== t43 || $[123] !== t45 || $[124] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "gallery",
            className: "campus-gallery-real glass-panel",
            "aria-label": t10,
            children: [
                t18,
                t19,
                t43,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/CampusGallery.tsx",
            lineNumber: 557,
            columnNumber: 11
        }, this);
        $[119] = t10;
        $[120] = t18;
        $[121] = t19;
        $[122] = t43;
        $[123] = t45;
        $[124] = t46;
        $[125] = t47;
    } else {
        t47 = $[125];
    }
    return t47;
}
_s(CampusGallery, "7UQQEIxDlLkSKNl/nVKe05/ZN0E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = CampusGallery;
function _CampusGalleryDivOnClick(e_2) {
    return e_2.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "CampusGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/faculties.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "degreeGroups",
    ()=>degreeGroups,
    "faculties",
    ()=>faculties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/design/assets.json.[json].cjs [app-client] (ecmascript)");
;
const faculties = [
    {
        id: "engineering",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconLayers,
        tone: "tone-ice",
        campusZone: "galle",
        location: "Hapugala, Galle",
        established: 1999,
        website: "https://www.eng.ruh.ac.lk",
        stream: "Physical Science (Combined Maths, Physics, Chemistry / ICT)",
        departments: [
            "Civil & Environmental Engineering",
            "Electrical & Information Engineering",
            "Mechanical & Manufacturing Engineering",
            "Computer Engineering",
            "Interdisciplinary Studies"
        ]
    },
    {
        id: "medicine",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconStethoscope,
        tone: "tone-peach",
        campusZone: "galle",
        location: "Karapitiya, Galle",
        established: 1980,
        website: "https://www.med.ruh.ac.lk",
        stream: "Biological Science (Biology, Chemistry, Physics)",
        departments: [
            "Anatomy, Physiology & Biochemistry",
            "Medicine, Surgery & Paediatrics",
            "Obstetrics & Gynaecology, Psychiatry",
            "Clinical Training: National Hospital Galle (Karapitiya)"
        ]
    },
    {
        id: "science",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconCpu,
        tone: "tone-mint",
        campusZone: "matara",
        location: "Wellamadama, Matara",
        established: 1978,
        website: "https://www.sci.ruh.ac.lk",
        stream: "Physical Science & Biological Science",
        departments: [
            "Mathematics & Computer Science",
            "Physics & Electronics",
            "Chemistry",
            "Botany & Zoology"
        ]
    },
    {
        id: "management",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconBriefcase,
        tone: "tone-lavender",
        campusZone: "matara",
        location: "Wellamadama, Matara",
        established: 2003,
        website: "https://www.mgt.ruh.ac.lk",
        stream: "Commerce & Direct A/L Entry",
        departments: [
            "Accounting & Finance",
            "Management & Entrepreneurship",
            "Marketing",
            "Human Resource Management"
        ]
    },
    {
        id: "fisheries",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconFish,
        tone: "tone-ice",
        campusZone: "matara",
        location: "Wellamadama, Matara (Oceanfront)",
        established: 2005,
        website: "https://www.fish.ruh.ac.lk",
        stream: "Biological Science & Physical Science",
        departments: [
            "Fisheries & Aquaculture",
            "Limnology & Water Technology",
            "Oceanography & Marine Geology",
            "Coastal Marine Research Stations"
        ]
    },
    {
        id: "technology",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconCpu,
        tone: "",
        campusZone: "kamburupitiya",
        location: "Kamburupitiya, Matara",
        established: 2016,
        website: "https://www.tec.ruh.ac.lk",
        stream: "Technology Stream (ET / BST / ICT)",
        departments: [
            "Engineering Technology",
            "Biosystems Technology",
            "Information & Communication Technology (ICT)",
            "Multidisciplinary Technology Studies"
        ]
    },
    {
        id: "agriculture",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconLeaf,
        tone: "tone-mint",
        campusZone: "kamburupitiya",
        location: "Mapalana, Kamburupitiya",
        established: 1978,
        website: "https://www.agri.ruh.ac.lk",
        stream: "Biological Science",
        departments: [
            "Agricultural Resource Management & Technology",
            "Agribusiness Management & Economics",
            "Green Technology & Farm Machinery",
            "Food Science & Soil Systems"
        ]
    },
    {
        id: "allied",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconGraduation1,
        tone: "tone-mint",
        campusZone: "galle",
        location: "Karapitiya / Uluwitike, Galle",
        established: 2007,
        website: "https://www.ahs.ruh.ac.lk",
        stream: "Biological Science",
        departments: [
            "Department of Nursing",
            "Department of Pharmacy",
            "Department of Medical Laboratory Science (MLS)"
        ]
    },
    {
        id: "humanities",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconUsers,
        tone: "tone-peach",
        campusZone: "matara",
        location: "Wellamadama, Matara",
        established: 1978,
        website: "https://www.hss.ruh.ac.lk",
        stream: "Arts",
        departments: [
            "Economics & Public Policy",
            "History, Archaeology & Geography",
            "Sociology & Social Work",
            "Sinhala, English & Linguistics"
        ]
    },
    {
        id: "graduate",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconBook,
        tone: "tone-lavender",
        campusZone: "matara",
        location: "Wellamadama, Matara",
        established: "Postgraduate Hub",
        website: "https://www.fgs.ruh.ac.lk",
        stream: "University Graduates (BSc / BA / MBBS)",
        departments: [
            "MPhil & PhD Research Programs",
            "Multidisciplinary Master’s Degrees",
            "Postgraduate Diplomas"
        ]
    }
];
const degreeGroups = [
    {
        id: "engineering",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconLayers1,
        tone: "tone-ice",
        degrees: [
            "BSc Engineering",
            "Civil & Environmental",
            "Computer Engineering",
            "Electrical & Information",
            "Marine & Naval Architecture",
            "Mechanical & Manufacturing"
        ]
    },
    {
        id: "health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconStethoscope1,
        tone: "tone-peach",
        degrees: [
            "MBBS Medicine",
            "Pharmacy",
            "Medical Laboratory Science",
            "Nursing"
        ]
    },
    {
        id: "science",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconCpu1,
        tone: "tone-mint",
        degrees: [
            "BSc Biological Science",
            "BSc Physical Science",
            "Computer Science",
            "Financial Mathematics & Industrial Statistics"
        ]
    },
    {
        id: "technology",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconCpu,
        tone: "",
        degrees: [
            "Engineering Technology (Hons)",
            "Information & Communication Technology (Hons)",
            "Biosystems Technology (Hons)"
        ]
    },
    {
        id: "agriculture",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconLeaf1,
        tone: "tone-mint",
        degrees: [
            "Agricultural Resource Management & Technology",
            "Agribusiness Management",
            "Green Technology"
        ]
    },
    {
        id: "other",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].university.imgIconBook1,
        tone: "tone-lavender",
        degrees: [
            "Arts / Humanities",
            "Management / BBA",
            "Fisheries & Marine Sciences",
            "Marine & Fresh Water Sciences",
            "Postgraduate study via FGS"
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/universities/FacultyExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacultyExplorer",
    ()=>FacultyExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$faculties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/faculties.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FacultyExplorer(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(95);
    if ($[0] !== "a9f1d7074afa807176b38e6ffbe695fca8f08c545395185c3298170406d0fe53") {
        for(let $i = 0; $i < 95; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a9f1d7074afa807176b38e6ffbe695fca8f08c545395185c3298170406d0fe53";
    }
    const { faculties: propFaculties, isRuhuna: t1, universityName } = t0;
    const isRuhuna = t1 === undefined ? true : t1;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("universityDetail");
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const isSi = locale === "si";
    let t2;
    if ($[1] !== isRuhuna || $[2] !== propFaculties) {
        t2 = propFaculties || (isRuhuna ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$faculties$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faculties"] : []);
        $[1] = isRuhuna;
        $[2] = propFaculties;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const facultyList = t2;
    let t3;
    bb0: {
        if (isRuhuna && !propFaculties) {
            let t4;
            if ($[4] !== t) {
                t4 = t("facultyExplorer.filterAll");
                $[4] = t;
                $[5] = t4;
            } else {
                t4 = $[5];
            }
            let t5;
            if ($[6] !== t4) {
                t5 = {
                    id: "all",
                    label: t4
                };
                $[6] = t4;
                $[7] = t5;
            } else {
                t5 = $[7];
            }
            let t6;
            if ($[8] !== t) {
                t6 = t("facultyExplorer.filterMatara");
                $[8] = t;
                $[9] = t6;
            } else {
                t6 = $[9];
            }
            let t7;
            if ($[10] !== t6) {
                t7 = {
                    id: "matara",
                    label: t6
                };
                $[10] = t6;
                $[11] = t7;
            } else {
                t7 = $[11];
            }
            let t8;
            if ($[12] !== t) {
                t8 = t("facultyExplorer.filterGalle");
                $[12] = t;
                $[13] = t8;
            } else {
                t8 = $[13];
            }
            let t9;
            if ($[14] !== t8) {
                t9 = {
                    id: "galle",
                    label: t8
                };
                $[14] = t8;
                $[15] = t9;
            } else {
                t9 = $[15];
            }
            let t10;
            if ($[16] !== t) {
                t10 = t("facultyExplorer.filterKamburupitiya");
                $[16] = t;
                $[17] = t10;
            } else {
                t10 = $[17];
            }
            let t11;
            if ($[18] !== t10) {
                t11 = {
                    id: "kamburupitiya",
                    label: t10
                };
                $[18] = t10;
                $[19] = t11;
            } else {
                t11 = $[19];
            }
            let t12;
            if ($[20] !== t11 || $[21] !== t5 || $[22] !== t7 || $[23] !== t9) {
                t12 = [
                    t5,
                    t7,
                    t9,
                    t11
                ];
                $[20] = t11;
                $[21] = t5;
                $[22] = t7;
                $[23] = t9;
                $[24] = t12;
            } else {
                t12 = $[24];
            }
            t3 = t12;
            break bb0;
        }
        let t4;
        if ($[25] !== facultyList) {
            t4 = Array.from(new Set(facultyList.map(_FacultyExplorerFacultyListMap).filter(Boolean)));
            $[25] = facultyList;
            $[26] = t4;
        } else {
            t4 = $[26];
        }
        const zones = t4;
        if (zones.length > 1 && zones.length <= 5) {
            const t5 = isSi ? "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0DB8\u0DAB\u0DCA\u0DA9\u0DB4" : "All Campuses";
            let t6;
            if ($[27] !== t5) {
                t6 = {
                    id: "all",
                    label: t5
                };
                $[27] = t5;
                $[28] = t6;
            } else {
                t6 = $[28];
            }
            let t7;
            if ($[29] !== zones) {
                t7 = zones.map(_FacultyExplorerZonesMap);
                $[29] = zones;
                $[30] = t7;
            } else {
                t7 = $[30];
            }
            let t8;
            if ($[31] !== t6 || $[32] !== t7) {
                t8 = [
                    t6,
                    ...t7
                ];
                $[31] = t6;
                $[32] = t7;
                $[33] = t8;
            } else {
                t8 = $[33];
            }
            t3 = t8;
            break bb0;
        }
        let t5;
        if ($[34] !== facultyList) {
            t5 = Array.from(new Set(facultyList.map(_FacultyExplorerFacultyListMap2).filter(Boolean)));
            $[34] = facultyList;
            $[35] = t5;
        } else {
            t5 = $[35];
        }
        const streams = t5;
        if (streams.length > 1 && streams.length <= 6) {
            const t6 = isSi ? "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0DC0\u0DD2\u0DC2\u0DBA \u0DB0\u0DCF\u0DBB\u0DCF" : "All Streams";
            let t7;
            if ($[36] !== t6) {
                t7 = {
                    id: "all",
                    label: t6
                };
                $[36] = t6;
                $[37] = t7;
            } else {
                t7 = $[37];
            }
            let t8;
            if ($[38] !== streams) {
                t8 = streams.map(_FacultyExplorerStreamsMap);
                $[38] = streams;
                $[39] = t8;
            } else {
                t8 = $[39];
            }
            let t9;
            if ($[40] !== t7 || $[41] !== t8) {
                t9 = [
                    t7,
                    ...t8
                ];
                $[40] = t7;
                $[41] = t8;
                $[42] = t9;
            } else {
                t9 = $[42];
            }
            t3 = t9;
            break bb0;
        }
        const t6 = isSi ? "\u0DC3\u0DD2\u0DBA\u0DBD\u0DD4 \u0DB4\u0DD3\u0DA8" : "All Faculties";
        let t7;
        if ($[43] !== t6) {
            t7 = [
                {
                    id: "all",
                    label: t6
                }
            ];
            $[43] = t6;
            $[44] = t7;
        } else {
            t7 = $[44];
        }
        t3 = t7;
    }
    const filterOptions = t3;
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t4;
    bb1: {
        if (activeFilter === "all") {
            t4 = facultyList;
            break bb1;
        }
        let t5;
        if ($[45] !== activeFilter || $[46] !== facultyList) {
            let t6;
            if ($[48] !== activeFilter) {
                t6 = ({
                    "FacultyExplorer[facultyList.filter()]": (f_1)=>f_1.campusZone === activeFilter || f_1.stream === activeFilter
                })["FacultyExplorer[facultyList.filter()]"];
                $[48] = activeFilter;
                $[49] = t6;
            } else {
                t6 = $[49];
            }
            t5 = facultyList.filter(t6);
            $[45] = activeFilter;
            $[46] = facultyList;
            $[47] = t5;
        } else {
            t5 = $[47];
        }
        t4 = t5;
    }
    const filtered = t4;
    let t5;
    if ($[50] !== isRuhuna || $[51] !== isSi || $[52] !== t) {
        t5 = isRuhuna ? t("facultyExplorer.eyebrow") : isSi ? "\u0DB4\u0DD3\u0DA8 \u0DC3\u0DC4 \u0D85\u0DB0\u0DCA\u200D\u0DBA\u0DBA\u0DB1 \u0D85\u0D82\u0DC1" : "FACULTIES & ACADEMIC DIVISIONS";
        $[50] = isRuhuna;
        $[51] = isSi;
        $[52] = t;
        $[53] = t5;
    } else {
        t5 = $[53];
    }
    const eyebrowText = t5;
    let t6;
    if ($[54] !== isRuhuna || $[55] !== isSi || $[56] !== t || $[57] !== universityName) {
        t6 = isRuhuna ? t("facultyExplorer.title") : isSi ? `${universityName || "\u0DC0\u0DD2\u0DC1\u0DCA\u0DC0\u0DC0\u0DD2\u0DAF\u0DCA\u200D\u0DBA\u0DCF\u0DBD\u0DBA\u0DDA"} පීඨ ගවේෂණය කරන්න` : `Explore Faculties at ${universityName || "the University"}`;
        $[54] = isRuhuna;
        $[55] = isSi;
        $[56] = t;
        $[57] = universityName;
        $[58] = t6;
    } else {
        t6 = $[58];
    }
    const titleText = t6;
    let t7;
    if ($[59] !== isRuhuna || $[60] !== isSi || $[61] !== t) {
        t7 = isRuhuna ? t("facultyExplorer.description") : isSi ? "\u0DC3\u0DD4\u0DC0\u0DD2\u0DC1\u0DDA\u0DC2\u0DD3 \u0D8B\u0DB4\u0DCF\u0DB0\u0DD2 \u0DB4\u0DCF\u0DA8\u0DB8\u0DCF\u0DBD\u0DCF, \u0D8B\u0DC3\u0DC3\u0DCA \u0DB4\u0DBB\u0DCA\u0DBA\u0DDA\u0DC2\u0DAB\u0DCF\u0D9C\u0DCF\u0DBB \u0DC3\u0DC4 \u0DC0\u0DD2\u0DC0\u0DD2\u0DB0 \u0DC0\u0DD2\u0DC2\u0DBA \u0DB0\u0DCF\u0DBB\u0DCF \u0D94\u0DC3\u0DCA\u0DC3\u0DDA \u0DC0\u0DD2\u0DC4\u0DD2\u0DAF\u0DD4\u0DB1\u0DD4 \u0D85\u0DB0\u0DCA\u200D\u0DBA\u0DBA\u0DB1 \u0DB4\u0DD3\u0DA8." : "Comprehensive academic faculties offering specialized degree programmes, advanced research laboratories, and interdisciplinary study pathways.";
        $[59] = isRuhuna;
        $[60] = isSi;
        $[61] = t;
        $[62] = t7;
    } else {
        t7 = $[62];
    }
    const descText = t7;
    let t8;
    if ($[63] !== eyebrowText) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "eyebrow",
            children: eyebrowText
        }, void 0, false, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 294,
            columnNumber: 10
        }, this);
        $[63] = eyebrowText;
        $[64] = t8;
    } else {
        t8 = $[64];
    }
    let t9;
    if ($[65] !== titleText) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "section-title",
            children: titleText
        }, void 0, false, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 302,
            columnNumber: 10
        }, this);
        $[65] = titleText;
        $[66] = t9;
    } else {
        t9 = $[66];
    }
    let t10;
    if ($[67] !== descText) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "section-description muted",
            children: descText
        }, void 0, false, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[67] = descText;
        $[68] = t10;
    } else {
        t10 = $[68];
    }
    let t11;
    if ($[69] !== t10 || $[70] !== t8 || $[71] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 318,
            columnNumber: 11
        }, this);
        $[69] = t10;
        $[70] = t8;
        $[71] = t9;
        $[72] = t11;
    } else {
        t11 = $[72];
    }
    let t12;
    if ($[73] !== activeFilter || $[74] !== filterOptions) {
        t12 = filterOptions.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "zone-filter-pills glass-panel",
            children: filterOptions.map({
                "FacultyExplorer[filterOptions.map()]": (opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: `zone-pill ${activeFilter === opt.id ? "active" : ""}`,
                        onClick: {
                            "FacultyExplorer[filterOptions.map() > <button>.onClick]": ()=>setActiveFilter(opt.id)
                        }["FacultyExplorer[filterOptions.map() > <button>.onClick]"],
                        children: opt.label
                    }, opt.id, false, {
                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                        lineNumber: 329,
                        columnNumber: 56
                    }, this)
            }["FacultyExplorer[filterOptions.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 328,
            columnNumber: 39
        }, this);
        $[73] = activeFilter;
        $[74] = filterOptions;
        $[75] = t12;
    } else {
        t12 = $[75];
    }
    let t13;
    if ($[76] !== t11 || $[77] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-header-row",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[76] = t11;
        $[77] = t12;
        $[78] = t13;
    } else {
        t13 = $[78];
    }
    let t14;
    if ($[79] !== filtered || $[80] !== isRuhuna || $[81] !== isSi || $[82] !== propFaculties || $[83] !== t) {
        let t15;
        if ($[85] !== isRuhuna || $[86] !== isSi || $[87] !== propFaculties || $[88] !== t) {
            t15 = ({
                "FacultyExplorer[filtered.map()]": (faculty)=>{
                    const hasRuhunaI18n = isRuhuna && !propFaculties && t.has(`faculties.${faculty.id}.title`);
                    const title = hasRuhunaI18n ? t(`faculties.${faculty.id}.title`) : faculty.name;
                    const copy = hasRuhunaI18n ? t(`faculties.${faculty.id}.copy`) : faculty.description;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "faculty-detail-card glass-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faculty-card-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `icon-bubble ${faculty.tone || "blue"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            size: 20,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                            lineNumber: 357,
                                            columnNumber: 183
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 125
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faculty-header-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "faculty-zone-pill",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 11,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 309
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: faculty.location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 348
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 273
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "faculty-est-pill",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 11,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 421
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isSi ? `ආරම්භය: ${faculty.established}` : `Est. ${faculty.established}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 462
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 386
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 236
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                lineNumber: 357,
                                columnNumber: 88
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faculty-card-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 602
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "faculty-card-subcopy",
                                        children: copy
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 618
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faculty-stream-tag",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                size: 13,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 700
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: isSi ? "\u0DC0\u0DD2\u0DC2\u0DBA \u0DB0\u0DCF\u0DBB\u0DCF\u0DC0:" : isRuhuna ? t("facultyExplorer.streamLabel") : "Stream:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 752
                                                    }, this),
                                                    " ",
                                                    faculty.stream
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 746
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 664
                                    }, this),
                                    faculty.departments && faculty.departments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faculty-depts-preview",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: isSi ? "\u0DB4\u0DCA\u200D\u0DBB\u0DB0\u0DCF\u0DB1 \u0D85\u0DB0\u0DCA\u200D\u0DBA\u0DBA\u0DB1\u0DCF\u0D82\u0DC1 \u0DC3\u0DC4 \u0DB4\u0DBB\u0DCA\u0DBA\u0DDA\u0DC2\u0DAB:" : "Key Departments & Research:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1021
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                children: faculty.departments.map(_FacultyExplorerFilteredMapFacultyDepartmentsMap)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1241
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 982
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                lineNumber: 357,
                                columnNumber: 567
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faculty-card-footer",
                                children: [
                                    faculty.website && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: faculty.website,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "faculty-portal-btn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isRuhuna ? t("facultyExplorer.visitFaculty") : isSi ? "\u0DB1\u0DD2\u0DBD \u0DB4\u0DD3\u0DA8 Portal \u0D91\u0D9A" : "Official Faculty Portal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1494
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: `: ${title}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1650
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                size: 13,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1697
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 1395
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#degrees",
                                        className: "faculty-degrees-link",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isSi ? "\u0D8B\u0DB4\u0DCF\u0DB0\u0DD2 \u0DB4\u0DCF\u0DA8\u0DB8\u0DCF\u0DBD\u0DCF \u0DB6\u0DBD\u0DB1\u0DCA\u0DB1" : "View Degrees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1799
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                size: 13,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                                lineNumber: 357,
                                                columnNumber: 1944
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                        lineNumber: 357,
                                        columnNumber: 1747
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                                lineNumber: 357,
                                columnNumber: 1338
                            }, this)
                        ]
                    }, faculty.id, true, {
                        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
                        lineNumber: 357,
                        columnNumber: 18
                    }, this);
                }
            })["FacultyExplorer[filtered.map()]"];
            $[85] = isRuhuna;
            $[86] = isSi;
            $[87] = propFaculties;
            $[88] = t;
            $[89] = t15;
        } else {
            t15 = $[89];
        }
        t14 = filtered.map(t15);
        $[79] = filtered;
        $[80] = isRuhuna;
        $[81] = isSi;
        $[82] = propFaculties;
        $[83] = t;
        $[84] = t14;
    } else {
        t14 = $[84];
    }
    let t15;
    if ($[90] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "faculty-cards-grid",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[90] = t14;
        $[91] = t15;
    } else {
        t15 = $[91];
    }
    let t16;
    if ($[92] !== t13 || $[93] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faculties",
            className: "section-block faculty-explorer-section",
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[92] = t13;
        $[93] = t15;
        $[94] = t16;
    } else {
        t16 = $[94];
    }
    return t16;
}
_s(FacultyExplorer, "qzEbMKrpPm4GASUugPnWBRtM/D8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = FacultyExplorer;
function _FacultyExplorerFilteredMapFacultyDepartmentsMap(dept) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: dept
    }, dept, false, {
        fileName: "[project]/src/components/universities/FacultyExplorer.tsx",
        lineNumber: 398,
        columnNumber: 10
    }, this);
}
function _FacultyExplorerStreamsMap(s) {
    return {
        id: s,
        label: s
    };
}
function _FacultyExplorerFacultyListMap2(f_0) {
    return f_0.stream;
}
function _FacultyExplorerZonesMap(z) {
    return {
        id: z,
        label: z
    };
}
function _FacultyExplorerFacultyListMap(f) {
    return f.campusZone;
}
var _c;
__turbopack_context__.k.register(_c, "FacultyExplorer");
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
"[project]/src/lib/data/saved-items.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLegacyRoadmap",
    ()=>isLegacyRoadmap,
    "savedItems",
    ()=>savedItems,
    "savedRoadmaps",
    ()=>savedRoadmaps,
    "subscribeSaved",
    ()=>subscribeSaved
]);
const ITEMS_KEY = "skillbridge:shortlist:v1";
const ROADMAPS_KEY = "skillbridge:roadmaps:v1";
/** One event for every saved-content change so all subscribed components refresh. */ const CHANGE_EVENT = "skillbridge:shortlist-change";
function read(key, valid) {
    try {
        const raw = localStorage.getItem(key) || "[]";
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) && parsed.every(valid) ? raw : "[]";
    } catch  {
        return "[]";
    }
}
const isObject = (value)=>typeof value === "object" && value !== null;
const savedItems = {
    snapshot () {
        return read(ITEMS_KEY, (item)=>isObject(item) && typeof item.id === "string" && typeof item.title === "string" && [
                "career",
                "university"
            ].includes(String(item.kind)));
    },
    toggle (item) {
        const current = JSON.parse(this.snapshot());
        const found = current.some((x)=>x.id === item.id && x.kind === item.kind);
        localStorage.setItem(ITEMS_KEY, JSON.stringify(found ? current.filter((x)=>x.id !== item.id || x.kind !== item.kind) : [
            ...current,
            item
        ]));
        window.dispatchEvent(new Event(CHANGE_EVENT));
    }
};
const isLegacyRoadmap = (roadmap)=>"milestones" in roadmap;
const savedRoadmaps = {
    snapshot () {
        return read(ROADMAPS_KEY, (entry)=>isObject(entry) && typeof entry.id === "string" && (typeof entry.goal === "string" || typeof entry.career === "string" && Array.isArray(entry.milestones)));
    },
    save (roadmap) {
        const existing = JSON.parse(this.snapshot());
        localStorage.setItem(ROADMAPS_KEY, JSON.stringify([
            ...existing.filter((r)=>r.id !== roadmap.id),
            roadmap
        ]));
        window.dispatchEvent(new Event(CHANGE_EVENT));
    },
    remove (id) {
        const existing = JSON.parse(this.snapshot());
        localStorage.setItem(ROADMAPS_KEY, JSON.stringify(existing.filter((r)=>r.id !== id)));
        window.dispatchEvent(new Event(CHANGE_EVENT));
    }
};
function subscribeSaved(callback) {
    window.addEventListener(CHANGE_EVENT, callback);
    window.addEventListener("storage", callback);
    return ()=>{
        window.removeEventListener(CHANGE_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/SaveButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveButton",
    ()=>SaveButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/DesignAsset.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/saved-items.ts [app-client] (ecmascript)");
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
function SaveButton(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "a1ba1667dcac3b64dad7233d0d8e79048be2025277ee8b4b4b8a1706b69ab5cb") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a1ba1667dcac3b64dad7233d0d8e79048be2025277ee8b4b4b8a1706b69ab5cb";
    }
    const { id, title, kind: t1, compact: t2, iconAsset } = t0;
    const kind = t1 === undefined ? "career" : t1;
    const compact = t2 === undefined ? false : t2;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("save");
    const serialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeSaved"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savedItems"].snapshot, _SaveButtonUseSyncExternalStore);
    let t3;
    if ($[1] !== id || $[2] !== kind || $[3] !== serialized) {
        let t4;
        if ($[5] !== id || $[6] !== kind) {
            t4 = ({
                "SaveButton[(anonymous)()]": (item)=>item.id === id && item.kind === kind
            })["SaveButton[(anonymous)()]"];
            $[5] = id;
            $[6] = kind;
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        t3 = JSON.parse(serialized).some(t4);
        $[1] = id;
        $[2] = kind;
        $[3] = serialized;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const saved = t3;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    if ($[8] !== id || $[9] !== kind || $[10] !== title) {
        t4 = function toggle(e) {
            e?.stopPropagation();
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savedItems"].toggle({
                    id,
                    title,
                    kind
                });
                setError(false);
            } catch  {
                setError(true);
            }
        };
        $[8] = id;
        $[9] = kind;
        $[10] = title;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    const toggle = t4;
    const t5 = `glass-button save-button ${compact ? "compact-save" : ""}`;
    let t6;
    if ($[12] !== compact || $[13] !== saved || $[14] !== t || $[15] !== title) {
        t6 = compact ? saved ? t("removeLabel", {
            title
        }) : t("saveLabel", {
            title
        }) : undefined;
        $[12] = compact;
        $[13] = saved;
        $[14] = t;
        $[15] = title;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== iconAsset || $[18] !== saved) {
        t7 = saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveButton.tsx",
            lineNumber: 96,
            columnNumber: 18
        }, this) : iconAsset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
            src: iconAsset
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveButton.tsx",
            lineNumber: 96,
            columnNumber: 52
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveButton.tsx",
            lineNumber: 96,
            columnNumber: 86
        }, this);
        $[17] = iconAsset;
        $[18] = saved;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== compact || $[21] !== kind || $[22] !== saved || $[23] !== t) {
        t8 = !compact && (saved ? t("saved") : kind === "university" ? t("addUniversity") : t("addCareer"));
        $[20] = compact;
        $[21] = kind;
        $[22] = saved;
        $[23] = t;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== saved || $[26] !== t5 || $[27] !== t6 || $[28] !== t7 || $[29] !== t8 || $[30] !== toggle) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "button",
            variant: "glass",
            className: t5,
            "aria-label": t6,
            "aria-pressed": saved,
            onClick: toggle,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/SaveButton.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[25] = saved;
        $[26] = t5;
        $[27] = t6;
        $[28] = t7;
        $[29] = t8;
        $[30] = toggle;
        $[31] = t9;
    } else {
        t9 = $[31];
    }
    let t10;
    if ($[32] !== error || $[33] !== t) {
        t10 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            role: "alert",
            className: "status-message",
            children: t("storageError")
        }, void 0, false, {
            fileName: "[project]/src/components/shared/SaveButton.tsx",
            lineNumber: 129,
            columnNumber: 20
        }, this);
        $[32] = error;
        $[33] = t;
        $[34] = t10;
    } else {
        t10 = $[34];
    }
    let t11;
    if ($[35] !== t10 || $[36] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t10
            ]
        }, void 0, true);
        $[35] = t10;
        $[36] = t9;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    return t11;
}
_s(SaveButton, "i5l4x44q+kNW1d/uBrWVY0PSiVs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = SaveButton;
function _SaveButtonUseSyncExternalStore() {
    return "[]";
}
var _c;
__turbopack_context__.k.register(_c, "SaveButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0e-ee_c._.js.map
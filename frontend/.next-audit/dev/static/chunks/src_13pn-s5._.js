(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/shared/ActionLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionLink",
    ()=>ActionLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
;
;
;
function ActionLink(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "36c5d68b0a71722e1c15d6a9e2427f0760db72cb5279ec991775330fccb7cbef") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36c5d68b0a71722e1c15d6a9e2427f0760db72cb5279ec991775330fccb7cbef";
    }
    const { href, children, icon, dark: t1, className: t2, arrow: t3, external: t4 } = t0;
    const dark = t1 === undefined ? false : t1;
    const className = t2 === undefined ? "" : t2;
    const arrow = t3 === undefined ? true : t3;
    const external = t4 === undefined ? false : t4;
    const classes = `glass-button ${dark ? "button-dark" : ""} ${className}`;
    let t5;
    if ($[1] !== children) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ActionLink.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    let t6;
    if ($[3] !== arrow) {
        t6 = arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
            size: 17,
            className: "action-arrow"
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ActionLink.tsx",
            lineNumber: 38,
            columnNumber: 19
        }, this);
        $[3] = arrow;
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== icon || $[6] !== t5 || $[7] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                icon,
                t5,
                t6
            ]
        }, void 0, true);
        $[5] = icon;
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const content = t7;
    let t8;
    if ($[9] !== content || $[10] !== external || $[11] !== href) {
        t8 = external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ActionLink.tsx",
            lineNumber: 57,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ActionLink.tsx",
            lineNumber: 57,
            columnNumber: 94
        }, this);
        $[9] = content;
        $[10] = external;
        $[11] = href;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== classes || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            asChild: true,
            variant: "glass",
            className: classes,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/shared/ActionLink.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[13] = classes;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
}
_c = ActionLink;
var _c;
__turbopack_context__.k.register(_c, "ActionLink");
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
"[project]/src/lib/i18n/catalog.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatSalary",
    ()=>formatSalary,
    "localizeCareer",
    ()=>localizeCareer,
    "localizeUniversity",
    ()=>localizeUniversity
]);
/**
 * Catalog records come from the API or the local fixtures in English. The
 * message files hold translations keyed by slug; anything not translated yet
 * falls back to the record's own text instead of showing a raw key.
 */ const pick = (t, key, fallback)=>t.has(key) ? t(key) : fallback;
function localizeCareer(t, career) {
    return {
        ...career,
        display: {
            title: pick(t, `career.${career.slug}.title`, career.title),
            summary: pick(t, `career.${career.slug}.summary`, career.summary),
            employers: pick(t, `career.${career.slug}.employers`, career.employers),
            entry: pick(t, `career.${career.slug}.entry`, career.entry),
            category: pick(t, `category.${career.category}`, career.category)
        }
    };
}
function formatSalary(t, career) {
    if (career.salaryVaries) return t("salary.varies");
    if (career.salaryK != null) return t("salary.average", {
        amount: career.salaryK
    });
    return t("salary.unknown");
}
function localizeUniversity(t, university) {
    return {
        ...university,
        display: {
            name: pick(t, `university.${university.slug}.name`, university.name),
            location: pick(t, `location.${university.location}`, university.location),
            areas: university.areas.map((area)=>pick(t, `area.${area}`, area)),
            type: pick(t, `institutionType.${university.type}`, university.type)
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/careers/CareerDirectory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CareerDirectory",
    ()=>CareerDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ActionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/DesignAsset.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SaveButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SectionHeading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/design/assets.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/catalog.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
const ALL = "all";
const mainCategories = [
    ALL,
    "Technology",
    "Healthcare",
    "Engineering",
    "Business",
    "Creative",
    "Education"
];
const additionalCategories = [
    "Legal",
    "Hospitality",
    "Skilled Trades"
];
const interests = [
    [
        "technology",
        "Technology"
    ],
    [
        "health",
        "Healthcare"
    ],
    [
        "engineering",
        "Engineering"
    ],
    [
        "business",
        "Business"
    ],
    [
        "creative",
        "Creative"
    ]
];
function CareerDirectory(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(181);
    if ($[0] !== "4dd8d74d7123382e84bff33872c0930112dd430da5343a158a9bf3cd0a0ef9fe") {
        for(let $i = 0; $i < 181; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4dd8d74d7123382e84bff33872c0930112dd430da5343a158a9bf3cd0a0ef9fe";
    }
    const { careers, artwork } = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("careers");
    const catalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("catalog");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL);
    const [showMoreCategories, setShowMoreCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("featured");
    let t1;
    if ($[1] !== catalog || $[2] !== t) {
        t1 = ({
            "CareerDirectory[categoryLabel]": (value)=>value === ALL ? t("categories.all") : catalog.has(`category.${value}`) ? catalog(`category.${value}`) : value
        })["CareerDirectory[categoryLabel]"];
        $[1] = catalog;
        $[2] = t;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const categoryLabel = t1;
    let t2;
    if ($[4] !== careers || $[5] !== category || $[6] !== query || $[7] !== sort) {
        const needle = query.trim().toLowerCase();
        let t3;
        if ($[9] !== category) {
            t3 = ({
                "CareerDirectory[careers.filter()]": (career)=>{
                    if (category === ALL) {
                        return true;
                    }
                    if (category === "Engineering") {
                        return career.category === "Engineering" || career.slug === "engineer";
                    }
                    if (category === "Technology") {
                        return career.category === "Technology" || career.slug === "engineer";
                    }
                    return career.category === category;
                }
            })["CareerDirectory[careers.filter()]"];
            $[9] = category;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        let t4;
        if ($[11] !== sort) {
            t4 = ({
                "CareerDirectory[(anonymous)()]": (a, b)=>sort === "az" ? a.display.title.localeCompare(b.display.title) : 0
            })["CareerDirectory[(anonymous)()]"];
            $[11] = sort;
            $[12] = t4;
        } else {
            t4 = $[12];
        }
        t2 = careers.filter(t3).filter({
            "CareerDirectory[(anonymous)()]": (career_0)=>!needle || `${career_0.display.title} ${career_0.display.summary} ${career_0.display.employers} ${career_0.title} ${career_0.employers}`.toLowerCase().includes(needle)
        }["CareerDirectory[(anonymous)()]"]).sort(t4);
        $[4] = careers;
        $[5] = category;
        $[6] = query;
        $[7] = sort;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const filtered = t2;
    let t3;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = function selectCategory(next) {
            setCategory(next);
            if (additionalCategories.includes(next)) {
                setShowMoreCategories(true);
            }
        };
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    const selectCategory = t3;
    let t4;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function clearFilters() {
            setQuery("");
            setCategory(ALL);
            setShowMoreCategories(false);
        };
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    const clearFilters = t4;
    let t5;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["18:9557"].imgIconCompass
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t) {
        t6 = t("eyebrow");
        $[16] = t;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow-pill",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 142,
            columnNumber: 10
        }, this);
        $[18] = t6;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t) {
        t8 = t.rich("title", {
            accent: _temp,
            br: _temp2
        });
        $[20] = t;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[22] = t8;
        $[23] = t9;
    } else {
        t9 = $[23];
    }
    let t10;
    if ($[24] !== t) {
        t10 = t.rich("intro", {
            br: _temp3
        });
        $[24] = t;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[26] = t10;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["18:9557"].imgIconSearch
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t) {
        t13 = t("searchLabel");
        $[29] = t;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "CareerDirectory[<input>.onChange]": (event)=>setQuery(event.target.value)
        })["CareerDirectory[<input>.onChange]"];
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== t) {
        t15 = t("searchPlaceholder");
        $[32] = t;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== query || $[35] !== t13 || $[36] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "search",
            "aria-label": t13,
            value: query,
            onChange: t14,
            placeholder: t15
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[34] = query;
        $[35] = t13;
        $[36] = t15;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    let t17;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]["18:9557"].imgIconArrow
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[38] = t17;
    } else {
        t17 = $[38];
    }
    let t18;
    if ($[39] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "search-input career-search",
            children: [
                t12,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 236,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t11 || $[42] !== t18 || $[43] !== t7 || $[44] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                t9,
                t11,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[41] = t11;
        $[42] = t18;
        $[43] = t7;
        $[44] = t9;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== artwork || $[47] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "career-directory-hero glass-panel",
            children: [
                t19,
                artwork
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[46] = artwork;
        $[47] = t19;
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== t) {
        t21 = t("browse.eyebrow");
        $[49] = t;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== t) {
        t22 = t("browse.title");
        $[51] = t;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] !== filtered.length || $[54] !== t) {
        t23 = t("browse.description", {
            count: filtered.length
        });
        $[53] = filtered.length;
        $[54] = t;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t21 || $[57] !== t22 || $[58] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeading"], {
            eyebrow: t21,
            title: t22,
            description: t23
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[56] = t21;
        $[57] = t22;
        $[58] = t23;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== t) {
        t25 = t("filters.label");
        $[60] = t;
        $[61] = t25;
    } else {
        t25 = $[61];
    }
    let t26;
    if ($[62] !== t) {
        t26 = t("filters.title");
        $[62] = t;
        $[63] = t26;
    } else {
        t26 = $[63];
    }
    let t27;
    if ($[64] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: t26
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[64] = t26;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    let t28;
    if ($[66] !== t) {
        t28 = t("filters.subtitle");
        $[66] = t;
        $[67] = t28;
    } else {
        t28 = $[67];
    }
    let t29;
    if ($[68] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: t28
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 333,
            columnNumber: 11
        }, this);
        $[68] = t28;
        $[69] = t29;
    } else {
        t29 = $[69];
    }
    let t30;
    if ($[70] !== t) {
        t30 = t("filters.interests");
        $[70] = t;
        $[71] = t30;
    } else {
        t30 = $[71];
    }
    let t31;
    if ($[72] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "eyebrow",
            children: t30
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[72] = t30;
        $[73] = t31;
    } else {
        t31 = $[73];
    }
    let t32;
    if ($[74] !== category || $[75] !== t) {
        t32 = interests.map({
            "CareerDirectory[interests.map()]": (t33)=>{
                const [key, value_0] = t33;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: category === value_0 ? "selected" : "",
                    "aria-pressed": category === value_0,
                    onClick: {
                        "CareerDirectory[interests.map() > <button>.onClick]": ()=>selectCategory(category === value_0 ? ALL : value_0)
                    }["CareerDirectory[interests.map() > <button>.onClick]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                            size: 14,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                            lineNumber: 362,
                            columnNumber: 67
                        }, this),
                        t(`filters.interest.${key}`),
                        category === value_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "✓"
                        }, void 0, false, {
                            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                            lineNumber: 362,
                            columnNumber: 172
                        }, this)
                    ]
                }, value_0, true, {
                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                    lineNumber: 360,
                    columnNumber: 16
                }, this);
            }
        }["CareerDirectory[interests.map()]"]);
        $[74] = category;
        $[75] = t;
        $[76] = t32;
    } else {
        t32 = $[76];
    }
    let t33;
    if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            size: 22,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 373,
            columnNumber: 11
        }, this);
        $[77] = t33;
    } else {
        t33 = $[77];
    }
    let t34;
    if ($[78] !== t) {
        t34 = t("filters.notSure");
        $[78] = t;
        $[79] = t34;
    } else {
        t34 = $[79];
    }
    let t35;
    if ($[80] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: t34
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 388,
            columnNumber: 11
        }, this);
        $[80] = t34;
        $[81] = t35;
    } else {
        t35 = $[81];
    }
    let t36;
    if ($[82] !== t) {
        t36 = t("filters.match");
        $[82] = t;
        $[83] = t36;
    } else {
        t36 = $[83];
    }
    let t37;
    if ($[84] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: t36
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 404,
            columnNumber: 11
        }, this);
        $[84] = t36;
        $[85] = t37;
    } else {
        t37 = $[85];
    }
    let t38;
    if ($[86] !== t) {
        t38 = t("filters.buildPath");
        $[86] = t;
        $[87] = t38;
    } else {
        t38 = $[87];
    }
    let t39;
    if ($[88] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionLink"], {
            href: "/build-your-path",
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 420,
            columnNumber: 11
        }, this);
        $[88] = t38;
        $[89] = t39;
    } else {
        t39 = $[89];
    }
    let t40;
    if ($[90] !== t35 || $[91] !== t37 || $[92] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sidebar-cta gold-glass",
            children: [
                t33,
                t35,
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 428,
            columnNumber: 11
        }, this);
        $[90] = t35;
        $[91] = t37;
        $[92] = t39;
        $[93] = t40;
    } else {
        t40 = $[93];
    }
    let t41;
    if ($[94] !== t25 || $[95] !== t27 || $[96] !== t29 || $[97] !== t31 || $[98] !== t32 || $[99] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "career-sidebar glass-panel",
            "aria-label": t25,
            children: [
                t27,
                t29,
                t31,
                t32,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 438,
            columnNumber: 11
        }, this);
        $[94] = t25;
        $[95] = t27;
        $[96] = t29;
        $[97] = t31;
        $[98] = t32;
        $[99] = t40;
        $[100] = t41;
    } else {
        t41 = $[100];
    }
    let t42;
    if ($[101] !== t) {
        t42 = t("categories.label");
        $[101] = t;
        $[102] = t42;
    } else {
        t42 = $[102];
    }
    let t43;
    if ($[103] !== category || $[104] !== categoryLabel) {
        t43 = mainCategories.map({
            "CareerDirectory[mainCategories.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: category === item ? "selected" : "",
                    "aria-pressed": category === item,
                    onClick: {
                        "CareerDirectory[mainCategories.map() > <button>.onClick]": ()=>selectCategory(item)
                    }["CareerDirectory[mainCategories.map() > <button>.onClick]"],
                    children: categoryLabel(item)
                }, item, false, {
                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                    lineNumber: 460,
                    columnNumber: 56
                }, this)
        }["CareerDirectory[mainCategories.map()]"]);
        $[103] = category;
        $[104] = categoryLabel;
        $[105] = t43;
    } else {
        t43 = $[105];
    }
    const t44 = showMoreCategories ? "selected" : "";
    let t45;
    if ($[106] !== showMoreCategories) {
        t45 = ({
            "CareerDirectory[<button>.onClick]": ()=>setShowMoreCategories(!showMoreCategories)
        })["CareerDirectory[<button>.onClick]"];
        $[106] = showMoreCategories;
        $[107] = t45;
    } else {
        t45 = $[107];
    }
    let t46;
    if ($[108] !== t) {
        t46 = t("categories.more");
        $[108] = t;
        $[109] = t46;
    } else {
        t46 = $[109];
    }
    let t47;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
            size: 13,
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 491,
            columnNumber: 11
        }, this);
        $[110] = t47;
    } else {
        t47 = $[110];
    }
    let t48;
    if ($[111] !== showMoreCategories || $[112] !== t44 || $[113] !== t45 || $[114] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t44,
            "aria-expanded": showMoreCategories,
            onClick: t45,
            children: [
                t46,
                " ",
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 498,
            columnNumber: 11
        }, this);
        $[111] = showMoreCategories;
        $[112] = t44;
        $[113] = t45;
        $[114] = t46;
        $[115] = t48;
    } else {
        t48 = $[115];
    }
    let t49;
    if ($[116] !== category || $[117] !== categoryLabel || $[118] !== showMoreCategories) {
        t49 = showMoreCategories && additionalCategories.map({
            "CareerDirectory[additionalCategories.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: category === item_0 ? "selected" : "",
                    "aria-pressed": category === item_0,
                    onClick: {
                        "CareerDirectory[additionalCategories.map() > <button>.onClick]": ()=>selectCategory(item_0)
                    }["CareerDirectory[additionalCategories.map() > <button>.onClick]"],
                    children: categoryLabel(item_0)
                }, item_0, false, {
                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                    lineNumber: 510,
                    columnNumber: 64
                }, this)
        }["CareerDirectory[additionalCategories.map()]"]);
        $[116] = category;
        $[117] = categoryLabel;
        $[118] = showMoreCategories;
        $[119] = t49;
    } else {
        t49 = $[119];
    }
    let t50;
    if ($[120] !== t42 || $[121] !== t43 || $[122] !== t48 || $[123] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "category-chips",
            role: "group",
            "aria-label": t42,
            children: [
                t43,
                t48,
                t49
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 523,
            columnNumber: 11
        }, this);
        $[120] = t42;
        $[121] = t43;
        $[122] = t48;
        $[123] = t49;
        $[124] = t50;
    } else {
        t50 = $[124];
    }
    let t51;
    if ($[125] !== filtered.length || $[126] !== t) {
        t51 = t("results", {
            count: filtered.length
        });
        $[125] = filtered.length;
        $[126] = t;
        $[127] = t51;
    } else {
        t51 = $[127];
    }
    let t52;
    if ($[128] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "status",
            children: t51
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        $[128] = t51;
        $[129] = t52;
    } else {
        t52 = $[129];
    }
    let t53;
    if ($[130] !== t) {
        t53 = t("sort.label");
        $[130] = t;
        $[131] = t53;
    } else {
        t53 = $[131];
    }
    let t54;
    if ($[132] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: t53
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 561,
            columnNumber: 11
        }, this);
        $[132] = t53;
        $[133] = t54;
    } else {
        t54 = $[133];
    }
    let t55;
    if ($[134] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = ({
            "CareerDirectory[<select>.onChange]": (event_0)=>setSort(event_0.target.value)
        })["CareerDirectory[<select>.onChange]"];
        $[134] = t55;
    } else {
        t55 = $[134];
    }
    let t56;
    if ($[135] !== t) {
        t56 = t("sort.featured");
        $[135] = t;
        $[136] = t56;
    } else {
        t56 = $[136];
    }
    let t57;
    if ($[137] !== t56) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "featured",
            children: t56
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 586,
            columnNumber: 11
        }, this);
        $[137] = t56;
        $[138] = t57;
    } else {
        t57 = $[138];
    }
    let t58;
    if ($[139] !== t) {
        t58 = t("sort.az");
        $[139] = t;
        $[140] = t58;
    } else {
        t58 = $[140];
    }
    let t59;
    if ($[141] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "az",
            children: t58
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 602,
            columnNumber: 11
        }, this);
        $[141] = t58;
        $[142] = t59;
    } else {
        t59 = $[142];
    }
    let t60;
    if ($[143] !== sort || $[144] !== t57 || $[145] !== t59) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "sort-select",
            value: sort,
            onChange: t55,
            children: [
                t57,
                t59
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 610,
            columnNumber: 11
        }, this);
        $[143] = sort;
        $[144] = t57;
        $[145] = t59;
        $[146] = t60;
    } else {
        t60 = $[146];
    }
    let t61;
    if ($[147] !== t54 || $[148] !== t60) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "career-sort",
            children: [
                t54,
                t60
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[147] = t54;
        $[148] = t60;
        $[149] = t61;
    } else {
        t61 = $[149];
    }
    let t62;
    if ($[150] !== t52 || $[151] !== t61) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "results-toolbar",
            children: [
                t52,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 629,
            columnNumber: 11
        }, this);
        $[150] = t52;
        $[151] = t61;
        $[152] = t62;
    } else {
        t62 = $[152];
    }
    let t63;
    if ($[153] !== catalog || $[154] !== filtered || $[155] !== router || $[156] !== t) {
        let t64;
        if ($[158] !== catalog || $[159] !== router || $[160] !== t) {
            t64 = ({
                "CareerDirectory[filtered.map()]": (career_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "career-card glass-panel",
                        onClick: {
                            "CareerDirectory[filtered.map() > <article>.onClick]": (e)=>{
                                const target = e.target;
                                if (target.closest("button") || target.closest("a")) {
                                    return;
                                }
                                router.push(`/careers/${career_1.slug}`);
                            }
                        }["CareerDirectory[filtered.map() > <article>.onClick]"],
                        style: {
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "career-card-media",
                                children: [
                                    career_1.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: career_1.image,
                                        fill: true,
                                        sizes: "(max-width:700px) 90vw, (max-width:1250px) 33vw, 270px",
                                        alt: t("card.photoAlt", {
                                            title: career_1.display.title
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 651,
                                        columnNumber: 65
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "career-image-placeholder",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            size: 38,
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                            lineNumber: 653,
                                            columnNumber: 64
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "career-category",
                                        children: career_1.display.category
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 111
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveButton"], {
                                        id: career_1.slug,
                                        title: career_1.display.title,
                                        compact: true,
                                        iconAsset: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].careerDirectoryCards.imgIconBookmark
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 179
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                lineNumber: 651,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/careers/${career_1.slug}`,
                                    children: career_1.display.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                    lineNumber: 653,
                                    columnNumber: 324
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                lineNumber: 653,
                                columnNumber: 320
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "career-salary",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$catalog$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSalary"])(catalog, career_1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                lineNumber: 653,
                                columnNumber: 401
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "career-card-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].careerDirectoryCards.imgIconBriefcase
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 499
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: career_1.display.employers
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 565
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                lineNumber: 653,
                                columnNumber: 467
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "career-card-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].careerDirectoryCards.imgIconSchool
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 642
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: career_1.display.entry
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 705
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                lineNumber: 653,
                                columnNumber: 610
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "career-explore gold-glass",
                                href: `/careers/${career_1.slug}`,
                                children: [
                                    t("card.explore"),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DesignAsset$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignAsset"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$design$2f$assets$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].careerDirectoryCards.imgIconArrow
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                        lineNumber: 653,
                                        columnNumber: 844
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                                lineNumber: 653,
                                columnNumber: 746
                            }, this)
                        ]
                    }, career_1.slug, true, {
                        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                        lineNumber: 641,
                        columnNumber: 56
                    }, this)
            })["CareerDirectory[filtered.map()]"];
            $[158] = catalog;
            $[159] = router;
            $[160] = t;
            $[161] = t64;
        } else {
            t64 = $[161];
        }
        t63 = filtered.map(t64);
        $[153] = catalog;
        $[154] = filtered;
        $[155] = router;
        $[156] = t;
        $[157] = t63;
    } else {
        t63 = $[157];
    }
    let t64;
    if ($[162] !== t63) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "career-grid",
            children: t63
        }, void 0, false, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 673,
            columnNumber: 11
        }, this);
        $[162] = t63;
        $[163] = t64;
    } else {
        t64 = $[163];
    }
    let t65;
    if ($[164] !== filtered.length || $[165] !== t) {
        t65 = !filtered.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-panel empty-state",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: t("empty.title")
                }, void 0, false, {
                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                    lineNumber: 681,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: t("empty.body")
                }, void 0, false, {
                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                    lineNumber: 681,
                    columnNumber: 113
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "glass-button",
                    type: "button",
                    onClick: clearFilters,
                    children: t("empty.clear")
                }, void 0, false, {
                    fileName: "[project]/src/components/careers/CareerDirectory.tsx",
                    lineNumber: 681,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 681,
            columnNumber: 31
        }, this);
        $[164] = filtered.length;
        $[165] = t;
        $[166] = t65;
    } else {
        t65 = $[166];
    }
    let t66;
    if ($[167] !== t50 || $[168] !== t62 || $[169] !== t64 || $[170] !== t65) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t50,
                t62,
                t64,
                t65
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[167] = t50;
        $[168] = t62;
        $[169] = t64;
        $[170] = t65;
        $[171] = t66;
    } else {
        t66 = $[171];
    }
    let t67;
    if ($[172] !== t41 || $[173] !== t66) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "career-browser",
            children: [
                t41,
                t66
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 701,
            columnNumber: 11
        }, this);
        $[172] = t41;
        $[173] = t66;
        $[174] = t67;
    } else {
        t67 = $[174];
    }
    let t68;
    if ($[175] !== t24 || $[176] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "section-block",
            children: [
                t24,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/careers/CareerDirectory.tsx",
            lineNumber: 710,
            columnNumber: 11
        }, this);
        $[175] = t24;
        $[176] = t67;
        $[177] = t68;
    } else {
        t68 = $[177];
    }
    let t69;
    if ($[178] !== t20 || $[179] !== t68) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t20,
                t68
            ]
        }, void 0, true);
        $[178] = t20;
        $[179] = t68;
        $[180] = t69;
    } else {
        t69 = $[180];
    }
    return t69;
}
_s(CareerDirectory, "b+9O1maqLd3hFdnd5x5rsjp86Vo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = CareerDirectory;
function _temp3() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
        lineNumber: 729,
        columnNumber: 10
    }, this);
}
function _temp2() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
        lineNumber: 732,
        columnNumber: 10
    }, this);
}
function _temp(chunks) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: chunks
    }, void 0, false, {
        fileName: "[project]/src/components/careers/CareerDirectory.tsx",
        lineNumber: 735,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CareerDirectory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_13pn-s5._.js.map
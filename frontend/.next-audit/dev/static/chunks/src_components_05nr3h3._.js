(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/path/StudentPathDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StudentPathDashboard",
    ()=>StudentPathDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.mjs [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.mjs [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.mjs [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$careerDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/careerDetails.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/milestonePhases.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pathEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/pathEngine.ts [app-client] (ecmascript)");
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
function StudentPathDashboard({ intro }) {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const isSi = locale === "si";
    const [paths, setPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activePathId, setActivePathId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [achievements, setAchievements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedMilestones, setExpandedMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // ─── SEARCH, FILTER & SORT STATE (Rubric: Read / Search, Filter, Sort) ───
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [stageFilter, setStageFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("POSITION");
    // ─── CRUD MODALS STATE ───────────────────────────────────────────────────
    const [isAddMilestoneOpen, setIsAddMilestoneOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingMilestone, setEditingMilestone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditPathOpen, setIsEditPathOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteConfirmTarget, setDeleteConfirmTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Form states for Add Milestone
    const [newStageKey, setNewStageKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("DEGREE_CUSTOM");
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newDesc, setNewDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newWhy, setNewWhy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newDuration, setNewDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newTargetDate, setNewTargetDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newTaskInput, setNewTaskInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newTaskList, setNewTaskList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form states for Edit Path
    const [editPathTitle, setEditPathTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editPathDistrict, setEditPathDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [editPathNotes, setEditPathNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Quick inline add task inputs
    const [quickTaskInputs, setQuickTaskInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StudentPathDashboard.useEffect": ()=>{
            async function loadData() {
                try {
                    const [loadedPaths, loadedBadges] = await Promise.all([
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserPaths"])(),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUserAchievements"])()
                    ]);
                    setPaths(loadedPaths);
                    setAchievements(loadedBadges);
                    if (loadedPaths.length > 0) {
                        const active = loadedPaths.find({
                            "StudentPathDashboard.useEffect.loadData": (p)=>p.isActive
                        }["StudentPathDashboard.useEffect.loadData"]) || loadedPaths[0];
                        setActivePathId(active.id);
                        // Expand the first incomplete milestone by default
                        const firstIncomplete = active.milestones.find({
                            "StudentPathDashboard.useEffect.loadData.firstIncomplete": (m)=>m.status !== "COMPLETED"
                        }["StudentPathDashboard.useEffect.loadData.firstIncomplete"]);
                        if (firstIncomplete) {
                            setExpandedMilestones({
                                [firstIncomplete.id]: true
                            });
                        } else if (active.milestones[0]) {
                            setExpandedMilestones({
                                [active.milestones[0].id]: true
                            });
                        }
                    }
                } finally{
                    setLoading(false);
                }
            }
            loadData();
        }
    }["StudentPathDashboard.useEffect"], []);
    const activePath = paths.find((p)=>p.id === activePathId) || paths[0];
    // ─── FILTERED & SORTED MILESTONES (Rubric: Search, Filter, Sort) ────────
    const filteredMilestones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StudentPathDashboard.useMemo[filteredMilestones]": ()=>{
            if (!activePath) return [];
            let list = [
                ...activePath.milestones
            ];
            // 1. Text Search Filter (Title, Description, WhyItMatters, and Tasks)
            if (searchQuery.trim()) {
                const q = searchQuery.toLowerCase().trim();
                list = list.filter({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (m)=>{
                        const matchTitle = m.title.toLowerCase().includes(q);
                        const matchDesc = (m.description || "").toLowerCase().includes(q);
                        const matchWhy = (m.whyItMatters || "").toLowerCase().includes(q);
                        const matchTask = m.tasks.some({
                            "StudentPathDashboard.useMemo[filteredMilestones].matchTask": (t)=>t.title.toLowerCase().includes(q)
                        }["StudentPathDashboard.useMemo[filteredMilestones].matchTask"]);
                        return matchTitle || matchDesc || matchWhy || matchTask;
                    }
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            }
            // 2. Status Filter
            if (statusFilter !== "ALL") {
                list = list.filter({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (m_0)=>m_0.status === statusFilter
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            }
            // 3. Stage Filter
            if (stageFilter !== "ALL") {
                list = list.filter({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (m_1)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMilestonePhase"])(m_1.stageKey) === stageFilter
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            }
            // 4. Sorting
            if (sortBy === "DATE") {
                list.sort({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (a, b)=>{
                        if (!a.targetDate) return 1;
                        if (!b.targetDate) return -1;
                        return new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime();
                    }
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            } else if (sortBy === "DURATION") {
                list.sort({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (a_0, b_0)=>(a_0.durationMonths || 999) - (b_0.durationMonths || 999)
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            } else if (sortBy === "STATUS") {
                const statusWeight = {
                    IN_PROGRESS: 0,
                    PENDING: 1,
                    COMPLETED: 2
                };
                list.sort({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (a_1, b_1)=>(statusWeight[a_1.status] ?? 3) - (statusWeight[b_1.status] ?? 3)
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            } else {
                list.sort({
                    "StudentPathDashboard.useMemo[filteredMilestones]": (a_2, b_2)=>a_2.position - b_2.position
                }["StudentPathDashboard.useMemo[filteredMilestones]"]);
            }
            return list;
        }
    }["StudentPathDashboard.useMemo[filteredMilestones]"], [
        activePath,
        searchQuery,
        statusFilter,
        stageFilter,
        sortBy
    ]);
    // ─── TASK TOGGLE ─────────────────────────────────────────────────────────
    const handleToggleTask = async (milestoneId, taskId, currentCompleted)=>{
        if (!activePath) return;
        // Optimistic UI update
        setPaths((prev)=>prev.map((p_0)=>{
                if (p_0.id !== activePath.id) return p_0;
                const newMilestones = p_0.milestones.map((m_2)=>{
                    if (m_2.id !== milestoneId) return m_2;
                    const newTasks = m_2.tasks.map((t_0)=>t_0.id === taskId ? {
                            ...t_0,
                            isCompleted: !currentCompleted
                        } : t_0);
                    const completedCount = newTasks.filter((t_1)=>t_1.isCompleted).length;
                    const status = completedCount === newTasks.length && newTasks.length > 0 ? "COMPLETED" : completedCount > 0 ? "IN_PROGRESS" : "PENDING";
                    return {
                        ...m_2,
                        tasks: newTasks,
                        status
                    };
                });
                const allTasks = newMilestones.reduce((acc, m_3)=>acc + m_3.tasks.length, 0);
                const doneTasks = newMilestones.reduce((acc_0, m_4)=>acc_0 + m_4.tasks.filter((t_2)=>t_2.isCompleted).length, 0);
                const doneMilestones = newMilestones.filter((m_5)=>m_5.status === "COMPLETED").length;
                return {
                    ...p_0,
                    milestones: newMilestones,
                    totalTasks: allTasks,
                    completedTasks: doneTasks,
                    completedMilestones: doneMilestones,
                    completionPercent: allTasks > 0 ? Math.round(doneTasks / allTasks * 100) : 0
                };
            }));
        // Call API / storage
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleTaskCompletion"])(activePath.id, taskId, !currentCompleted);
    };
    // ─── INLINE ADD TASK ─────────────────────────────────────────────────────
    const handleQuickAddTask = async (milestoneId_0)=>{
        const title = quickTaskInputs[milestoneId_0]?.trim();
        if (!title || !activePath) return;
        const newTask = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTaskToMilestone"])(activePath.id, milestoneId_0, title);
        setPaths((prev_0)=>prev_0.map((p_1)=>{
                if (p_1.id !== activePath.id) return p_1;
                const newMilestones_0 = p_1.milestones.map((m_6)=>{
                    if (m_6.id !== milestoneId_0) return m_6;
                    return {
                        ...m_6,
                        tasks: [
                            ...m_6.tasks,
                            newTask
                        ]
                    };
                });
                const allTasks_0 = newMilestones_0.reduce((acc_1, m_7)=>acc_1 + m_7.tasks.length, 0);
                const doneTasks_0 = newMilestones_0.reduce((acc_2, m_8)=>acc_2 + m_8.tasks.filter((t_3)=>t_3.isCompleted).length, 0);
                return {
                    ...p_1,
                    milestones: newMilestones_0,
                    totalTasks: allTasks_0,
                    completionPercent: allTasks_0 > 0 ? Math.round(doneTasks_0 / allTasks_0 * 100) : 0
                };
            }));
        setQuickTaskInputs((prev_1)=>({
                ...prev_1,
                [milestoneId_0]: ""
            }));
    };
    // ─── CREATE: ADD CUSTOM MILESTONE (Rubric: Create with Form Validation) ──
    const handleAddMilestoneSubmit = async (e)=>{
        e.preventDefault();
        if (!activePath) return;
        // Client-side Validation (Rubric: Validation & Error Handling)
        if (!newTitle.trim() || newTitle.trim().length < 3) {
            setFormError(isSi ? "කරුණාකර අවම වශයෙන් අකුරු 3ක මාතෘකාවක් ඇතුළත් කරන්න." : "Milestone title must be at least 3 characters.");
            return;
        }
        setIsSubmitting(true);
        try {
            const added = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addCustomMilestone"])(activePath.id, {
                stageKey: newStageKey,
                title: newTitle.trim(),
                description: newDesc.trim() || undefined,
                whyItMatters: newWhy.trim() || undefined,
                durationMonths: newDuration ? parseInt(newDuration, 10) : undefined,
                targetDate: newTargetDate || undefined,
                tasks: newTaskList.length > 0 ? newTaskList : undefined
            });
            setPaths((prev_2)=>prev_2.map((p_2)=>{
                    if (p_2.id !== activePath.id) return p_2;
                    const updatedM = [
                        ...p_2.milestones,
                        added
                    ];
                    const allTasks_1 = updatedM.reduce((acc_3, m_9)=>acc_3 + m_9.tasks.length, 0);
                    const doneTasks_1 = updatedM.reduce((acc_4, m_10)=>acc_4 + m_10.tasks.filter((t_4)=>t_4.isCompleted).length, 0);
                    return {
                        ...p_2,
                        milestones: updatedM,
                        totalMilestones: updatedM.length,
                        totalTasks: allTasks_1,
                        completedTasks: doneTasks_1,
                        completionPercent: allTasks_1 > 0 ? Math.round(doneTasks_1 / allTasks_1 * 100) : 0
                    };
                }));
            // Expand newly created milestone
            setExpandedMilestones((prev_3)=>({
                    ...prev_3,
                    [added.id]: true
                }));
            setIsAddMilestoneOpen(false);
        } catch (err) {
            setFormError(isSi ? "Milestone එක එකතු කිරීමේදී දෝෂයක් සිදු විය." : "Failed to add milestone. Please check inputs.");
        } finally{
            setIsSubmitting(false);
        }
    };
    // ─── UPDATE: EDIT MILESTONE (Rubric: Update Existing Records) ────────────
    const handleUpdateMilestoneSubmit = async (e_0)=>{
        e_0.preventDefault();
        if (!activePath || !editingMilestone) return;
        if (!editingMilestone.title.trim() || editingMilestone.title.trim().length < 3) {
            setFormError(isSi ? "මාතෘකාව අවම වශයෙන් අකුරු 3ක් විය යුතුය." : "Milestone title must be at least 3 characters.");
            return;
        }
        setIsSubmitting(true);
        try {
            const updated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMilestone"])(activePath.id, editingMilestone.id, {
                title: editingMilestone.title.trim(),
                description: editingMilestone.description || "",
                whyItMatters: editingMilestone.whyItMatters || "",
                status: editingMilestone.status,
                targetDate: editingMilestone.targetDate || null,
                durationMonths: editingMilestone.durationMonths || null
            });
            if (updated) {
                setPaths((prev_4)=>prev_4.map((p_3)=>{
                        if (p_3.id !== activePath.id) return p_3;
                        const updatedM_0 = p_3.milestones.map((m_11)=>m_11.id === updated.id ? {
                                ...m_11,
                                ...updated
                            } : m_11);
                        const allTasks_2 = updatedM_0.reduce((acc_5, m_12)=>acc_5 + m_12.tasks.length, 0);
                        const doneTasks_2 = updatedM_0.reduce((acc_6, m_13)=>acc_6 + m_13.tasks.filter((t_5)=>t_5.isCompleted).length, 0);
                        const doneMilestones_0 = updatedM_0.filter((m_14)=>m_14.status === "COMPLETED").length;
                        return {
                            ...p_3,
                            milestones: updatedM_0,
                            completedMilestones: doneMilestones_0,
                            totalTasks: allTasks_2,
                            completedTasks: doneTasks_2,
                            completionPercent: allTasks_2 > 0 ? Math.round(doneTasks_2 / allTasks_2 * 100) : 0
                        };
                    }));
            }
            setEditingMilestone(null);
        } catch  {
            setFormError(isSi ? "යාවත්කාලීන කිරීම අසාර්ථක විය." : "Update failed. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    // ─── UPDATE: EDIT PATH DETAILS ────────────────────────────────────────────
    const handleUpdatePathSubmit = async (e_1)=>{
        e_1.preventDefault();
        if (!activePath) return;
        if (!editPathTitle.trim() || editPathTitle.trim().length < 3) {
            setFormError(isSi ? "Roadmap මාතෘකාව අවම වශයෙන් අකුරු 3ක් විය යුතුය." : "Title must be at least 3 characters.");
            return;
        }
        setIsSubmitting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCareerPath"])(activePath.id, {
                title: editPathTitle.trim(),
                district: editPathDistrict || undefined,
                notes: editPathNotes.trim() || undefined
            });
            setPaths((prev_5)=>prev_5.map((p_4)=>p_4.id === activePath.id ? {
                        ...p_4,
                        title: editPathTitle.trim(),
                        district: editPathDistrict,
                        notes: editPathNotes.trim()
                    } : p_4));
            setIsEditPathOpen(false);
        } catch  {
            setFormError(isSi ? "යාවත්කාලීන කිරීම අසාර්ථක විය." : "Failed to update roadmap details.");
        } finally{
            setIsSubmitting(false);
        }
    };
    // ─── DELETE: SAFE CONFIRMATION (Rubric: Safe Delete with Confirmation) ──
    const handleConfirmDelete = async ()=>{
        if (!deleteConfirmTarget || !activePath) return;
        const { type, id, parentId } = deleteConfirmTarget;
        if (type === "PATH") {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCareerPath"])(id);
            const remaining = paths.filter((p_5)=>p_5.id !== id);
            setPaths(remaining);
            if (remaining.length > 0) {
                setActivePathId(remaining[0].id);
            }
        } else if (type === "MILESTONE") {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMilestone"])(activePath.id, id);
            setPaths((prev_6)=>prev_6.map((p_6)=>{
                    if (p_6.id !== activePath.id) return p_6;
                    const remainingM = p_6.milestones.filter((m_15)=>m_15.id !== id);
                    const allTasks_3 = remainingM.reduce((acc_7, m_16)=>acc_7 + m_16.tasks.length, 0);
                    const doneTasks_3 = remainingM.reduce((acc_8, m_17)=>acc_8 + m_17.tasks.filter((t_6)=>t_6.isCompleted).length, 0);
                    const doneMilestones_1 = remainingM.filter((m_18)=>m_18.status === "COMPLETED").length;
                    return {
                        ...p_6,
                        milestones: remainingM,
                        totalMilestones: remainingM.length,
                        completedMilestones: doneMilestones_1,
                        totalTasks: allTasks_3,
                        completedTasks: doneTasks_3,
                        completionPercent: allTasks_3 > 0 ? Math.round(doneTasks_3 / allTasks_3 * 100) : 0
                    };
                }));
        } else if (type === "TASK" && parentId) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTaskFromMilestone"])(activePath.id, parentId, id);
            setPaths((prev_7)=>prev_7.map((p_7)=>{
                    if (p_7.id !== activePath.id) return p_7;
                    const newMilestones_1 = p_7.milestones.map((m_19)=>{
                        if (m_19.id !== parentId) return m_19;
                        return {
                            ...m_19,
                            tasks: m_19.tasks.filter((t_7)=>t_7.id !== id)
                        };
                    });
                    const allTasks_4 = newMilestones_1.reduce((acc_9, m_20)=>acc_9 + m_20.tasks.length, 0);
                    const doneTasks_4 = newMilestones_1.reduce((acc_10, m_21)=>acc_10 + m_21.tasks.filter((t_8)=>t_8.isCompleted).length, 0);
                    return {
                        ...p_7,
                        milestones: newMilestones_1,
                        totalTasks: allTasks_4,
                        completedTasks: doneTasks_4,
                        completionPercent: allTasks_4 > 0 ? Math.round(doneTasks_4 / allTasks_4 * 100) : 0
                    };
                }));
        }
        setDeleteConfirmTarget(null);
    };
    const toggleMilestoneExpand = (mId)=>{
        setExpandedMilestones((prev_8)=>({
                ...prev_8,
                [mId]: !prev_8[mId]
            }));
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                intro,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dashboard-loading-state glass-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            className: "spin-slow",
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 396,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: isSi ? "ඔයාගෙ Career Journey Dashboard එක load වෙනවා..." : "Loading your career journey dashboard..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 397,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                    lineNumber: 395,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true);
    }
    if (paths.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                intro,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dashboard-empty-state glass-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "empty-icon-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                size: 36
                            }, void 0, false, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 405,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: isSi ? "ඔයා තවම Career Path එකක් හදලා නෑ" : "You haven't built a career path yet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 408,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: isSi ? "ඔයා කැමති career එක තෝරන්න, O/L, A/L වල සිට university සහ charter දක්වා milestones ලකුණු කර ඔයාගෙ progress එක track කරන්න." : "Discover your ideal career, set milestones from O/L and A/L to university graduation, and track your progress with personalized guidance."
                        }, void 0, false, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 409,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/build-your-path",
                            className: "builder-launch-btn gold-glass",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 413,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isSi ? "පළමු Career Path එක හදන්න" : "Build My First Career Path"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 414,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 415,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 412,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                    lineNumber: 404,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true);
    }
    const careerInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$careerDetails$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["careerDetails"][activePath.targetCareerSlug];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-content-wrapper",
        children: [
            intro,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-header-bar glass-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "path-switcher-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "switcher-label",
                                children: isSi ? "ක්‍රියාකාරී Roadmaps:" : "Active Career Path:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 432,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "paths-tabs-row",
                                children: [
                                    paths.map((p_8)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: `path-tab-pill ${p_8.id === activePath.id ? "active-tab" : ""}`,
                                            onClick: ()=>setActivePathId(p_8.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: p_8.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tab-percent",
                                                    children: [
                                                        p_8.completionPercent,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p_8.id, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 436,
                                            columnNumber: 33
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/build-your-path",
                                        className: "add-path-tab-btn",
                                        title: isSi ? "තවත් career path එකක් හදන්න" : "Create another career path",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isSi ? "අලුත් එකක්" : "New Path"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "path-delete-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "delete-path-btn",
                            onClick: ()=>setDeleteConfirmTarget({
                                    type: "PATH",
                                    id: activePath.id,
                                    title: activePath.title
                                }),
                            title: isSi ? "මෙම roadmap එක සම්පූර්ණයෙන්ම අයින් කරන්න" : "Delete this entire roadmap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: isSi ? "Roadmap එක අයින් කරන්න" : "Delete Path"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 448,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 430,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-overview-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "roadmap-progress-summary glass-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-summary-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "summary-stage-tag",
                                                children: (()=>{
                                                    const stageInfo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pathEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDUCATION_STAGES"].find((st)=>st.id === activePath.educationStage);
                                                    return stageInfo ? isSi ? stageInfo.sinhalaLabel : stageInfo.label : activePath.educationStage;
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 467,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "summary-title-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "summary-career-title",
                                                        children: activePath.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "milestone-action-btn",
                                                        title: isSi ? "Roadmap විස්තර වෙනස් කරන්න" : "Edit Roadmap Details",
                                                        onClick: ()=>{
                                                            setEditPathTitle(activePath.title);
                                                            setEditPathDistrict(activePath.district || "");
                                                            setEditPathNotes(activePath.notes || "");
                                                            setFormError("");
                                                            setIsEditPathOpen(true);
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "summary-career-sub",
                                                children: [
                                                    isSi ? "ඉලක්කගත වෘත්තිය:" : "Target Profession:",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: careerInfo ? isSi ? `${careerInfo.title} (${careerInfo.sinhalaTitle})` : careerInfo.title : activePath.targetCareerSlug
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 17
                                                    }, this),
                                                    activePath.district && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            " • ",
                                                            activePath.district,
                                                            " ",
                                                            isSi ? "දිස්ත්‍රික්කය" : "District"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 485,
                                                columnNumber: 15
                                            }, this),
                                            (()=>{
                                                const prefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parsePathPreferences"])(activePath);
                                                const chips = [
                                                    prefs.universityName && (prefs.degreeName ? `${prefs.universityName} · ${prefs.degreeName}` : prefs.universityName),
                                                    prefs.specialization,
                                                    prefs.route === "PRIVATE_GLOBAL" ? isSi ? "පෞද්ගලික මාර්ගය" : "Private route" : prefs.route === "PROFESSIONAL_BODY" ? isSi ? "වෘත්තීය මාර්ගය" : "Professional route" : prefs.route === "STATE_UGC" ? isSi ? "රාජ්‍ය (UGC) මාර්ගය" : "State (UGC) route" : undefined
                                                ].filter(Boolean);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "path-pref-row",
                                                    children: [
                                                        chips.map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "path-pref-chip",
                                                                children: chip
                                                            }, chip, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 40
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/build-your-path?career=${activePath.targetCareerSlug}${prefs.engineeringFieldId ? `&field=${prefs.engineeringFieldId}` : ""}#career-architect`,
                                                            className: "path-pref-edit",
                                                            children: isSi ? "Build පිටුවේ වෙනස් කරන්න" : "Change in Build Path"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 22
                                                }, this);
                                            })(),
                                            activePath.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: "12px",
                                                    color: "#475569",
                                                    marginTop: "4px",
                                                    fontStyle: "italic"
                                                },
                                                children: [
                                                    "📝 ",
                                                    activePath.notes
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 502,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "progress-gauge-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "gauge-number",
                                                children: [
                                                    activePath.completionPercent,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "gauge-label",
                                                children: isSi ? "සම්පූර්ණයි" : "Roadmap Complete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "summary-progress-bar-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "summary-progress-bar-fill",
                                    style: {
                                        width: `${activePath.completionPercent}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "summary-stats-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: activePath.completedMilestones
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 526,
                                                columnNumber: 15
                                            }, this),
                                            " of ",
                                            activePath.totalMilestones,
                                            " ",
                                            isSi ? "Milestones සම්පූර්ණයි" : "Milestones Completed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: activePath.completedTasks
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 530,
                                                columnNumber: 15
                                            }, this),
                                            " of ",
                                            activePath.totalTasks,
                                            " ",
                                            isSi ? "Tasks සම්පූර්ණයි" : "Tasks Checked"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "dashboard-overview-aside",
                        children: [
                            careerInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-widget-card glass-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "side-widget-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 541,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: isSi ? "ඉලක්කගත Career Guide එක" : "Target Career Guide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 542,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "widget-career-title",
                                        children: careerInfo.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this),
                                    careerInfo.sinhalaTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "widget-career-sinhala",
                                        children: careerInfo.sinhalaTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 545,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "widget-career-desc",
                                        children: careerInfo.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "widget-salary-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "salary-label",
                                                children: isSi ? "සාමාන්‍ය වැටුප (Mid-Level):" : "Estimated Mid-Level:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 549,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: careerInfo.salary.midLevel.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/careers/${careerInfo.slug}`,
                                        className: "view-career-btn gold-glass",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isSi ? "සම්පූර්ණ Guide එක කියවන්න" : "Read Full 10-Pillar Guide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 554,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 555,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 553,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 539,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "side-widget-card glass-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "side-widget-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                size: 18,
                                                className: "trophy-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 562,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: isSi ? "ලබාගත් Achievements & Badges" : "Achievements & Badges"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 563,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 561,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "achievements-badges-grid",
                                        children: (()=>{
                                            const earned = new Map(achievements.map((a_3)=>[
                                                    a_3.badgeKey,
                                                    a_3
                                                ]));
                                            const pct = activePath.completionPercent;
                                            const defs = [
                                                {
                                                    key: "FIRST_PATH_CREATED",
                                                    icon: "🌟",
                                                    threshold: 0,
                                                    name: isSi ? "මඟපෙන්වුම්කරු" : "Visionary Pathfinder",
                                                    hint: isSi ? "ඔයාගෙ roadmap එක සෑදුවා" : "Created your personalized roadmap"
                                                },
                                                {
                                                    key: "MILESTONE_25",
                                                    icon: "🎯",
                                                    threshold: 25,
                                                    name: isSi ? "25% සම්පූර්ණයි" : "25% Milestone",
                                                    hint: isSi ? "Tasks වලින් 25%ක් සම්පූර්ණ කරන්න" : "Complete 25% of your tasks"
                                                },
                                                {
                                                    key: "MILESTONE_50",
                                                    icon: "🚀",
                                                    threshold: 50,
                                                    name: isSi ? "අඩක් ජයගත් වීරයා" : "Halfway Hero",
                                                    hint: isSi ? "Tasks වලින් 50%ක් සම්පූර්ණ කරන්න" : "Complete 50% of your tasks"
                                                },
                                                {
                                                    key: "MILESTONE_100",
                                                    icon: "👑",
                                                    threshold: 100,
                                                    name: isSi ? "වෘත්තීය ජයග්‍රාහකයා" : "Career Trailblazer",
                                                    hint: isSi ? "100% සම්පූර්ණ කර ජයගන්න" : "Complete 100% of your tasks"
                                                }
                                            ];
                                            return defs.map((badge)=>{
                                                const record = earned.get(badge.key);
                                                const unlocked = badge.threshold === 0 || pct >= badge.threshold || !!record;
                                                const progress = Math.min(100, Math.round(pct / badge.threshold * 100));
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `badge-item ${unlocked ? "unlocked" : "locked"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "badge-icon-wrap",
                                                            children: unlocked ? badge.icon : "🔒"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "badge-details",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: badge.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: unlocked ? record ? `${isSi ? "ජයගත්තා" : "Unlocked"} · ${new Date(record.unlockedAt).toLocaleDateString(isSi ? "si-LK" : "en-GB", {
                                                                        day: "numeric",
                                                                        month: "short"
                                                                    })}` : isSi ? "ජයගත්තා!" : "Unlocked!" : badge.hint
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 603,
                                                                    columnNumber: 23
                                                                }, this),
                                                                !unlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "badge-progress",
                                                                    "aria-label": `${progress}%`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            width: `${progress}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 609,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 601,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, badge.key, true, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 24
                                                }, this);
                                            });
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 566,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 560,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 537,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-timeline-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashboard-filter-bar glass-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dashboard-search-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16,
                                        style: {
                                            color: "#64748b",
                                            flexShrink: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 631,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: isSi ? "Milestone හෝ task නමක් search කරන්න..." : "Search milestones, tasks, or resources...",
                                        value: searchQuery,
                                        onChange: (e_2)=>setSearchQuery(e_2.target.value),
                                        className: "dashboard-search-input"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 635,
                                        columnNumber: 15
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSearchQuery(""),
                                        style: {
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            color: "#94a3b8"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 636,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 630,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dashboard-filters-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: statusFilter,
                                        onChange: (e_3)=>setStatusFilter(e_3.target.value),
                                        className: "dashboard-select-input",
                                        title: isSi ? "සම්පූර්ණ වීමේ තත්ත්වය අනුව පෙරන්න" : "Filter by completion status",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ALL",
                                                children: isSi ? "සියලු Statuses" : "All Statuses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 650,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "IN_PROGRESS",
                                                children: isSi ? "සිදුවෙමින් පවතින (In Progress)" : "In Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 651,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PENDING",
                                                children: isSi ? "ඉදිරියට ඇති (Pending)" : "Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 652,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "COMPLETED",
                                                children: isSi ? "සම්පූර්ණ කළ (Completed)" : "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 653,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: stageFilter,
                                        onChange: (e_4)=>setStageFilter(e_4.target.value),
                                        className: "dashboard-select-input",
                                        title: isSi ? "අදියර අනුව පෙරන්න" : "Filter by stage",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ALL",
                                                children: isSi ? "සියලු අදියර (All Stages)" : "All Stages"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 658,
                                                columnNumber: 17
                                            }, this),
                                            Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"]).map((phase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: phase,
                                                    children: isSi ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"][phase].si : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"][phase].en
                                                }, phase, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 83
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 657,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sortBy,
                                        onChange: (e_5)=>setSortBy(e_5.target.value),
                                        className: "dashboard-select-input",
                                        title: isSi ? "පිළිවෙල" : "Sort order",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "POSITION",
                                                children: isSi ? "පිළිවෙල (Stage Order)" : "Sort: Stage Order"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 666,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "DATE",
                                                children: isSi ? "දිනය අනුව (Target Date)" : "Sort: Target Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 667,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "DURATION",
                                                children: isSi ? "කාල සීමාව (Duration)" : "Sort: Duration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "STATUS",
                                                children: isSi ? "Status අනුව" : "Sort: Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 669,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 665,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "dashboard-add-milestone-btn",
                                        onClick: ()=>{
                                            setNewTitle("");
                                            setNewDesc("");
                                            setNewWhy("");
                                            setNewDuration("");
                                            setNewTargetDate("");
                                            setNewTaskList([]);
                                            setFormError("");
                                            setIsAddMilestoneOpen(true);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isSi ? "නව Milestone එකක්" : "+ Add Milestone"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 684,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 673,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 647,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 628,
                        columnNumber: 11
                    }, this),
                    (searchQuery || statusFilter !== "ALL" || stageFilter !== "ALL") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            fontSize: "12px",
                            color: "#64748b",
                            padding: "0 4px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    isSi ? "ප්‍රතිඵල:" : "Showing:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: filteredMilestones.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 700,
                                        columnNumber: 17
                                    }, this),
                                    " of ",
                                    activePath.milestones.length,
                                    " milestones"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 698,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setSearchQuery("");
                                    setStatusFilter("ALL");
                                    setStageFilter("ALL");
                                    setSortBy("POSITION");
                                },
                                style: {
                                    background: "none",
                                    border: "none",
                                    color: "#2e7559",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    textDecoration: "underline"
                                },
                                children: isSi ? "Filters Reset කරන්න" : "Clear Filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 702,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 690,
                        columnNumber: 80
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "milestones-interactive-list",
                        children: filteredMilestones.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-panel",
                            style: {
                                padding: "32px",
                                textAlign: "center",
                                borderRadius: "18px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "#64748b",
                                        margin: 0
                                    },
                                    children: isSi ? "ඔබ සෙවූ නිර්ණායක වලට අදාළ Milestones හමු නොවිණි." : "No milestones match your search and filter criteria."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 726,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setSearchQuery("");
                                        setStatusFilter("ALL");
                                        setStageFilter("ALL");
                                    },
                                    className: "crud-cancel-btn",
                                    style: {
                                        marginTop: "12px",
                                        display: "inline-block"
                                    },
                                    children: isSi ? "සියලු Milestones පෙන්වන්න" : "Show All Milestones"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 732,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 721,
                            columnNumber: 48
                        }, this) : filteredMilestones.map((m_22, mIdx)=>{
                            const isExpanded = expandedMilestones[m_22.id] ?? true;
                            const isDone = m_22.status === "COMPLETED";
                            const inProgress = m_22.status === "IN_PROGRESS";
                            const phase_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMilestonePhase"])(m_22.stageKey);
                            const showPhase = sortBy === "POSITION" && (mIdx === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMilestonePhase"])(filteredMilestones[mIdx - 1].stageKey) !== phase_0);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    showPhase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "milestone-phase-heading",
                                        children: isSi ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"][phase_0].si : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"][phase_0].en
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 749,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: `milestone-interactive-card glass-panel ${isDone ? "is-done" : inProgress ? "is-in-progress" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "milestone-interactive-header",
                                                onClick: ()=>toggleMilestoneExpand(m_22.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "milestone-status-indicator",
                                                        children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 24,
                                                            className: "status-icon done"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 35
                                                        }, this) : inProgress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "status-pulse-circle",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: mIdx + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 754,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 106
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                            size: 22,
                                                            className: "status-icon pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 36
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 752,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "milestone-title-content",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "milestone-title-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        children: m_22.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 760,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `status-pill ${m_22.status.toLowerCase()}`,
                                                                        children: isSi ? m_22.status === "COMPLETED" ? "සම්පූර්ණයි" : m_22.status === "IN_PROGRESS" ? "සිදුවෙමින් පවතී" : "ඉදිරියට" : m_22.status.replace(/_/g, " ")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 761,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 759,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "milestone-subtitle",
                                                                children: [
                                                                    isSi ? `පියවර ${mIdx + 1} • ${m_22.durationMonths ? `මාස ~${m_22.durationMonths}` : "අඛණ්ඩව"}` : `Stage ${mIdx + 1} • ${m_22.durationMonths ? `~${m_22.durationMonths} Months` : "Ongoing"}`,
                                                                    m_22.targetDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            " • 🎯 ",
                                                                            m_22.targetDate
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 767,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 765,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 758,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "milestone-header-actions",
                                                        onClick: (e_6)=>e_6.stopPropagation(),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "milestone-action-btn",
                                                                title: isSi ? "Milestone එක සංස්කරණය කරන්න (Edit)" : "Edit Milestone",
                                                                onClick: ()=>{
                                                                    setEditingMilestone({
                                                                        ...m_22
                                                                    });
                                                                    setFormError("");
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "milestone-action-btn delete-btn",
                                                                title: isSi ? "Milestone එක ඉවත් කරන්න (Delete)" : "Delete Milestone",
                                                                onClick: ()=>{
                                                                    setDeleteConfirmTarget({
                                                                        type: "MILESTONE",
                                                                        id: m_22.id,
                                                                        title: m_22.title
                                                                    });
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 781,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "expand-toggle-btn",
                                                                onClick: ()=>toggleMilestoneExpand(m_22.id),
                                                                "aria-label": isExpanded ? isSi ? "හකුලන්න" : "Collapse" : isSi ? "විහිදුවන්න" : "Expand",
                                                                children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 41
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 67
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 751,
                                                columnNumber: 21
                                            }, this),
                                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "milestone-interactive-body",
                                                children: [
                                                    m_22.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "m-body-desc",
                                                        children: m_22.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 46
                                                    }, this),
                                                    m_22.whyItMatters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "m-why-callout",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: isSi ? "මෙය වැදගත් වන්නේ ඇයි:" : "Why this matters:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 29
                                                            }, this),
                                                            " ",
                                                            m_22.whyItMatters
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 47
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "m-tasks-checklist-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "checklist-subhead",
                                                                children: isSi ? "කළ යුතු දෑ ලැයිස්තුව (Actionable Checklist):" : "Actionable Checklist:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "m-tasks-ul",
                                                                children: m_22.tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: `m-task-row ${task.isCompleted ? "task-done" : ""}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "m-task-label",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: task.isCompleted,
                                                                                        onChange: ()=>handleToggleTask(m_22.id, task.id, task.isCompleted),
                                                                                        className: "m-task-checkbox"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                        lineNumber: 811,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "m-task-body",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "m-task-text",
                                                                                                children: task.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                                lineNumber: 813,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            task.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                                className: "m-task-note",
                                                                                                children: task.notes
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                                lineNumber: 814,
                                                                                                columnNumber: 52
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                        lineNumber: 812,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                lineNumber: 810,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    gap: "8px"
                                                                                },
                                                                                children: [
                                                                                    task.resourceUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: task.resourceUrl,
                                                                                        className: "task-jump-link",
                                                                                        target: task.resourceUrl.startsWith("http") ? "_blank" : undefined,
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                children: isSi ? "Guide බලන්න" : "Guide"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                                lineNumber: 824,
                                                                                                columnNumber: 39
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                size: 12
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                                lineNumber: 825,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                        lineNumber: 823,
                                                                                        columnNumber: 56
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        className: "task-delete-btn",
                                                                                        title: isSi ? "Task එක ඉවත් කරන්න" : "Delete task",
                                                                                        onClick: ()=>{
                                                                                            setDeleteConfirmTarget({
                                                                                                type: "TASK",
                                                                                                id: task.id,
                                                                                                parentId: m_22.id,
                                                                                                title: task.title
                                                                                            });
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                            size: 13
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                            lineNumber: 835,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                        lineNumber: 827,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                                lineNumber: 818,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, task.id, true, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 809,
                                                                        columnNumber: 53
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "task-quick-add-row",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        placeholder: isSi ? "මෙම milestone එකට අලුත් task එකක් එකතු කරන්න..." : "Add a custom task to this milestone...",
                                                                        value: quickTaskInputs[m_22.id] || "",
                                                                        onChange: (e_7)=>setQuickTaskInputs({
                                                                                ...quickTaskInputs,
                                                                                [m_22.id]: e_7.target.value
                                                                            }),
                                                                        onKeyDown: (e_8)=>{
                                                                            if (e_8.key === "Enter") {
                                                                                e_8.preventDefault();
                                                                                handleQuickAddTask(m_22.id);
                                                                            }
                                                                        },
                                                                        className: "task-quick-input"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 843,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "task-quick-btn",
                                                                        onClick: ()=>handleQuickAddTask(m_22.id),
                                                                        children: isSi ? "+ එකතු කරන්න" : "+ Add"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                        lineNumber: 852,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                lineNumber: 796,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 750,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, m_22.id, true, {
                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                lineNumber: 748,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                        lineNumber: 720,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, this),
            isAddMilestoneOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crud-modal-overlay",
                onClick: ()=>setIsAddMilestoneOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "crud-modal-card",
                    onClick: (e_9)=>e_9.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "crud-modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "crud-modal-title",
                                    children: isSi ? "නව Milestone එකක් එක් කරන්න" : "Add Custom Milestone"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 870,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "crud-modal-close",
                                    onClick: ()=>setIsAddMilestoneOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 874,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 873,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 869,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddMilestoneSubmit,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px"
                            },
                            children: [
                                formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "8px 12px",
                                        borderRadius: "8px",
                                        background: "rgba(220, 38, 38, 0.1)",
                                        border: "1px solid rgba(220, 38, 38, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "crud-form-error",
                                        children: formError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 889,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 883,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "අධ්‍යාපන අදියර (Stage):" : "Roadmap Stage:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 893,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newStageKey,
                                            onChange: (e_10)=>setNewStageKey(e_10.target.value),
                                            className: "crud-form-select",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "OL_CUSTOM",
                                                    children: isSi ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].school.si : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].school.en
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "AL_CUSTOM",
                                                    children: isSi ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].advanced.si : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].advanced.en
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "DEGREE_CUSTOM",
                                                    children: isSi ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].degree.si : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].degree.en
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CAREER_LAUNCH_CUSTOM",
                                                    children: isSi ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].career.si : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$milestonePhases$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MILESTONE_PHASES"].career.en
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 894,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "Milestone මාතෘකාව (අනිවාර්යයි):" : "Milestone Title (Required):"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: isSi ? "උදා: complete AWS Certified Solutions Architect" : "e.g. Complete AWS Certified Solutions Architect",
                                            value: newTitle,
                                            onChange: (e_11)=>{
                                                setNewTitle(e_11.target.value);
                                                if (formError) setFormError("");
                                            },
                                            className: "crud-form-input",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 904,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 902,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "crud-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "crud-form-label",
                                                    children: isSi ? "කාල සීමාව (මාස):" : "Duration (Months):"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 916,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "60",
                                                    placeholder: isSi ? "උදා: 6" : "e.g. 6",
                                                    value: newDuration,
                                                    onChange: (e_12)=>setNewDuration(e_12.target.value),
                                                    className: "crud-form-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 917,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 915,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "crud-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "crud-form-label",
                                                    children: isSi ? "ඉලක්කගත දිනය:" : "Target Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: newTargetDate,
                                                    onChange: (e_13)=>setNewTargetDate(e_13.target.value),
                                                    className: "crud-form-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 920,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 910,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "විස්තරය (Description):" : "Description:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 927,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 2,
                                            placeholder: isSi ? "මෙම පියවරේදී කළ යුතු දෑ විස්තර කරන්න..." : "Describe what you will accomplish in this stage...",
                                            value: newDesc,
                                            onChange: (e_14)=>setNewDesc(e_14.target.value),
                                            className: "crud-form-textarea"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 928,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 926,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "මෙය වැදගත් වන්නේ ඇයි (Why it matters):" : "Why It Matters:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 932,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 2,
                                            placeholder: isSi ? "ඔබේ වෘත්තියට මෙම සුදුසුකම දායක වන්නේ කෙසේද..." : "Explain how this step accelerates your career...",
                                            value: newWhy,
                                            onChange: (e_15)=>setNewWhy(e_15.target.value),
                                            className: "crud-form-textarea"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 933,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 931,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "ක්‍රියාකාරී Tasks එකතු කරන්න:" : "Add Initial Checklist Tasks:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 938,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "8px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: isSi ? "Task එකක් ලියන්න..." : "Type a task title...",
                                                    value: newTaskInput,
                                                    onChange: (e_16)=>setNewTaskInput(e_16.target.value),
                                                    onKeyDown: (e_17)=>{
                                                        if (e_17.key === "Enter") {
                                                            e_17.preventDefault();
                                                            if (newTaskInput.trim()) {
                                                                setNewTaskList([
                                                                    ...newTaskList,
                                                                    newTaskInput.trim()
                                                                ]);
                                                                setNewTaskInput("");
                                                            }
                                                        }
                                                    },
                                                    className: "crud-form-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "task-quick-btn",
                                                    onClick: ()=>{
                                                        if (newTaskInput.trim()) {
                                                            setNewTaskList([
                                                                ...newTaskList,
                                                                newTaskInput.trim()
                                                            ]);
                                                            setNewTaskInput("");
                                                        }
                                                    },
                                                    children: isSi ? "+ එක් කරන්න" : "+ Add"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 952,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 939,
                                            columnNumber: 17
                                        }, this),
                                        newTaskList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            style: {
                                                listStyle: "none",
                                                padding: 0,
                                                margin: "6px 0 0",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "4px"
                                            },
                                            children: newTaskList.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        fontSize: "12px",
                                                        background: "rgba(255, 255, 255, 0.8)",
                                                        padding: "4px 8px",
                                                        borderRadius: "6px",
                                                        border: "1px solid rgba(215, 200, 159, 0.5)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "• ",
                                                                item
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 980,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setNewTaskList(newTaskList.filter((_, i)=>i !== idx)),
                                                            style: {
                                                                background: "none",
                                                                border: "none",
                                                                color: "#dc2626",
                                                                cursor: "pointer"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                                lineNumber: 987,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 981,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 53
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 962,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 937,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-modal-footer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "crud-cancel-btn",
                                            onClick: ()=>setIsAddMilestoneOpen(false),
                                            children: isSi ? "අවලංගු කරන්න" : "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 994,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "crud-submit-btn",
                                            children: isSubmitting ? isSi ? "සුරකිමින්..." : "Saving..." : isSi ? "Milestone එක සුරකින්න" : "Save Milestone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 997,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 993,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 878,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                    lineNumber: 868,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 867,
                columnNumber: 30
            }, this),
            editingMilestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crud-modal-overlay",
                onClick: ()=>setEditingMilestone(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "crud-modal-card",
                    onClick: (e_18)=>e_18.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "crud-modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "crud-modal-title",
                                    children: isSi ? "Milestone එක සංස්කරණය කරන්න" : "Edit Milestone"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "crud-modal-close",
                                    onClick: ()=>setEditingMilestone(null),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1014,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1010,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUpdateMilestoneSubmit,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px"
                            },
                            children: [
                                formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "8px 12px",
                                        borderRadius: "8px",
                                        background: "rgba(220, 38, 38, 0.1)",
                                        border: "1px solid rgba(220, 38, 38, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "crud-form-error",
                                        children: formError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1024,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "Milestone මාතෘකාව:" : "Milestone Title:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingMilestone.title,
                                            onChange: (e_19)=>setEditingMilestone({
                                                    ...editingMilestone,
                                                    title: e_19.target.value
                                                }),
                                            className: "crud-form-input",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1035,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        gap: "10px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "crud-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "crud-form-label",
                                                    children: isSi ? "තත්ත්වය (Status):" : "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 1047,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: editingMilestone.status,
                                                    onChange: (e_20)=>setEditingMilestone({
                                                            ...editingMilestone,
                                                            status: e_20.target.value
                                                        }),
                                                    className: "crud-form-select",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "PENDING",
                                                            children: isSi ? "ඉදිරියට (Pending)" : "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 1052,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "IN_PROGRESS",
                                                            children: isSi ? "සිදුවෙමින් පවතී (In Progress)" : "In Progress"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 1053,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "COMPLETED",
                                                            children: isSi ? "සම්පූර්ණයි (Completed)" : "Completed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                            lineNumber: 1054,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 1048,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1046,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "crud-form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "crud-form-label",
                                                    children: isSi ? "කාල සීමාව (මාස):" : "Duration (Months):"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "1",
                                                    max: "60",
                                                    value: editingMilestone.durationMonths || "",
                                                    onChange: (e_21)=>setEditingMilestone({
                                                            ...editingMilestone,
                                                            durationMonths: e_21.target.value ? parseInt(e_21.target.value, 10) : null
                                                        }),
                                                    className: "crud-form-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1058,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "ඉලක්කගත දිනය:" : "Target Date:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1068,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: editingMilestone.targetDate || "",
                                            onChange: (e_22)=>setEditingMilestone({
                                                    ...editingMilestone,
                                                    targetDate: e_22.target.value || null
                                                }),
                                            className: "crud-form-input"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1069,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1067,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "විස්තරය (Description):" : "Description:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 2,
                                            value: editingMilestone.description || "",
                                            onChange: (e_23)=>setEditingMilestone({
                                                    ...editingMilestone,
                                                    description: e_23.target.value
                                                }),
                                            className: "crud-form-textarea"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1077,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "මෙය වැදගත් වන්නේ ඇයි (Why it matters):" : "Why It Matters:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 2,
                                            value: editingMilestone.whyItMatters || "",
                                            onChange: (e_24)=>setEditingMilestone({
                                                    ...editingMilestone,
                                                    whyItMatters: e_24.target.value
                                                }),
                                            className: "crud-form-textarea"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1085,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1083,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-modal-footer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "crud-cancel-btn",
                                            onClick: ()=>setEditingMilestone(null),
                                            children: isSi ? "අවලංගු කරන්න" : "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1092,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "crud-submit-btn",
                                            children: isSubmitting ? isSi ? "යාවත්කාලීන වෙමින්..." : "Updating..." : isSi ? "වෙනස්කම් සුරකින්න" : "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1095,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1091,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1019,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                    lineNumber: 1009,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 1008,
                columnNumber: 28
            }, this),
            isEditPathOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crud-modal-overlay",
                onClick: ()=>setIsEditPathOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "crud-modal-card",
                    onClick: (e_25)=>e_25.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "crud-modal-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "crud-modal-title",
                                    children: isSi ? "Roadmap විස්තර සංස්කරණය කරන්න" : "Edit Career Roadmap Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "crud-modal-close",
                                    onClick: ()=>setIsEditPathOpen(false),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 1113,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1112,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUpdatePathSubmit,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "14px"
                            },
                            children: [
                                formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: "8px 12px",
                                        borderRadius: "8px",
                                        background: "rgba(220, 38, 38, 0.1)",
                                        border: "1px solid rgba(220, 38, 38, 0.3)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "crud-form-error",
                                        children: formError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 1128,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "Roadmap මාතෘකාව (Title):" : "Roadmap Title:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editPathTitle,
                                            onChange: (e_26)=>setEditPathTitle(e_26.target.value),
                                            className: "crud-form-input",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1133,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "දිස්ත්‍රික්කය (District Quota):" : "Administrative District:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editPathDistrict,
                                            onChange: (e_27)=>setEditPathDistrict(e_27.target.value),
                                            className: "crud-form-select",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: isSi ? "-- දිස්ත්‍රික්කය තෝරන්න --" : "-- Select District --"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                    lineNumber: 1139,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$pathEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRI_LANKAN_DISTRICTS"].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: d,
                                                        children: [
                                                            d,
                                                            " District"
                                                        ]
                                                    }, d, true, {
                                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                                        lineNumber: 1140,
                                                        columnNumber: 50
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "crud-form-label",
                                            children: isSi ? "පුද්ගලික සටහන් සහ ඉලක්ක (Notes):" : "Personal Notes & Goals:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: editPathNotes,
                                            onChange: (e_28)=>setEditPathNotes(e_28.target.value),
                                            placeholder: isSi ? "ඔබේ විශේෂ ඉලක්ක, අයවැය හෝ සටහන් මෙහි ලියන්න..." : "Write your personal target Z-score, target universities, or study schedule notes...",
                                            className: "crud-form-textarea"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "crud-modal-footer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "crud-cancel-btn",
                                            onClick: ()=>setIsEditPathOpen(false),
                                            children: isSi ? "අවලංගු කරන්න" : "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "crud-submit-btn",
                                            children: isSubmitting ? isSi ? "සුරකිමින්..." : "Saving..." : isSi ? "වෙනස්කම් සුරකින්න" : "Save Changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                    lineNumber: 1107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 1106,
                columnNumber: 26
            }, this),
            deleteConfirmTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crud-modal-overlay",
                onClick: ()=>setDeleteConfirmTarget(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "crud-modal-card",
                    style: {
                        maxWidth: "440px"
                    },
                    onClick: (e_29)=>e_29.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                color: "#dc2626"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        background: "rgba(220, 38, 38, 0.12)",
                                        display: "grid",
                                        placeItems: "center",
                                        flexShrink: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                margin: 0,
                                                fontSize: "16px",
                                                fontWeight: 800,
                                                color: "#1a2a1d"
                                            },
                                            children: isSi ? "ඉවත් කිරීම තහවුරු කරන්න" : "Confirm Safe Deletion"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "12px",
                                                color: "#64748b"
                                            },
                                            children: deleteConfirmTarget.type === "PATH" ? isSi ? "Career Roadmap එක ඉවත් කිරීම" : "Deleting Entire Career Roadmap" : deleteConfirmTarget.type === "MILESTONE" ? isSi ? "Milestone එක ඉවත් කිරීම" : "Deleting Milestone Record" : isSi ? "Task එක ඉවත් කිරීම" : "Deleting Task"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                            lineNumber: 1196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "13.5px",
                                color: "#334155",
                                margin: "8px 0"
                            },
                            children: isSi ? `ඔබට "${deleteConfirmTarget.title}" ස්ථිරවම ඉවත් කිරීමට අවශ්‍ය බව තහවුරු කරන්නද? මෙම ක්‍රියාව ආපසු හැරවිය නොහැක.` : `Are you sure you want to permanently delete "${deleteConfirmTarget.title}"? This action cannot be undone.`
                        }, void 0, false, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "crud-modal-footer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "crud-cancel-btn",
                                    onClick: ()=>setDeleteConfirmTarget(null),
                                    children: isSi ? "අවලංගු කරන්න" : "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "crud-delete-confirm-btn",
                                    onClick: handleConfirmDelete,
                                    children: isSi ? "ඔව්, ඉවත් කරන්න" : "Yes, Delete Record"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                                    lineNumber: 1217,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                            lineNumber: 1213,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                    lineNumber: 1167,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
                lineNumber: 1166,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/path/StudentPathDashboard.tsx",
        lineNumber: 421,
        columnNumber: 10
    }, this);
}
_s(StudentPathDashboard, "6GVpakHG+x7Vd2kBZrwg3F9nIOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"]
    ];
});
_c = StudentPathDashboard;
var _c;
__turbopack_context__.k.register(_c, "StudentPathDashboard");
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
"[project]/src/components/path/SavedPaths.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SavedPaths",
    ()=>SavedPaths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.mjs [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.mjs [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/ActionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/SaveButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/roadmaps.ts [app-client] (ecmascript)");
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
;
function SavedPaths(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "0f10a03463f30b2ad865842b1c04099b562710ddc523848f261b52d519a4f8dd") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0f10a03463f30b2ad865842b1c04099b562710ddc523848f261b52d519a4f8dd";
    }
    const { titles, hideEmpty: t1 } = t0;
    const hideEmpty = t1 === undefined ? false : t1;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("myPath");
    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("path");
    const saved = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeSaved"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savedItems"].snapshot, _SavedPathsUseSyncExternalStore));
    const roadmaps = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeSaved"], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savedRoadmaps"].snapshot, _SavedPathsUseSyncExternalStore2));
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function remove(id) {
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savedRoadmaps"].remove(id);
            } catch  {}
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    const remove = t2;
    if (hideEmpty && !saved.length && !roadmaps.length) {
        return null;
    }
    const t3 = "section-block";
    let t4;
    if ($[2] !== hideEmpty || $[3] !== t) {
        t4 = hideEmpty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: t("savedHeading")
        }, void 0, false, {
            fileName: "[project]/src/components/path/SavedPaths.tsx",
            lineNumber: 48,
            columnNumber: 23
        }, this);
        $[2] = hideEmpty;
        $[3] = t;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== t) {
        t5 = t("deviceNote");
        $[5] = t;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "muted",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/path/SavedPaths.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = !saved.length && !roadmaps.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "empty-state glass-panel section-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                size: 36,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 71,
                columnNumber: 105
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: t("empty.title")
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 71,
                columnNumber: 146
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: t("empty.body")
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 71,
                columnNumber: 173
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionLink"], {
                href: "/build-your-path",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                    size: 17
                }, void 0, false, {
                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                    lineNumber: 71,
                    columnNumber: 239
                }, this),
                children: t("empty.action")
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 71,
                columnNumber: 197
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/path/SavedPaths.tsx",
        lineNumber: 71,
        columnNumber: 50
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            saved.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-3 section-block",
                children: saved.map({
                    "SavedPaths[saved.map()]": (item)=>{
                        const title = titles[`${item.kind}:${item.id}`] ?? item.title;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "saved-card glass-panel",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: t(`kind.${item.kind}`)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                    lineNumber: 74,
                                    columnNumber: 94
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                    lineNumber: 74,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionLink"], {
                                    href: `/${item.kind === "career" ? "careers" : "universities"}/${item.id}`,
                                    children: t(`explore.${item.kind}`)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                    lineNumber: 74,
                                    columnNumber: 167
                                }, this),
                                item.kind === "career" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$ActionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionLink"], {
                                    href: item.id === "software-engineer" ? "/build-your-path?career=engineer&field=software-engineering#career-architect" : `/build-your-path?career=${item.id}#career-architect`,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/path/SavedPaths.tsx",
                                        lineNumber: 74,
                                        columnNumber: 516
                                    }, this),
                                    children: p("hero.launchArchitect")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                    lineNumber: 74,
                                    columnNumber: 322
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$SaveButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveButton"], {
                                    id: item.id,
                                    title: title,
                                    kind: item.kind
                                }, void 0, false, {
                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                    lineNumber: 74,
                                    columnNumber: 578
                                }, this)
                            ]
                        }, `${item.kind}-${item.id}`, true, {
                            fileName: "[project]/src/components/path/SavedPaths.tsx",
                            lineNumber: 74,
                            columnNumber: 18
                        }, this);
                    }
                }["SavedPaths[saved.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 71,
                columnNumber: 324
            }, this),
            roadmaps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-block",
                        children: t("roadmaps")
                    }, void 0, false, {
                        fileName: "[project]/src/components/path/SavedPaths.tsx",
                        lineNumber: 76,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-2 section-block",
                        children: roadmaps.map({
                            "SavedPaths[roadmaps.map()]": (roadmap)=>{
                                const legacy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$saved$2d$items$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLegacyRoadmap"])(roadmap);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "saved-card glass-panel",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: p("preview.pathTo", {
                                                goal: legacy ? roadmap.career : p(`goals.${roadmap.goal}.title`)
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/SavedPaths.tsx",
                                            lineNumber: 79,
                                            columnNumber: 81
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            children: legacy ? roadmap.milestones.map(_SavedPathsRoadmapsMapRoadmapMilestonesMap) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$roadmaps$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["milestoneIndexes"])(roadmap.stage).map({
                                                "SavedPaths[roadmaps.map() > (anonymous)()]": (n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: p(`roadmap.${roadmap.goal}.${n}.title`)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/SavedPaths.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 82
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "muted",
                                                                children: p(`roadmap.${roadmap.goal}.${n}.description`)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/path/SavedPaths.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 140
                                                            }, this)
                                                        ]
                                                    }, n, true, {
                                                        fileName: "[project]/src/components/path/SavedPaths.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 70
                                                    }, this)
                                            }["SavedPaths[roadmaps.map() > (anonymous)()]"])
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/path/SavedPaths.tsx",
                                            lineNumber: 81,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "glass-button",
                                            type: "button",
                                            onClick: {
                                                "SavedPaths[roadmaps.map() > <button>.onClick]": ()=>remove(roadmap.id)
                                            }["SavedPaths[roadmaps.map() > <button>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16,
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 67
                                                }, this),
                                                t("removeRoadmap")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/path/SavedPaths.tsx",
                                            lineNumber: 83,
                                            columnNumber: 71
                                        }, this)
                                    ]
                                }, roadmap.id, true, {
                                    fileName: "[project]/src/components/path/SavedPaths.tsx",
                                    lineNumber: 79,
                                    columnNumber: 20
                                }, this);
                            }
                        }["SavedPaths[roadmaps.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/path/SavedPaths.tsx",
                        lineNumber: 76,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
    let t8;
    if ($[9] !== t4 || $[10] !== t6 || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: t3,
            children: [
                t4,
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/path/SavedPaths.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s(SavedPaths, "xSWiRE9qtWKpJEoGZrXFGI8dYf0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = SavedPaths;
function _SavedPathsRoadmapsMapRoadmapMilestonesMap(m) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: m.title
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 101,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: m.description
            }, void 0, false, {
                fileName: "[project]/src/components/path/SavedPaths.tsx",
                lineNumber: 101,
                columnNumber: 54
            }, this)
        ]
    }, m.label, true, {
        fileName: "[project]/src/components/path/SavedPaths.tsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
function _SavedPathsUseSyncExternalStore2() {
    return "[]";
}
function _SavedPathsUseSyncExternalStore() {
    return "[]";
}
var _c;
__turbopack_context__.k.register(_c, "SavedPaths");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_05nr3h3._.js.map
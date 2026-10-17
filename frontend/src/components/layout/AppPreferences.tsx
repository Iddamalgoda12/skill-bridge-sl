"use client";

import { cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type Locale = "en" | "si";
export type Theme = "light" | "dark";

const translations: Record<string, string> = {
  "nav.careers": "වෘත්තීය මාර්ග",
  "nav.path": "ඔබේ මාර්ගය",
  "nav.universities": "විශ්වවිද්‍යාල",
  "nav.about": "අප ගැන",
  "nav.myPath": "මගේ මාර්ගය",
  "nav.login": "පිවිසෙන්න",
  "nav.menuHeading": "SkillBridge SL ගවේෂණය",
  "home.eyebrow": "ඔබේ අනාගතය මෙතැනින් ඇරඹේ",
  "home.discover": "ඔබේ මාර්ගය සොයාගන්න.",
  "home.description": "ඊළඟට කුමක්දැයි සිතීමේ සිට නිවැරදි මාර්ගය දැනගැනීම දක්වා. වෘත්තීන්, අධ්‍යාපන මාර්ග සහ විශ්වවිද්‍යාල එකම තැනකින් සොයාගන්න.",
  "home.careers": "වෘත්තීන් ගවේෂණය",
  "home.path": "ඔබේ මාර්ගය සැලසුම් කරන්න",
  "home.universities": "විශ්වවිද්‍යාල",
  "home.saved": "සුරැකි මාර්ග",
  "home.careersCopy": "ඔබේ ශක්තීන්ට ගැළපෙන වෘත්තියක් සොයාගන්න.",
  "home.savedCopy": "ඔබ කැමති වෘත්තීන් සහ විශ්වවිද්‍යාල එකම තැනක සුරකින්න.",
  "home.pathCopy": "O/L සිට PhD දක්වා පැහැදිලි අධ්‍යාපන මාර්ගයක්.",
  "home.universitiesCopy": "ඔබේ ඊළඟ පියවර සඳහා සුදුසු ස්ථානය සොයාගන්න.",
  "home.trending": "ජනප්‍රිය වෘත්තීය මාර්ග",
  "home.viewAll": "සියල්ල බලන්න",
  "footer.tagline": "ඔබේ අනාගතය. ඔබේ මාර්ගය.",
  "footer.note": "ස්වාධීන ශිෂ්‍ය මඟපෙන්වීම් වේදිකාවක් • ශ්‍රී ලංකාව",
  "copy.ABOUT SKILLBRIDGE SL": "SKILLBRIDGE SL ගැන",
  "copy.SRI LANKA UNIVERSITIES": "ශ්‍රී ලංකාවේ විශ්වවිද්‍යාල",
  "copy.PUBLIC UNIVERSITY": "රජයේ විශ්වවිද්‍යාලය",
  "copy.HIGHER EDUCATION": "උසස් අධ්‍යාපනය",
  "copy.BUILD YOUR PATH": "ඔබේ මාර්ගය සැලසුම් කරන්න",
  "copy.CAREER SPOTLIGHT": "විශේෂිත වෘත්තිය",
  "copy.PERSONAL GUIDANCE": "පුද්ගලික මඟපෙන්වීම",
  "copy.YOUR JOURNEY": "ඔබේ ගමන",
  "copy.Built for your journey.": "ඔබේ ගමන වෙනුවෙන් නිර්මාණය කර ඇත.",
  "copy.Discover your path.": "ඔබේ මාර්ගය සොයාගන්න.",
  "copy.Your future,": "ඔබේ අනාගතය,",
  "copy.step by step.": "පියවරෙන් පියවර.",
  "copy.Discover university.": "විශ්වවිද්‍යාල සොයාගන්න.",
  "copy.Have any questions?": "ඔබට ප්‍රශ්න තිබේද?",
  "copy.Your future, in one place.": "ඔබේ අනාගතය, එකම තැනක.",
  "copy.Explore career paths": "වෘත්තීය මාර්ග ගවේෂණය කරන්න",
  "copy.Plan your university journey": "ඔබේ විශ්වවිද්‍යාල ගමන සැලසුම් කරන්න",
  "copy.Start where you are": "ඔබ සිටින තැනින් අරඹන්න",
  "copy.Make it yours": "ඔබට ගැළපෙන ලෙස සකසන්න",
  "copy.Simple today. Flexible tomorrow.": "අද සරලයි. හෙට වෙනස් කළ හැකියි.",
  "copy.Your journey starts at school": "ඔබේ ගමන පාසලෙන් ඇරඹේ",
  "copy.What jobs can you do?": "ඔබට කළ හැකි රැකියා මොනවාද?",
  "copy.Where can you study Software Engineering?": "මෘදුකාංග ඉංජිනේරු විද්‍යාව හැදෑරිය හැක්කේ කොහේද?",
  "copy.Explore your possibilities": "ඔබේ හැකියාවන් ගවේෂණය කරන්න",
  "copy.Browse the possibilities": "හැකියාවන් ගවේෂණය කරන්න",
  "copy.Explore Careers": "වෘත්තීන් ගවේෂණය",
  "copy.Build Your Path": "ඔබේ මාර්ගය",
  "copy.Universities": "විශ්වවිද්‍යාල",
  "copy.About": "අප ගැන",
  "copy.Log in": "පිවිසෙන්න",
  "copy.View All": "සියල්ල බලන්න",
  "copy.View all": "සියල්ල බලන්න",
  "copy.Explore universities": "විශ්වවිද්‍යාල ගවේෂණය කරන්න",
  "copy.Build my path": "මගේ මාර්ගය සකසන්න",
  "copy.Build my roadmap": "මගේ මාර්ග සිතියම සකසන්න",
  "copy.See an example": "උදාහරණයක් බලන්න",
  "copy.Back to home": "මුල් පිටුවට යන්න",
  "copy.Create my roadmap": "මගේ මාර්ග සිතියම සාදන්න",
  "copy.Save this career": "මෙම වෘත්තිය සුරකින්න",
  "copy.Compare universities": "විශ්වවිද්‍යාල සසඳන්න",
  "copy.Compare selected": "තෝරාගත් දේ සසඳන්න",
  "copy.Clear filters": "පෙරහන් ඉවත් කරන්න",
  "copy.No universities match your filters": "ඔබේ පෙරහන්වලට ගැළපෙන විශ්වවිද්‍යාල නැත",
  "copy.Find the best fit for your future": "ඔබේ අනාගතයට ගැළපෙනම තේරීම සොයන්න",
  "copy.Explore universities & institutes": "විශ්වවිද්‍යාල සහ ආයතන ගවේෂණය කරන්න",
  "copy.University Admission Guide": "විශ්වවිද්‍යාල ප්‍රවේශ මාර්ගෝපදේශය",
  "copy.Scholarships & Funding": "ශිෂ්‍යත්ව සහ මූල්‍ය සහාය",
  "copy.Where these skills matter": "මෙම කුසලතා වැදගත් වන ස්ථාන",
  "copy.Study routes": "අධ්‍යයන මාර්ග",
  "copy.What matters to me": "මට වැදගත් දේ",
  "copy.The story behind SkillBridge": "SkillBridge පිටුපස කතාව",
  "copy.Find a career that": "ඔබට ගැළපෙන වෘත්තියක්",
  "copy.feels like you.": "සොයාගන්න.",
  "copy.Discover real career paths, entry routes, employers and salary insights": "සැබෑ වෘත්තීය මාර්ග, ප්‍රවේශ අවස්ථා, සේවායෝජකයින් සහ වැටුප් තොරතුරු සොයාගන්න",
  "copy.made for students and career explorers across Sri Lanka.": "ශ්‍රී ලංකාවේ සිසුන් සහ වෘත්තීය මාර්ග සොයන්නන් වෙනුවෙන්.",
  "copy.Find your fit": "ඔබට ගැළපෙන දේ සොයන්න",
  "copy.Refine by your strengths and interests": "ඔබේ ශක්තීන් සහ රුචිකත්ව අනුව පෙරහන් කරන්න",
  "copy.YOUR INTERESTS": "ඔබේ රුචිකත්වයන්",
  "copy.STUDY ROUTES": "අධ්‍යයන මාර්ග",
  "copy.Not sure what fits?": "ඔබට ගැළපෙන්නේ කුමක්දැයි නොදන්නවාද?",
  "copy.Match your interests to a career.": "ඔබේ රුචිකත්වයන්ට ගැළපෙන වෘත්තියක් සොයන්න.",
  "copy.A career and education guidance space created by an engineering student,": "ඉංජිනේරු සිසුවෙකු විසින් නිර්මාණය කළ වෘත්තීය සහ අධ්‍යාපන මඟපෙන්වීම් අවකාශයක්,",
  "copy.for Sri Lankan students figuring out what comes next.": "ඊළඟට කළ යුත්තේ කුමක්දැයි සිතන ශ්‍රී ලාංකික සිසුන් වෙනුවෙන්.",
  "copy.Big dreams feel easier with a clear plan. Discover the subjects,": "පැහැදිලි සැලැස්මක් සමඟ විශාල සිහින පහසු වේ. විෂයයන්,",
  "copy.courses and milestones that can take you there.": "පාඨමාලා සහ සන්ධිස්ථාන හඳුනාගන්න.",
  "copy.Share where you are in your journey and what you’d like to explore.": "ඔබ සිටින අදියර සහ ගවේෂණය කිරීමට කැමති දේ අපට කියන්න.",
  "copy.Explore government universities and private higher education institutes in Sri Lanka.": "ශ්‍රී ලංකාවේ රජයේ විශ්වවිද්‍යාල සහ පෞද්ගලික උසස් අධ්‍යාපන ආයතන ගවේෂණය කරන්න.",
  "copy.Compare study programmes, locations, entry pathways and student opportunities.": "අධ්‍යයන වැඩසටහන්, ස්ථාන, ප්‍රවේශ මාර්ග සහ ශිෂ්‍ය අවස්ථා සසඳන්න.",
};

type Preferences = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
  t: (key: string, fallback: string) => string;
};

const PreferencesContext = createContext<Preferences | null>(null);

function subscribeToPreferences(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("skillbridge-preferences-changed", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("skillbridge-preferences-changed", onChange);
  };
}

const getLocaleSnapshot = (): Locale => window.localStorage.getItem("skillbridge-locale") === "si" ? "si" : "en";
const getThemeSnapshot = (): Theme => window.localStorage.getItem("skillbridge-theme") === "dark" ? "dark" : "light";
const getServerLocaleSnapshot = (): Locale => "en";
const getServerThemeSnapshot = (): Theme => "light";
function savePreference(key: string, value: string) {
  window.localStorage.setItem(key, value);
  window.dispatchEvent(new Event("skillbridge-preferences-changed"));
}

export function AppPreferencesProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeToPreferences, getLocaleSnapshot, getServerLocaleSnapshot);
  const theme = useSyncExternalStore(subscribeToPreferences, getThemeSnapshot, getServerThemeSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#17251e" : "#fff4cb");
  }, [theme]);

  const setLocale = useCallback((value: Locale) => savePreference("skillbridge-locale", value), []);
  const toggleTheme = useCallback(() => savePreference("skillbridge-theme", getThemeSnapshot() === "light" ? "dark" : "light"), []);
  const value = useMemo<Preferences>(() => ({
    locale,
    theme,
    setLocale,
    toggleTheme,
    t: (key, fallback) => locale === "si" ? translations[key] ?? fallback : fallback,
  }), [locale, theme, setLocale, toggleTheme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function useAppPreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error("useAppPreferences must be used inside AppPreferencesProvider");
  return value;
}

export function localizeNode(node: ReactNode, t: Preferences["t"]): ReactNode {
  if (typeof node === "string") {
    const content = node.trim();
    if (!content) return node;
    const start = node.indexOf(content);
    return `${node.slice(0, start)}${t(`copy.${content}`, content)}${node.slice(start + content.length)}`;
  }
  if (Array.isArray(node)) return node.map(child => localizeNode(child, t));
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children !== undefined) {
    return cloneElement(node, undefined, localizeNode(node.props.children, t));
  }
  return node;
}

import type { Metadata } from "next";
import Image from "next/image";
import { Sparkles, Heart, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/shared/PageIntro";
import { GlassPanel } from "@/components/shared/GlassPanel";
import { SectionHeading } from "@/components/shared/SectionHeading";

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getTranslations("about"))("meta") };
}

const FOUNDER_STORY = {
  si: {
    badge: "සිංහලෙන් හදවතින්ම — මගේම වචන වලින්",
    flag: "🇱🇰",
    p1: "මම රුහුණ Engineering Faculty එකේ ඉගෙනගන්න සාමාන්‍ය කොල්ලෙක්. ඇත්තම කිව්වොත් O/L, A/L ඉවර වුණාම ඊළඟට මොන පාරෙද යන්නේ, මොන Degree එකද කරන්නේ, Z-Score එක මදි වුණොත් මගේ ජීවිතේ ඉවරද කියලා නොදැන මමත් දවස් ගණන් අඬපු, තනියම අතරමං වෙලා හිටපු කාලයක් තිබුණා. ලංකාවේ අපේ ගම්වල ඉන්න ගොඩක් නංගිලා මල්ලිලාට මේවා හරියට තේරුම් කරලා දෙන්න, University යන්න බැරි වුණත් ජීවිතේ දිනන්න තියෙන අනිත් පාරවල් කියලා දෙන්න කවුරුත් ළඟ නෑ. කවුරුහරි Senior කෙනෙක් හරි අයියා කෙනෙක් හරි ඇවිත් 'බය වෙන්න එපා මල්ලි/නංගි, මෙන්න මෙහෙමයි පාර, අපි කොහොමහරි ගොඩයමු' කියලා කරට අත තියලා කියලා දෙනවා නම් කොච්චර වටිනවද?",
    p2: "අන්න ඒ වේදනාව මට හොඳටම දැනුණ නිසයි, නිදි මරාගෙන මගේම මහන්සියෙන් මේ SkillBridge SL හැදුවේ. මේක මට නිකන්ම assignment එකක් හරි website එකක් හරි නෙවෙයි — මගේම රටේ ඉන්න, හීන දකින මගේම නංගිලා මල්ලිලා වෙනුවෙන් හදපු තැනක්. ඔයා කොයි ඉස්කෝලේ ගියත්, ඔයාගෙ අතේ සල්ලි තිබුණත් නැතත්, ඔයා කවදාවත් තනියම අතරමං වෙන්න ඕන නෑ. ඔයාගෙ හීනෙට යන්න පාරක් අනිවාර්යයෙන්ම මෙතන තියෙනවා.",
  },
  en: {
    badge: "In My Own Words — Not Professional English",
    flag: "❤️",
    p1: "I'm just an ordinary guy studying engineering at the University of Ruhuna. To be completely honest, after my O/Ls and A/Ls, when results came out, I was terrified. I had no idea what degree to choose, which field had actual jobs, or whether my life was over just because my Z-score wasn't enough. I spent so many nights feeling lost and stressed out with nobody around to really guide me. In Sri Lanka, thousands of school kids go through this exact pain every year in silence. There is rarely someone who sits beside you, puts a reassuring hand on your shoulder, and tells you: 'Don't worry, you are not a failure. Here are the paths you can take, and we’re going to get through this together.'",
    p2: "That deep feeling never left my heart. That’s why, between late engineering classes and sleepless nights, I built SkillBridge SL with my own two hands. This isn't just a university project or some corporate website to me — it's a promise to every younger brother and sister across Sri Lanka. It doesn't matter what school you attended or how much money you have in your pocket. You don't have to walk in the dark anymore. Whatever your dream is, we will find a way to get you there.",
  },
};

export default async function AboutPage() {
  const t = await getTranslations("about");
  const br = { br: () => <br /> };
  return (
    <div className="page-container about-page">
      <div className="about-hero">
        <div>
          <PageIntro badge={<><Sparkles />{t("eyebrow")}</>} title={t("title")}>
            <p>{t.rich("intro", br)}</p>
          </PageIntro>
          <GlassPanel className="personal-note">
            <span className="icon-bubble"><Heart size={23} aria-hidden="true" /></span>
            <div><h3>{t("note.title")}</h3><p className="muted">{t.rich("note.body", br)}</p></div>
          </GlassPanel>
        </div>
        <GlassPanel className="founder-card">
          <div className="founder-portrait">
            <Image
              src="/images/about/piumantha-creator.jpg"
              alt="Piumantha Iddamalgoda - Creator of SkillBridge SL"
              fill
              className="founder-photo-img"
              sizes="(max-width: 700px) 100vw, 360px"
              priority
            />
            <div className="founder-photo-overlay" />
            <span className="founder-badge-pill">
              <Sparkles size={13} aria-hidden="true" />
              {t("founder.badge")}
            </span>
          </div>
          <p className="eyebrow">{t("founder.eyebrow")}</p>
          <h3>{t("founder.title")}</h3>
          <p className="inline-icon"><GraduationCap size={19} aria-hidden="true" />{t("founder.faculty")}</p>
          <small className="muted">{t("founder.disclaimer")}</small>
        </GlassPanel>
      </div>
      <section className="about-story">
        <SectionHeading eyebrow={t("story.eyebrow")} title={t("story.title")} description={t("story.description")} />
        <div className="story-grid">
          <GlassPanel className="story-card">
            <div className="story-card-header">
              <span className="story-avatar-pill">
                <Heart size={18} aria-hidden="true" className="heart-icon-pulse" />
                {t("story.hi")}
              </span>
            </div>

            {/* Sinhala Heartfelt Message Box */}
            <div className="heartfelt-box sinhala-box">
              <div className="heartfelt-box-header">
                <span className="lang-badge sinhala-badge" lang="si">{FOUNDER_STORY.si.flag} {FOUNDER_STORY.si.badge}</span>
              </div>
              <p className="heartfelt-text sinhala-text" lang="si">{FOUNDER_STORY.si.p1}</p>
              <p className="heartfelt-text sinhala-text" lang="si">{FOUNDER_STORY.si.p2}</p>
            </div>

            {/* English Heartfelt Message Box */}
            <div className="heartfelt-box english-box">
              <div className="heartfelt-box-header">
                <span className="lang-badge english-badge">{FOUNDER_STORY.en.flag} {FOUNDER_STORY.en.badge}</span>
              </div>
              <p className="heartfelt-text english-text">{FOUNDER_STORY.en.p1}</p>
              <p className="heartfelt-text english-text">{FOUNDER_STORY.en.p2}</p>
            </div>

            <span className="story-tag"><GraduationCap size={16} aria-hidden="true" />{t("story.tag")}</span>
          </GlassPanel>
        </div>
      </section>
    </div>
  );
}

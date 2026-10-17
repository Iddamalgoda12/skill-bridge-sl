import { Compass, Route, Landmark, BookOpen } from "lucide-react";
import { HeroArtwork } from "@/components/home/HeroArtwork";
import { TrendingCareers } from "@/components/home/TrendingCareers";
import { MobileDashboard } from "@/components/home/MobileDashboard";
import { ActionLink } from "@/components/shared/ActionLink";
import { DesignAsset } from "@/components/shared/DesignAsset";
import assets from "@/lib/design/assets.json";
export default function HomePage() {
  return <><div className="desktop-dashboard"><section className="home-hero"><div className="home-copy"><h1>Discover<br /><span>your path.</span></h1><div className="idea-note"><DesignAsset src={assets.home.imgIdeaDoodle} /><p>Better<br />Choices<br />Brighter<br />Tomorrows</p></div><p className="home-description">From wondering what’s next to knowing where to go.<br />Find careers, courses and universities in one place.</p><div className="home-actions"><ActionLink href="/careers" icon={<Compass size={19} />}>Explore careers</ActionLink><ActionLink href="/build-your-path" icon={<Route size={19} />}>Build your path</ActionLink><ActionLink href="/universities" icon={<Landmark size={19} />}>Universities</ActionLink><ActionLink href="/courses" icon={<BookOpen size={19} />}>Courses</ActionLink></div></div><HeroArtwork /></section><TrendingCareers /></div><MobileDashboard /></>;
}

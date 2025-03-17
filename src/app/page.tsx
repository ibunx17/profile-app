import Image from "next/image";
import HeroPage from "@/pages/sections/Hero/page";
import AboutPage from "@/pages/sections/AboutMe/page";
import SkillsPage from "@/pages/sections/Skills/page";
import Navbar from "@/components/Navbar";
import PortfolioPage from "@/pages/sections/Portfolio/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
    </div>
  );
}

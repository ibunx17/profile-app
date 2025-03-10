import Image from "next/image";
import HeroPage from "@/pages/sections/Hero/page";
import AboutPage from "@/pages/sections/AboutMe/page";
import SkillsPage from "@/pages/sections/Skills/page";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <SkillsPage />
    </div>
  );
}

import Image from "next/image";
import HeroPage from "@/pages/sections/Hero/page";
import AboutPage from "@/pages/sections/AboutMe/page";
import SkillsPage from "@/pages/sections/Skills/page";
import Navbar from "@/components/Navbar";
import PortfolioPage from "@/pages/sections/Portfolio/page";
import ExperiencePage from "@/pages/sections/Experience/page";
import TestimonialsPage from "@/pages/sections/Testimonials/page";
import ContactPage from "@/pages/sections/Contact/page";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ExperiencePage />
      <TestimonialsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

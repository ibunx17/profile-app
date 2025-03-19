import Image from "next/image";
import HeroPage from "@/app/pages/sections/Hero/page";
import AboutPage from "@/app/pages/sections/AboutMe/page";
import SkillsPage from "@/app/pages/sections/Skills/page";
import Navbar from "@/components/Navbar";
import PortfolioPage from "@/app/pages/sections/Portfolio/page";
import ExperiencePage from "@/app/pages/sections/Experience/page";
import TestimonialsPage from "@/app/pages/sections/Testimonials/page";
import ContactPage from "@/app/pages/sections/Contact/page";
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

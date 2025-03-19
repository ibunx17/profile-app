import dynamic from 'next/dynamic';

const HeroPage = dynamic(() => import('@/app/pages/sections/Hero/page'));
const AboutPage = dynamic(() => import('@/app/pages/sections/AboutMe/page'));
const SkillsPage = dynamic(() => import('@/app/pages/sections/Skills/page'));
const PortfolioPage = dynamic(() => import('@/app/pages/sections/Portfolio/page'));
const ExperiencePage = dynamic(() => import('@/app/pages/sections/Experience/page'));
const TestimonialsPage = dynamic(() => import('@/app/pages/sections/Testimonials/page'));
const ContactPage = dynamic(() => import('@/app/pages/sections/Contact/page'));

// // import HeroPage from "@/app/pages/sections/Hero/page";
// import AboutPage from "@/app/pages/sections/AboutMe/page";
// import SkillsPage from "@/app/pages/sections/Skills/page";
// import PortfolioPage from "@/app/pages/sections/Portfolio/page";
// import ExperiencePage from "@/app/pages/sections/Experience/page";
// import TestimonialsPage from "@/app/pages/sections/Testimonials/page";
// import ContactPage from "@/app/pages/sections/Contact/page";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <PortfolioPage />
      <ExperiencePage />
      <TestimonialsPage />
      <ContactPage />
    </div>
  );
}

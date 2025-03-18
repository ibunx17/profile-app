'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ECommerce from "./ecommerce";
import LandingPage from "./landingpage";

export default function Portfolio() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const portfolioRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContentVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isContentVisible]);

  return (
    <div ref={portfolioRef} className="pt-20 md:pt-96 lg:pt-96 pl-4 mt-[500px] max-h-[5000px] mb-96">
      <div className="container">
        <h1 className="block font-bold text-xl mt-1 md:text-4xl lg:5xl mb-3 text-center">
          Portfolio
        </h1>
        <div className="flex flex-wrap justify-center">
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={isContentVisible ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          >
            <ECommerce />
          </motion.div>
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={isContentVisible ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
          >
            <LandingPage />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
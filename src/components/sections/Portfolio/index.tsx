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
      { threshold: 0.5 } // Trigger when 10% of the section is visible
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isContentVisible]);

  return (
    <div ref={portfolioRef} className="pt-20 mt-[500px]">
      <div className="container">
        <h1 className="block font-bold text-gray-500 text-xl mt-1 md:text-4xl lg:5xl mb-3 text-center">
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
'use client'

import { useEffect, useState, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiSharp, SiGo, SiMysql, SiMongodb, SiPostgresql, SiGooglecloud, SiAmazon, SiAlibabacloud } from 'react-icons/si';
import { motion } from "framer-motion";

export default function Skills() {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const skillsRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsContentVisible(entry.isIntersecting);
        },
        { threshold: 0.2 } // Trigger when 10% of the section is visible
      );
  
      if (skillsRef.current) {
        observer.observe(skillsRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [isContentVisible]);

  return (
    <div ref={skillsRef} id="skills-section" className="pt-20 md:pt-96 lg:pt-96 mt-[500px]">
      <div className="container">
        <h1 className="block font-bold text-xl mt-1 md:text-4xl lg:5xl mb-3 text-center">Skills</h1>
        <div className="flex flex-wrap justify-center">
            <div className="mr-1" >
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={isContentVisible ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              >
            <div className="skill-card w-[300px] h-[200px]">
                <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl">Front End</h2>
                <ul className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl list-disc px-10">
                <li><FaHtml5 className="inline-block mr-2" /><span className="font-bold">HTML</span></li>
                <li><FaCss3Alt className="inline-block mr-2" /><span className="font-bold">CSS</span></li>
                <li><SiTailwindcss className="inline-block mr-2" /><span className="font-bold">Tailwind</span></li>
                <li><FaJs className="inline-block mr-2" /><span className="font-bold">Javascript</span></li>
                </ul>
            </div>
          </motion.div>
          </div>
            <div className="mr-1" >
            <motion.div
                initial={{ y: '-100%', opacity: 0 }}
                animate={isContentVisible ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              >
            <div className="skill-card w-[300px] h-[200px]">
            <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl">Back End</h2>
            <ul className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl list-disc px-10">
              <li><FaNodeJs className="inline-block mr-2" /><span className="font-bold">NodeJS</span></li>
              <li><FaJava className="inline-block mr-2" /><span className="font-bold">Java</span></li>
              <li><SiSharp className="inline-block mr-2" /><span className="font-bold">C#</span></li>
              <li><SiGo className="inline-block mr-2" /><span className="font-bold">Golang</span></li>
            </ul>
          </div>
          </motion.div>
          </div>
            <div className="mr-1" >
            <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={isContentVisible ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              >
            <div className="skill-card w-[300px] h-[200px]">
                    <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl">Database</h2>
                    <ul className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl list-disc px-10">
                    <li><SiMysql className="inline-block mr-2" /><span className="font-bold">MySql</span></li>
                    <li><FaDatabase className="inline-block mr-2" /><span className="font-bold">Sql Server</span></li>
                    <li><SiMongodb className="inline-block mr-2" /><span className="font-bold">MongoDB</span></li>
                    <li><SiPostgresql className="inline-block mr-2" /><span className="font-bold">Postgres</span></li>
                    </ul>
                </div>
            </motion.div>
            </div>
            <div className="mr-1" >
            <motion.div
                initial={{ y: '100%', opacity: 0 }}
                animate={isContentVisible ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
              >
            <div className="skill-card w-[300px] h-[200px]">
                    <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl">Cloud</h2>
                    <ul className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl list-disc px-10">
                    <li><SiGooglecloud className="inline-block mr-2" /><span className="font-bold">Google Cloud</span></li>
                    <li><SiAmazon className="inline-block mr-2" /><span className="font-bold">AWS</span></li>
                    <li><SiAlibabacloud className="inline-block mr-2" /><span className="font-bold">Alibaba</span></li>
                    </ul>
                </div>
          </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
}
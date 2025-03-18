'use client' 

import React from 'react';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const experienceRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsContentVisible(entry.isIntersecting);
        },
        { threshold: 0.4 } // Trigger when 10% of the section is visible
      );
  
      if (experienceRef.current) {
        observer.observe(experienceRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, [isContentVisible]);


  const timelineData = [
    {
      yearRange: '2015 - 2021',
      company: 'PT. Orion IT Solution',
      position: 'Desktop Programmer',
      description: 'Developed desktop applications using Delphi.',
      technologies: ['Delphi', 'SQL Server', 'MySQL', 'Postgres'],
    },
    {
      yearRange: '2021 - 2022',
      company: 'PT. Marchesini Group Indonesia',
      position: '.NET Programmer',
      description: 'Built .NET applications and web services.',
      technologies: ['C#', 'SQL Server'],
    },
    {
      yearRange: '2022 - Present',
      company: 'PT. Unit Four Indonesia',
      position: 'Software Engineer',
      description: 'Developed software solutions and services.',
      technologies: ['C#', 'C++', 'SQL Server'],
    },
  ];

  return (
    <div id="experience" ref={experienceRef} className="pt-20 md:pt-96 lg:pt-96 pl-4 mb-96 mt-96">
      <div className="container mx-auto">
        <h1 className="block font-bold text-xl mt-1 md:text-4xl lg:text-5xl mb-3 text-center text-gray-800">
          Experience
        </h1>
        <div className="relative flex flex-col items-center">
          {timelineData.map((item, index) => (
            
            <motion.div
              key={index}
              className="timeline-item w-full max-w-3xl mb-8 relative"
                initial={{ x: '-100%', opacity: 0 }}
                animate={isContentVisible ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut", type: "spring" }}
            >

              {/* Garis vertikal di tengah */}
              <div className="absolute transform -translate-x-1/3 h-full md:h-36 w-1 bg-gray-500 z-0 mt-5"></div>

              <div className="flex flex-col lg:flex-row relative z-10">
                <div className="timeline-content px-6 py-4 ml-4 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl mt-6 lg:mt-5 lg:ml-4 md:w-[500px]">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <h3 className="text-xl font-semibold text-gray-900">{item.yearRange}</h3>
                    <h4 className="ml-0 md:ml-4 mt-2 md:mt-0 text-lg font-medium text-gray-700">{item.company}</h4>
                  </div>
                  <div className="mt-2 text-md text-gray-600">{item.position}</div>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                  <div className="mt-2 text-sm text-gray-600">
                    <strong>Technologies:</strong> {item.technologies.join(', ')}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

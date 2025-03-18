'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

export default function About() {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const aboutSectionRef = useRef<HTMLDivElement | null>(null);

    const toggleContentVisibility = () => {
        setIsContentVisible(!isContentVisible);
        if (!isContentVisible && aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsSectionVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Trigger when 50% of the section is visible
        );
        if (aboutSectionRef.current) {
        observer.observe(aboutSectionRef.current);
        }

        return () => {
        observer.disconnect();
        };
    }, [isSectionVisible]);

    return (         
          <div id="about" ref={aboutSectionRef} className="pt-96 pl-4 mt-96">
            <div className="container">
                <motion.div 
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={isSectionVisible ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut", type:"spring" }}
                >
                <h1 className="block font-bold text-xl mt-1 md:text-4xl lg:5xl mb-3 text-center">
                    About Me
                </h1>
                <div className={`flex flex-wrap bg-gray-500 shadow-lg rounded-lg px-5 py-5 transition-colors duration-500 ease-in-out ${isContentVisible ? 'text-white' : 'text-gray-400'}`}>
                    <div className="w-full">
                        <h2 className={`font-medium md:text-2xl lg:3xl transition-colors duration-500 ease-in-out ${isContentVisible ? 'text-gray-800' : 'text-gray-700'}`}>Brief Bio</h2>
                        <p className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl">
                            A passionate Software Engineer with a strong focus on web development,
                            specializing in creating seamless, scalable, and user-friendly applications.
                            With a keen interest in the latest front-end technologies and a solid understanding of back-end systems,
                            I have successfully worked on projects ranging from simple landing pages to complex web applications.
                            With several years of experience collaborating with diverse teams,
                            I thrive in environments that encourage both learning and innovation.
                            My aim is to build intuitive digital solutions that enhance user experiences while ensuring
                            performance and scalability
                        </p>
                        <div className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${isContentVisible ? 'max-h-[2500px]' : 'max-h-0'}`}>
                            <h2 className={`font-medium md:text-2xl lg:3xl transition-colors duration-500 ease-in-out ${isContentVisible ? 'text-gray-800' : 'text-gray-700'}`}>Key Values</h2>
                            <ul className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl list-disc px-10">
                                <li><span className="font-bold">Timeliness:</span> Always delivering projects on time, with clear milestones and deadlines.</li>
                                <li><span className="font-bold">Attention to Detail:</span> Ensuring high-quality, pixel-perfect design and clean code.</li>
                                <li><span className="font-bold">Clear Communication:</span> Actively participating in team discussions and providing transparent updates to stakeholders.</li>
                                <li><span className="font-bold">Continuous Learning:</span> Committed to staying updated with emerging technologies and best practices in software development.</li>
                            </ul>
                            <h2 className={`font-medium md:text-2xl lg:3xl transition-colors duration-500 ease-in-out ${isContentVisible ? 'text-gray-800' : 'text-gray-700'}`}>Core Skills</h2>
                            <ul className="font-medium mb-5 leading-relaxed md:text-xl lg:2xl list-disc px-10">
                                <li><span className="font-bold">Frontend Development:</span> Proficient in JavaScript, React, Next.js, HTML5, CSS3, and Tailwind CSS to build dynamic and responsive user interfaces.</li>
                                <li><span className="font-bold">Backend Development:</span> Experienced with Node.js, Express.js, RESTful APIs, and GraphQL for building scalable and efficient server-side applications.</li>                            
                                <li><span className="font-bold">Databases:</span> Strong knowledge of working with MongoDB, PostgreSQL, and MySQL for handling data storage and retrieval.</li>
                                <li><span className="font-bold">Version Control:</span> Expertise in Git, GitHub, and GitLab for collaborative development and source code management.</li>
                                <li><span className="font-bold">Testing & Debugging:</span> Experience with testing frameworks such as Jest, Mocha, and Chai to ensure code quality and reliability.</li>
                                <li><span className="font-bold">Cloud & DevOps:</span> Familiar with Docker, AWS, and CI/CD pipelines for deployment and automation.</li>
                                <li><span className="font-bold">Agile Methodology:</span> Adept at working in Agile environments, participating in sprint planning, and collaborating effectively in cross-functional teams.</li>
                            </ul>
                        </div>
                        <button
                            onClick={toggleContentVisibility}
                            className="text-base font-semibold text-white bg-gray-800 py-3 px-8 rounded-lg
                        hover:bg-gray-600 transition duration-300 ease-in-out md:text-xl lg:2xl"
                        >
                            {isContentVisible ? 'Less About Me' : 'More About Me'}
                        </button>
                    </div>
                </div>
        </motion.div>
            </div>                            
            </div>            
    );
}
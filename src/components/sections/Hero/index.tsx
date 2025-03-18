'use client'
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const heroSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 10% of the section is visible
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isSectionVisible]);

    return (
        <div ref={heroSectionRef} 
            className="pt-96"
        >
            <div className="container">
                <div className="flex flex-wrap">
                    {/* <motion.div
                        className="w-full self-center px-4 lg:w-1/2"
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={isSectionVisible ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut", type:"spring" }}
                    > */}
                        <h1 className="block font-bold text-gray-700 text-xl mt-1 md:text-2xl lg:text-3xl mb-3">Iqbal Maulana</h1>
                        <h2 className="font-medium text-slate-900 md:text-xl lg:text-2xl">Full-Stack Web Developer & Software Engineer</h2>
                        <p className="font-medium text-slate-600 mb-10 leading-relaxed md:text-lg lg:text-xl">
                            Specializing in high-performance web apps with JavaScript, Next.js,
                            and Tailwind CSS. Focused on clean, scalable, and responsive UI development
                        </p>
                        <a href="#contact" className="text-base font-semibold text-white bg-gray-800 py-3 px-8 rounded-full
                        hover:bg-gray-500 transition duration-300 ease-in-out md:text-xl lg:text-2xl">Contact Me</a>
                    {/* </motion.div> */}
                    {/* <motion.div
                        className="w-full self-end px-4 lg:w-1/2"
                        initial={{ x: '100%', opacity: 0 }}
                        animate={isSectionVisible ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut", type:"spring" }}> */}
                        <div className="mt-10 lg:mt-0 lg:right-0">
                            <Image
                                src="/iqbal-maulana-pp.png"
                                alt="gambar profile"                              
                                className=" rounded-full bg-gray-800"
                                loading="lazy"
                                priority
                                decoding="sync"
                                layout="responsive"
                                width={450}
                                height={555}
                                placeholder="blur"
                                blurDataURL="/path/to/low-quality-image.jpg"
                            />
                        </div>
                    {/* </motion.div> */}
                </div>
            </div>
        </div>
    );
}
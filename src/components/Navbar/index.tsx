'use client'

import { useState, useEffect } from "react"
import Link from "next/link";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
        const navMenu = document.querySelector('#nav-menu')!;
        navMenu.classList.toggle('hidden');
    };

    const [isFixed, setIsFixed] = useState(false);

    // Effect hook to listen to scroll events
   useEffect(() => {
  // Handler for scroll event
    const handleScroll = () => {
        const header = document.querySelector('header')!;
        const fixedNav = header.offsetTop;
        console.log(window.scrollY);
        console.log(fixedNav);
       
        if(window.scrollY > fixedNav){
            console.log("kena");
           setIsFixed(true);
        } else {
            console.log("gak kena");
           setIsFixed(false);
        }
    };

    // Add event listener on mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

    }, [])

    return (
        <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isFixed ? 'navbar-fixed' : ''}`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                        <a href="#" className="text-base font-semibold py-3 text-zinc-600 hover:text-gray-500 transition duration-300 ease-in-out md:text-xl lg:text-2xl">IM</a>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="listmenu" type="button" aria-label="aria name" className={`lg:hidden block absolute right-4                        
                        ${isMenuOpen ? 'hamburger-active' : ''}`}
                        onClick={handleHamburgerClick}>
                            <span className="hamburger-line origin-top-left"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line origin-bottom-left"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg 
                        max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full
                        lg:shadow-none lg:rounded-none ">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <Link href="#hero" className="navbar-menu">Home</Link>
                                </li>
                                <li className="group">
                                    <a href="#about" className="navbar-menu">About Me</a>
                                </li>
                                <li className="group">
                                    <a href="#skills" className="navbar-menu">Skills</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="navbar-menu">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#experience" className="navbar-menu">Experience</a>
                                </li>
                                <li className="group">
                                    <a href="#testimonials" className="navbar-menu">Testimonials</a>
                                </li>
                                <li className="group">
                                    <a href="#contact" className="navbar-menu">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

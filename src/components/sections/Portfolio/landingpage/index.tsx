'use client'
import { useState, useRef } from "react";
export default function LandingPage(){
      const [isContentVisible, setIsContentVisible] = useState(false);
      const sectionRef = useRef<HTMLDivElement | null>(null);
  
      const toggleContentVisibility = () => {
          setIsContentVisible(!isContentVisible);
          if (!isContentVisible && sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }

      };

      const navigateToLiveProject = () => {
        window.open("https://profile-portfolio-iqbal.vercel.app/", "_blank"); // Opens the URL in a new tab
      };
  
  return (
    <div ref={sectionRef} className="flex flex-wrap w-full px-5 pt-24 bg-gray-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform mx-1 my-1">
      <h1 className="md:text-lg lg:text-3xl absolute top-0 left-1/2 transform -translate-x-1/2 text-center items-center p-3">
      Profile Landing Page 
      </h1>
      <img src="landing-page.png" alt="landing-page" className="w-[500] h-[500] flex lg:w-1/2 rounded-md shadow-md overflow-hidden"/>
      <div className="flex lg:w-1/2 ">
        <p className={`text-lg md:text-2xl lg:3xl px-5   transition-colors duration-500 ease-in-out ${isContentVisible ? 'text-white' : 'text-gray-400'}`}>
          The goal of this project was to design and develop a modern, 
          visually appealing profile landing page for ABC Professional, a freelance graphic designer. 
          The landing page serves as a personal portfolio to showcase their work, attract potential clients, 
          and provide a contact form for inquiries
        </p>
      </div>
      <div className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${isContentVisible ? 'max-h-[2500px] text-white' : 'max-h-0 text-gray-400'}`}>
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-slate-900 mb-4">Situation</h3>
          <p className="text-lg">
            ABC Professional, a freelance graphic designer, had been relying on word-of-mouth to find clients 
            and had no dedicated online presence. In order to attract more potential clients, 
            ABC Professional needed an easy-to-navigate, visually engaging profile page to showcase their work, 
            skills, and services. The main challenge was to create a clean, professional design that would 
            convey trustworthiness and creativity.          
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-slate-900 mb-4">Task</h3>
          <p className="text-lg">
            My responsibility as the lead developer was to:
          </p>
          <ul className="list-disc pl-8 mt-2">
            <li>Design a visually appealing and user-friendly landing page to display the portfolio.</li>
            <li>Ensure Responsiveness: The page needed to be fully responsive, ensuring it looked great on both desktop and mobile devices.</li>
            <li>Integrate a Contact Form: Provide an easy way for visitors to contact the designer for project inquiries.</li>
            <li>Highlight Skills & Projects: Feature a portfolio section with images, descriptions, and links to previous projects.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-slate-900 mb-4">Action</h3>
          <p className="text-lg">
            To achieve the outlined objectives, I undertook the following steps:
          </p>
          <ul className="list-disc pl-8 mt-2 text-lg">
              <li><strong>Design and User Experience:</strong>
                  <p className="mt-2">
                      I used <strong>Figma</strong> to create a wireframe and a design prototype for the profile landing page. The design included sections for a brief introduction, portfolio images, services offered, and a contact form. I focused on a clean, minimalist aesthetic that matched the client’s branding and style.
                  </p>
              </li>
              <li><strong>Frontend Development:</strong>
                  <p className="mt-2">
                      <strong>HTML/CSS (Tailwind):</strong> I used <strong>Tailwind CSS</strong> for fast and responsive styling. This allowed for rapid prototyping and helped ensure that the page was mobile-friendly and visually consistent across different screen sizes.
                  </p>
                  <p className="mt-2">
                      <strong>React for Interactivity:</strong> I implemented <strong>React</strong> for smooth page interactions, such as the portfolio carousel and form validation.
                  </p>
                  <p className="mt-2">
                      <strong>JavaScript:</strong> Used for form validation, ensuring that the contact form inputs were checked for errors before submission.
                  </p>
              </li>
              <li><strong>Backend Integration:</strong>
                  <p className="mt-2">
                      I used <strong>Formspree</strong> for handling form submissions without setting up a backend server. This allowed me to quickly integrate an email-based contact form to send inquiries directly to the client’s email.
                  </p>
              </li>
              <li><strong>Deployment:</strong>
                  <p className="mt-2">
                      I deployed the landing page on <strong>Vercel</strong>, which automatically handled CI/CD and ensured fast load times and smooth performance.
                  </p>
              </li>
              <li><strong>Challenges & Solutions:</strong>
                  <ul className="list-inside list-disc mt-4">
                      <li><strong>Challenge:</strong> Ensuring cross-browser compatibility, especially on older browsers.
                          <p className="mt-2"><strong>Solution:</strong> I used <strong>Autoprefixer</strong> (integrated with Tailwind) to add vendor prefixes to CSS rules, ensuring compatibility across modern browsers.</p>
                      </li>
                      <li><strong>Challenge:</strong> Balancing design aesthetics with usability for mobile devices.
                          <p className="mt-2"><strong>Solution:</strong> I paid close attention to spacing and typography, and optimized image sizes to reduce loading times on mobile devices.</p>
                      </li>
                  </ul>
              </li>
          </ul>          
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-medium text-slate-900 mb-4">Result</h3>
          <p className="text-lg">
           The project was a success, delivering the following outcomes:
          </p>
          <ul className="list-disc pl-8 mt-2">
            <li>Client Satisfaction: ABC Professional was extremely satisfied with the final result, appreciating the clean and modern design as well as the smooth user experience.</li>
            <li>Increased Visibility: The landing page significantly improved the client’s online presence. Within the first month of launching the page, ABC Professional saw a 40% increase in project inquiries through the contact form.</li>
            <li>Improved Branding: The page served as a great addition to ABC Professional's brand, allowing them to share the link with potential clients and partners, making it easier for people to view their work and get in touch.</li>
            <li>SEO Performance: The page is optimized for search engines, ensuring better visibility when users search for graphic design services online.</li>
          </ul>
        </div>
      </div>
    <button
        onClick={toggleContentVisibility}
        className="text-base font-semibold text-white bg-gray-800 py-3 px-8 my-5 rounded-lg
                        hover:bg-gray-600 transition duration-300 ease-in-out md:text-xl lg:2xl"
    >
        {isContentVisible ? 'Less About Project' : 'More About Project'}
    </button>
    <button
        onClick={navigateToLiveProject}
        className="ml-3 text-base font-semibold text-white bg-gray-800 py-3 px-8 my-5 rounded-lg
                        hover:bg-gray-600 transition duration-300 ease-in-out md:text-xl lg:2xl"
    >
        Live Project
    </button>
  </div>
  )
}
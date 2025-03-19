'use client'
import { useState, useRef } from "react";
export default function ECommerce(){
      const [isContentVisible, setIsContentVisible] = useState(false);
      const sectionRef = useRef<HTMLDivElement | null>(null);
  
      const toggleContentVisibility = () => {
          setIsContentVisible(!isContentVisible);
          if (!isContentVisible && sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }

      };
  
  const navigateToLiveProject = () => {
    window.open("https://www.tokopedia.com/", "_blank"); // Opens the URL in a new tab
  };

  return (
    <div ref={sectionRef} className="flex flex-wrap w-full px-5 pt-24 bg-gray-500 p-6 rounded-lg shadow-lg transition-all duration-300 transform mx-1 my-1">
      <h1 className="md:text-lg lg:text-3xl absolute top-0 left-1/2 transform -translate-x-1/2 text-center items-center p-3">
      E-commerce Platform for XYZ Retail
      </h1>
      <img src="E-commerce.png" alt="landing-page" width={500} height={500} className="flex lg:w-1/2 rounded-md shadow-md overflow-hidden"/>
      <div className="flex lg:w-1/2 ">
        <p className={`text-lg md:text-2xl lg:3xl px-5 transition-colors duration-500 ease-in-out ${isContentVisible ? 'text-white' : 'text-gray-400'}`}>
          This project involved creating an e-commerce platform for XYZ Retail, 
          a company that wanted to expand its product offerings online and reach a 
          broader audience. The platform allows customers to browse products, 
          add items to the cart, complete secure payments, and track their orders in 
          real-time                          
        </p>
      </div>
      <div className={`transition-max-height duration-1000 ease-in-out overflow-hidden ${isContentVisible ? 'max-h-[2500px] text-white' : 'max-h-0 text-gray-400'}`}>
        <div className="mt-8">
          <h2 className="text-2xl font-medium text-slate-900 mb-4">Situation</h2>
          <p className="text-lg">
            XYZ Retail wanted to expand their business online, as they primarily relied on in-store sales. 
            They sought an e-commerce solution to allow customers to browse products, make secure payments, 
            and track orders in real-time. The goal was to create a seamless online shopping experience with 
            easy navigation, security, and scalability.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium text-slate-900 mb-4">Task</h2>
          <p className="text-lg">
            My task was to develop a fully functional e-commerce platform that would:
          </p>
            <ul className="list-disc pl-8 mt-2">
              <li>Allow users to browse through product categories and view detailed product information.</li>
              <li>Integrate secure payment options (via Stripe API).</li>
              <li>Provide an admin dashboard to manage products, orders, and customer details.</li>
              <li>Ensure that the platform was responsive and mobile-friendly.</li>
            </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium text-slate-900 mb-4">Action</h2>
          <p className="text-lg">
            To achieve these goals, I implemented the following:
          </p>
            <ul className="list-disc pl-8 mt-2">
              <li><strong>Frontend Development:</strong> Built using React, with routing handled by React Router and state management via React Context API.</li>
              <li><strong>Backend Development:</strong> Developed a RESTful API with Node.js and Express to handle product data, user authentication, and order management. MongoDB was used as the database.</li>
              <li><strong>Payment Integration:</strong> Integrated Stripe API for secure transactions, allowing users to make payments through credit cards.</li>
              <li><strong>Cloud Deployment:</strong> Hosted the application on AWS (EC2 for the server and S3 for image storage) to ensure scalability and reliability.</li>
            </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-medium text-slate-900 mb-4">Result</h2>
          <p className="text-lg">
            The project was a success, resulting in:
          </p>
            <ul className="list-disc pl-8 mt-2">
              <li>A 50% increase in online sales within the first 3 months of the platform’s launch.</li>
              <li>A 30% increase in user engagement, with a higher average time spent on the website.</li>
              <li>Customer feedback praised the platform for its seamless navigation and secure checkout process.</li>
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
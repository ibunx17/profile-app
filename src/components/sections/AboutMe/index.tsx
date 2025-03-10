export default function About() {
    return (
         <div className="pt-36 pl-4 ">
            <div className="container">
                <h1 className="block font-bold text-gray-500 text-xl mt-1 md:text-4xl lg:5xl mb-3">About Me</h1> 
                    <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/3" >
                        <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl" >Brief Bio</h2>
                        <p className="font-medium text-slate-600 mb-5 leading-relaxed md:text-xl lg:2xl">
                        A passionate Software Engineer with a strong focus on web development, 
                        specializing in creating seamless, scalable, and user-friendly applications. 
                        With a keen interest in the latest front-end technologies and a solid understanding of back-end systems,
                        I have successfully worked on projects ranging from simple landing pages to complex web applications. 
                        With several years of experience collaborating with diverse teams, 
                        I thrive in environments that encourage both learning and innovation. 
                        My aim is to build intuitive digital solutions that enhance user experiences while ensuring 
                        performance and scalability
                        </p>
                    </div>
                    <div className=" w-full lg:w-1/3 px-5" >
                        <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl" >Key Values</h2>
                            <ul className="font-medium text-slate-600 mb-5 leading-relaxed md:text-xl lg:2xl list-disc">
                                <li><span className="font-bold">Timeliness:</span>  Always delivering projects on time, with clear milestones and deadlines.</li>
                                <li><span className="font-bold">Attention to Detail:</span> Ensuring high-quality, pixel-perfect design and clean code.</li>                            
                                <li><span className="font-bold">Clear Communication:</span> Actively participating in team discussions and providing transparent updates to stakeholders.</li>
                                <li><span className="font-bold">Continuous Learning:</span> Committed to staying updated with emerging technologies and best practices in software development.</li>
                            </ul>
                    </div>
                    <div className=" w-full lg:w-1/3 px-5" >
                        <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl" >Core Skills</h2>
                            <ul className="font-medium text-slate-600 mb-5 leading-relaxed md:text-xl lg:2xl list-disc">
                                <li><span className="font-bold">Frontend Development:</span> Proficient in JavaScript, React, Next.js, HTML5, CSS3, and Tailwind CSS to build dynamic and responsive user interfaces.</li>
                                <li><span className="font-bold">Backend Development:</span> Experienced with Node.js, Express.js, RESTful APIs, and GraphQL for building scalable and efficient server-side applications.</li>                            
                                <li><span className="font-bold">Databases:</span> Strong knowledge of working with MongoDB, PostgreSQL, and MySQL for handling data storage and retrieval.</li>
                                <li><span className="font-bold">Version Control:</span> Expertise in Git, GitHub, and GitLab for collaborative development and source code management.</li>
                                <li><span className="font-bold">Testing & Debugging:</span> Experience with testing frameworks such as Jest, Mocha, and Chai to ensure code quality and reliability.</li>
                                <li><span className="font-bold">Cloud & DevOps:</span> Familiar with Docker, AWS, and CI/CD pipelines for deployment and automation.</li>
                                <li><span className="font-bold">Agile Methodology:</span> Adept at working in Agile environments, participating in sprint planning, and collaborating effectively in cross-functional teams.</li>
                            </ul>
                    </div>
                 </div>
            </div>
         </div>
    )
}  
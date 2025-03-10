export default function Hero() {
    return (
         <div className="pt-36 pl-4 ">
            <div className="container">
                 <div className="flex flex-wrap">
                    <div className="w-full self-center px4 lg:w-1/2" >
                        <h1 className="block font-bold text-gray-700 text-xl mt-1 md:text-4xl lg:5xl mb-3">Iqbal Maulana</h1> 
                        <h2 className="font-medium text-slate-900 md:text-2xl lg:3xl" >Full-Stack Web Developer & Software Engineer</h2>
                        <p className="font-medium text-slate-600 mb-10 leading-relaxed md:text-xl lg:2xl">
                        Specializing in high-performance web apps with JavaScript, Next.js, 
                        and Tailwind CSS. Focused on clean, scalable, and responsive UI development</p>
                        <a href="#" className="text-base font-semibold text-white bg-gray-800 py-3 px-8 rounded-full
                        hover:bg-gray-500 transition duration-300 ease-in-out md:text-xl lg:2xl">Contact Me</a>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="mt-10 lg:mt-0 lg:right-0">
                            <img src="/iqbal-maulana-pp.png" alt="gambar profile" className="max-w-full mx-auto"/>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
    )
}  
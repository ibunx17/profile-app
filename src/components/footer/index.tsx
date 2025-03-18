
export default function Footer(){
  return (
    <footer className="bg-gray-800 pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 text-gray-300 font-medium md:w-1/3">
            <h2 className="font-bold text-4xl text-white">IM</h2>
            <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
            <p>iqbal19847@gmail.com</p>
            <p>Jl. Soekarno Hatta Block B2, No. 17</p>
            <p>Bandung</p>
          </div>
          <div className="w-full px-4 mb-12 text-gray-300 font-medium md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Content Category</h3>
            <ul className="text-slate-300">
              <li>
                <a href="#" className="inline-block text-base hover:text-gray-600 mb-3">Programming</a>
              </li>
              <li>
                <a href="#" className="inline-block text-base hover:text-gray-600 mb-3">Technology</a>
              </li>
              <li>
                <a href="#" className="inline-block text-base hover:text-gray-600 mb-3">Life Style</a>
              </li>
            </ul>
          </div>
          <div className="w-full px-4 mb-12 text-gray-300 font-medium md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Reference</h3>
            <ul className="text-gray-300">
              <li>
                <a href="#" className="inline-block text-base hover:text-gray-600 mb-3">Home</a>
              </li>
              <li>
                <a href="#about" className="inline-block text-base hover:text-gray-600 mb-3">About Me</a>
              </li>
              <li>
                <a href="#skills" className="inline-block text-base hover:text-gray-600 mb-3">Skills</a>
              </li>
              <li>
                <a href="#portfolio" className="inline-block text-base hover:text-gray-600 mb-3">Portfolio</a>
              </li>
              <li>
                <a href="#experience" className="inline-block text-base hover:text-gray-600 mb-3">Experience</a>
              </li>
              <li>
                <a href="#testimonials" className="inline-block text-base hover:text-gray-600 mb-3">Testimonials</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center">          
          <p className="text-gray-300">
            Created by Iqbal Maulana using 
            <a href="https://tailwindcss.com" target="_blank" className="font-bold text-sky-500">
              Tailwind CSS
            </a>            
          </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
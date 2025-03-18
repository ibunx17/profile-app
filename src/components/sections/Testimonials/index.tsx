import Testi from "./details"

export default function Testimonials() {
    return (
         <div id="testimonials" className="pt-20 md:pt-96 lg:pt-96 pl-4 mb-96">
            <div className="container ">
                 <div className="flex flex-wrap ">
                    <div className=" w-full self-center" >
                    <h1 className="block font-bold  text-xl mt-1 md:text-4xl lg:5xl mb-3 text-center">Testimonials</h1> 
                    <div className="flex overflow-hidden space-x-14">
                            <div className="flex space-x-14 animate-loop-scroll">
                                <Testi />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
    )
}
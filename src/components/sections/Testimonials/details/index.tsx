import React from "react";
import Image from "next/image";

export default function Testi() {
  const testimonials = [
    {
      name: "John Doe",
      position: "Software Engineer",
      photo: "/1.jpg", // Random user image
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod sapien non diam gravida, eget dapibus libero fermentum.",
    },
    {
      name: "Jane Smith",
      position: "UX Designer",
      photo: "/2.jpg", // Random user image
      testimonial:
        "Nullam nec neque at erat dictum laoreet. Sed sed orci felis. Etiam pretium, purus sit amet suscipit blandit, urna nisl tincidunt eros.",
    },
    {
      name: "Alex Johnson",
      position: "Full Stack Developer",
      photo: "/3.jpg", // Random user image
      testimonial:
        "Vivamus venenatis dui at augue fermentum, a faucibus libero auctor. Morbi ac lectus ut mi fermentum mollis a vel eros.",
    },
    {
      name: "John Wick",
      position: "Full Stack Developer",
      photo: "/4.jpg", // Random user image
      testimonial:
        "Vivamus venenatis dui at augue fermentum, a faucibus libero auctor. Morbi ac lectus ut mi fermentum mollis a vel eros.",
    },
    {
      name: "John Thor",
      position: "Graphic Designer",
      photo: "/5.jpg", // Random user image
      testimonial:
        "Vivamus venenatis dui at augue fermentum, a faucibus libero auctor. Morbi ac lectus ut mi fermentum mollis a vel eros.",
    }
  ];

  return (
    <div id="testimonials" className="pt-20 pl-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-start items-center space-x-8 overflow-x-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="w-[300px] h-[350px] rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105"
            >
              <div className="p-4">
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                  />
                </div>
                <div className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">{item.name}</div>
                <div className="text-md md:text-lg lg:text-xl text-gray-500 mb-4">{item.position}</div>
                <p className="text-sm md:text-sm lg:text-sm text-gray-600 pb-3">{item.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
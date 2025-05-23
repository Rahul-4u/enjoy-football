import React, { useState, useEffect } from "react";
import { IoAirplane } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    text: "Este programa me cambió la vida. Aprendí muchísimo y la experiencia fue inolvidable.",
    author: "Carlos Martínez",
    role: "Participante",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    text: "La organización fue excelente y el aprendizaje muy práctico.",
    author: "Ana Gómez",
    role: "Participante",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    text: "Recomiendo este programa a todos los que quieran mejorar sus habilidades.",
    author: "Luis Fernández",
    role: "Participante",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

export default function ToursExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const { text, author, role, image } = testimonials[currentIndex];

  return (
    <div className="relative py-0 h-screen px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          <div className="hidden lg:block lg:col-span-6 relative h-full">
            <img
              src="https://i.ibb.co/Gvp2S4rC/31a1a0ee-9ca2-4a7c-bfda-e848d37bec6e.jpg"
              alt="experience"
              className="rounded img-div h-full w-auto object-cover absolute top-0 left-0 z-0 -translate-y-7"
            />
          </div>

          {/* Content section  */}
          <div className="col-span-1 lg:col-span-6 z-10 flex flex-col justify-center h-full">
            <div className="p-6 rounded-lg shadow-lg relative bg-white">
              <h1 className="text-red-500 text-2xl sm:text-[28px]">
                Enjoy Football
              </h1>
              <span className="">
                <IoAirplane className="text-3xl text-red-500 my-2" />
              </span>
              <h1 className="text-4xl sm:text-[32px]  leading-tight">
                Enjoy Football Experience, es algo más que un viaje…
              </h1>
              <p className="text-gray-400 text-lg sm:text-[20px] mb-4">
                Desde EnjoyFootball, ofrecemos estas actividades a grupos y
                equipos (niños y adultos), en diferentes ciudades españolas y
                europeas,
              </p>

              {/* Testimonial */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-800 italic mb-6 text-lg sm:text-[24px]">
                  "{text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={image}
                    alt={author}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-4 border-2 border-red-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{author}</p>
                    <p className="text-gray-500 text-xs sm:text-sm">{role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

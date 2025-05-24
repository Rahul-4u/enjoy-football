import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

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

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); // scroll korlei fire korbe
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isInView) {
      leftControls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
      rightControls.start({ x: 0, opacity: 1, transition: { duration: 0.8 } });
    } else {
      leftControls.start({ x: -100, opacity: 0 });
      rightControls.start({ x: 100, opacity: 0 });
    }
  }, [isInView]);

  const { text, author, role, image } = testimonials[currentIndex];

  return (
    <div ref={sectionRef} className="relative py-0 h-screen px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
          {/* Left Side Image with Animation */}
          <motion.div
            className="hidden lg:block lg:col-span-6 relative h-full"
            initial={{ x: -100, opacity: 0 }}
            animate={leftControls}
          >
            <img
              src="https://i.ibb.co/W4SWnMh4/PHOTO-2021-03-11-11-11-37-2.jpg"
              alt="experience"
              className="rounded img-div h-full w-auto object-cover absolute top-0 left-0 z-0 -translate-y-7"
            />
          </motion.div>

          {/* Right Content Section with Animation */}
          <motion.div
            className="col-span-1 lg:col-span-6 z-10 flex flex-col justify-center h-full"
            initial={{ x: 100, opacity: 0 }}
            animate={rightControls}
          >
            <div className="p-6 rounded-lg shadow-lg relative bg-white flex md:space-y-10 flex-col">
              <h1 className="text-red-500 text-2xl sm:text-[28px]">
                EnjoyFootball Experience
              </h1>
              <h1 className="text-4xl sm:text-[62px]  leading-tight">
                Programa Residencial España
              </h1>
              <p className="text-gray-400 text-lg sm:text-[23px] mb-4">
                Informate de las caracteristicas de nuestro programa:
              </p>
              <h1 className="text-red-500 text-2xl sm:text-[28px] mt-8 mb-4">
                Testimonios:
              </h1>

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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

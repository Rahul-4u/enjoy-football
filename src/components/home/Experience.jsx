import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { IoArrowRedoSharp } from "react-icons/io5";

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
    <div ref={sectionRef} className="relative py-0 md:px-20 lg:px-0 ">
      <div className="w-full mx-auto h-full ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12  h-full">
          {/* Left Side Image with Animation */}
          <motion.div
            className="hidden lg:block lg:col-span-6 relative h-full"
            initial={{ x: -100, opacity: 0 }}
            animate={leftControls}
          >
            <img
              src="https://i.ibb.co/W4SWnMh4/PHOTO-2021-03-11-11-11-37-2.jpg"
              alt="experience"
              className="rounded rounded-br-[40px] img-div h-full w-full object-cover object-left  absolute top-0 left-0 z-0 -translate-y-15"
            />
          </motion.div>

          {/* Right Content Section with Animation */}
          <motion.div
            className="col-span-1 lg:col-span-6 z-10 flex flex-col lg:my-5 justify-center h-full"
            initial={{ x: 100, opacity: 0 }}
            animate={rightControls}
          >
            <div className="px-6  lg:mx-16 my-14 relative bg-white flex lg:space-y-6 space-y-4 flex-col">
              <h1 className="text-red-500 text-2xl text-[28px]">
                EnjoyFootball Experience
              </h1>
              <h1 className="text-4xl lg:text-[62px] md:text-[55px] text-[47px]   leading-tight">
                Programa Residencial España
              </h1>
              <p className="text-gray-400 text-lg sm:text-[23px] mb-4">
                Informate de las caracteristicas de nuestro programa:
              </p>
              <h1 className="text-red-500 text-2xl sm:text-[28px] mt-8 mb-4">
                Testimonios:
              </h1>

              {/* Testimonial */}
              <div className=" p-6 ">
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
                <button className="btn flex md:items-center items-start gap-2 bg-red-500 my-10 px-8  py-4  rounded-4xl text-white text-[18px]">
                  {" "}
                  <IoArrowRedoSharp className="text-3xl" />
                  InFormate
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

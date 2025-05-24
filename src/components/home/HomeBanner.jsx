import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


export default function HomeBanner() {
  return (
    <div
      className="md:h-[600px] h-[450px] w-full   bg-cover bg-center relative brightness-120 flex items-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/kgYxbJPn/grass-2616911-1920.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/98 to-transparent" />

      {/* Main container */}
      <div className="max-w-[1440px] mx-auto w-full px-12 md:px-12 relative z-10 flex justify-between items-center">
        {/* Left side - Content */}
        <motion.div
          className="text-white max-w-xl text-left "
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-red-500  space-y-7  text-[27px] mb-2">
            EnjoyFootball
          </p>
          <h1 className="text-4xl md:text-[75px]  mb-4">Tu mejor versión</h1>
          <p className="text-lg text-gray-300 mb-6">
            Ven a ver el catálogo de nuestros Tours.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-6 py-3 rounded-full">
            <ChevronDoubleRightIcon className="w-5 h-5" />
            Tours EnjoyFootball
          </button>
        </motion.div>

        {/* Right side - Empty div (for spacing or future content) */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

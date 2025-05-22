import React from "react";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

export default function Quierescontactar() {
  return (
    <div
      className="md:h-[600px] h-auto w-full bg-cover bg-center relative flex items-center py-10 md:py-0"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/mFFV5wmC/Full-Size-Render-1-scaled.jpg')",
      }}
      >
          
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Main container */}
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col md:flex-row flex-wrap justify-between items-center gap-10">
        {/* Left side - Content */}
        <div className="flex flex-col items-center gap-4 text-center w-full md:w-[48%]">
          <span className="text-red-600 text-7xl ">
            <HiMail />
          </span>
          <h1 className="text-yellow-300 text-[24px] md:text-[27px] font-bold">
            ¿Quieres contactar con nosotros?
          </h1>
          <p className="text-gray-300 text-[18px] max-w-xl mx-auto">
            Deja tu email y nos pondremos en contactolo antes posible.
          </p>
          <div className="max-w-full w-full px-4 md:px-0">
            <form className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Pon tu email...*"
                className="flex-grow px-4 py-3 bg-white rounded-3xl md:mx-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              />
              <button
                type="submit"
                className="bg-sky-700 rounded-3xl hover:bg-yellow-500 text-black px-6 py-3 font-semibold transition"
              >
                Contactar
              </button>
            </form>
          </div>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex flex-col items-center gap-4 text-center w-full md:w-[48%]">
          <span className="text-red-600 text-7xl ">
            <HiMail />
          </span>
          <h1 className="text-yellow-300 text-[24px] md:text-[27px] font-bold">
            ¿Quieres colaborar en nuestro proyecto?
          </h1>
          <p className="text-gray-300 text-[18px] max-w-xl mx-auto px-2">
            Apasionado del deporte o si quieres formar parte de 
            proyecto, Deja tu email.
          </p>

          <div className="max-w-full w-full px-4 md:px-0">
            <form className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Pon tu email...*"
                className="flex-grow px-4 py-3 md:mx-10 bg-white rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              />
              <button
                type="submit"
                className="bg-sky-700 rounded-3xl hover:bg-yellow-500 text-black px-6 py-3 font-semibold transition"
              >
                Contactar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

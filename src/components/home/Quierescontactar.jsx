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
      className="lg:h-[500px] h-auto w-full bg-cover bg-center relative brightness-150 flex items-center py-10 lg:py-0"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/mFFV5wmC/Full-Size-Render-1-scaled.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/98 to-transparent" />

      {/* Main container */}
      <div className="max-w-[1440px] mx-auto w-full   relative z-10 flex flex-col  lg:flex-row  justify-between items-start lg:gap-10">
        {/* Left side - Content */}
        <div className="flex flex-col space-y-5 mx-5 items-center justify-start gap-4 lg:px-10  w-full lg:w-[60%]">
          <span className="text-red-600 text-8xl ">
            <HiMail />
          </span>
          <h1 className="text-yellow-300 text-center text-[28px] font-bold">
            ¿Quieres contactar con nosotros?
          </h1>

          <div className="max-w-full w-full px-5 ">
            <p className="text-gray-300 text-[18px] text-start mb-10 ">
              Deja tu email y nos pondremos en contactolo antes posible.
            </p>
            <form className="flex flex-col lg:flex-row lg:space-y-0 gap-4  md:space-y-5   ">
              <input
                type="email"
                placeholder="Pon tu email...*"
                className="flex-grow px-4  bg-white lg:w-1/2 w-11/12   md:h-[55px] h-[50px] rounded-4xl   border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              />
              <button
                type="submit"
                className=" bg-blue-700 lg:w-1/3 w-11/12 md:h-[55px] h-[50px]  rounded-4xl hover:bg-blue-500  text-white px-6   transition"
              >
                Contactar
              </button>
            </form>
          </div>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex flex-col space-y-5 mx-5 items-center justify-start gap-4 lg:px-10  w-full lg:w-[58%]">
          <span className="text-red-600 text-8xl ">
            <HiMail />
          </span>
          <h1 className="text-yellow-300 text-center text-[28px] font-bold">
            ¿Quieres colaborar en nuestro proyecto?
          </h1>

          <div className="max-w-full w-full px-5 ">
            <p className="text-gray-300 text-[18px] text-start mb-10 ">
              Apasionado del deporte o si quieres formar parte de nuestro
              proyecto, Deja tu email.
            </p>
            <form className="flex flex-col lg:flex-row lg:space-y-0 gap-4  md:space-y-5   ">
              <input
                type="email"
                placeholder="Pon tu email...*"
                className="flex-grow px-4  bg-white lg:w-1/2 w-11/12   md:h-[55px] h-[50px] rounded-4xl   border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
              />
              <button
                type="submit"
                className=" bg-blue-700 lg:w-1/3 w-11/12 md:h-[55px] h-[50px]  rounded-4xl hover:bg-blue-500  text-white px-6   transition"
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

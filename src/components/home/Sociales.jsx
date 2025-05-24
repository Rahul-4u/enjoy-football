import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

export default function Sociales() {
  return (
    <div
      className="bg-cover bg-center relative py-10 md:py-20"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/kgYxbJPn/grass-2616911-1920.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Main container */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side - Location */}
        <div className="flex flex-col items-center text-center md:text-left gap-5 w-full md:w-1/2">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Ld7s1gbD/kisspng-american-football-computer-icons-clip-art-malta-football-association-5b52cf01abd4b7-77010194.png"
            alt="Football Icon"
          />
          <p className="text-yellow-300 text-2xl md:text-3xl font-bold">
            ¿Dónde Estamos?
          </p>
          <div className="w-full max-w-[600px]">
            <img
              src="https://i.ibb.co/YBMGmtS0/mapofworld-1200x719.png"
              alt="Map"
              className="w-full h-auto rounded-md shadow"
            />
          </div>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex flex-col items-center text-center md:text-left gap-5 w-full md:w-1/2">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Ld7s1gbD/kisspng-american-football-computer-icons-clip-art-malta-football-association-5b52cf01abd4b7-77010194.png"
            alt="Football Icon"
          />
          <p className="text-yellow-300 text-2xl md:text-3xl font-bold">
            Nuestras Redes Sociales
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white text-[26px]">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-400 bg-blue-800 p-2 w-10 h-10 rounded-sm transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-400 bg-red-600 p-2 w-10 h-10 rounded-sm transition" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-green-400 bg-green-600 p-2 w-10 h-10 rounded-sm transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-400 bg-pink-600 p-2 w-10 h-10 rounded-sm transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

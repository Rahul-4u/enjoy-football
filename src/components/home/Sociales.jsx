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
      className="md:h-[600px] h-auto w-full bg-cover bg-center relative flex items-center py-10 md:py-0"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/kgYxbJPn/grass-2616911-1920.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* Main container */}
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left side - Content */}
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Ld7s1gbD/kisspng-american-football-computer-icons-clip-art-malta-football-association-5b52cf01abd4b7-77010194.png"
            alt="Football Icon"
          />
          <p className="text-yellow-300 text-[24px] md:text-[27px] font-bold">
            ¿Donde Estamos?
          </p>
          <div className="max-w-[650px] w-full px-4 md:px-0">
            <img
              src="https://i.ibb.co/YBMGmtS0/mapofworld-1200x719.png"
              alt="Map"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Right side - Social Icons */}
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Ld7s1gbD/kisspng-american-football-computer-icons-clip-art-malta-football-association-5b52cf01abd4b7-77010194.png"
            alt="Football Icon"
          />
          <p className="text-yellow-300 text-[24px] md:text-[27px] font-bold">
            Nuestras Redes Sociales
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-2 text-white text-[26px]">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="hover:text-blue-500 bg-blue-800 p-2 w-10 h-10 rounded-sm transition" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-500 bg-red-600 p-2 w-10 h-10 rounded-sm transition" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="hover:text-green-500 bg-green-600 p-2 w-10 h-10 rounded-sm transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 bg-pink-500 p-2 w-10 h-10 rounded-sm transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

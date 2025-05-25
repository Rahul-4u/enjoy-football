import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center text-center space-y-6">
          <img
            src="https://i.ibb.co/RGCvszhX/logo-web-x2-600x142.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />
          <h2 className="text-[20px]">Diversión y Superación</h2>
          <div className="flex space-x-4 text-xl">
            <a
              href="#"
              className="hover:text-yellow-400 text-red-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 text-red-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 text-red-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 text-red-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/*-------- ENLACES section ----------*/}
        <div className="text-center md:text-left">
          <h3 className="text-[23px] mb-4 font-semibold text-center">ENLACES DE INTERES</h3>
          <ul className="space-y-2 text-[18px]">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Aviso Legal y Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Videos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACTO section  */}
        <div className="text-center ">
          <h3 className="text-[23px] mb-4 font-semibold">CONTACTO</h3>
          <ul className="space-y-2 text-[18px]">
            <li>Movil: +34.695.048.265</li>
            <li>Movil: +34.692.19.20.30</li>
            <li>
              Email:{" "}
              <a
                href="mailto:info@enjoyfootball.es"
                className="hover:text-yellow-400 transition"
              >
                info@enjoyfootball.es
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © Copyright 2022 | enjoyfootball.es 2025 | All Rights Reserved | Powered
        by EnjoyFootball
      </div>
    </footer>
  );
}

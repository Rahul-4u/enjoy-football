import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SemanaSanta = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-12  text-white">
      {/* Left section */}
      <div className="relative w-full lg:w-1/2 mb-10 md:mb-0">
        {/* Transparent number */}
        <h1 className="absolute text-[12rem] top-[-40px] left-0 text-white/30 font-bold leading-none select-none z-0">
          1
        </h1>

        {/* Title and content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold my-12">Semana Santa</h2>

          <div className="text-4xl mb-6 flex items-end justify-center">
            <span className="text-2xl  text-white">
              <FontAwesomeIcon icon={faPlaceOfWorship} size="0.02x" />
            </span>
          </div>

          <p className="mb-4 text-lg">
            Tenemos un amplio abanico de opciones con:
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Profesores y monitores titulados.</li>
            <li>Instalaciones profesionales</li>
            <li>Material innovador</li>
          </ul>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full lg:w-1/2 flex flex-col md:mt-15 mt-5 justify-end items-end ">
        <img
          src="https://i.ibb.co/Zzg312SL/architecture-g108fb9059-1920.jpg"
          alt="Semana Santa"
          className="lg:w-3/4 w-full h-full lg:h-[550px] object-cover  rounded-xl lg:rounded-bl-[100px] rounded-bl-[50px]"
        />
      </div>
    </section>
  );
};

export default SemanaSanta;

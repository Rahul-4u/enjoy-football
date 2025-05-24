import { faEarthAmericas, faPlaceOfWorship, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Verano = () => {
  return (
    <section className="flex  lg:flex-row items-center flex-col-reverse justify-between min-h-screen px-6 md:px-16 py-12  text-white">
      {/* Right section */}
      <div className="w-full lg:w-1/2 md:pt-15 pt-5 flex flex-col  justify-end items-start ">
        <img
          src="https://i.ibb.co/Zzg312SL/architecture-g108fb9059-1920.jpg"
          alt="Semana Santa"
          className="lg:w-3/4 w-full h-full md:h-[550px] object-cover  rounded-xl lg:rounded-br-[100px] rounded-br-[50px]"
        />
      </div>
      {/* Left section */}
      <div className="relative w-full lg:w-1/2 mb-10 md:mb-0  ">
        {/* Transparent number */}
        <h1 className="absolute text-[12rem] top-[-40px] left-0 text-white/30 font-bold leading-none select-none z-0">
          2
        </h1>

        {/* Title and content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-semibold my-12">Verano</h2>

          <div className="text-4xl mb-6 flex  items-end justify-center">
            <span className="text-2xl  text-white">
              <FontAwesomeIcon icon={faUmbrellaBeach} size="0.02x" />
            </span>
          </div>

          <p className="mb-4 text-lg">
            En los días no lectivos realizamos jornadas llenas de actividades
            deportivas y creativas con:
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Profesores y monitores titulados.</li>
            <li>Instalaciones profesionales</li>
            <li>Material innovador</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Verano;

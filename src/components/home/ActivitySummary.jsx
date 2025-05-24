import React from "react";
import { FaCamera, FaPencilAlt, FaStar } from "react-icons/fa";
import ImageGallery from "./ImageGallery";

export default function ActivitySummary() {
  return (
    <div className="px-4">
      {/* main section  start*/}
      <div className="max-w-[1440px] mx-auto my-10">
        {/* Nuestras Puntuaciones */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
          {/* Nuestras Puntuaciones */}
          <div className="flex flex-col items-center text-start">
            <span className="text-red-600 text-5xl mb-2">
              <FaPencilAlt />
            </span>
            <h1 className="text-[27px] font-semibold">Nuestras Puntuaciones</h1>
            <h2 className="text-[21px] font-semibold mb-4">
              Nuestros usuarios puntúan el servicio ofrecido:
            </h2>
            <div>
              {/* Section 1 */}
              <div className="my-5">
                <p className="text-[20px] text-gray-600">
                  ¿Está content@ con la Actividad que EnjoyFootball desarrolla
                  en su club/colegio?
                </p>
                <div className="flex gap-2  justify-start my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xl text-amber-500" />
                  ))}
                  <span>5/5</span>
                </div>
              </div>
              {/* Section 2 */}
              <div className="my-5">
                <p className="text-[20px] text-gray-600">
                  ¿Como puntuaría el ambiente durante las sesiones de
                  entrenamiento?
                </p>
                <div className="flex gap-2 items-center justify-start my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xl text-amber-500" />
                  ))}
                  <span>5/5</span>
                </div>
              </div>
              {/* Section 3 */}
              <div className="my-5">
                <p className="text-[20px] text-gray-600">
                  ¿Cómo califica el trato por parte de los entrenadores?
                </p>
                <div className="flex gap-2 items-center justify-start my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-xl text-amber-500" />
                  ))}
                  <span>5/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Últimas Fotos */}
          <div className="flex flex-col items-center text-center">
            <span className="text-red-600 text-5xl mb-2">
              <FaCamera />
            </span>
            <h1 className="text-[27px] font-semibold mb-4">Últimas Fotos</h1>
            <div className="w-full">
              <ImageGallery />
            </div>
          </div>

          {/* Campamentos */}

          <div className="flex flex-col items-center text-center">
            <span className="text-red-600 text-5xl mb-2">
              <FaPencilAlt />
            </span>
            <h1 className="text-[27px] font-semibold mb-4">Campamentos</h1>

            <div
              className="inline-block p-0.5  text-red-600 rounded z-0 shadow"
              style={{
                backgroundImage: "url(https://i.ibb.co/qM2w22jw/mask-1.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
                filter:
                  "invert(22%)  hue-rotate(15deg) brightness(130%) contrast(81%)",
              }}
            >
              <img
                src="https://i.ibb.co/x8f9qNR7/campus.png"
                alt="campus"
                className="max-w-full h-auto rounded brightness-150 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

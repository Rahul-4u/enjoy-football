import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaceOfWorship,
  faUmbrellaBeach,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

export default function OurCamps() {
  const camps = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faPlaceOfWorship}
          size="6x"
          style={{ color: "#ff0000" }}
        />
      ),
      title: "Semana Santa",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faUmbrellaBeach}
          size="6x"
          style={{ color: "#ff0000" }}
        />
      ),
      title: "Verano",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faEarthAmericas}
          size="6x"
          style={{ color: "#ff0000" }}
        />
      ),
      title: "Internacionales",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-[1440px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold hover:text-sky-600 mb-10 text-start">
        Nuestros Campamentos:
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {camps.map((camp, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 p-6  hover:scale-105 transition-transform duration-300"
          >
            <div >{camp.icon}</div>
            <h3 className="text-[27px] font-bold text-gray-900">{camp.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

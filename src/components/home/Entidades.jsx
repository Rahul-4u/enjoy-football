import React from "react";

export default function Entidades() {
  const images = [
    "https://i.ibb.co/Q3WqtwW0/liceofrances.png",
    "https://i.ibb.co/zWtpNp9W/brains-400x415.png",
    "https://i.ibb.co/Q74y72Ly/sis-212x300.png",
    "https://i.ibb.co/Ldt65bH0/dynamic-coaching.png",
    "https://i.ibb.co/0R2GFP77/sis.png",
  ];

  return (
    <div className="px-4 py-8 max-w-[1440px] mx-auto">
      <h2 className="text-2xl text-[18px]  hover:text-sky-600 mb-6 text-start">
        Entidades con las que colaboramos:
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className=" p-4 w-60 flex justify-center cursor-pointer items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Entidad ${index + 1}`}
              className="max-h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

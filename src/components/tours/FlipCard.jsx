import { useState } from "react";
import "../../index.css";

const FlipCard = ({ card }) => {
  const [flipped, setFlipped] = useState(false);

  if (!card) return null;

  // Split Incluido string into lines for the list
  const incluidoItems = card.Incluido ? card.Incluido.split("\n") : [];

  return (
    <div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="w-full h-80 perspective md:m-4 cursor-pointer"
    >
      <div
        className={`relative w-full h-80 transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div
          className="absolute w-full brightness-150 h-full rounded-xl text-white flex items-center justify-center backface-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold  bg-opacity-50 px-4 py-2 rounded-xl">
              {card.title || "No Title"}
            </h2>
            <h3 className="text-xl text-yellow-400"> {card.country}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full rounded-xl bg-gray-200 text-gray-800 flex flex-col items-start justify-center p-4 shadow-lg backface-hidden rotate-y-180 overflow-auto">
          <h3 className="text-lg font-semibold mb-2">
            {card.title || "No Title"}
          </h3>
          <p className="text-sm mb-1">
            <strong>Description:</strong>{" "}
            {card.description || "No description available."}
          </p>
          <p className="text-sm mb-2">
            <strong>Requisitos:</strong>{" "}
            {card.Requisitos || "No description available."}
          </p>
          <div className="text-sm">
            <strong>Incluido:</strong>
            <ul className="list-disc list-inside ml-4">
              {incluidoItems.length > 0 ? (
                incluidoItems.map((item, idx) => (
                  <li key={idx}>{item.replace(/^- /, "")}</li> 
                ))
              ) : (
                <li>No information available.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

import React from "react";
import FlipCard from "./FlipCard";
import { div } from "framer-motion/client";

const data = [
  {
    title: "Atlético Madrid",
    subTitle: "Feel the heat of La Liga action",
    country: "Spain",
    image: "https://i.ibb.co/SD5h8TwT/slideratm.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "Estadio Wanda tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Barcelona",
    subTitle: "Live the Barça experience",
    country: "Spain",
    image: "https://i.ibb.co/NdC45PjQ/sliderbcn.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Camp Nou tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Ajax",
    subTitle: "Total Football heritage awaits",
    country: "Netherlands",
    image: "https://i.ibb.co/LXqTgnyc/sliderajax.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Johan Cruyff Arena tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Tottenham Hotspur",
    subTitle: "Premier League behind the scenes",
    country: "England",
    image: "https://i.ibb.co/xK8FfLL1/Tottenham-Hotspur.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Tottenham Stadium tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Sevilla",
    subTitle: "Andalusia’s football gem",
    country: "Spain",
    image: "https://i.ibb.co/9H5yBWKQ/slidersevi.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Ramón Sánchez Pizjuán tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Malmö",
    subTitle: "Scandinavian soccer charm",
    country: "Sweden",
    image: "https://i.ibb.co/ymjdtn43/sliderrm.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Malmö tour\n- 2 Entrenamientos Malmö Ciudad deportiva\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Manchester",
    subTitle: "Blue & Red – full football glory",
    country: "England",
    image: "https://i.ibb.co/v6SVbsPm/sliderpsv.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Etihad & Old Trafford tour\n- 2 Entrenamientos Ciudad Deportiva Manchester City\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "BVB Dortmund",
    subTitle: "The Yellow Wall experience",
    country: "Germany",
    image: "https://i.ibb.co/rGPK0gqj/sliderbvb.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- BVB Stadium tour\n- 2 Entrenamientos Ciudad Deportiva BVB\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Paris Saint-Germain",
    subTitle: "Explore French football’s finest",
    country: "France",
    image: "https://i.ibb.co/sJ6dR5kj/oporto.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Parc des Princes tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Bayern Munich",
    subTitle: "German precision football tour",
    country: "Germany",
    image: "https://i.ibb.co/SD5h8TwT/slideratm.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- Allianz Arena tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "Juventus",
    subTitle: "Live the black & white spirit",
    country: "Italy",
    image: "https://i.ibb.co/xK8FfLL1/Tottenham-Hotspur.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido: 
      "- Allianz Stadium Turin tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
  {
    title: "AC Milan",
    subTitle: "Italian style meets football glory",
    country: "Italy",
    image: "https://i.ibb.co/ymjdtn43/sliderrm.png",
    description: "Duración: 6 Días y 5 Noches",
    Requisitos: "Mínimo 20 jugadores y 20 Acompañantes",
    Incluido:
      "- San Siro tour\n- 2 Entrenamientos\n- 2 Partidos Amistosos\n- Todos los Traslados\n- City Tour",
  },
];


export default function NuestrosTours() {
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[27px] text-black  font-semibold mt-5 md:px-10 px-5">Nuestro Catalogo de Tours:</h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 my-20  px-5 gap-5">
          {data.map((card, index) => (
            <FlipCard key={index} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

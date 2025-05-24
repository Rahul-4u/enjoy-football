import React from "react";
import { motion } from "framer-motion";

export default function HomeCard() {
  const cards = [
    {
      id: 1,
      image: "https://i.ibb.co/Pzz4P05c/IMG-0798.jpg",
    },
    {
      id: 2,
      image: "https://i.ibb.co/5WK402jd/IMG-0190.jpg",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Q3xqQTtx/IMG-0504.jpg",
    },
  ];

  return (
    <section className="lg:h-[500px]  h-[890px] md:h-[1250px]  relative  bg-gradient-to-tl from-red-600 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:-translate-y-1/6 md:-translate-y-1/16 -translate-y-1/40 w-full px-6 md:px-13 max-w-[1440px] grid grid-cols-1  lg:grid-cols-3 gap-12">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative brightness-150  transform hover:scale-105 hover:-translate-y-2 duration-500 ease-in-out  bg-cover bg-center h-64 lg:h-96 md:h-116 rounded-md lg:rounded-br-[50px] rounded-br-[30px] overflow-hidden shadow-md hover:shadow-xl transition"
              style={{
                backgroundImage: `url('${card.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
                <div className="lg:my-15">
                  <h3 className="md:text-[30px] text-3xl font-semibold mb-2">
                    EnjoyFootBall Experience
                  </h3>
                  <p className="text-2xl text-yellow-500">
                    Look good, feel good
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

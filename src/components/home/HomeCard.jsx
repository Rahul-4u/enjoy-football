import React from "react";

export default function HomeCard() {
  return (
    <section className="relative bg-gradient-to-tl from-red-600 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Container */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center h-64 sm:h-72 md:h-80 lg:h-96 rounded-md rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage: "url('https://i.ibb.co/Pzz4P05c/IMG-0798.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your orders within 24 hours.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center h-64 sm:h-72 md:h-80 lg:h-96 rounded-md rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage: "url('https://i.ibb.co/5WK402jd/IMG-0190.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your orders within 24 hours.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center h-64 sm:h-72 md:h-80 lg:h-96 rounded-md rounded-br-[30px] md:rounded-br-[50px] overflow-hidden shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage: "url('https://i.ibb.co/Q3xqQTtx/IMG-0504.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your orders within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

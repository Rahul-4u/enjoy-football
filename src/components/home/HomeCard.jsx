import React from "react";

export default function HomeCard() {
  return (
    <section className="py-32 bg-gray-100 relative md:mb-30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Absolute Cards */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:-translate-y-1/6 md:-translate-y-1/16 -translate-y-1/40 w-full px-6 max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div
            className="relative bg-cover bg-center h-64 md:h-96 md:w- rounded-md md:rounded-br-[50px]  rounded-br-[30px] overflow-hidden shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage: "url('https://i.ibb.co/Pzz4P05c/IMG-0798.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your orders within 24 hours.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative bg-cover bg-center h-64 md:h-96 md:w- rounded-md md:rounded-br-[50px] rounded-br-[30px]  overflow-hidden shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage: "url('https://i.ibb.co/5WK402jd/IMG-0190.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your orders within 24 hours.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center h-64 md:h-96 md:w- rounded-md md:rounded-br-[50px] rounded-br-[30px]  overflow-hidden shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage: "url('https://i.ibb.co/Q3xqQTtx/IMG-0504.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p>Get your orders within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

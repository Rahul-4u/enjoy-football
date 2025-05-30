import React from "react";

export default function Campamentos() {
  return (
    <div className="relative py-0 lg:px-0 md:px-15 ">
      <div className="w-full mx-auto h-full ">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12  h-full">
          {/* Left Side Image with Animation */}
          <div className="hidden lg:block lg:col-span-6 relative h-full ">
            <img
              src="https://i.ibb.co/Xfw990X9/663400b5-354a-4e72-bb32-9b3a079e2554.jpg"
              alt="experience"
              className="rounded rounded-br-[40px] img-div h-full w-full object-cover object-left  absolute top-0 left-0 z-0 -translate-y-15"
            />
          </div>

          {/* Content section  */}
          <div className="col-span-1 lg:col-span-6 z-10 flex flex-col lg:my-5 justify-center h-full">
            <div className="px-6  lg:mx-16 my-14 relative bg-white flex md:space-y-6 space-y-4 flex-col">
              <h1 className="text-red-500 text-2xl sm:text-[28px]">
                Enjoy Football
              </h1>

              <h1 className="text-4xl sm:text-[38px] leading-tight">
                Campamentos EnjoyFootball:
              </h1>

              <p className="text-gray-400 text-lg sm:text-[20px] mb-4">
                Estos Campamentos están dirigidos a chic@s entre 4 y 17 años,
                serán realizados tanto internos como externos.
              </p>

              {/* YouTube video embed */}
              <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
                {/* YouTube video embed with fixed height and responsive width */}
                <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <iframe
                    src="https://www.youtube.com/embed/2jMzt1q-PzQ"
                    title="Campamentos EnjoyFootball"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full brightness-120"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

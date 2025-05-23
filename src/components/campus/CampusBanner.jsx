import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

export default function CampusBanner() {
  return (
    <div
      className="md:h-[300px] h-[250px] brightness-150 w-full bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/kgYxbJPn/grass-2616911-1920.jpg')",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/98 to-transparent" />

      {/* Main container */}
      <div className="max-w-[1440px] mx-auto w-full px-12 md:px-12 relative z-10 flex justify-between items-center">
        {/* Left side - Content */}
        <div className="text-white max-w-xl text-left ">
          <h1 className="text-4xl md:text-[58px]  mb-4">Campus</h1>
        </div>

        {/* Right side - Empty div (for spacing or future content) */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

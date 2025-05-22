import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://i.ibb.co/RGCvszhX/logo-web-x2-600x142.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-gray-300 font-medium">
              Home
            </a>
            <a
              href="/tours"
              className="text-white hover:text-gray-300 font-medium"
            >
              Tours
            </a>
            <a
              href="/campus"
              className="text-white hover:text-gray-300 font-medium"
            >
              Campus
            </a>

            {/* Flags (Desktop) */}
            <div className="flex items-center space-x-2 ml-4">
              <button className="text-xl hover:scale-110 transition-transform  hover:cursor-pointer">
                <img src="https://i.ibb.co/Z1HmN5Ct/es.png" alt="" />
              </button>
              <button className="text-xl hover:scale-110 transition-transform hover:cursor-pointer">
                <img src="https://i.ibb.co/zWzph39y/en.png" alt="" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                    className="text-white"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    className="text-white"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-900"
            >
              Home
            </a>
            <a
              href="/tours"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-900"
            >
              Tours
            </a>
            <a
              href="/campus"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-900"
            >
              Campus
            </a>
          </div>

          {/* Mobile Flags */}
          <div className="px-4 py-2 flex gap-4 bg-black">
            <button className="text-xl hover:scale-110 transition-transform  hover:cursor-pointer">
              <img src="https://i.ibb.co/Z1HmN5Ct/es.png" alt="" />
            </button>
            <button className="text-xl hover:scale-110 transition-transform hover:cursor-pointer">
              <img src="https://i.ibb.co/zWzph39y/en.png" alt="" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

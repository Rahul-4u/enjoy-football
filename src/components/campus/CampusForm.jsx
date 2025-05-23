import React from 'react'
import { HiMail } from 'react-icons/hi';

export default function CampusForm() {
  return (
    <div>
          <div className=" max-w-[1440px] mx-auto p-6 h-screen flex flex-col justify-center">
              <span className="text-red-600 text-7xl ">
                          <HiMail />
                        </span>
        <h1 className="text-[38px] text-red-600">EnjoyFootball</h1>
        <h3 className='text-[28px] text-gray-500'>
          Si deseas mas informacion por favor pon tu Email y nosotros
          contactaremos contigo.
        </h3>
        <form className="flex flex-col gap-4 w-full mx-auto my-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
         
          <textarea
            placeholder="Mensaje"
            className="border border-gray-300 rounded-xl  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-black md:w-1/8 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

import React from "react";

const videoData = [
  {
    title: "EnjoyFootball Highlights",
    description:
      "Soccer Experience Atletico de Madrid",
    img: "https://i.ibb.co/qZmDMrL/sddefault-1.jpg",
  },
  {
    title: "Top 10 Goals of the Year",
    description:
      "Enternadores en Madrid",
    img: "https://i.ibb.co/2m7p8hz/sddefault.jpg",
  },
  {
    title: "Training Like a Pro",
    description:
      "Group de lrlanda: Dynamic Coaching",
    img: "https://i.ibb.co/XfBGKp35/sddefault-2.jpg",
  },
];

export default function ExperienceVideo() {
  return (
    <div className="max-w-[1440px] mx-auto  my-5 px-4">
      <div className="flex flex-col items-center gap-4  lg:block  mb-28">
        <img
          src="https://i.ibb.co/Ld7s1gbD/kisspng-american-football-computer-icons-clip-art-malta-football-association-5b52cf01abd4b7-77010194.png"
          alt="Football Icon"
          className="w-10 h-10 mx-auto hidden lg:block my-5"
        />
        <h1 className="text-[47px] font-bold text-center">
          EnjoyFootball Experience
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-10">
        {videoData.map((url, index) => (
          <div key={index} className=" rounded-lg text-center  cursor-pointer lg:p-4 md:p-10 p-2 ">
            <div className="aspect-video  mb-28 relative">
              <img
                src={url.img}
                alt=""
                className="w-full h-full object-cover "
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" bg-gray-800 py-2  px-5  rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-10 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v18l15-9L5 3z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-2xl mb-2">{url.title}</h2>
            <p className=" text-[20px] text-blue-500">{url.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

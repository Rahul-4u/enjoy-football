import React from "react";

const videoData = [
  {
    title: "EnjoyFootball Highlights",
    description:
      "Experience the thrill of high-energy football matches from across the globe.",
    embedUrl: "https://www.youtube.com/embed/kVddMV-TrSw",
  },
  {
    title: "Top 10 Goals of the Year",
    description:
      "Watch the most incredible goals scored this season by your favorite players.",
    embedUrl: "https://www.youtube.com/embed/kVddMV-TrSw",
  },
  {
    title: "Training Like a Pro",
    description:
      "Get inspired by the intense training routines of world-class footballers.",
    embedUrl: "https://www.youtube.com/embed/kVddMV-TrSw",
  },
];

export default function ExperienceVideo() {
  return (
    <div className="max-w-[1440px] mx-auto my-20 px-4">
      <div className="flex flex-col items-center gap-4 mb-10">
        <img
          src="https://i.ibb.co/Ld7s1gbD/kisspng-american-football-computer-icons-clip-art-malta-football-association-5b52cf01abd4b7-77010194.png"
          alt="Football Icon"
          className="w-12 h-12 mx-auto"
        />
        <h1 className="text-[47px] font-bold text-center">
          EnjoyFootball Experience
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videoData.map((video, index) => (
          <div key={index} className=" rounded-lg  p-4">
            <div className="aspect-video mb-4 pb-10">
              <iframe
                width="100%"
                height="100%"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <p className="text-gray-600">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

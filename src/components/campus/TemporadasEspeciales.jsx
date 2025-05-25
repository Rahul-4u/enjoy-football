import {
  faPlaceOfWorship,
  faUmbrellaBeach,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TemporadasEspeciales() {
  return (
    <div className="bg-gradient-to-tl from-blue-800 via-sky-400 to-red-700  px-4 md:px-16 py-12 text-white h-auto">
      {/* For laptop: normal sections */}
      <div
        className="hidden max-w-[1440px] mx-auto my-10
       lg:block space-y-32"
      >
        {/* 1 */}
        <section className="flex items-center justify-between ">
          {/* Left content */}
          <div className="relative w-1/2">
            <h1 className="absolute text-[12rem] top-[-40px] left-0 text-white/30 font-bold leading-none select-none z-0">
              1
            </h1>
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold my-12">Semana Santa</h2>
              <div className="text-4xl mb-6 flex items-end justify-center">
                <FontAwesomeIcon icon={faPlaceOfWorship} />
              </div>
              <p className="mb-4 text-lg">
                Tenemos un amplio abanico de opciones con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Profesores y monitores titulados.</li>
                <li>Instalaciones profesionales</li>
                <li>Material innovador</li>
              </ul>
            </div>
          </div>
          {/* Right image */}
          <div className="w-1/2 flex justify-end">
            <img
              src="https://i.ibb.co/Zzg312SL/architecture-g108fb9059-1920.jpg"
              alt="Semana Santa"
              className="w-3/4 h-[550px] object-cover rounded-xl rounded-bl-[50px] lg:rounded-bl-[100px]"
            />
          </div>
        </section>

        {/* 2 */}
        <section className="flex flex-row-reverse items-center justify-between ">
          {/* Left content */}
          <div className="relative w-1/2">
            <h1 className="absolute text-[12rem] top-[-40px] left-0 text-white/30 font-bold leading-none select-none z-0">
              2
            </h1>
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold my-12">Verano</h2>
              <div className="text-4xl mb-6 flex items-end justify-center">
                <FontAwesomeIcon icon={faUmbrellaBeach} />
              </div>
              <p className="mb-4 text-lg">
                En los días no lectivos realizamos jornadas llenas de
                actividades deportivas y creativas con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Profesores y monitores titulados.</li>
                <li>Instalaciones profesionales</li>
                <li>Material innovador</li>
              </ul>
            </div>
          </div>
          {/* Right image */}
          <div className="w-1/2 flex justify-start">
            <img
              src="https://i.ibb.co/BHCXC5pY/map-gb395d3750-1920-1.jpg"
              alt="Verano"
              className="w-3/4 h-[550px] object-cover rounded-xl rounded-br-[50px] lg:rounded-br-[100px]"
            />
          </div>
        </section>

        {/* 3 */}
        <section className="flex items-center justify-between ">
          {/* Left content */}
          <div className="relative w-1/2">
            <h1 className="absolute text-[12rem] top-[-40px] left-0 text-white/30 font-bold leading-none select-none z-0">
              3
            </h1>
            <div className="relative z-10">
              <h2 className="text-4xl font-semibold my-12">
                3 Internacionales:
              </h2>
              <div className="text-4xl mb-6 flex items-end justify-center">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </div>
              <p className="mb-4 text-lg">
                Experiencias a medida para los almun@s con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Profesores y monitores titulados.</li>
                <li>Instalaciones profesionales</li>
                <li>Material innovador</li>
              </ul>
            </div>
          </div>
          {/* Right image */}
          <div className="w-1/2 flex justify-end">
            <img
              src="https://i.ibb.co/BHCXC5pY/map-gb395d3750-1920-1.jpg"
              alt="Internacionales"
              className="w-3/4 h-[550px] object-cover rounded-xl rounded-br-[50px] lg:rounded-br-[100px]"
            />
          </div>
        </section>
      </div>

      {/* ------------img view------------------------ */}
      <div className="lg:hidden">
        {/* Images row */}
        <div className="block space-x-4 mb-12">
          <img
            src="https://i.ibb.co/Zzg312SL/architecture-g108fb9059-1920.jpg"
            alt="Semana Santa"
            className="w-full h-96 md:h-screen   object-cover rounded-xl rounded-bl-[50px]"
          />
          <img
            src="https://i.ibb.co/SXpPkpJL/beach-g6583af003-1920-1.jpg
"
            alt="Verano"
            className="ww-full h-96 md:h-screen  h-40 object-cover rounded-xl rounded-br-[50px]"
          />
          <img
            src="https://i.ibb.co/BHCXC5pY/map-gb395d3750-1920-1.jpg"
            alt="Internacionales"
            className="w-full h-96 md:h-screen  h-40 object-cover rounded-xl rounded-br-[50px]"
          />
        </div>

        {/* Content blocks stacked */}
        <div className="space-y-20">
          {/* 1 */}
          <div className="relative">
            <h1 className="absolute text-[6rem] top-[-20px] left-0 text-white/30 font-bold leading-none select-none z-0">
              1
            </h1>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-6">Semana Santa</h2>
              <div className="text-3xl mb-6 flex items-end">
                <FontAwesomeIcon icon={faPlaceOfWorship} />
              </div>
              <p className="mb-4 text-base">
                Tenemos un amplio abanico de opciones con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Profesores y monitores titulados.</li>
                <li>Instalaciones profesionales</li>
                <li>Material innovador</li>
              </ul>
            </div>
          </div>

          {/* 2 */}
          <div className="relative">
            <h1 className="absolute text-[6rem] top-[-20px] left-0 text-white/30 font-bold leading-none select-none z-0">
              2
            </h1>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-6">Verano</h2>
              <div className="text-3xl mb-6 flex items-end">
                <FontAwesomeIcon icon={faUmbrellaBeach} />
              </div>
              <p className="mb-4 text-base">
                En los días no lectivos realizamos jornadas llenas de
                actividades deportivas y creativas con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Profesores y monitores titulados.</li>
                <li>Instalaciones profesionales</li>
                <li>Material innovador</li>
              </ul>
            </div>
          </div>

          {/* 3 */}
          <div className="relative">
            <h1 className="absolute text-[6rem] top-[-20px] left-0 text-white/30 font-bold leading-none select-none z-0">
              3
            </h1>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-6">
                3 Internacionales:
              </h2>
              <div className="text-3xl mb-6 flex items-end">
                <FontAwesomeIcon icon={faEarthAmericas} />
              </div>
              <p className="mb-4 text-base">
                Experiencias a medida para los almun@s con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Profesores y monitores titulados.</li>
                <li>Instalaciones profesionales</li>
                <li>Material innovador</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

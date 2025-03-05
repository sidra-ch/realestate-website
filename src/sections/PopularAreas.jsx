import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import area1 from "../components/images/area1.jpg";
import area2 from "../components/images/area2.jpg";
import area3 from "../components/images/area3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const PopularAreas = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      data-aos="zoom-in"
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}
    >
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center
         flex-col items-center lg:px-20 px-6 py-20 gap-20`}
      >
        <div
          id="top"
          className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8"
        >
          <div>
            <h1
              data-aos="zoom-in"
              className="text-red-600 text-2xl dark:text-red-600"
            >
              POPULAR AREAS
            </h1>
            <h1
              data-aos="zoom-in"
              className="text-black text-[40px] font-bold text-xl leading-10 mt-4 dark:text-slate-600"
            >
              Explore most <br></br>popular areas
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area1})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area2})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              style={{ backgroundImage: `url(${area3})` }}
              className="h-[400px] bg-cover bg-center rounded-xl"
            ></div>
          </div>
        </div>
        <div
          id="bottom"
          className="w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center lg:items-start gap-6"
        >
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-7xl font-semibold dard:text-white">
              5k
            </h1>
            <h1 className="text-white">
              ACTIVE<br></br>LISTINGS
            </h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-7xl font-semibold dard:text-white">
              3k
            </h1>
            <h1 className="text-white">
              ACTIVE<br></br>LISTINGS
            </h1>
          </div>
          <div
            data-aos="slide-up"
            data-aos-delay="200"
            className="flex justify-center lg:items-center gap-8 w-full"
          >
            <h1 className="text-black text-7xl font-semibold dard:text-white">
              9k
            </h1>
            <h1 className="text-white">
              ACTIVE<br></br>LISTINGS
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularAreas;

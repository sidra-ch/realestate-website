import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import heroimg from "../components/images/heroimg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSun, FaMoon } from "react-icons/fa6";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  // Debugging: Log darkMode state
  console.log("Dark Mode State:", darkMode);

  return (
    <>
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 top-20 right-6 z-50"
      >
        {darkMode ? (
          <FaMoon size={25} className="text-black" />
        ) : (
          <FaSun size={25} className="text-black" />
        )}
      </button>

      {/* Hero section */}
      <div className={`${darkMode ? "dark bg-black" : "light bg-gray-300"}`}>
        <section
          id="hero"
          className="w-[95%] h-[600px] mx-auto bg-cover  object-contain bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: `url(${heroimg})` }}
        >
          <h1
            data-aos="zoom-in"
            className="text-6xl text-white font-bold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]"
          >
            Find your new home!
          </h1>
          <p
            data-aos="zoom-in"
            className="text-white text-3xl font-semibold lg:pr-[500px] pr-0"
          >
            "Cheers to your new home! This milestone marks the start of a
            journey filled with stability, growth, and a place to build your
            dreams."
          </p>
        </section>
      </div>

      {/* Form section */}
      <div
        className={`${
          darkMode ? "dark bg-black" : "light bg-transparent"
        } z-10`}
      >
        <div
          data-aos="zoom-in"
          id="form"
          className={`${
            darkMode ? "dark bg-slate-600" : "light bg-white"
          } lg:w-[70%] m-auto w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14`}
        >
          <div className="w-full">
            <h1 className="text-black font-semibold ">LOCATION</h1>
            <input
              type="text"
              placeholder="Enter an address, state, city or pincode"
              className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold ">TYPE</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Select Property
              </option>
              <option value="option1">Rentals</option>
              <option value="option2">Sales</option>
              <option value="option3">Commercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black font-semibold">CATEGORY</h1>
            <select
              name="selectOption"
              id="selectOption"
              className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md"
            >
              <option value="" disabled selected>
                Property Category
              </option>
              <option value="option1">Apartments</option>
              <option value="option2">Plot</option>
              <option value="option3">Villas</option>
              <option value="option4">Building</option>
              <option value="option5">Shop</option>
            </select>
          </div>
          <button className="dark:hover:bg-black bg-red-600 light:hover:bg-white light:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-100 transition-transform duration-300">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;

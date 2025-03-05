import React, { useEffect } from "react";
import aboutimg from "../components/images/aboutimg.jpg"; // Ensure the path to your image is correct
import { useDarkMode } from "../components/DarkModeContext"; // Ensure the path to your context is correct
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialize AOS
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
    <section
      id="About"
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div data-aos="zoom-in">
        <img
          src={aboutimg}
          className="rounded-2xl lg:w-[800px] lg:h-[600px] w-full h-auto object-cover"
          alt="About Us"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <h1 data-aos="zoom-in" className="text-red-500 ">
          WHO WE ARE
        </h1>

        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black dark:text-slate-600  text-[40px] font-semibold leading-10"
        >
          Transforming Real Estate Dreams into Reality with Expert Guidance
        </h1>

        <p
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-gray-600  text-justify text-xl"
        >
          We’re here to help you buy, sell, or invest with confidence. With deep
          market expertise, honest guidance, and personalized solutions, we make
          your property dreams a reality. Whether you’re a first-time buyer or
          seasoned investor, we deliver results and build lasting relationships.
          Your perfect home starts here!
        </p>

        <button
          className={`bg-red-600 hover:bg-black dark:hover:text-white text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300`}
        >
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default About;

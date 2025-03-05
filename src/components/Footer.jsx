import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebook,
  FaYoutube,
  FaBuilding,
  FaInstagram,
  FaTwitter,
  FaMobile,
  FaFax,
  FaMoon,
  FaSun,
  FaArrowUp,
} from "react-icons/fa6";

const socialLinks = [
  { icon: FaFacebook, url: "https://facebook.com" },
  { icon: FaInstagram, url: "https://instagram.com" },
  { icon: FaTwitter, url: "https://twitter.com" },
  { icon: FaYoutube, url: "https://youtube.com" },
];
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../components/images/prop7.jpg";
import prop8 from "../components/images/prop8.jpeg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Real estate journey provide you expert advice, exclusive deals, and
            a hassle-free experience. Your dream home awaits!
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div
              id="social-icons"
              className="flex justify-start items-center gap-4 mt-4"
            >
              {socialLinks.map(({ icon: Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
          <h1 className="text-white mt-8">
            Copyright Real State, All Right Reserved
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-5" />
            <p className="text-slate-200">
              Connect with us for top real estate deals, expert advice, and
              hassle-free property transactions today!
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">sidrach@gmail.com</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">333 333 333</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">111 222 333</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-100 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">
                Villa with the amazing view
              </h1>
              <p className="text-slate-400">$ 284.98</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt=""
              className="w-[120px] rounded-lg transform hover:scale-100 cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Smart view from beach</h1>
              <p className="text-slate-400">$ 284.98</p>
            </div>
          </div>
        </div>
      </footer>
      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-5 top-20 z-30"
        >
          {darkMode ? (
            <FaMoon size={25} className="text-black" />
          ) : (
            <FaSun size={25} className="text-black" />
          )}
        </button>
      </div>
    </>
  );
};

export default Footer;

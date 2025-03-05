import { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      number: data.number,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/allylvla", userInfo);
      toast.success("✅ Your message has been sent!", { duration: 3000 });
      reset();
    } catch (error) {
      toast.error("❌ Something went wrong, please try again.");
    }
  };

  const { darkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "dark bg-black" : "light bg-transparent"
      } pb-20 px-4`}
    >
      <section
        id="Contact"
        className={`${
          darkMode ? "dark bg-gray-500" : "light bg-red-100"
        } lg:w-3/4 md:w-4/5 w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-20 px-6 py-16 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-8 flex flex-col justify-center items-start gap-4 rounded-xl w-full"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-gray-400">
            Send a message today
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <label className="block text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full Name is required" })}
              type="text"
              placeholder="Enter your full name here"
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <label className="block text-gray-700 dark:text-gray-300 mt-4">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <label className="block text-gray-700 dark:text-gray-300 mt-4">
              Mobile Number
            </label>
            <input
              {...register("number", { required: "Mobile number is required" })}
              type="tel"
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border text-white rounded-lg"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}

            <label className="block text-gray-700 dark:text-gray-300 mt-4">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows="4"
              placeholder="Enter your message here..."
              className="w-full px-4 py-2 border text-white rounded-lg"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            <button
              type="submit"
              className="bg-red-600 w-full text-md px-6 py-3 text-white font-semibold rounded-lg hover:bg-black dark:hover:bg-red-700 cursor-pointer mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-start gap-6 rounded-xl  p-10">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-red-700 font-bold text-xl"
          >
            Reach us
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-delay="400"
            className="text-black text-2xl font-semibold dark:text-gray-400"
          >
            "Get in touch with us for the best investments."
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-lg text-gray-700 dark:text-gray-400"
          >
            For the best property sale and purchase, get trusted, affordable,
            and exclusive deals. Make a secure, reliable, and profitable
            investment in luxury, hassle-free real estate.
          </p>
          <button className="bg-red-600 text-md px-6 py-3 text-white font-semibold rounded-lg hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            Send Email
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;

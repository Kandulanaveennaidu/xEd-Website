import { useEffect, useState } from "react";
import education1 from "../../assets/education1.jpg";
import education2 from "../../assets/education2.jpg";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? education1 : education2}
              alt="Education Image"
              className="sm:scale-125 relative -z-10 max-h-[400px] max-w-[9000px] drop-shadow-[20px_20px_6px_rgba(0,0,0,0.50)] rounded-[20px]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              xEd
            </p>
            {/* <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car Rental
            </h1> */}
            <p data-aos="fade-up" data-aos-delay="1000">
              Pioneering Decelopements tech, PRS tech and genetric advancements
              to-build entric eduction and hiring System.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

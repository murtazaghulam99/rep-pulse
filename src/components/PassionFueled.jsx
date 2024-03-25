import React, { useEffect } from "react";
import passionfuel from "../assets/passionfuel.png";
import AOS from "aos";
import "aos/dist/aos.css";

const PassionFueled = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-black passionside relative">
        <div className="mx-auto container flex md:justify-between justify-center lg:space-y-0 space-y-20 flex-wrap lg:flex-nowrap items-center">
          <div
            className="flex flex-col space-y-5 w-full max-w-[700px] justify-start text-start text-[#F8F8F8] text-[18px] md:pl-10 px-2 py-8 z-30"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="noir-bold md:text-[75px] text-[50px] leading-tight">
              Passion-Fueled Professionals
            </h1>
            <p className="noir-regular text-[20px]">
              Optimize Your Agency's Talent Pool By Securing Top-Notch
              Professionals And Save Up To 60% On Payroll.
            </p>

            <button className="group w-2/5 relative noir-medium text-white hover:text-black border-4 border-white h-16 overflow-hidden">
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <a href="#" className="relative hover:text-black">
                Get Started
              </a>
            </button>
          </div>
          <img
            src={passionfuel}
            data-aos="fade-top"
            data-aos-duration="2000"
            className="w-full max-w-[500px] md:mr-36 mr-0"
            alt="passion fuel"
          />
        </div>
      </section>
    </>
  );
};

export default PassionFueled;

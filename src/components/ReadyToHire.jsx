import React, { useEffect } from "react";
import ctaimg from "../assets/ctaimg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ReadyToHire = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-[#00BDAD] w-full">
        <div className="flex xl:justify-between items-center justify-start xl:flex-nowrap flex-wrap xl:px-0 px-2">
          <div
            className="w-full max-w-[850px] text-balance text-white pt-5 xl:pl-14 pl-0 space-y-3"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1 className="md:text-[60px] text-[45px] noir-bold leading-tight">
              Ready To Hire A Marketing Enthusiast?
            </h1>
            <p className="text-[20px] pb-8 noir-regular">
              Running A Digital Marketing Agency Can Be A Real Juggling Act,
              Handling So Many Tasks All At Once. But, Let's Face It, You Can't
              Do Everything By Yourself.
            </p>
          </div>
          <div
            className="flex justify-between w-full max-w-[550px] items-center"
            data-aos="fade-top"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <button className="group w-2/4 relative text-white hover:text-black border-4 border-white h-16 overflow-hidden">
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
              <a href="#" className="relative hover:text-black noir-medium">
                Get Started
              </a>
            </button>
            <img
              src={ctaimg}
              className="xl:flex hidden h-full"
              width={200}
              alt="call to action"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadyToHire;

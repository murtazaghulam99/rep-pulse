import React, { useEffect } from "react";
import vidHero from "../assets/BG-Header.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="heroside pb-20 relative">
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover lg:flex hidden z-10 w-auto min-w-full min-h-full"
        >
          <source src={vidHero} type="video/mp4" />
        </video>
        <div className="relative mx-auto container flex items-center h-screen md:mb-12 mb-0 overflow-hidden">
          <div className="relative z-30 p-5 text-2xl rounded-xl pt-20">
            <div
              className="flex flex-col space-y-5 w-full max-w-[500px] xl:max-w-[650px] text-start"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h1 className="md:text-[60px] text-[50px] text-balance leading-tight noir-bold">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </h1>
              <p className="md:text-[20px] text-[16px] noir-regular pb-5 text-animation">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos beatae provident reprehenderit quibusdam
              </p>

              <button className="group w-2/5 relative h-16 overflow-hidden bg-black text-animation">
                <div className="absolute inset-0 w-0 bg-[#00BDAD] transition-all duration-[300ms] ease-out group-hover:w-full"></div>
                <a href="#" className="relative text-white noir-medium">
                  Talk To Us
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

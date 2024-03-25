import React from "react";
import badgeone from "../assets/foot-badge-one.png";
import badgetwo from "../assets/foot-badge-two.png";
import badgethree from "../assets/foot-badge-three.png";
import badgefour from "../assets/foot-badge-four.png";
import badgefive from "../assets/foot-badge-five.png";
import footerlogo from "../assets/footerlogo.svg";
import fb from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twit from "../assets/twiter.svg";
import yt from "../assets/youtube.svg";
import arrowft from "../assets/arrowft.svg";

const Footer = () => {
  return (
    <>
      <section className="bg-[#0F0F0F] w-full py-10 px-2">
        <div className="mx-auto container">
          <div className="flex xl:justify-between justify-start xl:flex-nowrap flex-wrap pt-10">
            <div className="text-[#F8F8F8] w-full max-w-[420px] space-y-10">
              <h1 className="md:text-[65px] text-[45px] noir-bold leading-tight">
                How Can We Help You?
              </h1>
              <div className="flex gap-5 items-center">
                <a
                  href="#"
                  className="md:text-[50px] text-[40px] noir-mediumitlaic transition duration-300 group"
                >
                  Get In Touch!
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#00BDAD]"></span>
                </a>
                <img src={arrowft} alt="" />
              </div>
            </div>
            <span className="border-r border-[#707070] xl:block hidden"></span>
            <div className="flex flex-col">
              <div className="flex w-full xl:flex-nowrap flex-wrap max-w-[900px] lg:space-x-20 space-x-5 py-10">
                <img
                  src={badgethree}
                  className="w-full max-w-[120px] h-[120px] hover-transition cursor-pointer"
                  alt="honour badge"
                />
                <img
                  src={badgefour}
                  className="w-full max-w-[120px] h-[120px] hover-transition cursor-pointer"
                  alt="honour badge"
                />
                <img
                  src={badgeone}
                  className="w-full max-w-[150px] h-[120px] hover-transition cursor-pointer"
                  alt="honour badge"
                />
                <div className="lg:space-y-8 space-y-5 lg:pt-0 pt-8">
                  <img
                    src={badgetwo}
                    className="w-[160px] hover-transition cursor-pointer"
                    alt="honour badge"
                  />
                  <img
                    src={badgefive}
                    className="w-[160px] hover-transition cursor-pointer"
                    alt="honour badge"
                  />
                </div>
              </div>
              <div className="flex justify-start gap-7 items-center w-full">
                <h1 className="md:text-[30px] noir-regular text-[20px] text-[#F8F8F8]">
                  Follow Us On
                </h1>
                <div className="w-32 border"></div>
                <div className="flex md:gap-6 gap-[.5rem]">
                  <img
                    src={fb}
                    className="w-10 hover-transition cursor-pointer"
                    alt=""
                  />
                  <img
                    src={insta}
                    className="w-10 hover-transition cursor-pointer"
                    alt=""
                  />
                  <img
                    src={linkedin}
                    className="w-10 hover-transition cursor-pointer"
                    alt=""
                  />
                  <img
                    src={twit}
                    className="w-10 hover-transition cursor-pointer"
                    alt=""
                  />
                  <img
                    src={yt}
                    className="w-10 hover-transition cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-14 text-[#707070]" />
          <div className="flex justify-between flex-wrap pt-10">
            <div className="flex lg:space-x-14 space-x-0 lg:flex-nowrap flex-wrap w-full max-w-[700px]">
              <img src={footerlogo} className="w-full max-w-[220px]" alt="" />
              <p className="text-[16px] text-[#F8F8F8] noir-regular lg:pt-0 pt-3">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt.
              </p>
            </div>
            <div className="flex text-[#F8F8F8] noir-regular text-[16px] lg:pt-0 pt-8 items-center space-x-8">
              <a href="#" className="transition duration-300 group">
                Terms And Agreement
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
              <div className="dot rounded-full invert"></div>
              <a href="#" className="transition duration-300 group">
                Privacy Policy
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

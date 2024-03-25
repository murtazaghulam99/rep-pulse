import React, { useEffect } from "react";
import accountmanagers from "../assets/account-2.mp4";
import HoverVideoPlayer from "react-hover-video-player";
import AOS from "aos";
import "aos/dist/aos.css";

const AccountManagers = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex md:justify-around justify-center flex-wrap lg:flex-nowrap lg:pt-32 pt-10 pb-5 px-2 gap-3">
        <div
          className="bg-gradient"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="my-5 lg:my-14 xl:my-4 cursor-pointer">
            <HoverVideoPlayer
              videoSrc={accountmanagers}
              onVideoPause={() => setIsVideoPlaying(false)}
              onVideoPlay={() => setIsVideoPlaying(true)}
              onVideoEnd={() => setIsVideoPlaying(false)}
              videoStyle={{ width: 520, height: 300, borderRadius: "500px" }}
            />
          </div>
        </div>
        <div
          className="space-y-4 w-full max-w-[550px] lg:text-start text-center"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="text-[#29296B] text-[32px] noir-medium">
            Account Managers
          </h1>
          <p className="text-[#0F0F0F] text-[18px] noir-medium pb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr. et justo duo dolores et ea rebum. Stet clita kasd
            gubergren,
          </p>
          <a href="#">
            <button className="text-[24px] text-[#0F0F0F] underline hover:no-underline noir-semibolditalic transition duration-300 group">
              Hire A Account Managers
              <span className="block max-w-0 group-hover:max-w-[300px] transition-all duration-500 h-1 bg-[#00BDAD]"></span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AccountManagers;

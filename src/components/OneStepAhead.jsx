import React, { useEffect } from "react";
import marketassociate from "../assets/sales-dep.svg";
import accmanage from "../assets/acc-manager.svg";
import bullseye from "../assets/bullseye.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import stayonestep from "../assets/stayonestep.mp4";

const OneStepAhead = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="bgOneStepAhead relative pb-2 h-[600px]">
        <div>
          <video
            autoPlay
            loop
            muted
            className="absolute h-full object-cover lg:flex hidden z-10 w-auto min-w-full min-h-full "
          >
            <source src={stayonestep} type="video/mp4" />
          </video>
        </div>
        <div className="relative mx-auto container flex items-center h-full md:mb-12 mb-0 overflow-hidden">
          <div className="relative z-30">
            <div className="mx-auto container text-balance text-center text-white space-y-2">
              <h1
                className="md:text-[70px] text-[40px] noir-bold"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                Stay One-Step Ahead With Rep Pulse!
              </h1>
              <p
                className="md:text-[20px] text-[16px] noir-regular"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Uncover The Secrets Of Hiring, Onboarding, And Training Your
                Virtual Assistant As We Share Tips, Tricks, And Success.
                Discover How To Unlock Massive Growth In Your Digital Marketing
                Agency By Hiring For These Three Key Roles:
              </p>
              <div
                className="flex justify-evenly items-center md:flex-row flex-col py-5 space-y-5 md:space-y-0"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <button className="group px-12 py-3 relative text-white hover:text-black border-2 border-white h-16 overflow-hidden ">
                  <div className="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
                  <div className="flex items-center gap-3">
                    <img
                      src={bullseye}
                      className="w-8 invert group-hover:invert-0"
                      alt=""
                    />
                    <span className="relative hover:text-black noir-semibold">
                      Marketing Associates
                    </span>
                  </div>
                </button>

                <button className="group px-14 py-3 relative text-white hover:text-black border-2 border-white h-16 overflow-hidden ">
                  <div className="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>
                  <div className="flex items-center gap-3">
                    <img
                      src={marketassociate}
                      className="w-10 invert group-hover:invert-0"
                      alt=""
                    />
                    <span className="relative hover:text-black noir-semibold">
                      Sales Development
                    </span>
                  </div>
                </button>

                <button className="group px-14 py-3 relative text-white hover:text-black border-2 border-white h-16 overflow-hidden ">
                  <div className="absolute inset-0 w-0 bg-white transition-all duration-[300ms] ease-out group-hover:w-full"></div>

                  <div className="flex items-center gap-3">
                    <img
                      src={accmanage}
                      className="w-8 invert group-hover:invert-0"
                      alt=""
                    />

                    <span className="relative hover:text-black noir-semibold">
                      Account Managers
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OneStepAhead;

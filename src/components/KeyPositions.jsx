import React, { useEffect } from "react";
import keypositionsimg from "../assets/why-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

const KeyPositions = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-[#0F0F0F] py-16 px-2">
        <div className="container mx-auto flex md:justify-between justify-center lg:space-y-0 space-y-20 lg:flex-nowrap flex-wrap items-center">
          <div
            className="flex flex-col space-y-5 w-full max-w-[700px] justify-start text-start text-balance text-[#F8F8F8] text-[18px]"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <h1 className="noir-bold md:text-[70px] text-[40px] leading-tight">
              Why Opt For These Key Positions?
            </h1>
            <p className="noir-regular">
              Well, Making The Wrong Hiring Choice Can Be Costly And Put A Brake
              On Your Progress. Why Not Boost Your Agency’s Growth Through Smart
              And Strategic Recruitment? When It Comes To Building Your Digital
              Marketing Dream Team, Finding The Right Fit Should Be Effortless.
              And We’re Here To Help You With That.
            </p>
            <p className="noir-semibolditalic">
              As Per To The Statistical Data An Average Agency Spends Up To 50%
              Of Its Revenue On Running Payroll
            </p>
            <p className="noir-regular">
              Let’s Connect And Discuss How You Can Save Up To 60% On Your
              Payroll Expenses While{" "}
              <span className="noir-semibold">
                Simultaneously Building A Mission-Driven Team
              </span>
            </p>

            <p className="noir-regular">
              We Offer An Easy Way To Hire. You Can Get Skilled Professionals
              Who Are Ready To Help Your Business Succeed Without The Hassle Of
              Trial-And-Error Hiring. Start Building A Strong Team For Your
              Agency That Can Take It To The Next Level.
            </p>
            <p className="noir-regular">
              <span className="noir-semibold">Learn How To Hire Smartly </span>
              <br />
              Check Out Our Free Book Called "Hiring Tips For Digital Marketing
              Agencies." It's Filled With Practical Advice Based On More Than 14
              Years Of Experience. This Guide Will Help You Avoid Common Hiring
              Mistakes And Set Your Agency Up For Success.
            </p>
          </div>
          <img
            src={keypositionsimg}
            className="w-full max-w-[700px]"
            data-aos="fade-right"
            data-aos-duration="2000"
            alt="key positions"
          />
        </div>
      </section>
    </>
  );
};

export default KeyPositions;

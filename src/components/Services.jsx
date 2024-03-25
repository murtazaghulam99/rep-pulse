import React, { useEffect } from "react";
import { services } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="mx-auto container py-14 px-2">
        <div className="flex justify-between items-center xl:flex-nowrap flex-wrap">
          <div
            className="w-full max-w-[610px] text-[#0F0F0F] space-y-6"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <h1 className="md:text-[50px] text-balance text-[40px] noir-bold leading-tight">
              Lorem ipsum dolor sit amet, cons etetur si sadipscing elitr.
            </h1>
            <p className="md:text-[20px] text-balance text-[16px] noir-regular">
              Our Digital Marketing Sales Experts Are Highly Qualified And
              Pretty Fluent In English. They Are Well-Trained In Essential
              Digital Marketing Tools And Can Handle All Your Cold Outreach
              Tasks With Ease. Join Forces With Our Top-Notch Sales Development
              Team And Keep Your Sales Momentum Going Strong
            </p>
          </div>
          <div
            className="grid lg:grid-cols-2 w-full max-w-[820px] gap-8 pt-10 xl:pt-0"
            data-aos="fade-up"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            {services.map((service, index) => (
              <div key={index}>
                <div className="flex gap-3">
                  <img src={service.icon} alt="" />
                  <h1 className="text-[#29296B] text-[30px] noir-medium">
                    {service.title}
                  </h1>
                </div>
                <p className="text-[20px] text-balance noir-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

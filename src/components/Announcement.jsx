import React, { useEffect } from "react";
import announcement from "../assets/img-2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Announcement = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="bg-[#0F0F0F] w-full">
        <div className="mx-auto flex lg:justify-around justify-center xl:flex-nowrap flex-wrap items-end px-3">
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={announcement}
              className="pt-10 w-full max-w-[950px]"
              alt="announcement"
            />
            <h4 className="absolute top-[30%] right-[10%] text-[40px] w-[40%] z-50 text-black noir-bold leading-tight">
              Lorem ipsum dolor sit amet, consetetur elitr, sed diam
            </h4>
          </div>
          <div
            className="w-full xl:max-w-[500px] text-balance text-[#F8F8F8] text-[18px] space-y-5 py-10 noir-regular"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
              Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
              Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum.
              Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum
              Dolor Sit Amet.
            </p>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet.
            </p>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo
              Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata
              Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit
              Amet, Consetetur Sadipscing Elitr, Sed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Announcement;

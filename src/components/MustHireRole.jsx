import React, { useEffect } from "react";
import MarketingAssociate from "./MarketingAssociate";
import SalesDevelopment from "./SalesDevelopment";
import AccountManagers from "./AccountManagers";
import AOS from "aos";
import "aos/dist/aos.css";

const MustHireRole = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="mx-auto container py-20">
        <h1
          className="text-center text-[#0F0F0F] md:text-[55px] lg:text-[65px] text-[40px] noir-bold leading-tight"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Top 3 Must-Hire Roles <br />
          For Digital Marketing Success
        </h1>
        <MarketingAssociate />
        <SalesDevelopment />
        <AccountManagers />
      </section>
    </>
  );
};

export default MustHireRole;

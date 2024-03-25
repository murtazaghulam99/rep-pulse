import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurRoleVideo from "./OurRoleVideo";

const OurRoles = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="pb-14 px-4">
        <div className="mx-auto container flex justify-start gap-5 lg:justify-between lg:flex-nowrap flex-wrap pt-20 pb-6 px-2">
          <div
            className="w-full max-w-[400px]"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <h1 className="text-[60px] noir-bold text-[#0F0F0F]">Our Roles!</h1>
            <h2 className="text-[28px] text-[#29296B] noir-medium">
              Marketing Associate
            </h2>
            <ul className="space-y-3 pt-5 list-item">
              <li className="text-[#0F0F0F] list-disc text-[20px] noir-semibold">
                Certified in High Level
              </li>
              <li className="text-[#0F0F0F] text-[20px] list-disc noir-semibold">
                Launch Key Media Buying Campaigns
              </li>
              <div>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Paid Ads
                </p>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Email Outreach
                </p>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Lead Generation
                </p>
              </div>
              <li className="text-[#0F0F0F] list-disc text-[20px] noir-semibold">
                CRM & Automations
              </li>
              <div>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Workflows
                </p>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Landing Pages & Forms
                </p>
              </div>
              <li className="text-[#0F0F0F] list-disc text-[20px] noir-semibold">
                Social Media Management
              </li>
              <div>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Content Creation
                </p>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Content Management
                </p>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Social Media Outreach
                </p>
                <p className="text-[#0F0F0F] text-[16px] noir-regular">
                  Content Marketing
                </p>
              </div>
              <li className="text-[#0F0F0F] list-disc text-[20px] noir-regular">
                Excellent Leadership Qualities
              </li>
              <li className="text-[#0F0F0F] list-disc text-[20px] noir-regular">
                Launch And Manage Podcasts/Webinars
              </li>
              <li className="text-[#0F0F0F] list-disc text-[20px] noir-regular">
                Experience Working With US Digital Marketing Agencie
              </li>
            </ul>
          </div>
          <OurRoleVideo />
        </div>
      </section>
    </>
  );
};

export default OurRoles;

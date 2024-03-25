import React, { useEffect } from "react";
import { items } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bgHowitworks py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          How It Works?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-white text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={item.icon}
                className="mx-auto h-16 w-16 mb-6"
                alt={item.title}
              />
              <h2 className="text-[26px] noir-medium pb-2">{item.title}</h2>
              <p className="text-[20px] noir-regular text-balance">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <section className="bgHowitworks">
    //   <div className="mx-auto container p-10">
    //     <h1 className="md:text-[75px] text-[40px] noir-bold text-white text-center">
    //       How It Works?
    //     </h1>
    //     <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 place-items-center md:place-items-baseline content-center xl:space-y-0 space-y-10 py-20">
    //       {items.map((item, index) => (
    //         <div
    //           key={index}
    //           className="w-full max-w-[300px] text-white text-balance text-center"
    //         >
    //           <img src={item.icon} className="mx-auto pb-5" alt="" />
    //           <h1 className="text-[26px] noir-medium pb-2">{item.title}</h1>
    //           <p className="text-[20px] noir-regular">{item.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    // <section className="bgHowitworks">
    //   <div className="mx-auto container pt-32">
    //     <h1
    //       className="md:text-[75px] text-[40px] noir-bold text-white text-center"
    //       data-aos="fade-left"
    //       data-aos-duration="500"
    //     >
    //       How It Works?
    //     </h1>
    //     <div
    //       className="flex pb-14 justify-between flex-wrap xl:flex-nowrap pt-5 items-center"
    //       data-aos="fade-up"
    //       data-aos-duration="2000"
    //     >
    //       {items.map((item) => (
    //         <div
    //           key={item.id}
    //           className="w-full max-w-[300px] text-white text-balance text-center"
    //         >
    //           <img src={item.icon} className="mx-auto mb-4" alt={item.title} />
    //           <h1 className="text-[26px] noir-medium mb-2">{item.title}</h1>
    //           <p className="text-[20px] noir-regular pb-10">
    //             {item.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default HowItWorks;

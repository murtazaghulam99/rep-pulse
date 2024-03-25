import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (toggle) {
        setToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggle]);

  return (
    <>
      <header className="w-full py-5 masthead z-50 px-2">
        <nav className="container mx-auto flex justify-between items-center">
          <div>
            <img src={logo} className="w-[200px]" alt="" />
          </div>
          <div className="flex w-full md:max-w-[400px] gap-5 justify-end md:justify-evenly items-center">
            <a
              href="#"
              className="text-[24px] md:block hidden noir-medium cursor-pointer transition duration-300 group"
            >
              Get In Touch!
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0F0F0F]"></span>
            </a>

            <div className="dot rounded-full w-4 h-4 md:flex hidden"></div>

            <div
              className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl p-2 hover:bg-gray-200"
              onClick={() => setToggle((prev) => !prev)}
            >
              <div className="space-y-2">
                <span
                  className={`block h-1 w-12 origin-center rounded-full bg-[#0F0F0F] transition-transform ease-in-out ${
                    toggle ? "translate-y-1.5 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block h-1 w-10 origin-center rounded-full bg-[#0F0F0F] transition-transform ease-in-out ${
                    toggle ? "w-12 -translate-y-1.5 -rotate-45" : ""
                  }`}
                ></span>
              </div>
            </div>

            <div className="flex items-center">
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } py-4 px-2 bg-slate-200 border top-24 right-14 w-[300px] h-screen fixed rounded-2xl sidebar`}
              >
                <ul className="list-none flex flex-col space-y-2 pt-3 text-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`py-3 px-4 w-full cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-gradient-to-r from-slate-300 to-slate-400 rounded-lg noir-semibold text-[20px] group
        ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}
        text-[#0F0F0F] transition-colors`}
                    >
                      <p>{nav.title}</p>
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#0F0F0F]"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

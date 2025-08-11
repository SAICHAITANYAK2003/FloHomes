import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-around py-7 w-full relative">
        <img src={assets.logo} alt="logo" className="w-40 cursor-pointer" />

        <ul className="text-white items-center gap-6 hidden md:flex">
          <li>
            <a
              className="border-b-2 border-transparent hover:border-white transition-all duration-500"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-transparent hover:border-white transition-all duration-500"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="border-b-2 border-transparent hover:border-white transition-all duration-500"
              href="#projects"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="border-b-2 border-transparent hover:border-white transition-all duration-500"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>

          <li>
            <a
              className="border-b-2 border-transparent hover:border-white transition-all duration-500"
              href="#contactus"
            >
              Contact us
            </a>
          </li>
        </ul>

        <button className="bg-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 hidden md:block">
          Sign up
        </button>

        {/* modile menu */}

        <div className="block md:hidden">
          <button
            onClick={() => setMobileMenu(true)}
            className=" bg-white p-2 rounded-full cursor-pointer"
          >
            <HiMenuAlt3 size={20} />
          </button>
          <AnimatePresence>
            {showMobileMenu && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  duration: 0.2,
                  ease: [0.17, 0.67, 0.83, 0.67], // smooth pop
                }}
                className="flex bg-white flex-col items-center justify-between gap-6 absolute top-5 left-0 right-0 px-6 py-5 rounded-2xl z-40 mx-4 "
              >
                <li
                  onClick={() => setMobileMenu(false)}
                  className="cursor-pointer absolute right-4"
                >
                  <IoIosCloseCircle size={40} />
                </li>
                <li className="mt-10">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>

                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>

                <li>
                  <a href="#contactus">Contact Us</a>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import Navbar from "./Navbar";
import { assets } from "../assets/assets";

const Home = () => {
  return (
    <div
      id="header"
      className="h-screen bg-no-repeat bg-cover bg-center  flex flex-col"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-white text-center leading-14  md:leading-24">
          Explore homes that <br /> fit your dreams
        </h1>

        <div className="mt-7 flex items-center gap-4">
          <a
            href="#projects"
            className="text-white border-2 border-white px-5 py-3 rounded-md text-lg cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contactus"
            className="text-white   bg-blue-500 px-5 py-3 rounded-md text-lg cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

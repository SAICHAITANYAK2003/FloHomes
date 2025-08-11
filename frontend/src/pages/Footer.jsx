import React from "react";
import { FaLinkedin, FaBriefcase } from "react-icons/fa6";

const likendInUrl = "https://www.linkedin.com/in/saichaitanyakoduri";

const portfolioUrl = "https://www.webinfloo.com";

const Footer = () => {
  return (
    <footer className="flex flex-col   items-center justify-around w-full py-16 text-sm text-gray-800/70 px-5">
      <div className="flex items-center gap-8">
        <a
          href="#"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Home
        </a>
        <a
          href="#about"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          About
        </a>
        <a
          href="#projects"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Projects
        </a>
        <a
          href="#testimonials"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Testimonials
        </a>
        <a
          href="#contactus"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4 mt-8 text-blue-600">
        <a href={likendInUrl} target="_blank">
          <FaLinkedin size={30} />
        </a>

        <a href={portfolioUrl} target="_blank">
          <FaBriefcase size={30} />
        </a>
      </div>
      <p className="mt-8 text-center">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          target="_blank"
          href={portfolioUrl}
          className="underline text-black text-lg"
        >
          sai chaitanya k
        </a>
        . All rights reservered.
      </p>
    </footer>
  );
};

export default Footer;

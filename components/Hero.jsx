"use client";
import React from "react";
import "../src/app/globals.css";


const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover custom-img ">
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        {/* animation of the book butotn, gotten from aditiakusuma on github */}
        <a
          className="relative px-8 py-2 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)]"
          href="mailto:graphixpm2015@gmail.com"
        >
          Book
        </a>
      </div>
    </div>
  );
};

export default Hero;

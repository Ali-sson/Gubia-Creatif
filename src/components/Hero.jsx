import React from "react";
import HeroBg from "../assets/heroBg1.jpeg";

const Hero = () => {
  return (
    <div
      className="relative  h-[60vh] md:h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* content here */}
        <h1 className="text-4xl font-bold text-white text-center italic">Book Your Cleaning Today <br />Fast, Easy, Reliable</h1>
      </div>
    </div>
  );
};

export default Hero;

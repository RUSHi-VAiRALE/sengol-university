"use client";

import React from "react";

const ProgramHero = ({ title, description, gradientFrom, gradientTo }) => {
  return (
    <section
      className={`relative bg-gradient-to-r from-[#6b4c2b] to-[#a37b52] py-20 md:py-32 overflow-hidden shadow-xl`}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto opacity-90 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Optional Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-48 h-48 bg-white opacity-5 rounded-full -top-10 -left-10"></div>
        <div className="absolute w-72 h-72 bg-white opacity-5 rounded-full -bottom-20 -right-20"></div>
      </div>
    </section>
  );
};

export default ProgramHero;

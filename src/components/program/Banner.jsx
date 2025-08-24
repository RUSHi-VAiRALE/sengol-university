"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChevronDown } from "react-icons/fa";

const Banner = ({ title, subtitle }) => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banner/01.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ad4a16]/50 via-[#8f3a17]/50 to-[#312518]/50"></div>
      </div>

      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-white/8 via-white/4 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:space-y-8 xl:space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-white/20 backdrop-blur-sm border border-white/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full"
          >
            <FaGraduationCap className="text-white text-lg lg:text-xl xl:text-2xl" />
            <span className="text-white text-sm lg:text-base xl:text-lg font-semibold uppercase tracking-wider">
              Academic Programs
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white/90 max-w-5xl mx-auto leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 lg:pt-8 xl:pt-10"
          >
            <button className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 hover:border-white/60 text-white font-semibold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 lg:gap-4 mx-auto text-base lg:text-lg xl:text-xl">
              Explore Programs
              <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/10 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-16 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white/8 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 right-8 w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white/6 rounded-full blur-sm"
        ></motion.div>
      </div>
    </section>
  );
};

export default Banner;

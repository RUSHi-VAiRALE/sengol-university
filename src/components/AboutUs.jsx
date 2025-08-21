// components/AboutUs.jsx
"use client"; // If this component is used in the App Router and has client-side interactions (like the SVG animation might later)

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGraduationCap, FaUsers, FaAward } from "react-icons/fa"; // For the arrow icon

// Import images (ensure these paths are correct relative to your /public directory)
// Example paths, adjust as per your actual folder structure:
import aboutH2_1 from "../../public/images/about/about__h2-1.png";
import aboutH2_2 from "../../public/images/about/about__h2-2.png";
import eCapPixIcon from "../../public/images/icon/e-cap-pix.svg";
import missionIcon from "../../public/images/icon/mission.svg";
import visionIcon from "../../public/images/icon/vission.svg";

const AboutUs = () => {
  const textPathRef = useRef(null);

  useEffect(() => {
    // This useEffect is for the SVG animation (circular text).
    // It's client-side logic, so it runs after mounting.
    const textPath = textPathRef.current;
    if (textPath) {
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6]">
      {/* Enhanced background accents with modern golden theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#D4AF37]/15 via-[#B8860B]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tl from-[#CD853F]/12 via-[#A0522D]/8 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-gradient-to-r from-[#D4AF37]/5 to-[#B8860B]/5 blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {" "}
        {/* Standard Tailwind container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content - Images */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex items-center justify-center">
              {/* Main Image with Modern Styling */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#B8860B]/20 to-[#D4AF37]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-3xl p-4 border border-[#D4AF37]/20 shadow-2xl">
                  <img
                    src="/images/about/sengol-student.jpg"
                    alt="Sengol International University Students"
                    className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Stats Cards */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-2xl p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-xs font-medium">Students</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-[#B8860B] to-[#CD853F] rounded-2xl p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-xs font-medium">Programs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Circle with University Branding */}
              <div className="absolute top-1/2 right-4 lg:right-8 -translate-y-1/2">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <FaGraduationCap className="text-2xl lg:text-3xl text-[#B8860B] mb-1 mx-auto" />
                      <div className="text-xs lg:text-sm font-bold text-[#B8860B]">2025</div>
                    </div>
                  </div>

                  {/* Rotating Text */}
                  <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                    <defs>
                      <path
                        id="circle-path"
                        d="M50,50 m-35,0a35,35 0 1,1 70,0a35,35 0 1,1 -70,0"
                        transform="scale(0.8) translate(10, 10)"
                      />
                    </defs>
                    <text
                      fill="#B8860B"
                      fontSize="8"
                      fontWeight="600"
                      className="uppercase tracking-wider"
                    >
                      <textPath href="#circle-path">
                        Sengol International University • Excellence in Education •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about__right--content space-y-6 lg:space-y-8">
              {/* Subtitle Badge */}
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 py-3 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-white text-sm" />
                </div>
                <span className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
                  Nurturing Talent with Excellence
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                About Sengol International University
              </motion.h2>

              {/* Description */}
              <motion.div
                className="space-y-4 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-base sm:text-lg lg:text-xl">
                  Sengol International University is committed to delivering quality education that blends tradition with modernity, shaping professionals ready to meet the challenges of a dynamic world.
                </p>
                <p className="text-base sm:text-lg lg:text-xl">
                  We foster academic excellence, holistic development, and social responsibility through innovative learning, expert faculty, and a student-centric environment.
                </p>
              </motion.div>
              {/* Mission & Vision Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Mission Card */}
                <motion.div
                  className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#D4AF37]/20 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaUsers className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#B8860B] transition-colors">
                        Our Mission
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Educate, Empower, Excel - Creating future leaders through innovative education and holistic development.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                  className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#D4AF37]/20 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#B8860B] to-[#CD853F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaAward className="text-white text-lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#B8860B] transition-colors">
                        Our Vision
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Building a Better Future Through Education - Inspiring minds to create positive global impact.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-4 px-8 py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-[#D4AF37]/30"
                >
                  <span className="text-xl">📚</span>
                  Learn More About Us
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

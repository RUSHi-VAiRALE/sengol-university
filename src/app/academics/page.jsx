"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUsers,
  FaChalkboardTeacher,
  FaGavel,
  FaShieldAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaArrowRight,
  FaStar,
  FaAward
} from "react-icons/fa";

const AcademicsOverview = () => {
  const sections = [
    {
      title: "Academic Calendar",
      href: "/academics/calender",
      desc: "View our comprehensive academic schedule, important dates, holidays, and examination periods for the current session.",
      icon: FaCalendarAlt,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Anti-Ragging Policy",
      href: "/academics/anti-ragging",
      desc: "Learn about our zero-tolerance anti-ragging policy ensuring student safety, well-being, and a harassment-free environment.",
      icon: FaShieldAlt,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-500/10 to-red-600/10",
    },
    {
      title: "Student Corner",
      href: "/academics/student-concern",
      desc: "Comprehensive rules, regulations, conduct guidelines, attendance policies, and library regulations for students.",
      icon: FaUsers,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
    },
    {
      title: "Training & Placement",
      href: "/academics/training-placement",
      desc: "Discover our training programs, placement opportunities, industry connections, and career development initiatives.",
      icon: FaGraduationCap,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
    },
  ];

  const stats = [
    { label: "Academic Programs", value: "50+", icon: FaAward },
    { label: "Qualified Faculty", value: "200+", icon: FaChalkboardTeacher },
    { label: "Industry Partners", value: "100+", icon: FaUsers },
    { label: "Success Rate", value: "95%", icon: FaStar },
  ];

  return (
    <div className="space-y-12 lg:space-y-16 xl:space-y-20">
      {/* Enhanced Header Section */}
      <motion.div
        className="text-center space-y-6 lg:space-y-8 xl:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full">
          <FaGraduationCap className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
          <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Academic Excellence
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          Academics Overview
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-medium">
          Sengol International University fosters academic brilliance through visionary leadership, top-tier faculty, and a safe, inclusive learning environment.
        </p>
      </motion.div>

      {/* Enhanced Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 xl:gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 text-center shadow-lg border border-[#ad4a16]/20 hover:shadow-xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                <IconComponent className="text-white text-lg lg:text-2xl xl:text-3xl" />
              </div>
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-2 lg:mb-3">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base xl:text-lg">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Sections Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {sections.map((section, index) => {
          const IconComponent = section.icon;

          return (
            <motion.div
              key={section.title}
              className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              {/* Card Header */}
              <div className={`relative h-32 lg:h-40 xl:h-48 bg-gradient-to-br ${section.bgColor} overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
                </div>

                {/* Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="text-white text-2xl lg:text-3xl xl:text-4xl" />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold text-gray-700 shadow-md">
                  Academic
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 lg:p-8 xl:p-10">
                <div className="flex items-start justify-between mb-4 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 group-hover:text-[#8f3a17] transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#ad4a16] group-hover:to-[#8f3a17] transition-all duration-300">
                    <FaArrowRight className="text-[#8f3a17] group-hover:text-white text-sm lg:text-base transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed mb-6 lg:mb-8 group-hover:text-gray-700 transition-colors duration-300">
                  {section.desc}
                </p>

                {/* Enhanced CTA Button */}
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg xl:text-xl hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group-hover:shadow-2xl"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="text-sm lg:text-base" />
                  </motion.div>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Enhanced Call to Action */}
      <motion.div
        className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <FaGraduationCap className="text-white text-2xl lg:text-3xl xl:text-4xl" />
          </div>

          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Ready to Begin Your Academic Journey?
          </h3>

          <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Explore each academic area to understand how our framework supports student success and excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <span>Contact Academic Office</span>
              <FaArrowRight className="text-base lg:text-lg" />
            </Link>

            <Link
              href="/admission"
              className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Admission Information
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcademicsOverview;
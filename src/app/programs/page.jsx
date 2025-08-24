"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaAward, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function ProgramsPage() {
  const stats = [
    { icon: FaGraduationCap, number: "50+", label: "Programs Offered", color: "from-[#ad4a16] to-[#8f3a17]" },
    { icon: FaUsers, number: "10,000+", label: "Students Enrolled", color: "from-[#8f3a17] to-[#312518]" },
    { icon: FaAward, number: "95%", label: "Placement Rate", color: "from-[#ad4a16] to-[#312518]" },
    { icon: FaChartLine, number: "15+", label: "Years Experience", color: "from-[#312518] to-[#8f3a17]" },
  ];

  const highlights = [
    {
      title: "Industry-Aligned Curriculum",
      description: "Our programs are designed in collaboration with industry experts to ensure graduates are job-ready.",
      icon: "🎯"
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Modern laboratories, libraries, and research facilities to support comprehensive learning.",
      icon: "🏛️"
    },
    {
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals with proven track records.",
      icon: "👨‍🏫"
    },
    {
      title: "Global Recognition",
      description: "Our degrees are recognized internationally, opening doors to global opportunities.",
      icon: "🌍"
    }
  ];

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 py-3 rounded-full">
          <FaGraduationCap className="text-[#ad4a16] text-lg" />
          <span className="text-sm font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Academic Excellence
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          Discover Your Future
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
          Choose from our comprehensive range of undergraduate, postgraduate, and doctoral programs designed to shape tomorrow's leaders and innovators.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
              <stat.icon className="text-white text-2xl lg:text-3xl" />
            </div>
            <div className={`text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-600 text-sm lg:text-base font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Program Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-4">
            Why Choose Our Programs?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Our commitment to excellence ensures you receive world-class education with practical industry exposure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group p-6 lg:p-8 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-[#8f3a17] mb-3 group-hover:text-[#ad4a16] transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center bg-gradient-to-r from-[#ad4a16]/10 via-[#8f3a17]/10 to-[#312518]/10 rounded-3xl p-8 lg:p-12 border border-[#ad4a16]/20"
      >
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg mb-8">
          Explore our schools and find the perfect program that aligns with your career aspirations and academic interests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admission" className="group bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
            Apply Now
            <FaGraduationCap className="group-hover:rotate-12 transition-transform duration-300" />
          </Link>
          <Link href="/contact" className="group bg-white/80 hover:bg-white border-2 border-[#ad4a16] hover:border-[#8f3a17] text-[#ad4a16] hover:text-[#8f3a17] font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3">
            Get Information
            <FaChartLine className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

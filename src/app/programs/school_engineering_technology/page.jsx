"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaRocket, FaLightbulb, FaIndustry } from "react-icons/fa";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { EnginneringTechData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const EngineeringTechProgram = () => {
  const {
    bachelorsData,
    bachelorsLateralData,
    certificateData,
    diplomaData,
    mastersData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = EnginneringTechData;

  const tabDetails = [
    { key: "1", tab: "BACHELOR'S PROGRAM", data: bachelorsData },
    { key: "2", tab: "BACHELOR'S LATERAL PROGRAM", data: bachelorsLateralData },
    { key: "3", tab: "MASTER'S PROGRAM", data: mastersData },
    { key: "4", tab: "DIPLOMA PROGRAM", data: diplomaData },
    { key: "5", tab: "CERTIFICATE PROGRAM", data: certificateData },
  ];

  const highlights = [
    {
      icon: FaCogs,
      title: "Advanced Engineering Labs",
      description: "State-of-the-art laboratories equipped with cutting-edge technology for hands-on learning."
    },
    {
      icon: FaRocket,
      title: "Innovation Focus",
      description: "Emphasis on research, innovation, and developing solutions for real-world engineering challenges."
    },
    {
      icon: FaLightbulb,
      title: "Industry Partnerships",
      description: "Strong collaborations with leading engineering companies for internships and placements."
    },
    {
      icon: FaIndustry,
      title: "Practical Training",
      description: "Comprehensive practical training programs to bridge the gap between theory and application."
    }
  ];

  return (
    <div className="space-y-12 lg:space-y-16">
      {/* School Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 py-3 rounded-full">
          <FaCogs className="text-[#ad4a16] text-lg" />
          <span className="text-sm font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Engineering Excellence
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          School of Engineering & Technology
        </h1>

        <p className="text-gray-600 max-w-4xl mx-auto text-lg lg:text-xl leading-relaxed">
          Pioneering the future of engineering through innovative curriculum, cutting-edge research, and industry-focused training programs designed to create tomorrow's engineering leaders.
        </p>
      </motion.div>

      {/* Highlights Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {highlights.map((highlight, index) => (
          <div key={index} className="group text-center p-6 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
              <highlight.icon className="text-white text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-[#8f3a17] mb-3 group-hover:text-[#ad4a16] transition-colors duration-300">
              {highlight.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {highlight.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Programs Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-[#ad4a16]/5 via-[#8f3a17]/5 to-[#312518]/5 rounded-3xl p-8 lg:p-12 border border-[#ad4a16]/10"
      >
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-4">
            Available Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Choose from our comprehensive range of engineering programs designed to meet industry demands.
          </p>
        </div>
        <ProgramsTabs tabDetails={tabDetails} />
      </motion.div>

      {/* Program Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <ProgramInfo
          academicCalendar={academicCalendar}
          section={section}
          objectives={objectives}
          objectiveIntro={objectiveIntro}
        />
      </motion.div>
    </div>
  );
};

export default EngineeringTechProgram;

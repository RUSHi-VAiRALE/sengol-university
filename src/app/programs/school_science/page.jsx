"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFlask, FaMicroscope, FaAtom, FaDna } from "react-icons/fa";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { ScienceData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const ScienceProgram = () => {
  const {
    bachelorsData,
    certificateData,
    diplomaData,
    mastersData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = ScienceData;

  const tabDetails = [
    { key: "1", tab: "BACHELOR'S PROGRAM", data: bachelorsData },
    { key: "2", tab: "MASTER'S PROGRAM", data: mastersData },
    { key: "3", tab: "DIPLOMA PROGRAM", data: diplomaData },
    { key: "4", tab: "CERTIFICATE PROGRAM", data: certificateData },
  ];

  const highlights = [
    {
      icon: FaFlask,
      title: "Laboratory Research",
      description: "Conduct cutting-edge research in state-of-the-art laboratories with modern equipment."
    },
    {
      icon: FaMicroscope,
      title: "Scientific Analysis",
      description: "Master analytical techniques and scientific methodologies for advanced research."
    },
    {
      icon: FaAtom,
      title: "Pure Sciences",
      description: "Explore physics, chemistry, mathematics, and their interdisciplinary applications."
    },
    {
      icon: FaDna,
      title: "Life Sciences",
      description: "Study biology, biotechnology, and environmental sciences for sustainable solutions."
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
          <FaFlask className="text-[#ad4a16] text-lg" />
          <span className="text-sm font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Scientific Discovery
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          School of Science
        </h1>

        <p className="text-gray-600 max-w-4xl mx-auto text-lg lg:text-xl leading-relaxed">
          Advancing scientific knowledge through rigorous research, innovative teaching, and interdisciplinary collaboration in pure and applied sciences.
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
            Explore our comprehensive science programs across multiple disciplines and research areas.
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

export default ScienceProgram;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaHandshake, FaLightbulb, FaUsers, FaChartLine, FaRocket, FaBuilding, FaUserTie, FaClipboardList, FaSearch, FaLinkedin } from "react-icons/fa";

const TrainingPlacement = () => {
  const objectives = [
    {
      text: "To prepare students for campus recruitment through rigorous training and skill-building.",
      icon: FaGraduationCap,
      color: "from-blue-500 to-blue-600",
    },
    {
      text: "To build long-term relationships with leading companies, startups, and public sector units.",
      icon: FaHandshake,
      color: "from-green-500 to-green-600",
    },
    {
      text: "To assist students in developing industry-relevant soft skills, technical knowledge, and professional ethics.",
      icon: FaLightbulb,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      text: "To facilitate internships, industrial visits, live projects, and career counseling sessions.",
      icon: FaRocket,
      color: "from-purple-500 to-purple-600",
    },
  ];

  const keyFunctions = [
    {
      title: "Placement Drives",
      description: "Organize on-campus and off-campus placement opportunities.",
      icon: FaBriefcase,
      color: "from-[#ad4a16] to-[#8f3a17]",
    },
    {
      title: "Training Programs",
      description: "Conduct soft skills, communication, aptitude, reasoning, and interview prep sessions.",
      icon: FaUsers,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Internship Assistance",
      description: "Guide students in obtaining industry internships across all departments.",
      icon: FaBuilding,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Industry Connect",
      description: "Maintain relationships with recruiters and HR managers through MoUs and tie-ups.",
      icon: FaHandshake,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Career Guidance",
      description: "Offer personal mentoring and career counseling for higher studies and entrepreneurship.",
      icon: FaUserTie,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Resume Development",
      description: "Help students in building impactful CVs and professional online profiles (LinkedIn, etc.).",
      icon: FaLinkedin,
      color: "from-cyan-500 to-cyan-600",
    },
  ];

  const approach = [
    { item: "Aptitude Tests & GD/PI", icon: FaClipboardList },
    { item: "Corporate Etiquette", icon: FaUserTie },
    { item: "Technical Interview Preparation", icon: FaSearch },
    { item: "Mock Interviews & Role Plays", icon: FaUsers },
    { item: "Entrepreneurship Workshops", icon: FaRocket },
  ];

  const stats = [
    { label: "Placement Rate", value: "95%", icon: FaChartLine, color: "text-green-600" },
    { label: "Industry Partners", value: "100+", icon: FaBuilding, color: "text-blue-600" },
    { label: "Training Sessions", value: "50+", icon: FaUsers, color: "text-purple-600" },
    { label: "Success Stories", value: "500+", icon: FaGraduationCap, color: "text-orange-600" },
  ];

  return (
    <div className="space-y-12 lg:space-y-16 xl:space-y-20">
      {/* Enhanced Header */}
      <motion.div
        className="text-center space-y-6 lg:space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 py-3 lg:py-4 rounded-full">
          <FaGraduationCap className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
          <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Career Excellence
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          SENGOL INTERNATIONAL UNIVERSITY
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed flex items-center justify-center gap-3">
          <FaGraduationCap className="text-[#ad4a16]" />
          Training & Placement Cell
        </h2>
      </motion.div>

      {/* Stats Section */}
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
              <div className={`text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 lg:mb-3 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm lg:text-base xl:text-lg">
                {stat.label}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaBriefcase className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Introduction
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
          <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
            The <span className="font-bold text-[#ad4a16]">Training & Placement Cell</span> of Sengol International University serves as a vital link between the{" "}
            <span className="font-bold text-[#8f3a17]">students, industry, and academia</span>. Our aim is to{" "}
            <span className="font-bold text-[#312518]">equip students with the skills and opportunities</span>{" "}
            required to launch successful careers across various disciplines.
          </p>
        </div>
      </motion.div>

      {/* Objectives Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaLightbulb className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600">
            Objectives
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${objective.color} rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-lg`}>
                  <IconComponent className="text-white text-lg lg:text-2xl" />
                </div>
                <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                  {objective.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Key Functions Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaUsers className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">
            Key Functions
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {keyFunctions.map((func, index) => {
            const IconComponent = func.icon;
            return (
              <motion.div
                key={func.title}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${func.color} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg`}>
                  <IconComponent className="text-white text-2xl lg:text-3xl" />
                </div>
                <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                  {func.title}
                </h4>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {func.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Our Approach Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaChartLine className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600">
            Our Approach
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-purple-500/20">
          <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium mb-8 lg:mb-10">
            The Cell works in close coordination with the{" "}
            <span className="font-bold text-purple-600">academic departments, corporate partners, and alumni</span>{" "}
            to create a strong ecosystem for placements. Sessions are designed to cover:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {approach.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.item}
                  className="flex items-center gap-4 lg:gap-5 p-4 lg:p-6 bg-purple-50/50 rounded-xl border border-purple-200/50 hover:bg-purple-100/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <IconComponent className="text-white text-sm lg:text-base" />
                  </div>
                  <span className="text-gray-700 font-bold text-base lg:text-lg xl:text-xl">
                    {item.item}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <FaRocket className="text-white text-2xl lg:text-3xl" />
          </div>

          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Launch Your Career with Confidence
          </h3>

          <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Join our comprehensive training programs and connect with industry leaders to build a successful career path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <div className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <FaBriefcase />
              <span>Register for Placement</span>
            </div>

            <div className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent">
              <FaUsers />
              <span>Join Training Programs</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-10">
            <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-lg lg:text-xl font-bold text-[#ad4a16] mb-2">Industry Ready</div>
              <div className="text-sm lg:text-base text-gray-600">Comprehensive skill development</div>
            </div>
            <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-lg lg:text-xl font-bold text-[#8f3a17] mb-2">Career Support</div>
              <div className="text-sm lg:text-base text-gray-600">Personalized guidance & mentoring</div>
            </div>
            <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-lg lg:text-xl font-bold text-[#312518] mb-2">Network Access</div>
              <div className="text-sm lg:text-base text-gray-600">Connect with industry leaders</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrainingPlacement;
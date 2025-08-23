"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExchangeAlt, FaUniversity, FaCheckCircle, FaClipboardList, FaUserCheck, FaExclamationTriangle, FaInfoCircle, FaArrowRight, FaGraduationCap, FaShieldAlt, FaCalendarAlt } from "react-icons/fa";

const CreditTransfer = () => {
  const policyFeatures = [
    {
      title: "Purpose",
      description: "To provide opportunities for students to transfer from other recognized institutions and integrate into SIU programs without academic loss.",
      icon: FaUniversity,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Student Mobility",
      description: "Supports seamless academic mobility and flexibility for eligible students across recognized institutions.",
      icon: FaExchangeAlt,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
    },
    {
      title: "Academic Integration",
      description: "Ensures smooth integration into SIU programs while maintaining academic standards and quality.",
      icon: FaGraduationCap,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
    },
    {
      title: "Quality Assurance",
      description: "Maintains strict quality standards while providing flexibility for academic progression.",
      icon: FaShieldAlt,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
    }
  ];

  const eligibilityRequirements = [
    "The student must be currently enrolled or have studied in a UGC/AICTE/BCI/PCI/NMC-recognized university or institution.",
    "The courses and credits completed must be equivalent or relevant to the curriculum offered by SIU.",
    "Minimum CGPA or percentage criteria may apply as per university norms."
  ];

  const acceptableScenarios = [
    { scenario: "Inter-university migration", icon: FaExchangeAlt, color: "text-blue-600" },
    { scenario: "Change of course/discipline", icon: FaGraduationCap, color: "text-green-600" },
    { scenario: "Gap in studies due to personal or medical reasons", icon: FaCalendarAlt, color: "text-purple-600" },
    { scenario: "Institution closure or non-recognition", icon: FaExclamationTriangle, color: "text-red-600" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Apply for credit transfer during the admission process with all required documents.",
      icon: FaClipboardList,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: 2,
      title: "Transcript Review",
      description: "Submit academic transcripts, course outlines/syllabus for review by the Credit Transfer Committee.",
      icon: FaUserCheck,
      color: "from-green-500 to-green-600",
    },
    {
      step: 3,
      title: "Evaluation & Mapping",
      description: "SIU faculty maps completed credits to equivalent subjects in the current curriculum.",
      icon: FaExchangeAlt,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: 4,
      title: "Approval & Admission",
      description: "Upon approval, the student is admitted into the appropriate semester/year.",
      icon: FaCheckCircle,
      color: "from-orange-500 to-orange-600",
    }
  ];

  const requiredDocuments = [
    "Original Transcripts/Mark Sheets",
    "Syllabus or Course Description from previous institution",
    "Transfer Certificate / Migration Certificate",
    "Any additional academic records as requested"
  ];

  const conditions = [
    {
      condition: "Maximum 50% of total course credits may be transferred (subject to program rules).",
      icon: FaExclamationTriangle,
      type: "warning"
    },
    {
      condition: "No credit shall be transferred for internships, project work, or thesis, unless approved by the department.",
      icon: FaInfoCircle,
      type: "info"
    },
    {
      condition: "Final approval is at the sole discretion of SIU's Academic Council.",
      icon: FaShieldAlt,
      type: "authority"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/15 via-[#8f3a17]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/12 via-[#312518]/8 to-transparent blur-3xl"></div>
      </div>

      {/* Enhanced Banner Section */}
      <div className="relative w-full h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ad4a16] via-[#8f3a17] to-[#312518]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* Enhanced Title */}
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Credit Transfer Policy
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-4xl lg:max-w-5xl leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Seamless academic mobility and flexibility for eligible students.
          </motion.p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 xl:py-20 max-w-[1400px] mx-auto space-y-16 lg:space-y-20 xl:space-y-24">

        {/* Introduction Section */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
              <FaExchangeAlt className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Policy Overview
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
              <strong>Sengol International University (SIU)</strong> supports student mobility and academic flexibility through its <strong>Credit Transfer Policy,</strong> allowing eligible students to continue their education without repetition of previously completed coursework.
            </p>
          </div>
        </motion.div>

        {/* Policy Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {policyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                {/* Card Header */}
                <div className={`relative h-32 lg:h-40 xl:h-48 bg-gradient-to-br ${feature.bgColor} overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="text-white text-2xl lg:text-3xl xl:text-4xl" />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold text-gray-700 shadow-md">
                    Policy
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-8 xl:p-10">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 group-hover:text-[#8f3a17] transition-colors duration-300 mb-4 lg:mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Eligibility Requirements */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaUserCheck className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">
              Eligibility for Credit Transfer
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-green-500/20">
            <div className="space-y-4 lg:space-y-6">
              {eligibilityRequirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-green-50/50 rounded-xl border border-green-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-white text-sm lg:text-base" />
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    {requirement}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Acceptable Scenarios */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaClipboardList className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600">
              Acceptable Scenarios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {acceptableScenarios.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.scenario}
                  className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-blue-500/20 hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center gap-4 lg:gap-6">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className={`text-white text-lg lg:text-xl`} />
                    </div>
                    <p className="text-gray-700 font-bold text-base lg:text-lg xl:text-xl leading-relaxed">
                      {item.scenario}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaArrowRight className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600">
              Process for Credit Transfer
            </h2>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-6 lg:gap-8">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <IconComponent className="text-white text-2xl lg:text-3xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 lg:mb-4">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm lg:text-base">{step.step}</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Documents and Conditions */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Required Documents */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-orange-500/20">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <FaClipboardList className="text-white text-xl" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-orange-600">
                Documents Required
              </h3>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {requiredDocuments.map((document, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 lg:p-4 bg-orange-50/50 rounded-lg border border-orange-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-700 text-base lg:text-lg font-medium">{document}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conditions */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-red-500/20">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <FaExclamationTriangle className="text-white text-xl" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-red-600">
                Conditions
              </h3>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {conditions.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={`flex items-start gap-4 p-4 lg:p-6 rounded-xl border ${item.type === 'warning' ? 'bg-yellow-50/50 border-yellow-200/50' :
                        item.type === 'info' ? 'bg-blue-50/50 border-blue-200/50' :
                          'bg-red-50/50 border-red-200/50'
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${item.type === 'warning' ? 'bg-yellow-500' :
                        item.type === 'info' ? 'bg-blue-500' : 'bg-red-500'
                      }`}>
                      <IconComponent className="text-white text-sm" />
                    </div>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed font-medium">
                      {item.condition}
                    </p>
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
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <FaExchangeAlt className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Ready to Transfer Your Credits?
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Continue your academic journey with seamless credit transfer at Sengol International University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaArrowRight />
                <span>Apply for Credit Transfer</span>
              </button>

              <button className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent">
                <FaInfoCircle />
                <span>Contact Academic Office</span>
              </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 lg:p-8 mt-8 lg:mt-10">
              <p className="text-blue-800 text-base lg:text-lg font-medium">
                <strong>Note:</strong> Credit transfer decisions are made on a case-by-case basis.
                We recommend consulting with our academic advisors before beginning the application process.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CreditTransfer;
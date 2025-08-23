"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserCheck, FaClipboardList, FaBook, FaArrowRight, FaCheckCircle, FaInfoCircle, FaAward, FaUsers, FaCalendarAlt } from "react-icons/fa";

const LateralEntryPage = () => {
  const eligibilityTypes = [
    {
      title: "Undergraduate Lateral Entry",
      description: "Candidates must have successfully completed a 3-year diploma (or equivalent) in the relevant discipline from a recognized board/institution.",
      icon: FaGraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "Postgraduate Lateral Entry",
      description: "Candidates must hold a relevant postgraduate diploma or equivalent qualification (where applicable).",
      icon: FaAward,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
    }
  ];

  const eligibleCourses = [
    { course: "B.Tech / B.Sc. / BCA", icon: FaBook, color: "text-blue-600" },
    { course: "B.Pharma / BPT", icon: FaAward, color: "text-green-600" },
    { course: "Nursing & Paramedical Programs", icon: FaUsers, color: "text-red-600" },
    { course: "Management / Computer Applications (PG Level)", icon: FaClipboardList, color: "text-purple-600" },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Apply through Lateral Entry Form",
      description: "Interested candidates must apply through the Lateral Entry Admission Form (available online & offline).",
      icon: FaClipboardList,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: 2,
      title: "Merit-Based Selection",
      description: "Admission is granted based on academic merit and subject to the availability of seats.",
      icon: FaCheckCircle,
      color: "from-green-500 to-green-600",
    },
    {
      step: 3,
      title: "Counselling/Interview",
      description: "Applicants may be required to attend counselling or interview as part of the selection process.",
      icon: FaUsers,
      color: "from-purple-500 to-purple-600",
    }
  ];

  const requiredDocuments = [
    "Diploma/Equivalent Marksheets & Certificate",
    "Transfer Certificate (if applicable)",
    "Migration Certificate (if from another board/university)",
    "Passport-size Photographs",
    "Any other documents as required by the department"
  ];

  const benefits = [
    {
      title: "Time Saving",
      description: "Direct entry to second year saves valuable time",
      icon: FaCalendarAlt,
      color: "text-blue-600"
    },
    {
      title: "Credit Recognition",
      description: "Previous academic achievements are recognized",
      icon: FaAward,
      color: "text-green-600"
    },
    {
      title: "Career Advancement",
      description: "Fast-track your career with higher qualifications",
      icon: FaArrowRight,
      color: "text-purple-600"
    },
    {
      title: "Quality Education",
      description: "Access to world-class education and facilities",
      icon: FaBook,
      color: "text-orange-600"
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
          {/* Enhanced Breadcrumbs */}
          <motion.p
            className="text-white/80 mb-4 lg:mb-6 text-sm lg:text-base xl:text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Home / Lateral Entry
          </motion.p>

          {/* Enhanced Title */}
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lateral Entry Admission
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-4xl lg:max-w-5xl leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Continue your educational journey with direct second-year admission opportunities at Sengol International University.
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
              <FaGraduationCap className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              What is Lateral Entry?
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
              <strong>Sengol International University (SIU)</strong> offers <strong>Lateral Entry</strong> admission opportunities to eligible students who have already completed a diploma or equivalent program and wish to continue their education directly into the second year of a relevant undergraduate or postgraduate program.
            </p>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaCheckCircle className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600">
              Benefits of Lateral Entry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-[#ad4a16]/20 hover:shadow-xl hover:border-[#ad4a16]/40 transition-all duration-300 hover:scale-105 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                    <IconComponent className="text-white text-lg lg:text-2xl" />
                  </div>
                  <h3 className={`text-lg lg:text-xl font-bold mb-2 lg:mb-3 ${benefit.color}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Eligibility Criteria */}
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
              Eligibility Criteria
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {eligibilityTypes.map((type, index) => {
              const IconComponent = type.icon;

              return (
                <motion.div
                  key={type.title}
                  className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -10 }}
                >
                  {/* Card Header */}
                  <div className={`relative h-32 lg:h-40 bg-gradient-to-br ${type.bgColor} overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
                    </div>

                    {/* Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className="text-white text-2xl lg:text-3xl" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 lg:p-8 xl:p-10">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 group-hover:text-[#8f3a17] transition-colors duration-300 mb-4 lg:mb-6">
                      {type.title}
                    </h3>

                    <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {type.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Eligible Courses */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaBook className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600">
              Courses Eligible for Lateral Entry
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-purple-500/20">
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium mb-8 lg:mb-10">
              Lateral Entry is available in select programs such as:
            </p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {eligibleCourses.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.course}
                    className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-purple-50/50 rounded-xl border border-purple-200/50 hover:bg-purple-100/50 transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                      <IconComponent className={`text-white text-lg lg:text-xl`} />
                    </div>
                    <p className="text-gray-700 font-bold text-base lg:text-lg xl:text-xl">
                      {course.course}
                    </p>
                  </motion.div>
                );
              })}

              <motion.div
                className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-purple-50/50 rounded-xl border border-purple-200/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
                <p className="text-gray-700 font-bold text-base lg:text-lg xl:text-xl">
                  Many more programs...
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaClipboardList className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600">
              Application Process
            </h2>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {applicationSteps.map((step, index) => {
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

        {/* Required Documents */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaClipboardList className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">
              Documents Required
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-teal-500/20">
            <div className="grid gap-4 lg:gap-6">
              {requiredDocuments.map((document, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 lg:gap-6 p-4 lg:p-6 bg-teal-50/50 rounded-xl border border-teal-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-white text-sm lg:text-base" />
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    {document}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex items-start gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <FaInfoCircle className="text-white text-lg lg:text-2xl" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-4 lg:mb-6">
                Important Note
              </h3>
              <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                All admissions are subject to university rules and seat availability. The university reserves the right to amend eligibility or selection criteria without prior notice. Candidates are advised to verify all requirements before applying.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <FaGraduationCap className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Ready to Continue Your Education?
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Take advantage of our lateral entry program and fast-track your academic journey with Sengol International University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaArrowRight />
                <span>Apply for Lateral Entry</span>
              </button>

              <button className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent">
                <FaInfoCircle />
                <span>Get More Information</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LateralEntryPage;
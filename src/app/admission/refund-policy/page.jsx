"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaMoneyBillWave, FaBan, FaClock, FaCheckCircle, FaInfoCircle, FaShieldAlt, FaCalendarTimes } from "react-icons/fa";

const RefundPolicy = () => {
  const policyPoints = [
    {
      title: "No Refund After Admission",
      description: "No refund will be provided once a candidate has been admitted to any course, regardless of reason.",
      icon: FaBan,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-500/10 to-red-600/10",
      type: "critical"
    },
    {
      title: "Eligibility-Based Refund",
      description: "Refunds are applicable only to registered candidates who are found ineligible for the course applied. The refund application must be submitted before the commencement of the academic session.",
      icon: FaCheckCircle,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
      type: "eligible"
    },
    {
      title: "Non-Refundable Scenarios",
      description: "Fees will not be refunded if the student discontinues after commencement, leaves for personal reasons, or is suspended/expelled due to misconduct.",
      icon: FaExclamationTriangle,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
      type: "warning"
    },
    {
      title: "Deadline for Refund Requests",
      description: "No refund application will be accepted after the session has commenced, under any circumstances.",
      icon: FaClock,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
      type: "deadline"
    }
  ];

  const nonRefundableScenarios = [
    "Student discontinues the course after the commencement of classes",
    "Student leaves the course before completion for personal reasons",
    "Student is suspended or expelled due to non-attendance, misconduct, or violation of university regulations"
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
            Home / Refund Policy
          </motion.p>

          {/* Enhanced Title */}
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Refund Policy
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-4xl lg:max-w-5xl leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Understand our clear and transparent refund rules designed to uphold academic integrity and financial fairness at Sengol International University.
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
              <FaShieldAlt className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Policy Overview
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
              At <strong>Sengol International University (SIU),</strong> the refund policy is governed by strict guidelines to maintain academic discipline and financial transparency. This policy ensures fairness while protecting the institution's academic standards and operational requirements.
            </p>
          </div>
        </motion.div>

        {/* Policy Points Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {policyPoints.map((policy, index) => {
            const IconComponent = policy.icon;

            return (
              <motion.div
                key={policy.title}
                className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                {/* Card Header */}
                <div className={`relative h-32 lg:h-40 xl:h-48 bg-gradient-to-br ${policy.bgColor} overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${policy.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="text-white text-2xl lg:text-3xl xl:text-4xl" />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className={`absolute top-4 right-4 px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold shadow-md ${policy.type === 'critical' ? 'bg-red-100 text-red-700' :
                      policy.type === 'eligible' ? 'bg-green-100 text-green-700' :
                        policy.type === 'warning' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                    }`}>
                    {policy.type === 'critical' ? 'Critical' :
                      policy.type === 'eligible' ? 'Eligible' :
                        policy.type === 'warning' ? 'Warning' : 'Deadline'}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-8 xl:p-10">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 group-hover:text-[#8f3a17] transition-colors duration-300 mb-4 lg:mb-6">
                    {policy.title}
                  </h3>

                  <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {policy.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Non-Refundable Scenarios */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaExclamationTriangle className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">
              Non-Refundable Scenarios
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-red-500/20">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 lg:p-8 mb-8 lg:mb-10">
              <p className="text-red-800 text-lg lg:text-xl xl:text-2xl font-bold text-center">
                ⚠️ Fees will not be refunded under the following conditions ⚠️
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              {nonRefundableScenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-red-50/50 rounded-xl border border-red-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBan className="text-white text-sm lg:text-base" />
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    If the <strong>{scenario}</strong>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important Guidelines */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Eligibility Requirements */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-green-500/20">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">
                Refund Eligibility
              </h3>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 lg:p-6">
                <h4 className="font-bold text-green-700 mb-3">Who Can Apply:</h4>
                <p className="text-gray-700 text-base lg:text-lg">
                  Only registered candidates found <strong>ineligible</strong> for their applied course
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 lg:p-6">
                <h4 className="font-bold text-green-700 mb-3">When to Apply:</h4>
                <p className="text-gray-700 text-base lg:text-lg">
                  <strong>Before</strong> the commencement of the academic session
                </p>
              </div>
            </div>
          </div>

          {/* Deadline Information */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-purple-500/20">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <FaCalendarTimes className="text-white text-xl" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-purple-600">
                Critical Deadlines
              </h3>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 lg:p-6">
                <h4 className="font-bold text-purple-700 mb-3">Application Deadline:</h4>
                <p className="text-gray-700 text-base lg:text-lg">
                  Must be submitted <strong>before session commencement</strong>
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 lg:p-6">
                <h4 className="font-bold text-red-700 mb-3">After Session Starts:</h4>
                <p className="text-gray-700 text-base lg:text-lg">
                  <strong>No applications accepted</strong> under any circumstances
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <FaInfoCircle className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Have Questions About Our Refund Policy?
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Contact our admission office for clarification on refund procedures and eligibility requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaInfoCircle />
                <span>Contact Admission Office</span>
              </button>

              <button className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent">
                <FaMoneyBillWave />
                <span>View Fee Structure</span>
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 lg:p-8 mt-8 lg:mt-10">
              <p className="text-yellow-800 text-base lg:text-lg font-medium">
                <strong>Important:</strong> Please read and understand our refund policy carefully before making any payments.
                All policies are subject to university regulations and may be updated without prior notice.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;
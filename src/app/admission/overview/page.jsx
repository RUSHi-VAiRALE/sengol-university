"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaListAlt,
  FaClipboardList,
  FaBookOpen,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaStar,
  FaEnvelope,
  FaInfoCircle
} from "react-icons/fa";
import Link from "next/link";

const AdmissionOverview = () => {
  const infoCards = [
    {
      icon: FaUserGraduate,
      title: "Eligibility",
      description: "Applicants must have completed 10+2 (for UG) or a relevant Bachelor's degree (for PG) with minimum required marks from a recognized board or university.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-500/10 to-blue-600/10",
    },
    {
      icon: FaListAlt,
      title: "Entrance Exams",
      description: "Admissions are primarily based on JEE Main, CUET, or internal entrance tests. Some programs may require interviews or written tests.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-500/10 to-green-600/10",
    },
    {
      icon: FaClipboardList,
      title: "Application Process",
      description: "Apply online through our university portal by filling out the form, uploading necessary documents, and submitting the application fee.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-500/10 to-purple-600/10",
    },
    {
      icon: FaBookOpen,
      title: "Program Orientation",
      description: "Selected candidates will be invited for orientation where they'll receive course schedules, meet faculty, and complete final enrollment.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/10",
    },
    {
      icon: FaCalendarAlt,
      title: "Admission Timeline",
      description: "Applications open in March and close in July. Entrance tests and interviews are conducted in May-June. Classes begin in August.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-500/10 to-indigo-600/10",
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Scholarships & Financial Aid",
      description: "We offer merit-based and need-based scholarships. Students with high academic scores or low income can apply during admission.",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-500/10 to-teal-600/10",
    },
  ];

  const stats = [
    { label: "Programs Offered", value: "50+", icon: FaBookOpen, color: "text-blue-600" },
    { label: "Success Rate", value: "95%", icon: FaAward, color: "text-green-600" },
    { label: "Scholarships", value: "₹2Cr+", icon: FaMoneyCheckAlt, color: "text-purple-600" },
    { label: "Students Enrolled", value: "5000+", icon: FaUsers, color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/15 via-[#8f3a17]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/12 via-[#312518]/8 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-r from-[#ad4a16]/5 via-transparent to-[#8f3a17]/5 blur-3xl"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 xl:py-20 max-w-[1400px] mx-auto">

        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16 xl:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full mb-6 lg:mb-8">
            <FaGraduationCap className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
            <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Join Our Community
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight">
            Admission Overview
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-4xl lg:max-w-5xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed font-medium">
            Get all the information you need about our admission process, requirements, and support for incoming students at Sengol International University.
          </p>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 mb-16 lg:mb-20 xl:mb-24"
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

        {/* Enhanced Info Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {infoCards.map((card, index) => {
            const IconComponent = card.icon;

            return (
              <motion.div
                key={card.title}
                className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                {/* Card Header */}
                <div className={`relative h-32 lg:h-40 xl:h-48 bg-gradient-to-br ${card.bgColor} overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-16 h-16 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="text-white text-2xl lg:text-3xl xl:text-4xl" />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-bold text-gray-700 shadow-md">
                    Info
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-8 xl:p-10">
                  <div className="flex items-start justify-between mb-4 lg:mb-6">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 group-hover:text-[#8f3a17] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#ad4a16] group-hover:to-[#8f3a17] transition-all duration-300">
                      <FaInfoCircle className="text-[#8f3a17] group-hover:text-white text-sm lg:text-base transition-all duration-300" />
                    </div>
                  </div>

                  <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Contact Card */}
        <motion.div
          className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
              <FaPhoneAlt className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Need Help?
            </h3>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 rounded-xl p-4 lg:p-6 border border-[#ad4a16]/20">
                <FaPhoneAlt className="text-[#ad4a16] text-xl lg:text-2xl mx-auto mb-3" />
                <p className="text-gray-700 font-bold text-lg lg:text-xl">+91-9876543210</p>
                <p className="text-gray-600 text-sm lg:text-base">Call us anytime</p>
              </div>

              <div className="bg-gradient-to-r from-[#8f3a17]/10 to-[#312518]/10 rounded-xl p-4 lg:p-6 border border-[#8f3a17]/20">
                <FaEnvelope className="text-[#8f3a17] text-xl lg:text-2xl mx-auto mb-3" />
                <p className="text-gray-700 font-bold text-base lg:text-lg">admissions@sengoluniv.edu.in</p>
                <p className="text-gray-600 text-sm lg:text-base">Email support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <FaGraduationCap className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Take the first step towards your bright future with Sengol International University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span>Apply Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-base lg:text-lg" />
                </motion.div>
              </Link>

              <Link
                href="/contact"
                className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get More Info
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-10">
              <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
                <div className="text-lg lg:text-xl font-bold text-[#ad4a16] mb-2">Easy Process</div>
                <div className="text-sm lg:text-base text-gray-600">Simple application steps</div>
              </div>
              <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
                <div className="text-lg lg:text-xl font-bold text-[#8f3a17] mb-2">Quick Response</div>
                <div className="text-sm lg:text-base text-gray-600">Fast admission decisions</div>
              </div>
              <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
                <div className="text-lg lg:text-xl font-bold text-[#312518] mb-2">Expert Support</div>
                <div className="text-sm lg:text-base text-gray-600">Dedicated admission team</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionOverview;
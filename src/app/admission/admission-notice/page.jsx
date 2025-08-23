"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBullhorn, FaCalendarAlt, FaHome, FaArrowLeft, FaGraduationCap, FaClock, FaInfoCircle, FaBell } from "react-icons/fa";

const AdmissionNoticePage = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  const upcomingFeatures = [
    {
      title: "Latest Admission Notices",
      description: "Stay updated with the most recent admission announcements and important dates.",
      icon: FaBullhorn,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Important Dates & Deadlines",
      description: "Never miss crucial admission deadlines with our comprehensive timeline.",
      icon: FaCalendarAlt,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Eligibility Criteria",
      description: "Detailed eligibility requirements for all programs and courses.",
      icon: FaInfoCircle,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Application Guidelines",
      description: "Step-by-step guidance for completing your admission application.",
      icon: FaGraduationCap,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/15 via-[#8f3a17]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/12 via-[#312518]/8 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-gradient-to-r from-[#ad4a16]/5 via-transparent to-[#8f3a17]/5 blur-3xl"></div>
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
          {/* Enhanced Title with Animation */}
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight drop-shadow-2xl animate-pulse"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Admission Notice
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-4xl lg:max-w-5xl leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay updated with the latest announcements
          </motion.p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 xl:py-20 max-w-[1400px] mx-auto">

        {/* Coming Soon Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full mb-6 lg:mb-8">
            <FaClock className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
            <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Under Development
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-6 lg:mb-8 leading-tight">
            Coming Soon...
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-medium mb-8 lg:mb-10">
            This page will provide comprehensive information about the latest admission notices, important dates, eligibility criteria, and application guidelines for all programs.
          </p>

          <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
            Stay tuned! We are working hard to bring you the most updated information.
          </p>
        </motion.div>

        {/* Upcoming Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {upcomingFeatures.map((feature, index) => {
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
                <div className={`relative h-32 lg:h-40 xl:h-48 bg-gradient-to-br ${feature.color.replace('500', '500/10').replace('600', '600/10')} overflow-hidden`}>
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
                    Soon
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

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20 mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
              <FaBell className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
              Get Notified When It's Ready
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-6 lg:mb-8">
              Be the first to know when admission notices are published. Subscribe to our updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 lg:px-6 py-3 lg:py-4 rounded-xl border border-[#ad4a16]/30 focus:border-[#ad4a16] focus:outline-none focus:ring-2 focus:ring-[#ad4a16]/20 text-base lg:text-lg"
              />
              <button className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
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
              <FaHome className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Explore More About Admissions
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
              While this page is under development, you can explore our other admission resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <button
                onClick={handleBackToHome}
                className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaArrowLeft className="text-base lg:text-lg" />
                <span>Back to Home</span>
              </button>

              <button
                onClick={() => router.push('/admission/overview')}
                className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl lg:rounded-2xl font-bold text-lg lg:text-xl xl:text-2xl hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Admission Overview
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-10">
              <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
                <div className="text-lg lg:text-xl font-bold text-[#ad4a16] mb-2">Regular Updates</div>
                <div className="text-sm lg:text-base text-gray-600">Latest information</div>
              </div>
              <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
                <div className="text-lg lg:text-xl font-bold text-[#8f3a17] mb-2">Quick Access</div>
                <div className="text-sm lg:text-base text-gray-600">Easy navigation</div>
              </div>
              <div className="bg-white/50 border border-[#ad4a16]/20 rounded-xl p-4 lg:p-6 text-center">
                <div className="text-lg lg:text-xl font-bold text-[#312518] mb-2">Comprehensive</div>
                <div className="text-sm lg:text-base text-gray-600">Complete details</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionNoticePage;
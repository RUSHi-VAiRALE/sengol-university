"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";

const MissionVision = () => {
  const vision = {
    title: "Our Vision",
    description:
      "To emerge as a globally recognized center of academic excellence, innovation, and ethical leadership that nurtures knowledge, fosters creativity, and inspires students to become responsible global citizens committed to shaping a sustainable and inclusive future.",
    icon: <FaEye className="text-2xl lg:text-3xl xl:text-4xl" />,
  };

  const mission = {
    title: "Our Mission",
    description: [
      "To provide a transformative educational experience that blends academic rigor with practical knowledge and life skills.",
      "To foster a culture of innovation, inquiry, and research that addresses real-world challenges.",
      "To uphold the values of inclusivity, diversity, ethics, and social responsibility in all aspects of institutional life.",
      "To build strategic collaborations with industry, academia, and global institutions for enriching academic and research opportunities.",
      "To empower students to lead with integrity, vision, and a sense of service to society.",
    ],
    icon: <FaBullseye className="text-2xl lg:text-3xl xl:text-4xl" />,
  };

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-8 lg:p-10 xl:p-12 2xl:p-14 relative overflow-hidden">

      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#ad4a16] to-[#8f3a17] rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-[#8f3a17] to-[#312518] rounded-full blur-2xl"></div>
      </div>

      <section className="relative space-y-12 lg:space-y-16 xl:space-y-20">

        {/* Enhanced Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8">
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
              <span className="text-white text-lg lg:text-xl xl:text-2xl">🎯</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Our Direction
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
            Vision & Mission
          </h2>
          <p className="text-gray-600 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            At Sengol International University, our vision and mission shape our
            path to academic and societal excellence.
          </p>
        </motion.div>

        {/* Enhanced Vision & Mission Cards */}
        <div className="grid gap-8 lg:gap-12 xl:gap-16 md:grid-cols-1">

          {/* Enhanced Vision Card */}
          <motion.div
            className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl hover:shadow-2xl border border-[#ad4a16]/20 hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-102 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative">
              <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 mb-6 lg:mb-8 xl:mb-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl lg:text-3xl xl:text-4xl">👁️</span>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 group-hover:text-[#ad4a16] transition-colors duration-300 leading-tight">
                  {vision.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                {vision.description}
              </p>
            </div>
          </motion.div>

          {/* Enhanced Mission Card */}
          <motion.div
            className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl hover:shadow-2xl border border-[#ad4a16]/20 hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-102 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-32 h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-[#8f3a17]/10 to-[#312518]/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 mb-6 lg:mb-8 xl:mb-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl lg:text-3xl xl:text-4xl">🎯</span>
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 group-hover:text-[#ad4a16] transition-colors duration-300 leading-tight">
                  {mission.title}
                </h3>
              </div>

              <ul className="space-y-4 lg:space-y-5 xl:space-y-6">
                {mission.description.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 lg:gap-4 xl:gap-5 group/item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-white text-sm lg:text-base xl:text-lg" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl 2xl:text-2xl group-hover/item:text-gray-800 transition-colors duration-300">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 xl:mb-10">
              <span className="text-white text-3xl lg:text-4xl xl:text-5xl">🌟</span>
            </div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8">
              Ready to Be Part of Our Vision?
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 xl:mb-12 opacity-90 leading-relaxed">
              Join us in creating a future where education transforms lives and builds a better world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
              <button className="bg-white text-[#ad4a16] font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                Apply Now
              </button>
              <button className="border-2 border-white text-white font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl hover:bg-white hover:text-[#ad4a16] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default MissionVision;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const objectivesData = [
  {
    title: "Serving Students with Quality",
    icon: "🎓",
    color: "from-[#ad4a16] to-[#8f3a17]",
    points: [
      "Understand our students.",
      "Nurture efficient and energetic students.",
      "Help students start, stay and succeed.",
      "Provide GREAT and useful service.",
      "Commitment to continuous quality improvement.",
    ],
  },
  {
    title: "Trustworthiness",
    icon: "🤝",
    color: "from-[#8f3a17] to-[#312518]",
    points: [
      "Communicate openly and honestly.",
      "Demonstrate loyalty.",
      "Maintain confidentiality.",
      "Promoting Teamwork.",
      "Explain \"why\" and ask \"why\".",
    ],
  },
  {
    title: "Accountability",
    icon: "⚖️",
    color: "from-[#ad4a16] via-[#8f3a17] to-[#312518]",
    points: [
      "Think as a University.",
      "Follow University policies and procedures.",
      "Perform to the vision and strategic plan.",
      "Meet goals and carry out responsibilities.",
      "Adapt to change in support of vision and strategic plan.",
    ],
  },
  {
    title: "Innovation and Creativity",
    icon: "💡",
    color: "from-[#312518] to-[#8f3a17]",
    points: [
      "Share thoughts and new ideas.",
      "Actively engage and participate.",
      "Constructively challenge status quo.",
      "Think outside the box.",
    ],
  },
  {
    title: "Respect for People",
    icon: "❤️",
    color: "from-[#8f3a17] to-[#ad4a16]",
    points: [
      "Celebrate success.",
      "Inspire and motivate.",
      "Treat everyone with respect and cooperation.",
      "Embrace diversity for unity.",
    ],
  },
];

const Objectives = () => {
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
              <span className="text-white text-lg lg:text-xl xl:text-2xl">📈</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Our Goals
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
            Our Objectives
          </h2>
          <p className="text-gray-600 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            The University is committed to these core values, which guide us in
            carrying out our mission and realizing our vision. These values are
            represented through <span className="font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">STAIR</span>.
          </p>
        </motion.div>

        {/* Enhanced STAIR Acronym */}
        <motion.div
          className="bg-gradient-to-r from-[#ad4a16]/5 via-[#8f3a17]/5 to-[#312518]/5 rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 border border-[#ad4a16]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-6 lg:mb-8">
              S.T.A.I.R Framework
            </h3>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-8">
              {['S', 'T', 'A', 'I', 'R'].map((letter, index) => (
                <motion.div
                  key={index}
                  className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-white text-xl lg:text-2xl xl:text-3xl font-bold">{letter}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Objectives Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {objectivesData.map((section, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 transition-all duration-500 hover:scale-102 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              {/* Decorative background element */}
              <div className={`absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br ${section.color} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>

              <div className="relative">
                <div className="flex items-center gap-3 lg:gap-4 xl:gap-5 mb-4 lg:mb-6 xl:mb-8">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-xl lg:text-2xl xl:text-3xl">{section.icon}</span>
                  </div>
                  <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 group-hover:text-[#ad4a16] transition-colors duration-300 leading-tight">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-2 lg:space-y-3 xl:space-y-4">
                  {section.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 lg:gap-3 xl:gap-4 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + idx * 0.05 }}
                    >
                      <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                        <FaCheckCircle className="text-white text-xs lg:text-sm xl:text-base" />
                      </div>
                      <span className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
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
              Ready to Experience Our Values?
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 xl:mb-12 opacity-90 leading-relaxed">
              Join us in building a community based on excellence, trust, accountability, innovation, and respect.
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

export default Objectives;
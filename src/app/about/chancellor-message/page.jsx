"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ChairmanImage from "../../../../public/images/faculty/02.jpg";

const ChancellorMessage = () => {
  const messagePoints = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      content: "It is with immense pride and great pleasure that I welcome you to Sengol International University, Sikkim — a vibrant institution committed to academic excellence, innovation, and the holistic development of our students."
    },
    {
      icon: "🌟",
      title: "Transformative Education",
      content: "At Sengol International University, we believe education is not just about the transfer of knowledge, but the transformation of lives. Rooted in the rich cultural heritage of Sikkim and driven by global standards, our university is a place where tradition meets modernity, where students are nurtured to become responsible leaders, critical thinkers, and compassionate global citizens."
    },
    {
      icon: "💡",
      title: "21st Century Learning",
      content: "Our commitment is to provide a dynamic and inclusive learning environment supported by a distinguished faculty, cutting-edge facilities, and a curriculum designed to meet the evolving demands of the 21st century. We strive to nurture intellectual curiosity, social responsibility, and a global mindset in our students."
    },
    {
      icon: "🤝",
      title: "Community of Innovators",
      content: "Sengol International University is not only an academic institution but a community of learners, educators, researchers, and innovators who are driven by the shared goal of making a positive impact on society. Our university is designed as a space for critical inquiry and constructive dialogue, where ideas flourish and diversity is celebrated."
    },
    {
      icon: "🎯",
      title: "Vision for Excellence",
      content: "As Chancellor, my vision is to see Sengol International University emerge as a beacon of knowledge and character — a place where young minds are empowered to innovate, lead, and contribute meaningfully to society. We are focused on building not only a university of excellence, but also a culture of compassion, collaboration, and continuous learning."
    },
    {
      icon: "🌍",
      title: "Global Welcome",
      content: "We welcome students from across the country and around the world to join our vibrant community. At Sengol International University, your aspirations will be met with encouragement, your curiosity with opportunity, and your potential with the resources and support needed to achieve greatness."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-8 lg:p-10 xl:p-12 2xl:p-14 relative overflow-hidden">

      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#ad4a16] to-[#8f3a17] rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-[#8f3a17] to-[#312518] rounded-full blur-2xl"></div>
      </div>

      <div className="relative space-y-12 lg:space-y-16 xl:space-y-20">

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
              <span className="text-white text-lg lg:text-xl xl:text-2xl">👤</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Leadership Message
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
            Message from the Chancellor
          </h1>
        </motion.div>

        {/* Enhanced Profile Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 xl:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Chancellor Image Placeholder */}
          <div className="w-full lg:w-80 xl:w-96 2xl:w-[28rem] flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 xl:p-10 shadow-xl border border-[#ad4a16]/20">
                <div className="w-full aspect-[4/5] bg-gradient-to-br from-[#ad4a16]/10 via-[#8f3a17]/5 to-[#312518]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                      <span className="text-white text-3xl lg:text-4xl xl:text-5xl">👨‍🎓</span>
                    </div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2">
                      Chancellor
                    </h3>
                    <p className="text-sm lg:text-base xl:text-lg text-gray-600">
                      Sengol International University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="flex-1">
            <div className="bg-gradient-to-r from-[#ad4a16]/5 via-[#8f3a17]/5 to-[#312518]/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 border border-[#ad4a16]/10 mb-8 lg:mb-10 xl:mb-12">
              <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed italic">
                "I warmly invite you to be a part of this journey, and I look forward to witnessing the remarkable futures that will be shaped within the halls of Sengol International University."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Message Content */}
        <div className="space-y-6 lg:space-y-8 xl:space-y-10">
          {messagePoints.map((point, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 transition-all duration-500 hover:scale-102"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-start gap-4 lg:gap-6 xl:gap-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-white text-xl lg:text-2xl xl:text-3xl">{point.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3 lg:mb-4 xl:mb-5 group-hover:text-[#ad4a16] transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl">
                    {point.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Signature Section */}
        <motion.div
          className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg border border-[#ad4a16]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center lg:text-left">
            <p className="text-base lg:text-lg xl:text-xl text-gray-700 mb-4 lg:mb-6">
              With best wishes,
            </p>
            <div className="space-y-2">
              <p className="text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                Chancellor
              </p>
              <p className="text-sm lg:text-base xl:text-lg text-gray-600">
                Sengol International University, Sikkim
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Quote Section */}
        <motion.div
          className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8">
              <span className="text-white text-2xl lg:text-3xl xl:text-4xl">💬</span>
            </div>
            <blockquote className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-relaxed italic">
              "Education is the cornerstone of a just and progressive society. Let's build it together — one student at a time."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChancellorMessage;

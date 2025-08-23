"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../../../../public/images/about/about_sikkim.jpg";

const AboutSikkimPage = () => {
  const sikkimFeatures = [
    {
      icon: "🏔️",
      title: "Himalayan Paradise",
      content: "Nestled in the lap of the Eastern Himalayas, Sikkim is a jewel of northeastern India, renowned for its stunning natural beauty, cultural richness, and environmental consciousness. Sharing borders with Bhutan, Tibet, and Nepal, this serene state is India's least populous yet one of its most progressive and peaceful."
    },
    {
      icon: "🤝",
      title: "Cultural Harmony",
      content: "Sikkim boasts a unique blend of traditions, where diverse communities — including the Lepchas, Bhutias, and Nepalis — live in harmony. Its capital, Gangtok, is a picturesque hill town known for its clean environment, welcoming people, and growing educational and technological hubs."
    },
    {
      icon: "🌱",
      title: "Organic Excellence",
      content: "As India's first fully organic state, Sikkim is a model of sustainable development. Its breathtaking landscapes — from snow-capped mountains and alpine meadows to hot springs and monasteries — make it a haven for nature lovers and spiritual seekers alike."
    },
    {
      icon: "🎓",
      title: "Educational Hub",
      content: "Sikkim also holds strategic importance and plays a vital role in India's cultural and ecological diversity. With a high literacy rate and an increasing focus on quality education, it is rapidly becoming a preferred destination for students from across India and abroad."
    }
  ];

  const statistics = [
    { number: "100%", label: "Organic State", icon: "🌿" },
    { number: "98%", label: "Literacy Rate", icon: "📚" },
    { number: "4", label: "Neighboring Countries", icon: "🗺️" },
    { number: "1st", label: "Cleanest State", icon: "✨" }
  ];

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-8 lg:p-10 xl:p-12 2xl:p-14 relative overflow-hidden">

      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#ad4a16] to-[#8f3a17] rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-[#8f3a17] to-[#312518] rounded-full blur-2xl"></div>
      </div>

      <main className="relative space-y-12 lg:space-y-16 xl:space-y-20">

        {/* Enhanced Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Badge */}
          <div className="text-center mb-8 lg:mb-10 xl:mb-12">
            <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8">
              <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
                <span className="text-white text-lg lg:text-xl xl:text-2xl">🏔️</span>
              </div>
              <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
                Our Location
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
              About Sikkim
            </h1>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative group mb-8 lg:mb-12 xl:mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#ad4a16]/20 group-hover:border-[#ad4a16]/40 transition-all duration-500">
              <Image
                src={Image1}
                alt="Beautiful Sikkim Landscape"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image overlay text */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-sm rounded-2xl p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2">
                    The Land of Mystical Beauty
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    Where tradition meets progress in the heart of the Himalayas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Statistics Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mb-12 lg:mb-16 xl:mb-20">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-4 lg:p-6 xl:p-8 text-center shadow-lg border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-2xl lg:text-3xl xl:text-4xl mb-2 lg:mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-1 lg:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs lg:text-sm xl:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Content Cards */}
        <motion.section
          className="space-y-8 lg:space-y-10 xl:space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {sikkimFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 transition-all duration-500 hover:scale-102"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-start gap-4 lg:gap-6 xl:gap-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <span className="text-white text-xl lg:text-2xl xl:text-3xl">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3 lg:mb-4 xl:mb-5 group-hover:text-[#ad4a16] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl">
                    {feature.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Enhanced University Connection */}
        <motion.div
          className="bg-gradient-to-r from-[#ad4a16]/5 via-[#8f3a17]/5 to-[#312518]/5 rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 border border-[#ad4a16]/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
              <span className="text-white text-2xl lg:text-3xl xl:text-4xl">🎓</span>
            </div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6 xl:mb-8">
              Our University's Connection to Sikkim
            </h3>
            <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              At the heart of this progressive and peaceful region,{" "}
              <span className="font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                Sengol International University
              </span>{" "}
              aspires to carry forward Sikkim's legacy of harmony, sustainability, and intellectual growth.
            </p>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 xl:mb-10">
              <span className="text-white text-3xl lg:text-4xl xl:text-5xl">🌄</span>
            </div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8">
              Study in the Heart of the Himalayas
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 xl:mb-12 opacity-90 leading-relaxed">
              Experience world-class education in one of India's most beautiful and progressive states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
              <button className="bg-white text-[#ad4a16] font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                Explore Campus
              </button>
              <button className="border-2 border-white text-white font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl hover:bg-white hover:text-[#ad4a16] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                Visit Sikkim
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AboutSikkimPage;

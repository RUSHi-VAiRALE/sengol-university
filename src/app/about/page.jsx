"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Image1 from "../../../public/images/about/about-us1.png";

const AboutPage = () => {
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
                <span className="text-white text-lg lg:text-xl xl:text-2xl">🏛️</span>
              </div>
              <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
                Our University
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
              About Sengol International University
            </h1>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative group mb-8 lg:mb-12 xl:mb-16">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#ad4a16]/20 group-hover:border-[#ad4a16]/40 transition-all duration-500">
              <Image
                width={1200}
                height={800}
                src={Image1}
                alt="Sengol International University Campus"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 right-6 lg:-bottom-8 lg:left-8 lg:right-8">
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {[
                  { number: "2025", label: "Established" },
                  { number: "50+", label: "Programs" },
                  { number: "1000+", label: "Students" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-r from-white/95 to-white/85 backdrop-blur-sm rounded-2xl p-4 lg:p-6 xl:p-8 text-center shadow-xl border border-[#ad4a16]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  >
                    <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-1 lg:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs lg:text-sm xl:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Content Section */}
        <motion.section
          className="space-y-8 lg:space-y-10 xl:space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Enhanced Introduction */}
          <div className="bg-gradient-to-r from-[#ad4a16]/5 via-[#8f3a17]/5 to-[#312518]/5 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 border border-[#ad4a16]/10">
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl 2xl:text-2xl">
              <span className="font-bold text-[#ad4a16] text-lg lg:text-xl xl:text-2xl">
                Sengol International University
              </span>{" "}
              is a State Private University Established by Act No.{" "}
              <span className="font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">14 of 2025</span>{" "}
              Sikkim State Legislative Assembly & approved by UGC under section 2 (F) of the UGC Act 1956 in 2025.
            </p>
          </div>

          {/* Enhanced Content Cards */}
          <div className="space-y-6 lg:space-y-8 xl:space-y-10">
            {[
              {
                icon: "🏔️",
                title: "Himalayan Excellence",
                content: "Located in the picturesque state of Sikkim, is a premier institution committed to providing world-class education, fostering innovation, and nurturing global leaders. Established with the vision of promoting academic excellence and holistic development, Sengol International University offers a vibrant and inclusive learning environment where students thrive both intellectually and personally."
              },
              {
                icon: "🎓",
                title: "Academic Diversity",
                content: "Situated amidst the serene Himalayas, our campus offers not only a scenic setting but also a peaceful atmosphere conducive to learning and research. The university blends traditional values with modern education, offering a wide spectrum of programs at undergraduate, postgraduate, and doctoral levels across diverse disciplines including Science & Technology, Commerce & Management, Humanities, Social Sciences, Law, Education, Pharmacy, Agriculture, Allied Health Sciences, and more."
              },
              {
                icon: "💡",
                title: "Innovation & Values",
                content: "At Sengol International University, we believe in empowering students with knowledge, skills, and ethical values. Our highly qualified faculty members, modern infrastructure, cutting-edge research facilities, and industry-integrated curriculum ensure that our students are prepared to meet the challenges of a rapidly evolving global landscape."
              },
              {
                icon: "🌍",
                title: "Global Perspective",
                content: "The university emphasizes innovation, sustainability, and research-driven education. Through national and international collaborations, we strive to provide our students with broader academic exposure and global opportunities."
              },
              {
                icon: "🎯",
                title: "Future Leaders",
                content: "Sengol International University remains dedicated to shaping responsible citizens and visionary professionals who will contribute meaningfully to society. With a focus on academic excellence, social responsibility, and global perspective, Sengol International University is on its path to becoming a center of educational distinction in India and beyond."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 transition-all duration-500 hover:scale-102"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-start gap-4 lg:gap-6 xl:gap-8">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <span className="text-white text-xl lg:text-2xl xl:text-3xl">{card.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-3 lg:mb-4 xl:mb-5 group-hover:text-[#ad4a16] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg xl:text-xl">
                      {card.content}
                    </p>
                  </div>
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
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8">
                Join Our Academic Community
              </h3>
              <p className="text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 xl:mb-12 opacity-90 leading-relaxed">
                Experience world-class education in the heart of the Himalayas. Shape your future with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
                <button className="bg-white text-[#ad4a16] font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                  Explore Programs
                </button>
                <button className="border-2 border-white text-white font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl hover:bg-white hover:text-[#ad4a16] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                  Contact Admissions
                </button>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default AboutPage;

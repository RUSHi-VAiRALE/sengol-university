"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import bannerImage from "../../../public/images/banner/slider__4.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaChevronRight, FaHome } from "react-icons/fa";

const menuItems = [
  { label: "About SIU", href: "/about", icon: "🏛️" },
  { label: "About Sikkim", href: "/about/about-sikkim", icon: "🏔️" },
  { label: "Chancellor's Message", href: "/about/chancellor-message", icon: "👤" },
  {
    label: "Vice Chancellor's Message",
    href: "/about/vice-chancellor-message",
    icon: "🎓"
  },
  { label: "Registrar Message", href: "/about/registrar-message", icon: "📋" },
  { label: "Vision & Mission", href: "/about/mission-vision", icon: "🎯" },
  { label: "Our Objectives", href: "/about/objective", icon: "📈" },
  { label: "Approvals & Recognition", href: "/about/approval-recognition", icon: "🏆" },
];

const AboutUsLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6]">
      {/* Enhanced Banner Section */}
      <div className="relative w-full h-[40rem] lg:h-[45rem] xl:h-[50rem] overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/20 via-[#8f3a17]/15 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/15 via-[#312518]/10 to-transparent blur-3xl"></div>
        </div>

        {/* Enhanced Overlayed Content */}
        <motion.div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 lg:gap-3 text-white/90 mb-6 lg:mb-8 text-sm lg:text-base">
            <FaHome className="text-[#ad4a16]" />
            <FaChevronRight className="text-xs lg:text-sm" />
            <span className="text-[#ad4a16] font-medium">About</span>
          </div>

          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
              <span className="text-white text-lg lg:text-xl xl:text-2xl">🎓</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              About Us
            </span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold drop-shadow-2xl mb-6 lg:mb-8 xl:mb-10 leading-tight">
            About <span className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">Sengol</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl xl:text-3xl mt-3 max-w-4xl lg:max-w-5xl xl:max-w-6xl drop-shadow-lg leading-relaxed">
            Learn about our vision, leadership, and commitment to academic
            excellence and inclusive education.
          </p>
        </motion.div>

        {/* Background Image */}
        <Image
          src={bannerImage}
          alt="Academic Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Enhanced dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 z-10"></div>
      </div>

      {/* Enhanced Content Section */}
      <div className="relative">
        <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] py-16 lg:py-20 xl:py-24 2xl:py-28">
          <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">

            {/* Enhanced Main Content */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {children}
            </motion.div>

            {/* Enhanced Sidebar */}
            <motion.aside
              className="w-full xl:w-96 2xl:w-[28rem]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-8 lg:p-10 xl:p-12 sticky top-8">

                {/* Enhanced Header */}
                <div className="flex items-center gap-4 lg:gap-5 xl:gap-6 mb-8 lg:mb-10 xl:mb-12">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg lg:text-xl xl:text-2xl">📚</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
                    About Menu
                  </h2>
                </div>

                {/* Enhanced Navigation */}
                <ul className="space-y-3 lg:space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-3 lg:gap-4 xl:gap-5 px-5 lg:px-6 xl:px-7 py-4 lg:py-5 xl:py-6 rounded-2xl transition-all duration-300 text-base lg:text-lg xl:text-xl font-medium ${pathname === item.href
                            ? "bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white shadow-lg transform scale-105"
                            : "bg-gradient-to-r from-gray-50/50 to-gray-100/50 text-gray-700 hover:from-[#ad4a16]/10 hover:via-[#8f3a17]/10 hover:to-[#312518]/10 hover:text-[#ad4a16] hover:shadow-md hover:scale-102"
                          }`}
                      >
                        <span className="text-xl lg:text-2xl xl:text-3xl">{item.icon}</span>
                        <span className="flex-1 group-hover:translate-x-1 transition-transform duration-300">
                          {item.label}
                        </span>
                        <FaChevronRight className={`text-sm lg:text-base transition-all duration-300 ${pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-[#ad4a16] group-hover:translate-x-1"
                          }`} />
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Enhanced Decorative Element */}
                <div className="mt-8 lg:mt-10 xl:mt-12 p-6 lg:p-8 xl:p-10 bg-gradient-to-r from-[#ad4a16]/5 via-[#8f3a17]/5 to-[#312518]/5 rounded-2xl border border-[#ad4a16]/10">
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-5 xl:mb-6 shadow-lg">
                      <span className="text-white text-2xl lg:text-3xl xl:text-4xl">🎓</span>
                    </div>
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3 xl:mb-4">
                      Need Help?
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base xl:text-lg leading-relaxed mb-4 lg:mb-5 xl:mb-6">
                      Contact our admissions team for more information about our programs.
                    </p>
                    <button className="w-full bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] text-white font-bold py-3 lg:py-4 xl:py-5 px-4 lg:px-6 xl:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLayout;

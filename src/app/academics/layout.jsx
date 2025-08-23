"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaShieldAlt, FaUsers, FaGraduationCap, FaHome, FaChevronRight } from "react-icons/fa";

const menuItems = [
  { label: "Academic Calendar", href: "/academics/calender", icon: FaCalendarAlt },
  { label: "Anti-Ragging", href: "/academics/anti-ragging", icon: FaShieldAlt },
  { label: "Student Corner", href: "/academics/student-concern", icon: FaUsers },
  { label: "Training & Placement Cell", href: "/academics/training-placement", icon: FaGraduationCap },
];

const AcademicLayout = ({ children }) => {
  const pathname = usePathname();

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
        {/* Background with enhanced overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ad4a16] via-[#8f3a17] to-[#312518]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        </div>

        {/* Enhanced Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* Enhanced Breadcrumbs */}
          <motion.div
            className="flex items-center gap-2 lg:gap-3 text-white/80 mb-4 lg:mb-6 text-sm lg:text-base xl:text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaHome className="text-lg lg:text-xl" />
            <FaChevronRight className="text-xs lg:text-sm" />
            <span className="font-medium">Academics</span>
          </motion.div>

          {/* Enhanced Badge */}
          <motion.div
            className="inline-flex items-center gap-3 lg:gap-4 bg-white/20 backdrop-blur-sm border border-white/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 rounded-full mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaGraduationCap className="text-white text-lg lg:text-xl xl:text-2xl" />
            <span className="text-sm lg:text-base xl:text-lg font-semibold text-white uppercase tracking-wider">
              Academic Excellence
            </span>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="drop-shadow-2xl">Academics</span>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-4xl lg:max-w-5xl xl:max-w-6xl leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore academic leadership, faculty excellence, and our commitment to a safe and inclusive learning environment.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 xl:py-20 max-w-[1400px] mx-auto relative">

        {/* Enhanced Sidebar */}
        <motion.aside
          className="w-full xl:w-80 xl:sticky xl:top-24 xl:h-fit"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-6 lg:p-8 xl:p-10 hover:shadow-2xl transition-all duration-500">
            {/* Sidebar Header */}
            <div className="flex items-center gap-4 lg:gap-5 mb-8 lg:mb-10">
              <div className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white text-lg lg:text-xl xl:text-2xl" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                  ACADEMICS
                </h2>
                <p className="text-gray-600 text-sm lg:text-base font-medium">Navigation Menu</p>
              </div>
            </div>

            {/* Enhanced Navigation */}
            <nav className="space-y-3 lg:space-y-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-4 lg:gap-5 px-6 lg:px-7 xl:px-8 py-4 lg:py-5 xl:py-6 rounded-2xl font-semibold text-base lg:text-lg xl:text-xl transition-all duration-300 group relative overflow-hidden
                        ${isActive
                          ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white shadow-xl border border-[#ad4a16]/30 transform scale-105'
                          : 'text-gray-700 hover:text-[#8f3a17] hover:bg-gradient-to-r hover:from-[#ad4a16]/10 hover:to-[#8f3a17]/10 border border-transparent hover:border-[#ad4a16]/20 hover:shadow-lg hover:scale-105'
                        }
                      `}
                    >
                      {/* Background animation for active state */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-50 animate-pulse"></div>
                      )}

                      <div className={`
                        w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative
                        ${isActive
                          ? 'bg-white/20 shadow-lg'
                          : 'bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 group-hover:from-[#ad4a16]/30 group-hover:to-[#8f3a17]/30'
                        }
                      `}>
                        <IconComponent className={`text-lg lg:text-xl ${isActive ? 'text-white' : 'text-[#8f3a17]'}`} />
                      </div>

                      <span className="flex-1 relative">
                        {item.label}
                      </span>

                      {/* Arrow indicator */}
                      <div className={`
                        w-6 h-6 lg:w-7 lg:h-7 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-transparent group-hover:bg-[#ad4a16]/20 text-transparent group-hover:text-[#8f3a17]'
                        }
                      `}>
                        <FaChevronRight className="text-xs lg:text-sm" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Enhanced Footer */}
            <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-[#ad4a16]/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 px-4 lg:px-6 py-3 lg:py-4 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                      Sengol University
                    </p>
                    <p className="text-xs text-gray-600">Academic Portal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Enhanced Main Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-8 lg:p-10 xl:p-12 hover:shadow-2xl transition-all duration-500">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AcademicLayout;
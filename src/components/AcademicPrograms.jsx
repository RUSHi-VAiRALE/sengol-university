// components/AcademicPrograms.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaQuestion, FaDownload, FaMinus, FaBullhorn, FaNewspaper } from "react-icons/fa";

const newsData = [
  {
    date: "12 Jun",
    title: "Job Required For Assistant professor",
    hasDownload: true
  },
  {
    date: "11 Jun",
    title: "Admit cards for the B.Sc. Nursing Entrance Examination 2025",
    hasDownload: true
  },
  {
    date: "24 Apr",
    title: "International Day of Yoga 2025 regarding",
    hasDownload: false
  },
  {
    date: "20 Apr",
    title: "New Academic Calendar 2025-26 Released",
    hasDownload: true
  },
  {
    date: "18 Apr",
    title: "Faculty Development Program Schedule",
    hasDownload: false
  },
  {
    date: "15 Apr",
    title: "Student Registration Portal Now Open",
    hasDownload: true
  },
  {
    date: "12 Apr",
    title: "Library Hours Extended for Exam Season",
    hasDownload: false
  },
  {
    date: "10 Apr",
    title: "Sports Meet 2025 Registration Deadline",
    hasDownload: true
  }
];

const noticeData = [
  "Extension of Last Date for Submission of Applications to Ph.D. Programme 2025-26",
  "Notice regarding MBBS FEE 2025",
  "Document Verification Fee",
  "MDS Fee Corrigendum",
  "Schedule for submission of online application to the B.Sc. (Nursing) programme for Academic",
  "Important Notice: Campus Security Guidelines",
  "Updated Examination Schedule for Final Year Students",
  "Hostel Accommodation Application Deadline Extended",
  "Transportation Schedule Changes Effective Next Week",
  "Laboratory Safety Protocols - Mandatory Compliance",
  "Student ID Card Renewal Process",
  "Cafeteria Menu Updates for Vegetarian Students"
];

const eventData = {
  image: "/images/events/event-image.jpg",
  title: "NATIONAL REFRESHMENT DAY",
  date: "27 Jul 2021",
  location: "College of Physiotherapy, AIMSP"
};

const AcademicPrograms = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#D4AF37]/15 via-[#B8860B]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#CD853F]/12 via-[#A0522D]/8 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-24 xl:mb-28 2xl:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <FaNewspaper className="text-[#D4AF37] text-lg lg:text-xl xl:text-2xl" />
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
              Stay Updated
            </span>
          </div>
          <h2 className="rts__section--title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent mb-6 lg:mb-8 xl:mb-10 leading-tight">
            Latest Updates
          </h2>
          <p className="text-gray-600 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
            Stay informed with the latest news, notices, and events from Sengol International University
          </p>
        </motion.div>

        {/* Enhanced Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-12 2xl:gap-16">

          {/* Enhanced UNIVERSITY NEWS Section */}
          <motion.div
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#D4AF37]/20 p-6 lg:p-8 xl:p-10 hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500 lg:hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between mb-6 lg:mb-8 xl:mb-10">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center">
                  <FaBullhorn className="text-white text-lg lg:text-xl xl:text-2xl" />
                </div>
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">
                  UNIVERSITY <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">NEWS</span>
                </h3>
              </div>
              <Link href="/news" className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 rounded-xl text-xs lg:text-sm xl:text-base font-bold hover:from-[#B8860B] hover:to-[#D4AF37] transition-all duration-300 shadow-lg">
                VIEW ALL
              </Link>
            </div>
            <div className="h-1 lg:h-1.5 xl:h-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full mb-6 lg:mb-8 xl:mb-10 shadow-sm"></div>

            {/* Enhanced News Items - Scrollable */}
            <div className="space-y-4 lg:space-y-5 xl:space-y-6 max-h-80 lg:max-h-96 xl:max-h-[28rem] overflow-y-auto custom-scrollbar pr-2">
              {newsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-center py-2 lg:py-2.5 xl:py-3 px-3 lg:px-4 xl:px-5 rounded-xl font-bold text-xs lg:text-sm xl:text-base min-w-[60px] lg:min-w-[70px] xl:min-w-[80px] shadow-lg">
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed font-medium group-hover:text-[#B8860B] transition-colors duration-300">{item.title}</p>
                    {item.hasDownload && (
                      <button className="mt-2 lg:mt-3 xl:mt-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 xl:py-2.5 rounded-lg text-xs lg:text-sm xl:text-base flex items-center gap-2 hover:from-[#B8860B] hover:to-[#D4AF37] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        <FaDownload size={10} className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                        Download
                      </button>
                    )}
                  </div>
                  {index < newsData.length - 1 && (
                    <div className="absolute left-[30px] top-[50px] w-0.5 h-6 bg-gradient-to-b from-[#D4AF37] to-[#B8860B] opacity-30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced NOTICE BOARD Section */}
          <motion.div
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#D4AF37]/20 p-6 lg:p-8 xl:p-10 hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500 lg:hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between mb-6 lg:mb-8 xl:mb-10">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-r from-[#B8860B] to-[#CD853F] rounded-xl flex items-center justify-center">
                  <FaQuestion className="text-white text-lg lg:text-xl xl:text-2xl" />
                </div>
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">
                  NOTICE <span className="bg-gradient-to-r from-[#B8860B] to-[#CD853F] bg-clip-text text-transparent">BOARD</span>
                </h3>
              </div>
              <Link href="/notices" className="bg-gradient-to-r from-[#B8860B] to-[#CD853F] text-white px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 rounded-xl text-xs lg:text-sm xl:text-base font-bold hover:from-[#CD853F] hover:to-[#B8860B] transition-all duration-300 shadow-lg">
                VIEW ALL
              </Link>
            </div>
            <div className="h-1 lg:h-1.5 xl:h-2 bg-gradient-to-r from-[#B8860B] to-[#CD853F] rounded-full mb-6 lg:mb-8 xl:mb-10 shadow-sm"></div>

            {/* Enhanced Notice Items */}
            <div className="space-y-3 lg:space-y-4 xl:space-y-5 max-h-80 lg:max-h-96 xl:max-h-[28rem] overflow-y-auto custom-scrollbar pr-2">
              {noticeData.map((notice, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 lg:gap-4 xl:gap-5 relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="bg-gradient-to-r from-[#B8860B] to-[#CD853F] text-white p-1.5 lg:p-2 xl:p-2.5 rounded-lg mt-0.5 shadow-md">
                    <FaMinus size={8} className="lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
                  </div>
                  <p className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed flex-1 font-medium group-hover:text-[#CD853F] transition-colors duration-300">{notice}</p>
                  {index < noticeData.length - 1 && (
                    <div className="absolute left-[12px] lg:left-[14px] xl:left-[16px] top-[30px] lg:top-[35px] xl:top-[40px] w-0.5 h-4 lg:h-5 xl:h-6 bg-gradient-to-b from-[#B8860B] to-[#CD853F] opacity-30"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced EVENTS Section */}
          <motion.div
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#D4AF37]/20 p-6 lg:p-8 xl:p-10 hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500 lg:hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Enhanced Header */}
            <div className="flex items-center justify-between mb-6 lg:mb-8 xl:mb-10">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-r from-[#CD853F] to-[#A0522D] rounded-xl flex items-center justify-center">
                  <FaCalendarAlt className="text-white text-lg lg:text-xl xl:text-2xl" />
                </div>
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">
                  <span className="bg-gradient-to-r from-[#CD853F] to-[#A0522D] bg-clip-text text-transparent">EVENTS</span>
                </h3>
              </div>
              <Link href="/events" className="bg-gradient-to-r from-[#CD853F] to-[#A0522D] text-white px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 xl:py-3 rounded-xl text-xs lg:text-sm xl:text-base font-bold hover:from-[#A0522D] hover:to-[#CD853F] transition-all duration-300 shadow-lg">
                VIEW ALL
              </Link>
            </div>
            <div className="h-1 lg:h-1.5 xl:h-2 bg-gradient-to-r from-[#CD853F] to-[#A0522D] rounded-full mb-6 lg:mb-8 xl:mb-10 shadow-sm"></div>

            {/* Enhanced Event Display */}
            <div className="bg-gradient-to-br from-white/50 to-white/30 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-[#D4AF37] via-[#B8860B] to-[#CD853F]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-3 xl:mb-4 drop-shadow-lg">{eventData.title}</div>
                    <div className="text-sm lg:text-base xl:text-lg opacity-90 font-medium">{eventData.location}</div>
                  </div>
                </div>
                <div className="absolute top-4 lg:top-5 xl:top-6 right-4 lg:right-5 xl:right-6 bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm text-gray-800 px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 xl:py-3 rounded-xl text-xs lg:text-sm xl:text-base font-bold shadow-lg">
                  Featured Event
                </div>
              </div>
              <div className="p-4 lg:p-5 xl:p-6 bg-gradient-to-r from-white/80 to-white/60">
                <h4 className="font-bold text-gray-800 mb-2 lg:mb-3 xl:mb-4 text-base lg:text-lg xl:text-xl">{eventData.title}</h4>
                <div className="flex items-center gap-3 lg:gap-4 xl:gap-5 text-gray-600">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-gradient-to-r from-[#CD853F] to-[#A0522D] rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-white text-xs lg:text-sm xl:text-base" />
                    </div>
                    <span className="text-sm lg:text-base xl:text-lg font-medium">{eventData.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default AcademicPrograms;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaCalendarDay, FaCalendarWeek, FaClock, FaGraduationCap, FaInfoCircle, FaStar } from "react-icons/fa";

const AcademicCalendar = () => {
  const academicSchedule = [
    { activity: "Admission/Registration", date: "05 July – 30 Aug 2025", icon: "📝" },
    { activity: "Orientation Classes (1st Year)", date: "22-25 August 2025", icon: "🎓" },
    { activity: "Last Date to Submit Admission Forms", date: "20 Aug 2025", icon: "⏰" },
  ];

  const academicBreaks = [
    { activity: "Winter Break", date: "10 days", icon: "❄️" },
    { activity: "Summer Break", date: "10 days", icon: "☀️" },
  ];

  const academicHolidays = [
    {
      sno: 1,
      festival: "Harela Festival",
      date: "16 July 2025",
      day: "Wednesday",
      holidays: 1,
    },
    {
      sno: 2,
      festival: "University Foundation Day",
      date: "17 July 2025",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 3,
      festival: "Independence Day*",
      date: "15 August 2025",
      day: "Friday",
      holidays: 1,
    },
    {
      sno: 4,
      festival: "Raksha Bandhan",
      date: "9–10 August 2025",
      day: "Saturday–Sunday",
      holidays: 2,
    },
    {
      sno: 5,
      festival: "Janmashtami",
      date: "16 August 2025",
      day: "Saturday",
      holidays: 1,
    },
    {
      sno: 6,
      festival: "Gandhi Jayanti",
      date: "2 October 2025",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 7,
      festival: "Ramnavmi / Dussehra",
      date: "1–2 October 2025",
      day: "Wednesday–Thursday",
      holidays: 1,
    },
    {
      sno: 8,
      festival: "Diwali",
      date: "19–24 October 2025",
      day: "Sunday–Friday",
      holidays: 6,
    },
    {
      sno: 9,
      festival: "Igas-Bagwal",
      date: "1 November 2025",
      day: "Saturday",
      holidays: 1,
    },
    {
      sno: 10,
      festival: "Guru Nanak Jayanti",
      date: "5 November 2025",
      day: "Wednesday",
      holidays: 1,
    },
    {
      sno: 11,
      festival: "Uttarakhand Day*",
      date: "9 November 2025",
      day: "Sunday",
      holidays: 1,
    },
    {
      sno: 12,
      festival: "Christmas Day",
      date: "25 December 2025",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 13,
      festival: "Republic Day*",
      date: "26 January 2026",
      day: "Monday",
      holidays: 1,
    },
    {
      sno: 14,
      festival: "Maha Shivaratri",
      date: "16 February 2026",
      day: "Monday",
      holidays: 1,
    },
    {
      sno: 15,
      festival: "Holi (Rang)",
      date: "2–5 March 2026",
      day: "Monday–Thursday",
      holidays: 4,
    },
    {
      sno: 16,
      festival: "Eid-ul-Fitr (Ramzan)**",
      date: "20 March 2026",
      day: "Friday",
      holidays: 1,
    },
    {
      sno: 17,
      festival: "Ram Navami",
      date: "26 March 2026",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 18,
      festival: "Mahavir Jayanti",
      date: "31 March 2026",
      day: "Tuesday",
      holidays: 1,
    },
    {
      sno: 19,
      festival: "Dr. Ambedkar Jayanti",
      date: "14 April 2026",
      day: "Tuesday",
      holidays: 1,
    },
  ];

  const notes = [
    "75% attendance is mandatory for exam eligibility.",
    "In case, the teaching days are not being completed within the provided Academic Calendar, then Deans/ HODs/ Directors should arrange extra classes prior to exam schedule positively.",
    "Any additional holiday due to local circumstances to the students must be compensated with extra classes on weekends/holidays.",
    "Incomplete teaching days must be covered by extra classes.",
    "Extra holidays must be compensated with weekend classes.",
  ];

  return (
    <div className="space-y-12 lg:space-y-16 xl:space-y-20">
      {/* Enhanced Header */}
      <motion.div
        className="text-center space-y-6 lg:space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 py-3 lg:py-4 rounded-full">
          <FaCalendarAlt className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
          <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Academic Calendar
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          SENGOL INTERNATIONAL UNIVERSITY
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed">
          Academic Calendar (Session 2025–26)
        </h2>
      </motion.div>

      {/* Academic Calendar Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaCalendarDay className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Academic Calendar
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white">
                  <th className="px-6 lg:px-8 py-4 lg:py-6 text-left text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 lg:px-8 py-4 lg:py-6 text-left text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {academicSchedule.map((item, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-[#ad4a16]/10 hover:bg-gradient-to-r hover:from-[#ad4a16]/5 hover:to-[#8f3a17]/5 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <td className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg xl:text-xl font-medium text-gray-800">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <span className="text-xl lg:text-2xl">{item.icon}</span>
                        {item.activity}
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg xl:text-xl font-semibold text-[#8f3a17]">
                      {item.date}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Academic Breaks Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaCalendarWeek className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Academic Breaks (Session 2025–26)
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#8f3a17] to-[#312518] text-white">
                  <th className="px-6 lg:px-8 py-4 lg:py-6 text-left text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 lg:px-8 py-4 lg:py-6 text-left text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {academicBreaks.map((item, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-[#ad4a16]/10 hover:bg-gradient-to-r hover:from-[#8f3a17]/5 hover:to-[#312518]/5 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <td className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg xl:text-xl font-medium text-gray-800">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <span className="text-xl lg:text-2xl">{item.icon}</span>
                        {item.activity}
                      </div>
                    </td>
                    <td className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg xl:text-xl font-semibold text-[#8f3a17]">
                      {item.date}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* Academic Holidays Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#312518] to-[#ad4a16] rounded-xl flex items-center justify-center shadow-lg">
            <FaStar className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#312518] to-[#ad4a16] bg-clip-text text-transparent">
            Academic Holidays (Session 2025–26)
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-[#ad4a16]/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#312518] to-[#ad4a16] text-white">
                  <th className="px-4 lg:px-6 py-4 lg:py-6 text-center text-sm lg:text-base font-bold uppercase tracking-wider">
                    S. No.
                  </th>
                  <th className="px-4 lg:px-6 py-4 lg:py-6 text-left text-sm lg:text-base font-bold uppercase tracking-wider">
                    Festival
                  </th>
                  <th className="px-4 lg:px-6 py-4 lg:py-6 text-left text-sm lg:text-base font-bold uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-4 lg:px-6 py-4 lg:py-6 text-left text-sm lg:text-base font-bold uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-4 lg:px-6 py-4 lg:py-6 text-center text-sm lg:text-base font-bold uppercase tracking-wider">
                    Holidays
                  </th>
                </tr>
              </thead>
              <tbody>
                {academicHolidays.map((item, index) => (
                  <motion.tr
                    key={item.sno}
                    className="border-b border-[#ad4a16]/10 hover:bg-gradient-to-r hover:from-[#312518]/5 hover:to-[#ad4a16]/5 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                  >
                    <td className="px-4 lg:px-6 py-4 lg:py-5 text-center text-base lg:text-lg font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                      {item.sno}
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-5 text-sm lg:text-base xl:text-lg font-medium text-gray-800">
                      {item.festival}
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-5 text-sm lg:text-base xl:text-lg font-semibold text-[#8f3a17]">
                      {item.date}
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-5 text-sm lg:text-base xl:text-lg font-medium text-gray-700">
                      {item.day}
                    </td>
                    <td className="px-4 lg:px-6 py-4 lg:py-5 text-center text-sm lg:text-base xl:text-lg font-bold text-[#ad4a16]">
                      {item.holidays}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Holidays */}
          <div className="bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 px-6 lg:px-8 py-4 lg:py-6">
            <p className="text-right text-lg lg:text-xl xl:text-2xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Total Holidays: 28 Days
            </p>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Notes Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaInfoCircle className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] to-[#312518] bg-clip-text text-transparent">
            Important Notes
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
          <ul className="space-y-4 lg:space-y-6">
            {notes.map((note, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-4 lg:gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                  {note}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <FaGraduationCap className="text-white text-2xl lg:text-3xl" />
          </div>

          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Stay Updated with Academic Calendar
          </h3>

          <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Keep track of important dates, holidays, and academic activities throughout the session.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AcademicCalendar;
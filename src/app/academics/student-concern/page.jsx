"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaGavel, FaBookOpen, FaClipboardCheck, FaClock, FaExclamationTriangle, FaBan, FaUserShield, FaIdCard, FaBook } from "react-icons/fa";

const StudentConcern = () => {
  const conductRules = [
    "Be respectful and polite to all staff and peers.",
    "Do not bring disrepute to the university by your words or actions, inside or outside campus.",
    "Avoid inciting or using violent, threatening, or insulting language.",
    "Maintain regularity and punctuality in all university activities.",
    "Leaving the classroom during lectures is prohibited.",
    "Observe silence in classrooms whether faculty is present or not.",
    "Group gatherings at entrances, pathways, or roads are banned.",
    "Do not misuse reasons like fees or library visits to skip class.",
    "Always carry and display your University Identity Card.",
    "Read university notices and circulars regularly.",
    "Park vehicles in designated areas only.",
    "Behave appropriately at university events.",
    "Smoking, spitting, and littering are prohibited on campus.",
    "Entry into administrative or staff rooms is not allowed without permission.",
    "Any damage to university property will be charged collectively if no individual is identified.",
    "Grievances must be submitted formally via the class teacher or Grievance Committee.",
    "No meetings/functions or circulation of notices without Principal's written permission.",
    "Media communication requires prior university approval.",
    "Participation in strikes or organizing disruptions will attract strict action.",
    "Students must take exams, tests, and assignments seriously.",
    "Improper conduct in exams or with admission documents is punishable.",
    "Silence is mandatory due to simultaneous courses on campus.",
    "Students must wear proper uniform; non-compliance may be penalized.",
    "Mobile phones are strictly banned inside the campus.",
    "Political activity of any kind is banned; violation can lead to rustication.",
  ];

  const attendanceRules = [
    "Students should attend all classes regularly and punctually.",
    "Students must be punctual to each lecture hour. Students coming late to the class by more than five minutes will not be given attendance for that period.",
    "Although the University prescribes a minimum of 75% of attendance, the University insists on regular attendance in all classes. Students are eligible for scholarships only when they earn more than 90% of attendance.",
    "A student with less than 75% of attendance will not be eligible to write the Semester Examinations of the University.",
    "Students are not permitted to absent themselves without prior permission.",
    "An application for leave must be submitted in the prescribed form well in advance or at least a day before the leave is required.",
    "When absence without prior permission is unavoidable the leave application must be submitted on the day of return to the University after the leave period.",
    "Even with prior permission, if a student absents oneself, even for a single hour, he/she would be considered as absent for the whole session.",
    "Absence without leave for even a part of the day will be counted as absence for one day.",
    "Students without Identity Card & proper Uniform will be marked absent.",
    "If a student absents himself/herself for three consecutive days without leave his/her name will be removed from the rolls.",
    "Removal of the names from the rolls shall entail forfeiture of attendance till the date of re-admission.",
    "In case of any violation of rules and regulations by the student, action initiated against the student may include a warning or a reprimand, awarding a fail mark for an assignment or course, suspension or expulsion from a particular class or from the University, withholding of official documents, withdrawal of campus privileges and any other action which the University authorities deem appropriate at that time.",
  ];

  const libraryRules = [
    "The Library has been opened to all the Students, Faculty and Staff of the University.",
    "Readers will not be allowed to enter the library with their personal belongings.",
    "Readers are prohibited from engaging in any activity which may disturb or distract the attention of other readers and will result in severe disciplinary action.",
    "No reader shall write upon, damage or make marks on any library book. Each student of the University will be issued two tickets. A book will be lent to a reader only in exchange of one of his/her tickets which will be returned back to the reader when he/she returns the book.",
    "Date label and book pockets shall not be tampered with. Serious notice will be taken on any violation of this rule.",
    "Library tickets are not transferable. A reader who misses a ticket shall follow the stipulated process including remittance of Rs.50 as a fine to get another Ticket. In case he/she happens to get the ticket at a later date, the reader should return the same immediately.",
    "A reader who fails to return a book on the due date will be charged a sum of 50 paisa per day as fine till he/she returns the book. Such a reader will not be allowed to use the library till the book is returned and fine paid.",
    "At the end of each semester before receiving the hall ticket, the student should return all the books to the library. Without a clearance certificate (NO DUE) to this effect from the Librarian, the University will not permit a student to write the End Semester Examination.",
    "The Diploma and Certificate/ Provisional shall be issued to the students only after they return all the books and remit dues outstanding against them.",
  ];

  const indisciplineActs = [
    "Ragging or eve teasing in any form",
    "Disruption of classroom activities or disturbance to fellow students",
    "Causing damage to university property",
    "Possession or consumption of intoxicants, drugs, or weapons",
    "Misconduct during examinations",
    "Submitting false information for admission",
    "Failure to return university property or settle financial dues",
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
          <FaUsers className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
          <span className="text-sm lg:text-base font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
            Student Guidelines
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          SENGOL INTERNATIONAL UNIVERSITY
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed">
          RULES AND REGULATIONS
        </h2>
      </motion.div>

      {/* Conduct & Discipline Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaGavel className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Conduct & Discipline
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20 space-y-8 lg:space-y-10">
          {/* Student Discipline Introduction */}
          <div>
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 lg:mb-6 flex items-center gap-3">
              <FaUserShield className="text-[#ad4a16]" />
              Student Discipline
            </h4>
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
              Students are expected to conduct themselves in a responsible manner and uphold the integrity and values of the University. Respect towards faculty, staff, and fellow students is mandatory. Any behavior that disrupts academic activities or harms the university's environment will be subject to disciplinary action.
            </p>
          </div>

          {/* Acts of Indiscipline */}
          <div>
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold text-red-600 mb-4 lg:mb-6 flex items-center gap-3">
              <FaExclamationTriangle className="text-red-600" />
              Acts of Indiscipline Include (but are not limited to):
            </h4>
            <div className="grid gap-3 lg:gap-4">
              {indisciplineActs.map((act, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 lg:p-5 bg-red-50/50 rounded-xl border border-red-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaBan className="text-white text-xs lg:text-sm" />
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    {act}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ban on Ragging */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 lg:p-8">
            <h4 className="text-xl lg:text-2xl font-bold text-red-700 mb-4 flex items-center gap-3">
              <FaBan className="text-red-600" />
              Ban on Ragging
            </h4>
            <div className="space-y-4">
              <p className="text-red-800 text-lg lg:text-xl font-bold">
                Ragging is strictly prohibited. Any student found involved in ragging will be given an opportunity to explain. If unsatisfactory, the student will be expelled immediately.
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                Ragging and eve teasing are criminal offenses under <span className="font-bold text-red-600">Government of Sikkim law</span>—with penalties including:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="bg-white border-2 border-red-500 text-red-600 px-6 py-3 rounded-lg font-bold text-center">
                  A fine of ₹25,000
                </div>
                <div className="bg-white border-2 border-red-500 text-red-600 px-6 py-3 rounded-lg font-bold text-center">
                  Imprisonment up to two years
                </div>
              </div>
            </div>
          </div>

          {/* Disciplinary Authority */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6 flex items-center gap-3">
              <FaGavel className="text-[#ad4a16]" />
              Disciplinary Authority
            </h4>
            <div className="grid gap-3 lg:gap-4">
              {["All disciplinary powers rest with the Principal.", "The Principal may delegate powers to other university officers.", "The Principal's decision is final in all disciplinary matters."].map((authority, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 lg:p-5 bg-blue-50/50 rounded-xl border border-blue-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    {authority}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Specific Conduct Rules */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaClipboardCheck className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600">
            Specific Conduct Rules
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-blue-500/20">
          <div className="grid gap-3 lg:gap-4 max-h-96 overflow-y-auto" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#3b82f6 #f1f1f1'
          }}>
            {conductRules.map((rule, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 lg:p-5 bg-blue-50/50 rounded-xl border border-blue-200/50 hover:bg-blue-100/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.02 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed font-medium">
                  {rule}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Attendance Rules */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaClock className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">
            Attendance Rules
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-green-500/20">
          {/* Key Attendance Highlights */}
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-10">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">75%</div>
              <div className="text-sm lg:text-base text-green-700 font-medium">Minimum Required</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-sm lg:text-base text-blue-700 font-medium">For Scholarships</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">5 min</div>
              <div className="text-sm lg:text-base text-orange-700 font-medium">Late Grace Period</div>
            </div>
          </div>

          <div className="grid gap-3 lg:gap-4 max-h-96 overflow-y-auto" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#10b981 #f1f1f1'
          }}>
            {attendanceRules.map((rule, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 lg:p-5 bg-green-50/50 rounded-xl border border-green-200/50 hover:bg-green-100/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.02 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed font-medium">
                  {rule}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Library Rules */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaBook className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600">
            Library Rules
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-purple-500/20">
          {/* Library Highlights */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-10">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 lg:p-6 text-center">
              <FaIdCard className="text-purple-600 text-2xl lg:text-3xl mx-auto mb-2" />
              <div className="text-sm lg:text-base text-purple-700 font-medium">2 Library Tickets per Student</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 lg:p-6 text-center">
              <div className="text-xl lg:text-2xl font-bold text-red-600 mb-2">₹0.50/day</div>
              <div className="text-sm lg:text-base text-red-700 font-medium">Late Return Fine</div>
            </div>
          </div>

          <div className="grid gap-3 lg:gap-4 max-h-96 overflow-y-auto" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#8b5cf6 #f1f1f1'
          }}>
            {libraryRules.map((rule, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 lg:p-5 bg-purple-50/50 rounded-xl border border-purple-200/50 hover:bg-purple-100/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.02 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed font-medium">
                  {rule}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced CTA Section */}
      <motion.div
        className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <FaBookOpen className="text-white text-2xl lg:text-3xl" />
          </div>

          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Follow University Guidelines
          </h3>

          <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
            Adherence to these rules ensures a conducive learning environment for all students and maintains the university's academic standards.
          </p>

          <div className="bg-gradient-to-r from-[#ad4a16]/5 to-[#8f3a17]/5 rounded-xl p-6 lg:p-8">
            <p className="text-gray-700 text-base lg:text-lg font-medium">
              For any clarifications or grievances, please contact the Student Affairs Office or your respective department coordinators.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentConcern;
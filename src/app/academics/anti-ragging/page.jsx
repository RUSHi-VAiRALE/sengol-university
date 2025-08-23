"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaExclamationTriangle, FaGavel, FaUsers, FaPhoneAlt, FaEnvelope, FaInfoCircle, FaBan } from "react-icons/fa";

const AntiRagging = () => {
  const raggingDefinitions = [
    "Verbal or physical abuse, bullying, or harassment.",
    "Forcing a student to perform actions that cause embarrassment or psychological harm.",
    "Any act that affects the mental or physical health and self-confidence of a fellow student.",
    "Preventing a student from attending classes or participating in activities through intimidation.",
  ];

  const prohibitedActivities = [
    "Teasing, name-calling, or insulting a student.",
    "Forcing juniors to perform objectionable or humiliating tasks.",
    "Creating a hostile academic, residential, or social environment.",
  ];

  const consequences = [
    "Immediate suspension from the university.",
    "Cancellation of admission.",
    "FIR/lawsuit under IPC sections related to criminal intimidation and harassment.",
    "Debarring from examinations, scholarships, or campus placements.",
    "Expulsion from the university.",
  ];

  const supportStructure = [
    {
      title: "Anti-Ragging Committee",
      description: "Oversees policy implementation and conducts inquiry into complaints.",
      icon: FaGavel,
    },
    {
      title: "Anti-Ragging Squad",
      description: "Conducts surprise checks, monitors vulnerable locations, and acts proactively.",
      icon: FaUsers,
    },
    {
      title: "Nodal Officer",
      description: "Coordinates with external bodies and handles grievance redressal.",
      icon: FaShieldAlt,
    },
  ];

  const complaintMechanisms = [
    "Students can report anonymously through the Online Grievance Portal or by email.",
    "A dedicated Anti-Ragging Helpline is operational 24/7.",
    "All complaints will be treated confidentially, and strict action will be taken.",
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
        <div className="inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-500/30 px-6 lg:px-8 py-3 lg:py-4 rounded-full">
          <FaShieldAlt className="text-red-600 text-lg lg:text-xl xl:text-2xl" />
          <span className="text-sm lg:text-base font-semibold text-red-600 uppercase tracking-wider">
            Zero Tolerance Policy
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
          SENGOL INTERNATIONAL UNIVERSITY
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 leading-relaxed flex items-center justify-center gap-3">
          <FaExclamationTriangle className="text-red-600" />
          ANTI-RAGGING POLICY STATEMENT
        </h2>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaInfoCircle className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Introduction
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
          <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
            Sengol International University is committed to ensuring a safe, secure, and nurturing environment for all students. In compliance with the guidelines of the{" "}
            <span className="font-bold text-[#ad4a16]">Hon'ble Supreme Court of India</span>{" "}
            and the{" "}
            <span className="font-bold text-[#ad4a16]">University Grants Commission (UGC)</span>
            , the university adopts a{" "}
            <span className="font-bold text-red-600 bg-red-50 px-3 py-1 rounded-lg">Zero Tolerance Policy</span>{" "}
            against Ragging in any form.
          </p>
        </div>
      </motion.div>

      {/* What Constitutes Ragging */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaExclamationTriangle className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">
            What Constitutes Ragging?
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-red-500/20">
          <p className="text-gray-700 text-lg lg:text-xl mb-6 lg:mb-8 font-medium">
            As per the UGC regulations, ragging includes—but is not limited to—the following:
          </p>

          <div className="grid gap-4 lg:gap-6">
            {raggingDefinitions.map((definition, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-red-50/50 rounded-xl border border-red-200/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                  {definition}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Prohibited Activities */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
            <FaBan className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Prohibited Activities Include
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-orange-500/20">
          <div className="grid gap-4 lg:gap-6">
            {prohibitedActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-orange-50/50 rounded-xl border border-orange-200/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <FaBan className="text-white text-xs lg:text-sm" />
                </div>
                <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                  {activity}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Legal Consequences */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
            <FaGavel className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">
            Legal and Disciplinary Consequences
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-red-600/20">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 lg:p-8 mb-6 lg:mb-8">
            <p className="text-red-800 text-lg lg:text-xl xl:text-2xl font-bold text-center">
              ⚠️ Engaging in ragging is a criminal offense ⚠️
            </p>
          </div>

          <p className="text-gray-700 text-lg lg:text-xl mb-6 lg:mb-8 font-medium">
            The following penalties may apply:
          </p>

          <div className="grid gap-4 lg:gap-6">
            {consequences.map((consequence, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-red-50/50 rounded-xl border border-red-200/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs lg:text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-semibold">
                  {consequence}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Support Structure */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
            <FaUsers className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
            Support Structure
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {supportStructure.map((support, index) => {
            const IconComponent = support.icon;
            return (
              <motion.div
                key={support.title}
                className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
                  <IconComponent className="text-white text-2xl lg:text-3xl" />
                </div>
                <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-3 lg:mb-4">
                  {support.title}
                </h4>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {support.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Complaint Mechanisms */}
      <motion.div
        className="space-y-8 lg:space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
            <FaPhoneAlt className="text-white text-lg lg:text-2xl" />
          </div>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">
            Complaint Mechanisms
          </h3>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-green-500/20">
          <div className="grid gap-4 lg:gap-6">
            {complaintMechanisms.map((mechanism, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-green-50/50 rounded-xl border border-green-200/50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  {index === 0 ? <FaEnvelope className="text-white text-xs lg:text-sm" /> :
                    index === 1 ? <FaPhoneAlt className="text-white text-xs lg:text-sm" /> :
                      <FaShieldAlt className="text-white text-xs lg:text-sm" />}
                </div>
                <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                  {mechanism}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Emergency Contact CTA */}
      <motion.div
        className="text-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl p-8 lg:p-12 xl:p-16 border border-red-200/50 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
            <FaPhoneAlt className="text-white text-2xl lg:text-3xl" />
          </div>

          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600">
            Need Help? Report Immediately!
          </h3>

          <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
            Your safety is our priority. Don't hesitate to reach out if you experience or witness any form of ragging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <div className="bg-white border-2 border-red-500 text-red-600 px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg">
              <FaPhoneAlt />
              <span>24/7 Helpline: 1800-XXX-XXXX</span>
            </div>

            <div className="bg-white border-2 border-green-500 text-green-600 px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg">
              <FaEnvelope />
              <span>antiragging@sengol.edu</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AntiRagging;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaUniversity, FaUpload, FaMoneyBillWave, FaUserCheck, FaGraduationCap, FaClipboardList, FaDownload, FaCreditCard, FaMobileAlt, FaLaptop, FaAward, FaBook, FaIdCard } from "react-icons/fa";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const AdmissionProcedurePage = () => {
  const onlineSteps = [
    {
      step: 1,
      title: "Online Registration",
      description: "Visit the official website and fill out the online registration form.",
      icon: FaLaptop,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Complete the application form with personal, academic, and program-related details. Upload required documents.",
      icon: FaUpload,
      color: "from-green-500 to-green-600",
    },
    {
      step: 3,
      title: "Document Verification",
      description: "Submitted documents are verified for eligibility and authenticity.",
      icon: FaUserCheck,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: 4,
      title: "Entrance Exam / Merit Evaluation",
      description: "Depending on the program, admission is either entrance-based or merit-based.",
      icon: FaClipboardList,
      color: "from-orange-500 to-orange-600",
    },
    {
      step: 5,
      title: "Admission Letter",
      description: "Selected candidates receive an official Admission Letter via email or portal.",
      icon: FaCheckCircle,
      color: "from-teal-500 to-teal-600",
    },
    {
      step: 6,
      title: "Fee Payment",
      description: "Pay the prescribed admission fee through online/offline mode.",
      icon: FaMoneyBillWave,
      color: "from-red-500 to-red-600",
    },
    {
      step: 7,
      title: "Final Enrollment",
      description: "After payment confirmation, you are officially enrolled in the program.",
      icon: FaGraduationCap,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const offlineSteps = [
    "Visit the university campus or authorized admission centers.",
    "Collect the printed admission form from the Admission Office.",
    "Fill the form manually with blue/black pen.",
    "Attach photocopies of required documents.",
    "Submit the completed form at the Admission Office with the application fee (cash/DD).",
    "Collect the receipt and wait for further communication via SMS/email.",
  ];

  const requiredDocuments = [
    { doc: "Passport-size photograph", icon: FaIdCard },
    { doc: "10th & 12th mark sheets and certificates (for UG programs)", icon: FaBook },
    { doc: "Graduation mark sheets (for PG programs)", icon: FaGraduationCap },
    { doc: "Identity proof (Aadhaar/PAN/Passport)", icon: FaIdCard },
    { doc: "Transfer/Migration Certificate", icon: FaDownload },
    { doc: "Category certificate (if applicable)", icon: FaAward },
    { doc: "Entrance exam scorecard (if applicable)", icon: FaClipboardList },
  ];

  const eligibilityCriteria = [
    { level: "Undergraduate", criteria: "10+2 or equivalent with minimum 45–50% (varies by course)" },
    { level: "Postgraduate", criteria: "Graduation in relevant subject with 50–55%" },
    { level: "Diploma", criteria: "10th / 10+2 depending on course type" },
    { level: "Ph.D./M.Phil.", criteria: "Postgraduate in relevant subject with minimum 55%" },
  ];

  const paymentMethods = [
    { method: "Net Banking", icon: FaLaptop, color: "text-blue-600" },
    { method: "Credit/Debit Card", icon: FaCreditCard, color: "text-green-600" },
    { method: "UPI (Google Pay, PhonePe, Paytm, etc.)", icon: FaMobileAlt, color: "text-purple-600" },
    { method: "Online Wallets", icon: RiSecurePaymentFill, color: "text-orange-600" },
  ];

  const admissionModes = [
    "Merit-Based Admission",
    "Entrance Exam-Based Admission",
    "Direct Admission (under management quota, if applicable)",
    "Lateral Entry (for eligible diploma holders or transfer students)",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/15 via-[#8f3a17]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/12 via-[#312518]/8 to-transparent blur-3xl"></div>
      </div>

      {/* Enhanced Banner Section */}
      <div className="relative w-full h-[28rem] lg:h-[32rem] xl:h-[36rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ad4a16] via-[#8f3a17] to-[#312518]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 rounded-full blur-sm animate-pulse"></div>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          {/* Enhanced Breadcrumbs */}
          <motion.p
            className="text-white/80 mb-4 lg:mb-6 text-sm lg:text-base xl:text-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Home / Admission Procedure
          </motion.p>

          {/* Enhanced Title */}
          <motion.h1
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 lg:mb-8 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Admission Procedure
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-4xl lg:max-w-5xl leading-relaxed font-medium drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover a simple, transparent, and student-friendly admission process designed to help you join your desired program with ease and clarity.
          </motion.p>
        </div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 py-12 lg:py-16 xl:py-20 max-w-[1400px] mx-auto space-y-16 lg:space-y-20 xl:space-y-24">

        {/* Overview Section */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center shadow-lg">
              <FaUniversity className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Overview
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium mb-6">
              <strong>Sengol International University (SIU)</strong> offers a <strong>streamlined and transparent admission process</strong> to ensure that prospective students can conveniently apply and gain admission to their preferred programs. The university is committed to selecting and enrolling students who exhibit <strong>academic excellence, personal integrity,</strong> and a strong desire for <strong>holistic development.</strong>
            </p>
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium">
              Our admission procedure is thoughtfully designed to be <strong>student-friendly,</strong> guiding applicants step-by-step from initial inquiry to final enrollment, while maintaining fairness, transparency, and merit-based selection at its core.
            </p>
          </div>
        </motion.div>

        {/* Online Admission Process */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaLaptop className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-600">
              📩 Step-by-Step Online Admission Process
            </h2>
          </div>

          <div className="grid gap-6 lg:gap-8">
            {onlineSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-xl border border-[#ad4a16]/20 hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 hover:scale-105"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-6 lg:gap-8">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <IconComponent className="text-white text-2xl lg:text-3xl" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3 lg:mb-4">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm lg:text-base">{step.step}</span>
                        </div>
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Offline Admission Process */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <MdOutlineUploadFile className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-green-600">
              📝 Step-by-Step Offline Admission Process
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-green-500/20">
            <div className="space-y-4 lg:space-y-6">
              {offlineSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 lg:gap-6 p-4 lg:p-6 bg-green-50/50 rounded-xl border border-green-200/50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm lg:text-base">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 lg:mt-10 bg-red-50 border border-red-200 rounded-xl p-6 lg:p-8">
              <p className="text-red-800 font-bold text-lg lg:text-xl flex items-center gap-3">
                <span className="text-2xl">🛑</span>
                <strong>Important:</strong> Always keep a photocopy of your filled form and payment receipt.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Required Documents */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaClipboardList className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600">
              📄 Required Documents
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {requiredDocuments.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-purple-500/20 hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <IconComponent className="text-white text-lg lg:text-xl" />
                    </div>
                    <p className="text-gray-700 font-medium text-base lg:text-lg leading-relaxed">
                      {item.doc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Eligibility Criteria */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaCheckCircle className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-600">
              ✅ Eligibility Criteria
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-orange-500/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <th className="px-6 lg:px-8 py-4 lg:py-6 text-left text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">
                      Program Level
                    </th>
                    <th className="px-6 lg:px-8 py-4 lg:py-6 text-left text-sm lg:text-base xl:text-lg font-bold uppercase tracking-wider">
                      Eligibility Criteria
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityCriteria.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-orange-200/50 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-orange-100/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <td className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg xl:text-xl font-bold text-orange-600">
                        {item.level}
                      </td>
                      <td className="px-6 lg:px-8 py-4 lg:py-6 text-base lg:text-lg xl:text-xl font-medium text-gray-700">
                        {item.criteria}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Payment Procedure */}
        <motion.div
          className="space-y-8 lg:space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-4 lg:gap-6">
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <RiSecurePaymentFill className="text-white text-lg lg:text-2xl" />
            </div>
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">
              💳 Payment Procedure
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-teal-500/20">
            <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium mb-8 lg:mb-10">
              <strong>Sengol International University (SIU)</strong> offers both online and offline modes of fee payment to ensure convenience and accessibility for all students.
            </p>

            {/* Online Payment Methods */}
            <div className="mb-8 lg:mb-10">
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-teal-600 mb-6 lg:mb-8">
                1. Online Payment Methods
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
                {paymentMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl p-4 lg:p-6 text-center border border-teal-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <IconComponent className={`text-2xl lg:text-3xl mx-auto mb-3 ${method.color}`} />
                      <p className="font-bold text-sm lg:text-base text-gray-700">{method.method}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 lg:p-8">
                <h4 className="font-bold text-lg lg:text-xl text-teal-700 mb-4">Payment Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 lg:space-y-3 text-gray-700">
                  <li>Visit the official website and log in to the student portal.</li>
                  <li>Navigate to the "Fee Payment" section.</li>
                  <li>Choose your preferred mode of online payment.</li>
                  <li>Complete the transaction and download the fee receipt.</li>
                </ol>
              </div>
            </div>

            {/* Offline Payment */}
            <div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-teal-600 mb-6 lg:mb-8">
                2. Offline Payment Options
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start gap-4 p-4 lg:p-6 bg-teal-50/50 rounded-xl border border-teal-200/50">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base lg:text-lg">
                    <strong>Demand Draft (DD)</strong> in favor of Sengol International University, payable at Sikkim.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 lg:p-6 bg-teal-50/50 rounded-xl border border-teal-200/50">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base lg:text-lg">
                    <strong>Cash Payment</strong> at the university's admission/finance office.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 lg:p-6 bg-teal-50/50 rounded-xl border border-teal-200/50">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <p className="text-gray-700 font-medium text-base lg:text-lg">
                    <strong>Bank Transfer (NEFT/RTGS)</strong> to the official university account.
                  </p>
                </div>
              </div>

              <div className="mt-6 lg:mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 lg:p-8">
                <h4 className="font-bold text-lg text-yellow-700 mb-3">Important Notes:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• All payments must be made before the specified deadline to confirm admission or semester enrollment.</li>
                  <li>• Ensure to collect the payment receipt or acknowledgment slip after payment.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Admission Modes & Scholarships */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Admission Modes */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-xl flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] bg-clip-text text-transparent">
                🎓 Admission Modes
              </h3>
            </div>
            <div className="space-y-3 lg:space-y-4">
              {admissionModes.map((mode, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 lg:p-4 bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full"></div>
                  <p className="font-bold text-gray-700 text-base lg:text-lg">{mode}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Scholarships */}
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#8f3a17]/20">
            <div className="flex items-center gap-4 mb-6 lg:mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center">
                <FaAward className="text-white text-xl" />
              </div>
              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                🏅 Scholarships
              </h3>
            </div>
            <p className="text-gray-700 text-base lg:text-lg xl:text-xl leading-relaxed font-medium">
              SIU offers merit-based, need-based, and category-specific scholarships. Students can apply during the admission process with relevant documents.
            </p>
            <div className="mt-6 lg:mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-[#8f3a17]/10 to-[#312518]/10 rounded-lg">
                <div className="font-bold text-lg lg:text-xl text-[#8f3a17]">Merit</div>
                <div className="text-xs lg:text-sm text-gray-600">Based</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-[#8f3a17]/10 to-[#312518]/10 rounded-lg">
                <div className="font-bold text-lg lg:text-xl text-[#8f3a17]">Need</div>
                <div className="text-xs lg:text-sm text-gray-600">Based</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gradient-to-r from-[#8f3a17]/10 to-[#312518]/10 rounded-lg">
                <div className="font-bold text-lg lg:text-xl text-[#8f3a17]">Category</div>
                <div className="text-xs lg:text-sm text-gray-600">Specific</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 xl:p-16 border border-[#ad4a16]/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto shadow-xl">
              <FaGraduationCap className="text-white text-2xl lg:text-3xl" />
            </div>

            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
              Ready to Begin Your Application?
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl leading-relaxed">
              Follow our simple and transparent admission process to secure your place at Sengol International University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <FaArrowRight />
                <span>Start Application</span>
              </button>

              <button className="bg-white border-2 border-[#ad4a16] text-[#ad4a16] px-8 lg:px-10 py-4 lg:py-6 rounded-xl font-bold text-lg lg:text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ad4a16] hover:via-[#8f3a17] hover:to-[#312518] hover:text-white hover:border-transparent">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionProcedurePage;
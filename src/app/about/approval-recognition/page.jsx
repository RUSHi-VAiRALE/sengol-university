"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SikkimLogo from "../../../../public/images/about/approval_recognitions_logo.png";

const ApprovalRecognition = () => {
  const recognitions = [
    {
      icon: "🏛️",
      title: "Government of Sikkim",
      description: "State Private University Established by Act No. 14 of 2025",
      status: "Approved",
      color: "from-[#ad4a16] to-[#8f3a17]"
    },
    {
      icon: "📜",
      title: "UGC Recognition",
      description: "Approved under section 2 (F) of the UGC Act 1956 in 2025",
      status: "Certified",
      color: "from-[#8f3a17] to-[#312518]"
    },
    {
      icon: "⚖️",
      title: "Legal Status",
      description: "Sikkim State Legislative Assembly authorized",
      status: "Verified",
      color: "from-[#312518] to-[#ad4a16]"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-8 lg:p-10 xl:p-12 2xl:p-14 relative overflow-hidden">

      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#ad4a16] to-[#8f3a17] rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tl from-[#8f3a17] to-[#312518] rounded-full blur-2xl"></div>
      </div>

      <section className="relative space-y-12 lg:space-y-16 xl:space-y-20">

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
              <span className="text-white text-lg lg:text-xl xl:text-2xl">🏆</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Official Status
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
            Approvals & Recognitions
          </h2>
        </motion.div>

        {/* Enhanced Recognition Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-12 lg:mb-16 xl:mb-20">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg hover:shadow-xl border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 transition-all duration-500 hover:scale-102"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r ${recognition.color} rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-2xl lg:text-3xl xl:text-4xl">{recognition.icon}</span>
                </div>
                <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 mb-2 lg:mb-3 group-hover:text-[#ad4a16] transition-colors duration-300">
                  {recognition.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base xl:text-lg leading-relaxed mb-3 lg:mb-4">
                  {recognition.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 px-3 lg:px-4 py-1 lg:py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-700 text-xs lg:text-sm font-medium">{recognition.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Official Document Section */}
        <motion.div
          className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 shadow-xl border border-[#ad4a16]/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-white/95 to-white/85 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg border border-[#ad4a16]/20">
                <Image
                  src={SikkimLogo}
                  alt="Government of Sikkim Official Seal"
                  width={150}
                  height={150}
                  className="mx-auto w-24 h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain"
                />
                <div className="text-center mt-4 lg:mt-6">
                  <p className="text-sm lg:text-base xl:text-lg font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                    GOVERNMENT OF SIKKIM
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">
                    Official Seal
                  </p>
                </div>
              </div>
            </div>

            {/* Document Information */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 lg:mb-6 xl:mb-8 leading-tight">
                Official Gazette Notification
              </h3>
              <p className="text-base lg:text-lg xl:text-xl text-gray-700 mb-6 lg:mb-8 xl:mb-10 leading-relaxed">
                Sikkim State Government Gazette of Sengol International University -
                Official establishment document under Act No. 14 of 2025
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center md:justify-start">
                <a
                  href="/pdfs/about/Gazette_Notification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 lg:gap-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] text-white font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl"
                >
                  <span className="text-xl lg:text-2xl">📄</span>
                  <span>View Gazette Copy</span>
                  <span className="text-lg lg:text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>

                <button className="inline-flex items-center gap-3 lg:gap-4 border-2 border-[#ad4a16] text-[#ad4a16] hover:bg-[#ad4a16] hover:text-white font-bold px-8 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base lg:text-lg xl:text-xl">
                  <span className="text-xl lg:text-2xl">📞</span>
                  <span>Contact Registrar</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Legal Status Summary */}
        <motion.div
          className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl lg:rounded-3xl p-8 lg:p-10 xl:p-12 text-center text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 xl:mb-10">
              <span className="text-white text-3xl lg:text-4xl xl:text-5xl">✅</span>
            </div>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 xl:mb-8">
              Fully Authorized & Recognized
            </h3>
            <p className="text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 xl:mb-12 opacity-90 leading-relaxed">
              Sengol International University is a legally established institution with full government recognition and UGC approval, ensuring quality education and valid degrees.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 xl:gap-8 text-center">
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">2025</div>
                <div className="text-sm lg:text-base opacity-80">Year Established</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">Act 14</div>
                <div className="text-sm lg:text-base opacity-80">Legal Authorization</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 lg:p-6">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2">UGC</div>
                <div className="text-sm lg:text-base opacity-80">Approved</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ApprovalRecognition;

// components/FunFact.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaTrophy, FaChartLine } from 'react-icons/fa';

const FunFact = () => {
  const facts = [
    {
      title: "95%",
      description: "Graduation Success Rate",
      icon: <FaChartLine className="w-8 h-8" />,
      subtitle: "Consistent Excellence"
    },
    {
      title: "Top 5",
      description: "Best Colleges for Academic Excellence",
      icon: <FaTrophy className="w-8 h-8" />,
      subtitle: "Academic Rankings"
    },
    {
      title: "No. 1",
      description: "In the Region for Innovation and Research",
      icon: <FaGraduationCap className="w-8 h-8" />,
      subtitle: "Research Impact"
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6]">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-[#B8860B]/5 to-[#D4AF37]/10"></div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-[#B8860B]/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-[#CD853F]/5 to-[#A0522D]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-6">
            <FaTrophy className="text-[#D4AF37] text-lg" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
              Excellence & Recognition
            </span>
          </div>
          <h2 className="rts__section--title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent mb-6 leading-tight">
            Our Achievements
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed">
            Setting new standards in education and research excellence through innovation, dedication, and unwavering commitment to quality
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex"
            >
              <div className="relative group w-full">
                {/* Enhanced Card */}
                <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm h-full rounded-3xl p-8 lg:p-10 transform transition-all duration-500 
                  shadow-[0_10px_40px_rgba(212,175,55,0.15)] 
                  hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)] 
                  border border-[#D4AF37]/20 hover:border-[#D4AF37]/40
                  hover:-translate-y-2">

                  {/* Enhanced Icon Container */}
                  <div className="relative mx-auto w-28 h-28 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-3xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#CD853F] rounded-3xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-3xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 shadow-xl">
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {fact.icon}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="text-center relative">
                    <h3 className="text-[#B8860B] text-base sm:text-lg font-bold mb-4 uppercase tracking-wider">
                      {fact.subtitle}
                    </h3>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent leading-none">
                      {fact.title}
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] mx-auto mb-6 rounded-full shadow-md"></div>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
                      {fact.description}
                    </p>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                  {/* Floating Accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFact;

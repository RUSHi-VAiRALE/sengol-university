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
      <div className="absolute inset-0 bg-gradient-to-br from-[#ad4a16]/10 via-[#8f3a17]/5 to-[#312518]/10"></div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-br from-[#ad4a16]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-[#8f3a17]/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-[#8f3a17]/5 to-[#312518]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
        >
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <FaTrophy className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Excellence & Recognition
            </span>
          </div>
          <h2 className="rts__section--title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-6 lg:mb-8 xl:mb-10 leading-tight">
            Our Achievements
          </h2>
          <div className="w-32 lg:w-40 xl:w-48 h-2 lg:h-3 xl:h-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] mx-auto mb-8 lg:mb-10 xl:mb-12 rounded-full shadow-lg"></div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto font-light leading-relaxed">
            Setting new standards in education and research excellence through innovation, dedication, and unwavering commitment to quality
          </p>
        </motion.div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
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
                <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm h-full rounded-3xl p-8 lg:p-12 xl:p-16 2xl:p-20 transform transition-all duration-500 
                  shadow-[0_10px_40px_rgba(212,175,55,0.15)] 
                  hover:shadow-[0_25px_60px_rgba(212,175,55,0.25)] 
                  border border-[#ad4a16]/20 hover:border-[#ad4a16]/40
                  hover:-translate-y-2 lg:hover:scale-105">

                  {/* Enhanced Icon Container */}
                  <div className="relative mx-auto w-28 h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 2xl:w-52 2xl:h-52 mb-8 lg:mb-10 xl:mb-12">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-3xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8f3a17] to-[#312518] rounded-3xl -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
                    <div className="relative w-full h-full bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-3xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 shadow-xl">
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                        {React.cloneElement(fact.icon, { className: "w-8 h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20" })}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="text-center relative">
                    <h3 className="text-[#8f3a17] text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mb-4 lg:mb-5 xl:mb-6 uppercase tracking-wider">
                      {fact.subtitle}
                    </h3>
                    <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-none">
                      {fact.title}
                    </h2>
                    <div className="w-20 lg:w-24 xl:w-28 h-1.5 lg:h-2 xl:h-3 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] mx-auto mb-6 lg:mb-8 xl:mb-10 rounded-full shadow-md"></div>
                    <p className="text-gray-600 text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed font-medium">
                      {fact.description}
                    </p>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-6 lg:top-8 xl:top-10 left-6 lg:left-8 xl:left-10 w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 border-t-2 lg:border-t-3 xl:border-t-4 border-l-2 lg:border-l-3 xl:border-l-4 border-[#ad4a16] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute top-6 lg:top-8 xl:top-10 right-6 lg:right-8 xl:right-10 w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 border-t-2 lg:border-t-3 xl:border-t-4 border-r-2 lg:border-r-3 xl:border-r-4 border-[#ad4a16] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 lg:bottom-8 xl:bottom-10 left-6 lg:left-8 xl:left-10 w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 border-b-2 lg:border-b-3 xl:border-b-4 border-l-2 lg:border-l-3 xl:border-l-4 border-[#ad4a16] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 lg:bottom-8 xl:bottom-10 right-6 lg:right-8 xl:right-10 w-4 h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 border-b-2 lg:border-b-3 xl:border-b-4 border-r-2 lg:border-r-3 xl:border-r-4 border-[#ad4a16] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

                  {/* Floating Accent */}
                  <div className="absolute -top-2 lg:-top-3 xl:-top-4 -right-2 lg:-right-3 xl:-right-4 w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
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

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";

const CourseOffer = () => {
  const courses = [
    {
      id: 1,
      title: "Department of Engineering & Technology",
      image: "/images/courses/engineering.jpg"
    },
    {
      id: 2,
      title: "Department of Commerce",
      image: "/images/courses/commerce.jpg"
    },
    {
      id: 3,
      title: "Department of Computer Application",
      image: "/images/courses/computer.jpg"
    },
    {
      id: 4,
      title: "School of Hotel Management",
      image: "/images/courses/hotel.jpg"
    },
    {
      id: 5,
      title: "School of Library & Information Science",
      image: "/images/courses/library.jpg"
    },
    {
      id: 6,
      title: "Department of General Science",
      image: "/images/courses/course.jpg"
    },
    {
      id: 7,
      title: "Department of Arts",
      image: "/images/courses/course.jpg"
    },
    {
      id: 8,
      title: "Department of Physical Education",
      image: "/images/courses/course.jpg"
    },
    {
      id: 9,
      title: "Dept. of Journalism & Mass Communication",
      image: "/images/courses/course.jpg"
    },
    {
      id: 10,
      title: "Department of Management",
      image: "/images/courses/course.jpg"
    },
    {
      id: 11,
      title: "School of Animation",
      image: "/images/courses/course.jpg"
    },
    {
      id: 12,
      title: "School of Fire & Safety",
      image: "/images/courses/course.jpg"
    },
  ];

  return (
    <section className="courses-offer-section relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/15 via-[#8f3a17]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/12 via-[#312518]/8 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Title */}
        <motion.div
          className="section-title-wrapper text-center mb-12 md:mb-16 lg:mb-24 xl:mb-28 2xl:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <FaGraduationCap className="text-[#ad4a16] text-lg lg:text-xl xl:text-2xl" />
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Academic Excellence
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-6 lg:mb-8 xl:mb-10 leading-tight">
            Courses We Offer
          </h2>
          <p className="text-gray-600 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
            Discover world-class education across diverse fields of study designed to prepare you for tomorrow's challenges.
          </p>
        </motion.div>

        {/* Enhanced Courses Grid */}
        <div className="courses-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="course-block group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#ad4a16]/20 shadow-xl hover:shadow-2xl hover:border-[#ad4a16]/40 transition-all duration-500 lg:hover:scale-105">
                {/* Course Image */}
                <div className="course-image relative h-48 sm:h-52 md:h-56 lg:h-64 xl:h-72 2xl:h-80 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="course-image-content object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-3 lg:px-4 xl:px-5 py-1.5 lg:py-2 xl:py-2.5 rounded-full text-xs lg:text-sm xl:text-base font-bold shadow-lg">
                    Premium
                  </div>

                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <FaGraduationCap className="text-white text-xl lg:text-2xl xl:text-3xl" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="course-title-bar p-6 lg:p-8 xl:p-10">
                  <h3 className="course-title text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 group-hover:text-[#8f3a17] transition-colors duration-300 mb-4 lg:mb-5 xl:mb-6 leading-tight">
                    {course.title}
                  </h3>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 lg:mb-5 xl:mb-6 text-sm lg:text-base xl:text-lg text-gray-600">
                    <span className="flex items-center gap-1 lg:gap-2">
                      <div className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full"></div>
                      Available
                    </span>
                    <span>2025-26</span>
                  </div>

                  {/* Enhanced Button */}
                  <button className="w-full group/btn bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] text-white font-bold py-3 lg:py-4 xl:py-5 px-4 lg:px-6 xl:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 lg:gap-3 xl:gap-4 text-sm lg:text-base xl:text-lg">
                    Explore Program
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-300 text-sm lg:text-base xl:text-lg" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOffer;
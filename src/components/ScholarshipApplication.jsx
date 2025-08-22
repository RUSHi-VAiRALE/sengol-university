// components/ScholarshipApplication.jsx
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Assuming 'fa-thin fa-arrow-right' maps to FaArrowRight or similar in react-icons/fa

// You might need a background image for rts-scholarship-bg if it's not a color.
// If it's an image, import it like this:
// import scholarshipBg from '/public/images/scholarship-bg.jpg'; // Adjust path

const ScholarshipApplication = () => {
  return (
    <section className="rts-scholarship rts-scholarship-bg bg-gradient-to-br from-[#fffaf2] via-[#F6F0E6] to-[#f7f1e6] py-20 md:py-28 lg:py-40 xl:py-48 2xl:py-56 flex items-center justify-center min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#D4AF37]/15 via-[#B8860B]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#CD853F]/12 via-[#A0522D]/8 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-[#D4AF37]/5 to-[#B8860B]/5 rounded-full blur-2xl"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px]">
        <div className="flex justify-center">
          {" "}
          {/* Converted .row .justify-content-center */}
          <div className="w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12 text-center relative">
            {" "}
            {/* Enhanced width for better desktop/laptop experience */}
            <div className="rts-scholarship-info">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
                <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg lg:text-xl xl:text-2xl">💰</span>
                </div>
                <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
                  Financial Support
                </span>
              </div>

              <h1 className="rts-section-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent leading-tight">
                Scholarships and Financial Aid
              </h1>
              <p className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-12 lg:mb-16 xl:mb-20 text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed">
                {" "}
                {/* Enhanced typography and spacing for desktop/laptop */}
                At Sengol International University, we are committed to
                supporting bright and talented students through a range of
                scholarships and financial aid programs. Every year, the college
                offers substantial financial assistance to deserving
                undergraduate and postgraduate students to help them achieve
                their academic goals.
              </p>
              <Link
                href="#" // Replace with the actual link to your scholarship page
                className="group inline-flex items-center gap-4 lg:gap-6 xl:gap-8 px-8 lg:px-12 xl:px-16 py-4 lg:py-6 xl:py-8 rounded-2xl text-white font-bold text-lg lg:text-xl xl:text-2xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-[#D4AF37]/30"
              >
                <span className="text-xl lg:text-2xl xl:text-3xl">🎓</span>
                Know More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-lg lg:text-xl xl:text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipApplication;

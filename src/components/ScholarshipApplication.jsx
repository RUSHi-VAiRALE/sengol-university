// components/ScholarshipApplication.jsx
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Assuming 'fa-thin fa-arrow-right' maps to FaArrowRight or similar in react-icons/fa

// You might need a background image for rts-scholarship-bg if it's not a color.
// If it's an image, import it like this:
// import scholarshipBg from '/public/images/scholarship-bg.jpg'; // Adjust path

const ScholarshipApplication = () => {
  return (
    <section className="rts-scholarship rts-scholarship-bg bg-[#F6F0E6] py-20 md:py-28 lg:py-36 flex items-center justify-center min-h-[400px]">
      {" "}
      {/* Converted rts-scholarship-bg and rts-section-height */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {" "}
          {/* Converted .row .justify-content-center */}
          <div className="w-full lg:w-8/12 text-center">
            {" "}
            {/* Converted col-lg-8 */}
            <div className="rts-scholarship-info">
              <h1 className="rts-section-title text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Scholarships and Financial Aid
              </h1>
              <p className="w-full max-w-3xl mx-auto mb-12 text-lg md:text-xl text-gray-700 leading-relaxed">
                {" "}
                {/* Converted w-740 mb-50 */}
                At Sengol International University, we are committed to
                supporting bright and talented students through a range of
                scholarships and financial aid programs. Every year, the college
                offers substantial financial assistance to deserving
                undergraduate and postgraduate students to help them achieve
                their academic goals.
              </p>
              <Link
                href="#" // Replace with the actual link to your scholarship page
                className="rts-theme-btn btn-arrow inline-flex items-center bg-[#5b4110de] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#5b4120] transition-colors duration-300"
              >
                Know More
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipApplication;

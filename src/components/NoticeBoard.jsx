// components/NoticeBoard.jsx
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Piyush Shukla",
    degree: "B.Sc. IT",
    testimonial: "Thanks to the unparalleled mentorship and guidance from my Computer Science teachers at Sengol International University, I've transformed from a student to a certified ethical hacker in cybersecurity.",
    image: "/images/alumni/student1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    degree: "B.Tech Computer Science",
    testimonial: "The practical approach and industry exposure at Sengol International University helped me secure a great position at a leading tech company.",
    image: "/images/alumni/student2.jpg"
  },
  {
    id: 3,
    name: "Rahul Verma",
    degree: "MBA",
    testimonial: "The business acumen and leadership skills I developed at Sengol International University have been instrumental in my entrepreneurial journey.",
    image: "/images/alumni/student3.jpg"
  },
  {
    id: 4,
    name: "Anjali Patel",
    degree: "B.Sc. Nursing",
    testimonial: "The hands-on training and clinical experience at Sengol International University prepared me perfectly for my career in healthcare.",
    image: "/images/alumni/student4.jpg"
  }
];

const NoticeBoard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 lg:py-28 xl:py-36 2xl:py-44 bg-gradient-to-br from-[#fffaf2] via-[#f8f4ec] to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/15 via-[#8f3a17]/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/12 via-[#312518]/8 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-[#ad4a16]/5 to-[#8f3a17]/5 rounded-full blur-2xl"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Title */}
        <div className="text-center mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 via-[#8f3a17]/15 to-[#312518]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
              <span className="text-white text-lg lg:text-xl xl:text-2xl">🎓</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Alumni Success Stories
            </span>
          </div>

          <h2 className="rts__section--title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 lg:mb-8 xl:mb-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
            Alumni Testimonials
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
            Hear from our successful graduates about their transformative journey at Sengol International University
          </p>
        </div>

        {/* Enhanced Testimonial Slider */}
        <div className="mx-auto relative">
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#ad4a16]/20 hover:shadow-3xl hover:border-[#ad4a16]/40 transition-all duration-500">
            <div className="flex flex-col lg:flex-row">

              {/* Enhanced Left Section - Profile */}
              <div className="lg:w-1/2 bg-gradient-to-br from-[#fffaf2]/80 to-[#f8f4ec]/60 p-12 lg:p-16 xl:p-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] bg-gradient-to-br from-[#ad4a16]/20 to-[#8f3a17]/15 rounded-full mx-auto mb-6 lg:mb-8 xl:mb-10 flex items-center justify-center border-4 lg:border-6 xl:border-8 border-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 rounded-full"></div>
                    <span className="text-5xl lg:text-7xl xl:text-8xl relative z-10">👨‍🎓</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-2 lg:mb-3 xl:mb-4">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-sm px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 rounded-full text-sm lg:text-base xl:text-lg font-medium shadow-lg border border-[#ad4a16]/20">
                    {testimonials[currentIndex].degree}
                  </p>
                </div>
              </div>

              {/* Enhanced Right Section - Testimonial */}
              <div className="lg:w-1/2 p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative bg-gradient-to-br from-[#ad4a16] via-[#8f3a17] to-[#312518]">
                <div className="absolute top-6 lg:top-8 xl:top-10 right-6 lg:right-8 xl:right-10 text-white opacity-30">
                  <FaQuoteLeft size={50} className="lg:w-16 lg:h-16 xl:w-20 xl:h-20" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-6 lg:mb-8 xl:mb-10">
                    Alumni Testimonial
                  </h3>

                  <p className="text-white text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed mb-6 lg:mb-8 xl:mb-10">
                    "{testimonials[currentIndex].testimonial}"
                  </p>

                  <div className="text-white font-semibold text-base lg:text-lg xl:text-xl">
                    - {testimonials[currentIndex].name} ({testimonials[currentIndex].degree})
                  </div>
                </div>

                {/* Enhanced Navigation Dots */}
                <div className="flex justify-center space-x-2 lg:space-x-3 xl:space-x-4 mt-8 lg:mt-10 xl:mt-12">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'bg-white shadow-lg'
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevTestimonial}
                className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm hover:from-white hover:to-white text-gray-800 p-3 lg:p-4 xl:p-5 rounded-r-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#ad4a16]/20 hover:border-[#ad4a16]/40 hover:scale-110"
              >
                <FaChevronLeft size={20} className="lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextTestimonial}
                className="bg-gradient-to-r from-white/90 to-white/80 backdrop-blur-sm hover:from-white hover:to-white text-gray-800 p-3 lg:p-4 xl:p-5 rounded-l-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#ad4a16]/20 hover:border-[#ad4a16]/40 hover:scale-110"
              >
                <FaChevronRight size={20} className="lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;

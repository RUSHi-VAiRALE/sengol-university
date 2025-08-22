// components/StudentFeedback.jsx
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // Import if you use pagination
import { Pagination, Autoplay } from "swiper/modules"; // Import modules you need

import { FaStar } from "react-icons/fa"; // For solid stars
import { FaRegStar } from "react-icons/fa"; // For light/regular stars

// Import images (adjust paths as necessary from your /public directory)
import author1 from "../../public/images/testimonial/author-1.png";
import author2 from "../../public/images/testimonial/author-2.png";
import author3 from "../../public/images/testimonial/author-3.png";
import quoteIcon from "../../public/images/testimonial/quote.svg";

const testimonials = [
  {
    rating: 4, // Number of solid stars
    text: "Sengol International University offers an exceptional learning environment. The campus is great, and the faculty is extremely supportive.",
    authorName: "Ravi Kumar",
    authorDesignation: "Student",
    authorImg: author1,
  },
  {
    rating: 4,
    text: "The courses at Sengol International University are designed to equip students with both practical and theoretical knowledge.",
    authorName: "Sita Sharma",
    authorDesignation: "Student",
    authorImg: author2,
  },
  {
    rating: 4,
    text: "The faculty at Sengol International University is extremely knowledgeable, and they make sure to engage with each student individually.",
    authorName: "Ankush Verma",
    authorDesignation: "Student",
    authorImg: author3,
  },
  {
    rating: 5, // Example of a 5-star review
    text: "A truly transformative experience! The professors are inspiring, and the community is vibrant.",
    authorName: "Priya Singh",
    authorDesignation: "Alumni",
    authorImg: author1, // Reusing image for example
  },
];

const StudentFeedback = () => {
  // Swiper configuration based on data-swiper attribute
  const swiperOptions = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    pagination: {
      el: ".rts__pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false, // Keep autoplaying even after user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1.2, // Adjusted slightly to show part of next slide
        spaceBetween: 20, // Add some space between slides on smaller screens
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 2.2,
        spaceBetween: 30,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 30, // Add space for larger screens
      },
    },
    modules: [Pagination, Autoplay], // Enable modules
  };

  return (
    <section className="feedback py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-52 bg-gradient-to-br from-[#fffaf2] via-[#f8f4ec] to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-[#D4AF37]/12 via-[#B8860B]/8 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tl from-[#CD853F]/10 via-[#A0522D]/6 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-[35rem] h-[35rem] bg-gradient-to-r from-[#D4AF37]/6 to-[#B8860B]/4 rounded-full blur-2xl"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Title and Description */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center">
              <span className="text-white text-lg lg:text-xl xl:text-2xl">⭐</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
              Student Reviews
            </span>
          </div>

          <h2 className="rts__section--title text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 lg:mb-6 xl:mb-8 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent leading-tight">
            Student Feedback
          </h2>
          <p className="rts__section--description text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
            Our students' experiences speak volumes about the quality of
            education and campus life at Sengol International University.
          </p>
        </div>

        {/* Enhanced Feedback Slider */}
        <div className="relative lg:px-4 xl:px-8 2xl:px-12">
          <Swiper {...swiperOptions} className="rts__testimonial--active lg:!pb-16 xl:!pb-20 2xl:!pb-24">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="rts__single--testimonial bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm p-8 lg:p-10 xl:p-12 2xl:p-14 rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                  {/* Enhanced Star Rating */}
                  <div className="rts__rating--star flex mb-4 lg:mb-6 xl:mb-8 relative z-10">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < testimonial.rating ? (
                        <FaStar key={i} className="text-xl lg:text-2xl xl:text-3xl mr-1 lg:mr-2 text-[#D4AF37] hover:text-[#B8860B] transition-colors duration-300" />
                      ) : (
                        <FaRegStar
                          key={i}
                          className="text-xl lg:text-2xl xl:text-3xl mr-1 lg:mr-2 text-gray-300"
                        />
                      )
                    )}
                  </div>

                  {/* Enhanced Testimonial Text */}
                  <p className="rts__single--testimonial--text text-gray-700 text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed mb-6 lg:mb-8 xl:mb-10 relative z-10">
                    "{testimonial.text}"
                  </p>
                  {/* Enhanced Author Info and Quote Icon */}
                  <div className="rts__single--testimonial--author flex items-center justify-between relative z-10">
                    <div className="rts__single--testimonial--author--meta flex items-center">
                      <div className="rts__author--img flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden mr-4 lg:mr-6 border-4 border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg">
                        <Image
                          src={testimonial.authorImg}
                          alt={testimonial.authorName}
                          width={96}
                          height={96}
                          objectFit="cover"
                          className="hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="rts__author--info">
                        <h5 className="mb-0 text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 hover:text-[#D4AF37] transition-colors duration-300">
                          {testimonial.authorName}
                        </h5>
                        <span className="designation text-sm lg:text-base xl:text-lg text-gray-600 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 px-3 py-1 rounded-full mt-1 inline-block">
                          {testimonial.authorDesignation}
                        </span>
                      </div>
                    </div>
                    <div className="rts__single--testimonial--quote flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 relative bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 relative">
                        <Image
                          src={quoteIcon}
                          alt="quote icon"
                          layout="fill"
                          objectFit="contain"
                          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Enhanced Swiper Pagination */}
          <div className="rts__pagination v__1 absolute bottom-[-50px] lg:bottom-[-60px] xl:bottom-[-70px] 2xl:bottom-[-80px] left-1/2 -translate-x-1/2 flex justify-center space-x-2 lg:space-x-3 xl:space-x-4 mt-8 lg:mt-10 xl:mt-12">
            {/* Swiper will render the actual pagination bullets here with enhanced styling */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;

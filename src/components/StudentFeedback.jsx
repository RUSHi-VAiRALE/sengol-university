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
    <section className="feedback py-20 md:py-28 lg:py-36 bg-gray-50">
      {" "}
      {/* Converted rts-section-padding */}
      <div className="container mx-auto px-4">
        {/* Section Title and Description */}
        <div className="text-center mb-12 md:mb-16">
          {" "}
          {/* Converted .row .col-sm-12 and .rts__section--wrapper v__9 */}
          <h2 className="rts__section--title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Student Feedback for Sengol International University
          </h2>
          <p className="rts__section--description text-lg md:text-xl text-gray-700 mx-auto">
            Our students' experiences speak volumes about the quality of
            education and campus life at Sengol International University.
          </p>
        </div>

        {/* Feedback Slider */}
        <div className="relative">
          {" "}
          {/* Added relative for pagination positioning */}
          <Swiper {...swiperOptions} className="rts__testimonial--active">
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="rts__single--testimonial bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                  {/* Star Rating */}
                  <div className="rts__rating--star flex mb-4 ">
                    {" "}
                    {/* Using gold color for stars */}
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < testimonial.rating ? (
                        <FaStar key={i} className="text-xl mr-1" />
                      ) : (
                        <FaRegStar
                          key={i}
                          className="text-xl mr-1 text-gray-300"
                        /> // Lighter color for unrated stars
                      )
                    )}
                  </div>
                  {/* Testimonial Text */}
                  <p className="rts__single--testimonial--text text-gray-700 leading-relaxed mb-6">
                    {testimonial.text}
                  </p>
                  {/* Author Info and Quote Icon */}
                  <div className="rts__single--testimonial--author flex items-center justify-between">
                    <div className="rts__single--testimonial--author--meta flex items-center">
                      <div className="rts__author--img flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.authorImg}
                          alt={testimonial.authorName}
                          width={64} // Use actual width/height for optimized image sizing
                          height={64}
                          objectFit="cover"
                        />
                      </div>
                      <div className="rts__author--info">
                        <h5 className="mb-0 text-lg font-semibold text-gray-900">
                          {testimonial.authorName}
                        </h5>
                        <span className="designation text-sm text-gray-600">
                          {testimonial.authorDesignation}
                        </span>
                      </div>
                    </div>
                    <div className="rts__single--testimonial--quote flex-shrink-0 w-12 h-12 relative">
                      <Image
                        src={quoteIcon}
                        alt="quote icon"
                        layout="fill"
                        objectFit="contain" // Use contain for icons if they should fit without cropping
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Swiper Pagination */}
          <div className="rts__pagination v__1 absolute bottom-[-50px] left-1/2 -translate-x-1/2 flex justify-center space-x-2 mt-8">
            {/* Swiper will render the actual pagination bullets here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;

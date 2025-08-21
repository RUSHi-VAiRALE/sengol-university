// components/Banner.jsx
"use client"; // Mark as client component as it uses Swiper and state

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import React Icons for the arrow
import { FaArrowRight } from "react-icons/fa";

// Image Imports (assuming they are in your /public directory)
// Using absolute paths from public directory root is generally safest for Next.js.
// Make sure these paths are correct: /public/images/banner/01.jpg etc.
import banner01 from "../../public/images/banner/slider2.jpg"; // Corrected path to absolute from public
import banner02 from "../../public/images/banner/02.jpg"; // Corrected path to absolute from public
import eCapIcon from "../../public/images/icon/e-cap.svg"; // Corrected path to absolute from public

const bannerSlidesData = [
  {
    image: banner01,
    subTitleIcon: eCapIcon,
    subTitleText: "Empowering Students, Enriching Lives",
    title: (
      <>
        Welcome to Our University
        <br /> Where Knowledge Begins
      </>
    ),
    buttonText: "Admission Enquiry",
    buttonLink: "/admission/admission-procedure",
  },
  {
    image: banner02,
    subTitleIcon: eCapIcon,
    subTitleText: "Shaping the Future Through Education",
    title: (
      <>
        Join a Legacy of
        <br /> Academic Excellence
      </>
    ),
    buttonText: "Admission Enquiry",
    buttonLink: "/admission/admission-procedure",
  },
];

const Banner = () => {
  return (
    // Main banner container - needs to be relative and define its height
    <div className="banner v__2 relative w-full h-screen">
      <div className="banner__wrapper w-full h-full">
        {" "}
        {/* Wrapper takes full height of parent */}
        <Swiper
          slidesPerView={1}
          effect="fade"
          loop={true}
          speed={1000}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="swiper-data w-full h-full" // Swiper itself takes full height of its wrapper
        >
          {bannerSlidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="banner__wrapper--bg relative w-full h-full bg-cover bg-center" // Changed h-screen to h-full
                style={{ backgroundImage: `url(${slide.image.src})` }}
              >
                {/* Optional: Add a subtle overlay for text readability, as seen in the image */}
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <div className="container mx-auto px-4 h-full flex items-center banner-container-top">
                  {" "}
                  {/* container for content, centered horizontally, items aligned to start (left) */}
                  <div className="w-full">
                    {" "}
                    {/* Replaced .row and .col-lg-12 with w-full for simplicity in Tailwind */}
                    <div className="banner__slides--container text-white p-8 md:p-16 relative z-20 mt-0 md:mt-[100px]">
                      {" "}
                      {/* text-white for visibility, padding, z-index to be above overlay */}
                      <div className="banner__slides--content max-w-4xl">
                        {" "}
                        {/* max-width to constrain content, no mx-auto */}
                        <div className="banner__slides--content--sub flex items-center gap-2 mb-4 text-xl">
                          {" "}
                          {/* flex and gap for icon and text, items-center for vertical alignment */}
                          <Image
                            src={slide.subTitleIcon}
                            alt="cap icon"
                            width={24}
                            height={24}
                            className="inline-block"
                          />
                          {slide.subTitleText}
                        </div>
                        <h1 className="banner__slides--content--title md:text-[64px] font-bold leading-tight mb-6">
                          {" "}
                          {/* Responsive font sizes, bold, line-height, margin-bottom */}
                          {slide.title}
                        </h1>
                        <Link
                          href={slide.buttonLink}
                          // Re-applying Tailwind styles for the button for correct appearance
                          className="rts-theme-btn flex flex-row items-center bg-[#5b4110de] text-white font-semibold md:py-4 md:px-8 rounded-md hover:bg-[#5b4120] transition-colors duration-300"
                        >
                          {slide.buttonText}
                          <span className="ml-2">
                            {" "}
                            {/* margin-left for space between text and icon */}
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>

                      {/* Quick Action Tabs - positioned on the right side of content */}
                      <div className="absolute right-0 top-[30%] z-30 flex flex-col space-y-4">
                        <Link
                          href="/admission/admission-procedure"
                          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[140px] text-center border-2 border-white text-base"
                        >
                          Admission 2025
                        </Link>
                        <Link
                          href="/announcements"
                          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[140px] text-center border-2 border-white text-base"
                        >
                          Announcement
                        </Link>
                        <Link
                          href="/contact"
                          className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[140px] text-center border-2 border-white text-base"
                        >
                          Enquire Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Optional static quick navigation (no redirect) */}
      {/* This section needs absolute positioning relative to .banner.v__2 */}
      <div
        className="banner__slides--navigation absolute md:top-[50%] md:right-[200px]  right-0  mb-8 md:mb-12
                  flex flex-col   space-y-4 md:space-y-0 md:space-x-8
                 p-0 md:p-4  shadow-lg rounded-lg max-w-5xl w-[80%] lg:w-auto z-[999] text-white"
      >
        {/* <div className="banner__slides--navigation--single ">
          {" "}
          <h5 className="nav__title  text-white font-semibold mb-2">
            Undergraduate
          </h5>
          <p className="nav__description text-white">
            Explore our undergraduate courses and vibrant learning environment.
          </p>
        </div> */}
        {/* <div className="banner__slides--navigation--single ">
          {" "}
          <h5 className="nav__title font-semibold mb-2 text-white">
            Postgraduate
          </h5>
          <p className="nav__description text-white">
            Advance your career with our comprehensive graduate programs.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;

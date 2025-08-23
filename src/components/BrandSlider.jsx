// components/BrandSlider.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import required modules
import { Autoplay } from "swiper/modules";

// Import your brand logo images
// IMPORTANT: Replace these with your actual logo imports and paths.
// Example:
import brandLogo1 from "../../public/images/brand/01.svg";
import brandLogo2 from "../../public/images/brand/02.svg";
import brandLogo3 from "../../public/images/brand/03.svg";
import brandLogo4 from "../../public/images/brand/04.svg";
import brandLogo5 from "../../public/images/brand/05.svg";
import brandLogo6 from "../../public/images/brand/06.svg";
// Using the provided 'logo.png' for illustration, adjust as needed
// import defaultLogo from "/public/images/logo.png"; // Assuming a generic logo

const brands = [
  { id: 1, src: brandLogo1, alt: "Brand Logo 1", link: "#" },
  { id: 2, src: brandLogo2, alt: "Brand Logo 2", link: "#" },
  { id: 3, src: brandLogo3, alt: "Brand Logo 3", link: "#" },
  { id: 4, src: brandLogo4, alt: "Brand Logo 4", link: "#" },
  { id: 5, src: brandLogo5, alt: "Brand Logo 5", link: "#" },
  { id: 6, src: brandLogo6, alt: "Brand Logo 6", link: "#" },
  { id: 7, src: brandLogo6, alt: "Brand Logo 7", link: "#" },
  // Add more brand logos if you have them, with their respective paths
];

const BrandSlider = () => {
  // Enhanced Swiper configuration for modern design
  const swiperOptions = {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // Pause on hover for better UX
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
      },
      575: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 25,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 35,
        centeredSlides: false,
      },
      1536: {
        slidesPerView: 7,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
    modules: [Autoplay],
  };

  return (
    <div className="rts-brand v_1 py-16 md:py-20 lg:py-28 xl:py-36 2xl:py-44 bg-gradient-to-br from-[#fffaf2] via-[#f8f4ec] to-[#f7f1e6] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-[#ad4a16]/8 via-[#8f3a17]/5 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[45rem] h-[45rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/6 via-[#312518]/3 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-gradient-to-r from-[#ad4a16]/4 to-[#8f3a17]/3 rounded-full blur-2xl"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Title */}
        <div className="text-center mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 backdrop-blur-sm border border-[#ad4a16]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
            <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
              <span className="text-white text-lg lg:text-xl xl:text-2xl">🤝</span>
            </div>
            <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent uppercase tracking-wider">
              Our Partners & Affiliations
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 lg:mb-6 xl:mb-8 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent leading-tight">
            Trusted Partners
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed">
            Collaborating with leading organizations to provide exceptional educational opportunities
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            <div className="rts-brand-slider bg-gradient-to-r from-white/80 via-white/90 to-white/80 backdrop-blur-sm rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] p-8 lg:p-12 xl:p-16 2xl:p-20 border border-[#ad4a16]/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <Swiper {...swiperOptions} className="brand-swiper-enhanced overflow-visible">
                {brands.map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <div className="single-brand-logo flex justify-center items-center h-full py-4 lg:py-6 xl:py-8 relative">
                      <Link href={brand.link} className="group block">
                        <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 2xl:p-12 border border-[#ad4a16]/10 hover:border-[#ad4a16]/30 shadow-lg transform transition-transform duration-500 hover:scale-105 z-10">
                          {/* Decorative corner elements */}
                          <div className="absolute top-0 left-0 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-br from-[#ad4a16]/20 to-transparent rounded-full"></div>
                          <div className="absolute bottom-0 right-0 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-tl from-[#8f3a17]/20 to-transparent rounded-full"></div>

                          <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={120}
                            height={120}
                            objectFit="contain"
                            className="max-w-[80px] lg:max-w-[100px] xl:max-w-[120px] 2xl:max-w-[140px] h-auto relative z-20"
                          />
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;

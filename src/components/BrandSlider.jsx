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
  // Swiper configuration translated from data-swiper attribute
  const swiperOptions = {
    slidesPerView: 6,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      575: {
        slidesPerView: 4,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 5,
        centeredSlides: true,
      },
      991: {
        slidesPerView: 6,
        centeredSlides: true, // Keep centered for consistency with smaller breakpoints
      },
      1201: {
        slidesPerView: 6,
        centeredSlides: false, // No longer centered on largest screens if not desired
      },
    },
    modules: [Autoplay], // Enable the Autoplay module
  };

  return (
    <div className="rts-brand v_1 py-16 md:py-20 lg:py-24 bg-white">
      {" "}
      {/* Converted pb--85 pt--85 */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {" "}
          {/* Converted .row .justify-content-md-center */}
          <div className="w-full lg:w-11/12">
            {" "}
            {/* Converted col-lg-12 col-md-11 */}
            <div className="rts-brand-slider">
              <Swiper {...swiperOptions}>
                {brands.map((brand) => (
                  <SwiperSlide key={brand.id}>
                    <div className="single-brand-logo flex justify-center items-center h-full">
                      <Link href={brand.link} className="block">
                        <Image
                          src={brand.src}
                          alt={brand.alt}
                          width={80} // Adjust width to your logo's typical size
                          height={80} // Adjust height to your logo's typical size
                          objectFit="contain" // Ensures the whole logo is visible
                          className="max-w-[120px] h-auto opacity-70 hover:opacity-100 transition-opacity duration-300" // Tailwind classes for sizing and hover effect
                        />
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

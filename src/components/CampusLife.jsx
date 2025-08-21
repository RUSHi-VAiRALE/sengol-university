// components/CampusLife.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaUsers, FaPalette, FaHeartbeat } from "react-icons/fa"; // For the arrow icon

// Import images (adjust paths as necessary from your /public directory)
import campus01 from "../../public/images/campus/01.jpg";
import campus02 from "../../public/images/campus/02.jpg";
import campus03 from "../../public/images/campus/03.jpg";
import noteKhata from "../../public/images/icon/note_khata.svg";
import book from "../../public/images/icon/book.svg";
import compassScale from "../../public/images/icon/compas_scale.svg";

const campusActivities = [
  {
    image: campus01,
    alt: "Student Life at Sengol International University",
    title: "Student Life",
    description: "Experience vibrant campus community with diverse student activities",
    icon: FaUsers,
    gradient: "from-[#D4AF37] to-[#B8860B]",
    link: "#", // Replace with actual link
  },
  {
    image: campus02,
    alt: "Arts & Culture at Sengol International University",
    title: "Arts & Culture",
    description: "Explore creative expression through various cultural programs",
    icon: FaPalette,
    gradient: "from-[#B8860B] to-[#CD853F]",
    link: "#", // Replace with actual link
  },
  {
    image: campus03,
    alt: "Recreation & Wellness at Sengol International University",
    title: "Recreation & Wellness",
    description: "Maintain physical and mental wellness through our facilities",
    icon: FaHeartbeat,
    gradient: "from-[#CD853F] to-[#A0522D]",
    link: "#", // Replace with actual link
  },
];

const CampusLife = () => {
  return (
    <section className="campus py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#0f0f0f]">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#D4AF37]/20 via-[#B8860B]/15 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#CD853F]/15 via-[#A0522D]/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-r from-[#D4AF37]/10 to-[#B8860B]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* Enhanced Section Title & Description */}
        <motion.div
          className="rts__section--wrapper text-center mb-12 lg:mb-16 xl:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 py-3 rounded-full mb-6">
            <FaUsers className="text-[#D4AF37] text-lg" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
              Student Experience
            </span>
          </div>
          <p className="rts__section--wrapper--description text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            A dynamic and engaging community of students, faculty, and alumni, fostering innovation and excellence at Sengol International University.
          </p>
          <h2 className="rts__section--wrapper--title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Campus <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent"> Life</span>
          </h2>
        </motion.div>

        {/* Enhanced Campus Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
          {campusActivities.map((activity, index) => (
            <motion.div
              key={index}
              className="campus__single--item group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500">
                <Link href={activity.link}>
                  <div className="campus__single--item--thumb w-full h-64 md:h-72 lg:h-80 relative overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${activity.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <activity.icon className="text-white text-lg" />
                      </div>
                    </div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm opacity-90 mb-2">{activity.description}</p>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${activity.gradient} px-4 py-2 rounded-full text-sm font-bold`}>
                            Explore <FaArrowRight className="text-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Enhanced Title Section */}
                <div className="p-6">
                  <Link
                    href={activity.link}
                    className="group/link block"
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl md:text-2xl font-bold text-white group-hover/link:text-[#D4AF37] transition-colors duration-300">
                        {activity.title}
                      </h5>
                      <div className={`w-8 h-8 bg-gradient-to-r ${activity.gradient} rounded-full flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300`}>
                        <FaArrowRight className="text-white text-sm" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Shape Area - Absolutely positioned decorative elements */}
      <div className="rts__shape absolute inset-0 pointer-events-none">
        {" "}
        {/* Full coverage, ignore pointer events */}
        <Image
          src={noteKhata}
          alt="note khata"
          width={80}
          height={80}
          className="absolute top-1/4 left-1/10 hidden md:block opacity-50"
        />{" "}
        {/* Positioning and hidden on small screens */}
        <Image
          src={book}
          alt="book"
          width={100}
          height={100}
          className="absolute bottom-1/4 right-1/10 hidden md:block opacity-50"
        />
        <Image
          src={compassScale}
          alt="compass scale"
          width={90}
          height={90}
          className="absolute top-1/2 left-[5%] -translate-y-1/2 hidden lg:block opacity-50"
        />
      </div>
    </section>
  );
};

export default CampusLife;

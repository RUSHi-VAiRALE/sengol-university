"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import {
    FaArrowRight,
    FaGraduationCap,
    FaUsers,
    FaAward,
    FaPlay,
    FaChevronDown
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const ModernBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const bannerSlides = [
        {
            id: 1,
            image: "/images/banner/slider2.jpg",
            title: "Shape Your Future with Excellence",
            subtitle: "Discover world-class education at Sengol International University",
            description: "Join thousands of students who have transformed their lives through our innovative programs and expert faculty.",
            ctaText: "Explore Programs",
            ctaLink: "/programs",
            stats: [
                { label: "Students", value: "10,000+", icon: FaUsers },
                { label: "Programs", value: "50+", icon: FaGraduationCap },
                { label: "Awards", value: "25+", icon: FaAward },
            ]
        },
        {
            id: 2,
            image: "/images/banner/02.jpg",
            title: "Innovation Meets Tradition",
            subtitle: "Where academic excellence creates tomorrow's leaders",
            description: "Experience cutting-edge facilities, renowned faculty, and a vibrant campus life that prepares you for global success.",
            ctaText: "Apply Now",
            ctaLink: "/admission/admission-procedure",
            stats: [
                { label: "Faculty", value: "500+", icon: FaUsers },
                { label: "Research", value: "100+", icon: FaAward },
                { label: "Placements", value: "95%", icon: FaGraduationCap },
            ]
        }
    ];

    const quickActions = [
        {
            title: "Admission 2025",
            subtitle: "Apply Now",
            href: "/admission/admission-procedure",
            color: "from-[#D4AF37] to-[#B8860B]",
            hoverColor: "hover:from-[#B8860B] hover:to-[#D4AF37]",
            icon: FaGraduationCap,
            emoji: "🎓"
        },
        {
            title: "Virtual Tour",
            subtitle: "Explore Campus",
            href: "#",
            color: "from-[#CD853F] to-[#A0522D]",
            hoverColor: "hover:from-[#A0522D] hover:to-[#CD853F]",
            icon: FaPlay,
            emoji: "🏛️"
        },
        {
            title: "Scholarships",
            subtitle: "Learn More",
            href: "#",
            color: "from-[#B8860B] to-[#8B6914]",
            hoverColor: "hover:from-[#8B6914] hover:to-[#B8860B]",
            icon: FaAward,
            emoji: "🏆"
        }
    ];

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Main Slider */}
            <Swiper
                slidesPerView={1}
                effect="fade"
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[Autoplay, EffectFade, Pagination]}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                className="h-screen"
            >
                {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                                {/* Enhanced Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 via-transparent to-[#B8860B]/10" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex items-center">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                                    <div className="max-w-4xl lg:max-w-5xl">
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                            className="text-white"
                                        >
                                            {/* Subtitle */}
                                            <motion.div
                                                className="flex items-center gap-4 mb-6 sm:mb-8"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                            >
                                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center shadow-lg">
                                                    <FaGraduationCap className="text-white text-lg sm:text-xl" />
                                                </div>
                                                <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-[#D4AF37]/30 px-4 py-2 rounded-full">
                                                    <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">
                                                        {slide.subtitle}
                                                    </span>
                                                </div>
                                            </motion.div>

                                            {/* Main Title */}
                                            <motion.h1
                                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8"
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 0.6 }}
                                            >
                                                <span className="bg-gradient-to-r from-white via-[#D4AF37]/30 to-white bg-clip-text text-transparent drop-shadow-lg">
                                                    {slide.title}
                                                </span>
                                            </motion.h1>

                                            {/* Description */}
                                            <motion.p
                                                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-3xl leading-relaxed"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                {slide.description}
                                            </motion.p>

                                            {/* Stats */}
                                            <motion.div
                                                className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1 }}
                                            >
                                                {slide.stats.map((stat, statIndex) => (
                                                    <motion.div
                                                        key={statIndex}
                                                        className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-2xl p-4 sm:p-5 hover:border-[#D4AF37]/50 transition-all duration-300 group"
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                    >
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                                                                <stat.icon className="text-white text-lg sm:text-xl" />
                                                            </div>
                                                            <div>
                                                                <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">{stat.value}</div>
                                                                <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                            {/* CTA Buttons */}
                                            <motion.div
                                                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 1.2 }}
                                            >
                                                <Link
                                                    href={slide.ctaLink}
                                                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl border border-[#D4AF37]/30"
                                                >
                                                    <span className="text-lg sm:text-xl">🎓</span>
                                                    {slide.ctaText}
                                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                                </Link>

                                                <Link
                                                    href="/contact"
                                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:from-white/20 hover:to-white/10 transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
                                                >
                                                    <span className="text-lg sm:text-xl">📞</span>
                                                    Contact Us
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Quick Action Cards */}
            <motion.div
                className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 space-y-3 sm:space-y-4 hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
            >
                {quickActions.map((action, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, x: -8 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + index * 0.2 }}
                    >
                        <Link
                            href={action.href}
                            className={`group block p-4 lg:p-5 bg-gradient-to-r ${action.color} ${action.hoverColor} rounded-2xl shadow-xl text-white min-w-[180px] lg:min-w-[200px] hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20`}
                        >
                            <div className="flex items-center gap-3 lg:gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <span className="text-lg lg:text-xl">{action.emoji}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-sm lg:text-base">{action.title}</div>
                                    <div className="text-xs lg:text-sm opacity-90 font-medium">{action.subtitle}</div>
                                </div>
                                <FaArrowRight className="text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
            >
                <div className="flex flex-col items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full px-4 py-3 hover:border-[#D4AF37]/50 transition-all">
                    <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-6 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center"
                    >
                        <FaChevronDown className="text-white text-xs" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${4 + Math.random() * 8}px`,
                            height: `${4 + Math.random() * 8}px`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    // className={`bg-gradient-to-r ${i % 3 === 0 ? 'from-[#D4AF37]/20 to-[#B8860B]/20' :
                    //     i % 3 === 1 ? 'from-[#B8860B]/20 to-[#CD853F]/20' :
                    //         'from-white/10 to-white/20'
                    //     } rounded-full`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ModernBanner;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaBars,
    FaTimes,
    FaChevronDown
} from "react-icons/fa";

const ModernNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Navigation data
    const navLinks = [
        { title: "Home", href: "/" },
        {
            title: "About Us",
            href: "/about",
            submenu: [
                { text: "About SIU", href: "/about" },
                { text: "About Sikkim", href: "/about/about-sikkim" },
                { text: "Chancellor's Message", href: "/about/chancellor-message" },
                { text: "Vice Chancellor's Message", href: "/about/vice-chancellor-message" },
                { text: "Registrar Message", href: "/about/registrar-message" },
                { text: "Vision & Mission", href: "/about/mission-vision" },
                { text: "Our Objectives", href: "/about/objective" },
                { text: "Approvals & Recognition", href: "/about/approval-recognition" },
            ],
        },
        {
            title: "Academics",
            href: "#",
            submenu: [
                { text: "Academic Calendar", href: "/academics/calender" },
                { text: "Anti-Ragging", href: "/academics/anti-ragging" },
                { text: "Student Corner", href: "/academics/student-concern" },
                { text: "Training & Placement Cell", href: "/academics/training-placement" },
            ],
        },
        {
            title: "Programs",
            href: "#",
            submenu: [
                { text: "School of Engineering & Technology", href: "/programs/school_engineering_technology" },
                { text: "School of Commerce and Management Studies", href: "/programs/school_commerce_management_studies" },
                { text: "School of Computer Science & IT", href: "/programs/school_computer_science_it" },
                { text: "School of Architecture & Planning", href: "/programs/school_architecture_planning" },
                { text: "School of Hotel Management", href: "/programs/school_hotel_management" },
                { text: "School of Library & Information Science", href: "/programs/school_library_information_science" },
                { text: "School of Science", href: "/programs/school_science" },
                { text: "School of Arts and Social Studies", href: "/programs/school_arts_social_studies" },
                { text: "School of Education and Physical Education", href: "/programs/school_education_physical_education" },
                { text: "School of Journalism & Mass Media Communication", href: "/programs/school_journalism_mass_media_communication" },
                { text: "School of Law", href: "/programs/school_law" },
                { text: "School of Pharmacy", href: "/programs/school_pharmacy" },
                { text: "School of Para-Medical Science", href: "/programs/school_para_medical_science" },
                { text: "School of Philosophy and Research", href: "/programs/school_philosophy_research" },
                { text: "School of Fire & Safety", href: "/programs/school_fire_safety" },
                { text: "School of Animation", href: "/programs/school_animation" },
                { text: "School of Vocational Studies", href: "/programs/school_vocational_studies" },
            ],
        },
        {
            title: "Admission",
            href: "#",
            submenu: [
                { text: "Admission Procedure", href: "/admission/admission-procedure" },
                { text: "Application Form", href: "#" },
                { text: "Admission Notice", href: "/admission/admission-notice" },
                { text: "Fee Structure", href: "#" },
                { text: "Refund Policy", href: "/admission/refund-policy" },
                { text: "Latest Entry", href: "/admission/lateral-entry" },
                { text: "Credit Transfer Policy", href: "/admission/credit-transfer" },
            ],
        },
        { title: "Contact", href: "/contact" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <>
            {/* Top Header */}
            <div className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white py-3 text-sm relative overflow-hidden">
                {/* Subtle animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ad4a16]/10 via-transparent to-[#8f3a17]/10 animate-pulse"></div>
                <div className="w-full mx-auto px-4 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
                    <div className="flex justify-between items-center">
                        <motion.span
                            className="text-base lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-wide"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Welcome to Sengol International University
                        </motion.span>

                        <motion.div
                            className="hidden md:flex items-center gap-4 lg:gap-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="text-base lg:text-xl xl:text-2xl font-bold animate-pulse bg-white/20 px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 rounded-full backdrop-blur-sm border border-white/30">
                                🎓 Admission Open: 2025-2026
                            </span>
                            <div className="flex items-center gap-3 lg:gap-4 xl:gap-5 bg-white/10 px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 rounded-full backdrop-blur-sm border border-white/20">
                                <FaPhoneAlt className="text-sm lg:text-base xl:text-lg" />
                                <span className="font-medium text-base lg:text-lg xl:text-xl">+91-9205299887</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <motion.header
                className="bg-gradient-to-r from-white via-[#fffaf2] to-white shadow-lg border-b border-gray-100/50 transition-all duration-300"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full mx-auto px-4 lg:px-12 xl:px-16 2xl:px-20">
                    {/* University Header */}
                    <div className="py-5 lg:py-6 border-b border-[#ad4a16]/10">
                        <div className="flex justify-between items-center">
                            {/* Logo and University Name */}
                            <div className="flex items-center gap-4 lg:gap-8">
                                <Link href="/" className="flex items-center gap-4 lg:gap-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-full blur-lg"></div>
                                        <Image
                                            src="/images/logo-sengol.png"
                                            alt="Sengol International University"
                                            width={85}
                                            height={85}
                                            className="relative transition-transform hover:scale-110 duration-300 drop-shadow-lg"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <h1 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent tracking-tight leading-tight">
                                            SENGOL INTERNATIONAL UNIVERSITY
                                        </h1>
                                        <p className="text-xs lg:text-base xl:text-lg 2xl:text-xl text-gray-600 mt-1 font-medium">
                                            Established by Act No. 14 of 2025 Sikkim State Legislative Assembly
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            {/* Contact Info & Social Media */}
                            <div className="hidden xl:block text-right">
                                <div className="flex items-center justify-end gap-4 mb-3">
                                    <a
                                        href="mailto:admission@sengolinternationaluniversity.edu.in"
                                        className="flex items-center gap-3 lg:gap-4 xl:gap-5 text-[#ad4a16] hover:text-[#8f3a17] transition-colors font-semibold text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
                                    >
                                        <FaEnvelope className="text-lg lg:text-xl xl:text-2xl" />
                                        <span>admission@sengolinternationaluniversity.edu.in</span>
                                    </a>
                                </div>

                                <div className="flex items-center justify-end gap-4">
                                    {[
                                        { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
                                        { icon: FaLinkedin, href: "#", color: "hover:text-blue-700" },
                                        { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
                                        { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
                                        { icon: FaYoutube, href: "#", color: "hover:text-red-600" },
                                    ].map(({ icon: Icon, href, color }, index) => (
                                        <motion.a
                                            key={index}
                                            href={href}
                                            className={`p-3 lg:p-4 xl:p-5 rounded-full bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 text-gray-700 transition-all ${color} hover:scale-110 hover:shadow-lg border border-[#ad4a16]/20 backdrop-blur-sm`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={20} className="lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMobileMenu}
                                className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-[#ad4a16]/10 to-[#8f3a17]/10 hover:from-[#ad4a16]/20 hover:to-[#8f3a17]/20 transition-all duration-300 border border-[#ad4a16]/20"
                            >
                                {isMobileMenuOpen ? <FaTimes size={24} className="text-[#ad4a16]" /> : <FaBars size={24} className="text-[#ad4a16]" />}
                            </button>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden lg:block py-8">
                        <div className="relative">
                            {/* Enhanced Background with decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ad4a16]/10 via-[#8f3a17]/5 to-[#312518]/10 rounded-3xl backdrop-blur-sm"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ad4a16]/10 to-transparent rounded-3xl"></div>

                            <ul className="relative flex items-center justify-center gap-4 lg:gap-6 xl:gap-8 px-8 lg:px-10 xl:px-12">
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        className="relative group"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-3 px-6 lg:px-7 xl:px-8 py-4 lg:py-4 xl:py-5 text-gray-800 font-bold text-lg lg:text-xl xl:text-2xl hover:text-[#8f3a17] transition-all duration-300 rounded-2xl hover:bg-gradient-to-r hover:from-[#ad4a16]/15 hover:to-[#8f3a17]/15 border border-transparent hover:border-[#ad4a16]/40 hover:shadow-xl backdrop-blur-sm transform hover:scale-105"
                                            onMouseEnter={() => link.submenu && setActiveDropdown(index)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            {link.title}
                                            {link.submenu && (
                                                <FaChevronDown
                                                    size={16}
                                                    className="lg:w-5 lg:h-5 xl:w-6 xl:h-6 transition-transform group-hover:rotate-180 duration-300 text-[#8f3a17] opacity-70 group-hover:opacity-100"
                                                />
                                            )}
                                        </Link>

                                        {/* Enhanced Dropdown Menu */}
                                        {link.submenu && (
                                            <AnimatePresence>
                                                {activeDropdown === index && (
                                                    <motion.div
                                                        className="absolute top-full left-0 mt-6 w-[480px] lg:w-[500px] xl:w-[520px] bg-gradient-to-br from-white/95 via-[#fffaf2]/95 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-[#ad4a16]/30 py-6 z-50 overflow-hidden"
                                                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                        onMouseEnter={() => setActiveDropdown(index)}
                                                        onMouseLeave={() => setActiveDropdown(null)}
                                                    >
                                                        {/* Dropdown Header */}
                                                        <div className="px-6 pb-4 mb-4 border-b border-[#ad4a16]/20">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
                                                                    <span className="text-white text-xs lg:text-sm font-bold">
                                                                        {link.title.charAt(0)}
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <h4 className="font-bold text-xl lg:text-2xl xl:text-2xl bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                                                                        {link.title}
                                                                    </h4>
                                                                    <p className="text-sm lg:text-base text-gray-600">Explore our offerings</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Dropdown Items */}
                                                        <div className="max-h-80 overflow-y-auto" style={{
                                                            scrollbarWidth: 'thin',
                                                            scrollbarColor: '#ad4a16 #f1f1f1'
                                                        }}>
                                                            {link.submenu.map((subLink, subIndex) => (
                                                                <motion.div
                                                                    key={subIndex}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: subIndex * 0.05 }}
                                                                >
                                                                    <Link
                                                                        href={subLink.href}
                                                                        className="flex items-center gap-4 px-6 py-4 text-lg lg:text-lg xl:text-xl text-gray-700 hover:text-[#8f3a17] hover:bg-gradient-to-r hover:from-[#ad4a16]/10 hover:to-[#8f3a17]/10 transition-all duration-300 mx-3 rounded-2xl font-medium group border border-transparent hover:border-[#ad4a16]/20 hover:shadow-lg"
                                                                    >
                                                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"></div>
                                                                        <span className="flex-1">{subLink.text}</span>
                                                                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                            <span className="text-[#8f3a17] text-xs">→</span>
                                                                        </div>
                                                                    </Link>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </motion.li>
                                ))}

                                {/* Enhanced CTA Button */}
                                <motion.li
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <Link
                                        href="#"
                                        className="relative bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-8 lg:px-9 xl:px-10 py-4 lg:py-4 xl:py-5 rounded-2xl font-bold text-xl lg:text-xl xl:text-2xl hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-2xl border border-[#ad4a16]/30 backdrop-blur-sm overflow-hidden group flex flex-row items-center gap-3"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative flex items-center gap-3">
                                            <span className="text-lg">🎓</span>
                                            Apply Now
                                            <motion.span
                                                className="text-lg"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </div>
                                    </Link>
                                </motion.li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMobileMenu}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            className="fixed top-0 right-0 w-full sm:w-[450px] md:w-[500px] lg:w-[550px] h-full bg-gradient-to-br from-white/95 via-[#fffaf2]/95 to-white/95 backdrop-blur-xl z-50 lg:hidden overflow-y-auto shadow-2xl border-l border-[#ad4a16]/30"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Modern Header with Decorative Elements */}
                            <div className="relative bg-gradient-to-r from-[#ad4a16]/10 via-[#8f3a17]/5 to-[#312518]/10 border-b border-[#ad4a16]/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ad4a16]/10 to-transparent"></div>
                                <div className="relative p-6 sm:p-8">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-lg">S</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent">
                                                    Navigation
                                                </h3>
                                                <p className="text-sm text-gray-600 font-medium">Sengol International University</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={toggleMobileMenu}
                                            className="p-4 rounded-xl bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 hover:from-[#ad4a16]/30 hover:to-[#8f3a17]/30 transition-all duration-300 border border-[#ad4a16]/30 shadow-lg hover:shadow-xl transform hover:scale-105"
                                        >
                                            <FaTimes size={22} className="text-[#8f3a17]" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">

                                <nav>
                                    <ul className="space-y-4">
                                        {navLinks.map((link, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                                className="group"
                                            >
                                                <div className="bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-[#ad4a16]/20 hover:border-[#ad4a16]/40 transition-all duration-300 hover:shadow-lg">
                                                    <div className="flex items-center justify-between p-1">
                                                        <Link
                                                            href={link.href}
                                                            className="flex-1 py-4 px-6 text-gray-800 hover:text-[#8f3a17] transition-all duration-300 font-semibold text-base sm:text-lg rounded-xl hover:bg-gradient-to-r hover:from-[#ad4a16]/10 hover:to-[#8f3a17]/10"
                                                            onClick={() => !link.submenu && toggleMobileMenu()}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                                                                {link.title}
                                                            </div>
                                                        </Link>
                                                        {link.submenu && (
                                                            <button
                                                                onClick={() => handleDropdownToggle(index)}
                                                                className="p-4 m-1 hover:bg-gradient-to-r hover:from-[#ad4a16]/20 hover:to-[#8f3a17]/20 rounded-xl transition-all duration-300 border border-transparent hover:border-[#ad4a16]/30"
                                                            >
                                                                <FaChevronDown
                                                                    className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''
                                                                        } text-[#8f3a17]`}
                                                                    size={16}
                                                                />
                                                            </button>
                                                        )}
                                                    </div>

                                                    {link.submenu && activeDropdown === index && (
                                                        <motion.div
                                                            className="px-4 pb-4"
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <div className="bg-gradient-to-br from-[#ad4a16]/5 to-[#8f3a17]/5 rounded-xl p-2 border border-[#ad4a16]/10">
                                                                <div className="space-y-2">
                                                                    {link.submenu.map((subLink, subIndex) => (
                                                                        <motion.div
                                                                            key={subIndex}
                                                                            initial={{ opacity: 0, x: 20 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: subIndex * 0.05 }}
                                                                        >
                                                                            <Link
                                                                                href={subLink.href}
                                                                                className="block py-3 px-4 text-sm sm:text-base text-gray-700 hover:text-[#8f3a17] hover:bg-gradient-to-r hover:from-[#ad4a16]/10 hover:to-[#8f3a17]/10 rounded-lg transition-all duration-300 border border-transparent hover:border-[#ad4a16]/20 font-medium"
                                                                                onClick={toggleMobileMenu}
                                                                            >
                                                                                <div className="flex items-center gap-3">
                                                                                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full opacity-50"></div>
                                                                                    {subLink.text}
                                                                                </div>
                                                                            </Link>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Modern CTA Section */}
                                <motion.div
                                    className="mt-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="relative bg-gradient-to-br from-[#ad4a16]/10 to-[#8f3a17]/10 rounded-2xl p-6 border border-[#ad4a16]/20 backdrop-blur-sm">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#ad4a16]/5 via-transparent to-[#8f3a17]/5 rounded-2xl"></div>
                                        <div className="relative text-center mb-4">
                                            <h4 className="text-lg font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-2">
                                                Ready to Join Us?
                                            </h4>
                                            <p className="text-sm text-gray-600">Start your journey with Sengol International University</p>
                                        </div>
                                        <Link
                                            href="#"
                                            className="block w-full bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white text-center py-4 px-6 rounded-xl font-bold text-lg hover:from-[#312518] hover:via-[#8f3a17] hover:to-[#ad4a16] transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                            onClick={toggleMobileMenu}
                                        >
                                            <div className="flex items-center justify-center gap-3">
                                                <span>🎓</span>
                                                Apply Now
                                                <span>→</span>
                                            </div>
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* Modern Social Links Section */}
                                <motion.div
                                    className="mt-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-sm rounded-2xl p-6 border border-[#ad4a16]/20">
                                        <div className="text-center mb-4">
                                            <h4 className="text-base font-bold bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] bg-clip-text text-transparent mb-2">
                                                Connect With Us
                                            </h4>
                                            <p className="text-xs text-gray-600">Follow us on social media for updates</p>
                                        </div>
                                        <div className="flex gap-3 justify-center">
                                            {[
                                                { icon: FaFacebook, href: "#", color: "from-blue-600 to-blue-700", hoverColor: "hover:from-blue-700 hover:to-blue-800" },
                                                { icon: FaLinkedin, href: "#", color: "from-blue-500 to-blue-600", hoverColor: "hover:from-blue-600 hover:to-blue-700" },
                                                { icon: FaInstagram, href: "#", color: "from-pink-500 to-purple-600", hoverColor: "hover:from-pink-600 hover:to-purple-700" },
                                                { icon: FaTwitter, href: "#", color: "from-sky-400 to-sky-500", hoverColor: "hover:from-sky-500 hover:to-sky-600" },
                                                { icon: FaYoutube, href: "#", color: "from-red-600 to-red-700", hoverColor: "hover:from-red-700 hover:to-red-800" },
                                            ].map(({ icon: Icon, href, color, hoverColor }, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={href}
                                                    className={`p-4 rounded-xl bg-gradient-to-r ${color} ${hoverColor} text-white transition-all hover:scale-110 transform shadow-lg hover:shadow-xl border border-white/20`}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.7 + index * 0.1 }}
                                                >
                                                    <Icon size={20} />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Contact Info Card */}
                                <motion.div
                                    className="mt-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <div className="bg-gradient-to-br from-[#ad4a16]/5 to-[#8f3a17]/5 rounded-2xl p-6 border border-[#ad4a16]/20">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center">
                                                <FaPhoneAlt className="text-white text-sm" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-800">Quick Contact</p>
                                                <p className="text-xs text-gray-600">Get in touch with us</p>
                                            </div>
                                        </div>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-3 p-3 bg-white/30 rounded-lg">
                                                <FaPhoneAlt className="text-[#8f3a17] text-xs" />
                                                <span className="text-gray-700 font-medium">+91-9205299887</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-white/30 rounded-lg">
                                                <FaEnvelope className="text-[#8f3a17] text-xs" />
                                                <span className="text-gray-700 font-medium text-xs">admission@sengolinternationaluniversity.edu.in</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModernNavbar;

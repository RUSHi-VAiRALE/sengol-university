// components/Header.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link"; // Import Link for client-side navigation
import Image from "next/image"; // Import Image for optimized images
import SideBar from "./SideBar"; // Import your SideBar component
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Renamed from 'open' for clarity with 'Drawer'

  const showSidebar = () => setIsSidebarOpen(true); // Renamed from 'showDrawer'
  const closeSidebar = () => setIsSidebarOpen(false); // Renamed from 'closeDrawer'

  // Dummy data for navigation links
  // In a real application, this might come from a CMS, API, or configuration file.
  const navLinks = [
    { title: "Home", href: "/" },
    {
      title: "About Us",
      href: "/about",
      submenu: [
        { text: "About SIU", href: "/about" },
        { text: "About Sikkim", href: "/about/about-sikkim" },
        { text: "Chancellor's Message", href: "/about/chancellor-message" },
        {
          text: "Vice Chancellor's Message",
          href: "/about/vice-chancellor-message",
        },
        { text: "Registrar Message", href: "/about/registrar-message" },
        { text: "Vision & Mission", href: "/about/mission-vision" },
        { text: "Award & Achievments", href: "#" },
        { text: "Our Objectives", href: "/about/objective" },
        {
          text: " Approvals & Recognition",
          href: "/about/approval-recognition",
        },
      ],
    },
    {
      title: "Academics",
      href: "#",
      submenu: [
        { text: "Academic Calendar", href: "/academics/calender" },
        { text: "Anti-Ragging", href: "/academics/anti-ragging" },
        { text: "Student Corner", href: "/academics/student-concern" },
        {
          text: "Training & Placement Cell",
          href: "/academics/training-placement",
        },
        // { text: "Committee", href: "/academics/committee" },
      ],
    },
    {
      title: "Programs",
      href: "#",
      submenu: [
        {
          text: "School of Engineering & Technology",
          href: "/programs/school_engineering_technology",
        },
        {
          text: "School of Commerce and Management Studies",
          href: "/programs/school_commerce_management_studies",
        },
        {
          text: "School of Computer Science & IT",
          href: "/programs/school_computer_science_it",
        },
        {
          text: "School of Architecture & Planning",
          href: "/programs/school_architecture_planning",
        },
        {
          text: "School of Hotel Management",
          href: "/programs/school_hotel_management",
        },
        {
          text: "School of Library & Information Science",
          href: "/programs/school_library_information_science",
        },
        {
          text: "School of Science",
          href: "/programs/school_science",
        },
        {
          text: "School of Arts and Social Studies",
          href: "/programs/school_arts_social_studies",
        },
        {
          text: "School of Education and Physical Education",
          href: "/programs/school_education_physical_education",
        },
        {
          text: "School of Journalism & Mass Media Communication",
          href: "/programs/school_journalism_mass_media_communication",
        },
        {
          text: "School of Law",
          href: "/programs/school_law",
        },
        {
          text: "School of Pharmacy",
          href: "/programs/school_pharmacy",
        },
        {
          text: "School of Para-Medical Science",
          href: "/programs/school_para_medical_science",
        },
        {
          text: "School of Philosophy and Research",
          href: "/programs/school_philosophy_research",
        },
        {
          text: "School of Fire & Safety",
          href: "/programs/school_fire_safety",
        },
        {
          text: "School of Animation",
          href: "/programs/school_animation",
        },
        {
          text: "School of Vocational Studies",
          href: "/programs/school_vocational_studies",
        },
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
    {
      title: "Download",
      href: "#",
      submenu: [
        // { text: "Overview", href: "/admission/overview" },
        // { text: "Brochure", href: "#" },
        // { text: "Apply Now", href: "#" },
        // { text: "Fees Structure", href: "#" },
      ],
    },
    { title: "Apply Now", href: "#" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-[#804A00] via-[#b36b00] to-[#804A00] text-white py-4 text-sm px-6">
        <div className="container flex justify-between items-center">
          <span className="text-xl font-bold">
            Welcome to Sengol International University
          </span>
          <div className=" gap-4 topbar-mid">
            {/* <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaTwitter size={20} />
            <FaYoutube size={20} /> */}
            <span className="text-xl font-bold blink-text">Admission Open : 2025 - 2026</span>
          </div>
          <div className="flex gap-8 topbar-right">
            <span className="text-xl font-bold">
              <FontAwesomeIcon icon={faLock} /> Login
            </span>
          </div>
        </div>
      </div>
      <div className="header_wrapper">
        <div className="container1">
          {/* Header Main */}
          <div className="border-b -full border-gray-200 px-6 py-4 ">
            <div className="container flex justify-between items-center bg-white">
              <div className="flex items-center gap-6">
                <div className="header__logo">
                  <Link href="/" className="header__logo--link">
                    <Image
                      src="/images/logo-sengol.png"
                      alt="Sengol International University"
                      width={250}
                      height={60}
                      priority
                    />
                  </Link>
                </div>

                <div className="college-name-box">
                  <h1 className="font-bold text-[#ffffff] leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-white">
                    SENGOL INTERNATIONAL UNIVERSITY
                  </h1>
                  <p className="text-xs text-gray-700">
                    (Established by Act No. 14 of 2025 Sikkim State Legislative
                    Assembly & approved by UGC under section 2 (F) of the UGC
                    Act 1956)
                  </p>
                </div>
              </div>
              <div>
                <div className="text-right text-[#6b3f14] contact-us-box space-y-3">
                  {/* Email */}
                  <div className="flex flex-col items-end">
                    <a
                      href="mailto:admission@sengolinternationaluniversity.edu.in"
                      className="text-[#6b3f14] font-semibold hover:underline text-base transition-colors duration-200 hover:text-[#8b5a1a]"
                    >
                      admission@sengolinternationaluniversity.edu.in
                    </a>
                  </div>

                  {/* Social Media Icons */}
                  <div className="bg-gradient-to-r from-[#6b3f14] to-[#804A00] px-6 py-3 rounded-lg flex items-center gap-4 shadow-lg">
                    <a href="#" className="text-white hover:text-blue-200 transition-all duration-200 transform hover:scale-110">
                      <FaFacebook size={18} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-all duration-200 transform hover:scale-110">
                      <FaLinkedin size={18} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-all duration-200 transform hover:scale-110">
                      <FaInstagram size={18} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-all duration-200 transform hover:scale-110">
                      <FaTwitter size={18} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-200 transition-all duration-200 transform hover:scale-110">
                      <FaYoutube size={18} />
                    </a>
                  </div>

                  {/* Phone Number */}
                  <div className="flex items-center gap-2 justify-end">
                    <FaPhoneAlt className="text-[#6b3f14]" />
                    <span className="font-semibold text-[#6b3f14]">Call Us:</span>
                    <span className="font-semibold text-[#6b3f14]">+91-9205299887</span>
                  </div>
                </div>

                <div className="header__right">
                  <div className="header__right--item">
                    <div
                      id="menu-btn"
                      className="menu__trigger"
                      onClick={showSidebar}
                    >
                      <Image
                        src="/images/icon/menu__bar.svg"
                        alt="menu"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-gradient-to-r from-[#804A00] via-[#b36b00] to-[#804A00]">
            <div className="container">
              <div className="header__menu">
                <div className="navigation">
                  <nav className="navigation__menu">
                    <ul>
                      {navLinks.map((link, index) => (
                        <li
                          key={index}
                          className={`navigation__menu--item ${link.submenu?.length > 0
                              ? "has-child has-arrow"
                              : ""
                            }`}
                        >
                          <Link
                            href={link.href}
                            className="navigation__menu--item__link"
                          >
                            {link.title}
                          </Link>
                          {link.submenu && (
                            <ul className="submenu sub__style">
                              {link.submenu.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <Link href={subLink.href}>
                                    {subLink.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Render the SideBar component, passing the state and close handler */}
      <SideBar
        navLinks={navLinks}
        open={isSidebarOpen}
        onClose={closeSidebar}
      />
    </>
  );
};

export default Header;

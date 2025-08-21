"use client";

import React, { useEffect, useState } from "react";
import { Drawer, Collapse } from "antd";
import {
  FaPhone,
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import banner from "../../public/images/offcanvase.jpg";
import Link from "next/link";

const { Panel } = Collapse;

const SideBar = ({ navLinks, open, onClose }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 👇 Called on any link click
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Drawer
      placement="right"
      closable={true}
      onClose={onClose}
      open={open}
      width={300}
      styles={{ body: { padding: 0 } }}
    >
      <div className="relative h-full">
        <div className="px-6 pt-10 pb-8 text-sm text-gray-800 overflow-y-auto h-full">
          {/* ✅ Conditionally render logo/banner */}
          {screenWidth >= 1200 ? (
            <>
              <div className="flex justify-center mb-4">
                <Image src={logo} alt="Logo" width={120} height={120} />
              </div>
              <p className="text-center text-gray-700 text-[15px] leading-6 mb-6">
                Sengol International University offers world-class education in
                a variety of fields, with a focus on holistic development and
                excellence.
              </p>
              <div className="rounded overflow-hidden mb-4">
                <Image
                  src={banner}
                  alt="Apply Banner"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mb-6">
                <Link
                  href="#"
                  className="bg-[#5c3a00] text-white px-5 py-2 rounded-md text-sm font-medium"
                >
                  Apply Now
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* ✅ Accordion Navigation */}
              <Collapse
                ghost
                expandIconPosition="end"
                className="sidebar-collapse space-y-2"
                accordion
              >
                {navLinks.map((link, index) => (
                  <Collapse.Panel
                    key={index}
                    header={
                      <span className="font-semibold text-[#5c3a00] text-lg">
                        {link.title}
                      </span>
                    }
                  >
                    {/* If submenu exists, list them. Else, show single link */}
                    {link.submenu ? (
                      <ul className="pl-2 text-gray-700 space-y-1">
                        {link.submenu.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={sub.href}
                              onClick={handleLinkClick}
                              className="hover:underline"
                            >
                              {sub.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="pl-2 text-gray-700 space-y-1">
                        <li>
                          <Link
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-gray-700 hover:underline"
                          >
                            {link.title}
                          </Link>
                        </li>
                      </ul>
                    )}
                  </Collapse.Panel>
                ))}
              </Collapse>
            </>
          )}

          {/* Contact Info */}
          <div className="space-y-3 mt-6 text-[15px]">
            <div className="flex items-center gap-2 text-gray-800">
              <FaPhone className="text-[#5c3a00]" />
              <span>+91 485-826-710</span>
            </div>
            {/* <div className="flex items-center gap-2 text-gray-800">
              <FaLocationDot className="text-[#5c3a00]" />
              <span>Bihar, India</span>
            </div> */}
          </div>

          {/* Social Icons */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Follow Us:</p>
            <div className="flex gap-4 text-3xl text-[#5c3a00]">
              <Link href="#">
                <FaFacebook />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaLinkedin />
              </Link>
              <Link href="#">
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;

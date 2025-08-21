"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import bannerImage from "../../../public/images/banner/slider__3-2.jpg"; // Add your banner here

const menuItems = [
  { label: "Academic Calendar", href: "/academics/calender" },
  { label: "Anti-Ragging", href: "/academics/anti-ragging" },
  { label: "Student Corner", href: "/academics/student-concern" },
  { label: "Training & Placement Cell", href: "/academics/training-placement" },
  // { label: "Committee", href: "/academics/committee" },
];

const AcademicLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6">
      {/* Banner Section */}
      <div className="relative w-full h-[32rem] overflow-hidden">
        {/* Overlayed Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm md:text-base text-white mb-2">
            Home / Academics
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Academics
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 max-w-2xl drop-shadow-sm">
            Explore academic leadership, faculty excellence, and our commitment
            to a ragging-free and inclusive learning environment.
          </p>
        </div>

        {/* Background Image */}
        <Image
          src={bannerImage}
          alt="Academic Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-md"
          priority
        />

        {/* Optional dark overlay for readability */}
        <div
          style={{ backgroundColor: "black", opacity: 0.4 }}
          className="absolute inset-0"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 px-4 py-10 container mx-auto">
        {/* Sidebar */}
        {/* <aside className="w-full max-w-lg bg-gray-100 shadow-md p-4 rounded-md sticky top-20 h-fit">
          <h2 className="text-xl font-bold text-[#5c3a00] mb-4">ACADEMICS</h2>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded hover:bg-blue-100 transition ${
                    pathname === item.href
                      ? "bg-blue-200 font-semibold"
                      : "bg-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside> */}

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default AcademicLayout;

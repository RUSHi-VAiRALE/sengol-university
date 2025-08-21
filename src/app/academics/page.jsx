"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaUserTie,
  FaUsers,
  FaChalkboardTeacher,
  FaGavel,
  FaShieldAlt,
} from "react-icons/fa";

// Import section images
import deanImg from "../../../public/images/academics/dean.jpg";
import leadershipImg from "../../../public/images/academics/leadership.jpg";
import facultyImg from "../../../public/images/academics/faculty.jpg";
import committeeImg from "../../../public/images/academics/committee.jpg";
import antiRaggingImg from "../../../public/images/academics/antiragging.jpg";

const AcademicsOverview = () => {
  const sections = [
    {
      title: "Dean Academic",
      href: "/academics/dean-academic",
      desc: "Meet the academic head guiding curriculum and educational excellence at the university.",
      icon: <FaUserTie className="text-3xl text-[#5c3a00] mb-2" />,
      image: deanImg,
    },
    {
      title: "Academic Leadership",
      href: "/academics/academic-leadership",
      desc: "Explore our team of visionary leaders who shape the strategic academic direction.",
      icon: <FaUsers className="text-3xl text-[#5c3a00] mb-2" />,
      image: leadershipImg,
    },
    {
      title: "Faculty",
      href: "/academics/faculty",
      desc: "Learn about our highly qualified, research-oriented, and industry-driven teaching staff.",
      icon: <FaChalkboardTeacher className="text-3xl text-[#5c3a00] mb-2" />,
      image: facultyImg,
    },
    {
      title: "Committee",
      href: "/academics/committee",
      desc: "Get to know the academic committees ensuring governance, quality, and innovation.",
      icon: <FaGavel className="text-3xl text-[#5c3a00] mb-2" />,
      image: committeeImg,
    },
    {
      title: "Anti-Ragging",
      href: "/academics/anti-ragging",
      desc: "Read about our strict anti-ragging policy ensuring student safety and well-being.",
      icon: <FaShieldAlt className="text-3xl text-[#5c3a00] mb-2" />,
      image: antiRaggingImg,
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-[#5c3a00] mb-6">
        Academics Overview
      </h1>
      <p className="text-lg text-gray-700">
        Sengol International University fosters academic brilliance through
        visionary leadership, top-tier faculty, and a safe, inclusive learning
        environment. Explore each of the following areas to know how our
        academic framework supports student success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                {section.icon}
                <h2 className="text-xl font-semibold text-[#5c3a00]">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 mt-3">{section.desc}</p>
              <Link
                href={section.href}
                className="inline-block text-[#5c3a00] font-semibold hover:underline mt-4"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicsOverview;

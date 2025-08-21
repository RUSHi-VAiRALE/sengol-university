"use client";

import React from "react";
import Link from "next/link";

const SyllabusBySpecialization = ({
  title = "Syllabus by Specialization",
  syllabus = [],
}) => {
  return (
    <section className="bg-white lg:px-24">
      <div className="mt-10 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-2xl font-bold text-[#5c3a00] mb-6 flex items-center">
          📘 {title}
        </h3>
        <ul className="space-y-3">
          {syllabus.map((item, index) => (
            <li key={index}>
              <Link
                href={item.pdfLink}
                target="_blank"
                className="text-[#5c3a00] hover:underline"
              >
                • {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SyllabusBySpecialization;

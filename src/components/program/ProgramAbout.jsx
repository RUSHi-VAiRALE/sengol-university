"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const ProgramAbout = ({
  image,
  alt,
  title,
  paragraphs,
  applyLink,
  applyText,
}) => {
  return (
    <section className="bg-[#fef8ef] py-16 px-6 lg:px-24">
      {/* Image at the top, spanning full width */}
      <div className="mb-8">
        <Image
          src={image}
          alt={alt}
          width={900}
          height={400}
          className="rounded-lg shadow-xl w-full object-cover"
        />
      </div>

      {/* Program Title */}
      <h2 className="text-3xl font-bold text-[#5c3a00] mb-6">
        <span className="inline-block mr-2">⚙️</span>
        {title}
      </h2>

      {/* Description Paragraphs */}
      <div className="space-y-6">
        {paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      {/* Apply Now Button */}
      {applyLink && (
        <div className="mt-8">
          <Link
            href={applyLink}
            className="rts-theme-btn flex flex-row items-center bg-[#5b4110de] text-white font-semibold md:py-4 md:px-8 rounded-md hover:bg-[#5b4120] transition-colors duration-300 w-fit"
          >
            {applyText || "Apply Now"}
            <span className="ml-2">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProgramAbout;

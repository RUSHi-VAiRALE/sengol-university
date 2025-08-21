// app/admission-notice/page.jsx or wherever your route is
"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "../../../../public/images/banner/breadcrumb.jpg";
import { useRouter } from "next/navigation";

const AdmissionNoticePage = () => {
    const router = useRouter();

    const handleBackToHome = () => {
      router.push("/"); // Navigate to home page
    };
  return (
    <div className="relative w-full  bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Banner Section */}
      <div className="relative h-[300px] w-full">
        <Image
          src={bannerImage}
          alt="Admission Notice Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
        <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold animate-pulse">
            Admission Notice
          </h1>
          <p className="text-lg mt-2 animate-fade-in">
            Stay updated with the latest announcements
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Coming Soon...
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          This page will provide comprehensive information about the latest
          admission notices, important dates, eligibility criteria, and
          application guidelines for all programs.
        </p>
        <p className="text-gray-600 text-lg mt-4">
          Stay tuned! We are working hard to bring you the most updated
          information.
        </p>

        {/* Optional Button or CTA */}
        <button
          onClick={handleBackToHome}
          className="mt-8 px-6 py-3 rts-theme-btn bg-[#5b4110de] rounded-full transition duration-300 shadow-md"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AdmissionNoticePage;

"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "../../../../public/images/banner/02.jpg"; // ✅ update this path based on your project
import { FaRegCircleCheck } from "react-icons/fa6";

const RefundPolicy = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[32rem] overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm md:text-base text-white mb-2">
            Home / Refund Policy
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Refund Policy
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 max-w-2xl drop-shadow-sm">
            Understand our clear and transparent refund rules designed to uphold
            academic integrity and financial fairness at Sengol International
            University.
          </p>
        </div>

        <Image
          src={bannerImage}
          alt="Refund Policy Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-md shadow-md"
          priority
        />

        <div
          style={{ backgroundColor: "black", opacity: 0.4 }}
          className="absolute inset-0"
        />
      </div>

      {/* Refund Policy Section */}
      <div className="bg-gray-100 py-10">
        <div className="p-4 md:p-8 container mx-auto">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e293b] mb-6">
            Refund Policy
          </h2> */}
          <p className="text-gray-700 mb-6 mx-auto">
            At <strong>Sengol International University (SIU),</strong> the
            refund policy is governed by strict guidelines to maintain academic
            discipline and financial transparency.
          </p>

          <div className="space-y-6">
            {/* 1. No Refund After Admission */}
            <div>
              <h3 style={{ color: "#5b4110" }} className="text-xl font-semibold text-[#0f172a] mb-2">
                1. No Refund After Admission
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>
                  No refund will be provided once a candidate has been admitted
                  to any course, regardless of reason.
                </li>
              </ul>
            </div>

            {/* 2. Eligibility-Based Refund */}
            <div>
              <h3 style={{ color: "#5b4110" }} className="text-xl font-semibold text-[#0f172a] mb-2">
                2. Eligibility-Based Refund
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>
                  Refunds are applicable only to registered candidates who are
                  found ineligible for the course applied.
                </li>
                <li>
                  In such cases, the refund application must be submitted{" "}
                  <strong>
                    before the commencement of the academic session.
                  </strong>
                </li>
              </ul>
            </div>

            {/* 3. Non-Refundable Scenarios */}
            <div>
              <h3 style={{ color: "#5b4110" }} className="text-xl font-semibold text-[#0f172a] mb-2">
                3. Non-Refundable Scenarios
              </h3>
              <p className="text-gray-700 ml-4 mb-2">
                Fees will not be refunded under the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-700 ml-8">
                <li>
                  If the student discontinues the course{" "}
                  <strong>after the commencement</strong>
                  of classes.
                </li>
                <li>
                  If the student <strong>leaves</strong> the course before
                  completion for personal reasons.
                </li>
                <li>
                  If the student is <strong>suspended or expelled</strong> due
                  to non-attendance, misconduct, or violation of university
                  regulations.
                </li>
              </ul>
            </div>

            {/* 4. Deadline for Refund Requests */}
            <div>
              <h3 style={{ color: "#5b4110" }} className="text-xl font-semibold text-[#0f172a] mb-2">
                4. Deadline for Refund Requests
              </h3>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>
                  <strong>No refund application</strong> will be accepted{" "}
                  <strong>after the session has commenced,</strong> under any
                  circumstances.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;

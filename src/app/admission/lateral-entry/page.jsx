"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "../../../../public/images/campus/gallery/2x6.jpg"; // Replace with actual banner path

const LateralEntryPage = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[32rem] overflow-hidden">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm md:text-base text-white mb-2">
            Home / Lateral Entry
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Lateral Entry Admission
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 max-w-2xl drop-shadow-sm">
            Continue your educational journey with direct second-year admission
            opportunities at Sengol International University.
          </p>
        </div>

        <Image
          src={bannerImage}
          alt="Lateral Entry Banner"
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

      {/* Content Section */}
      <div className="container px-4 py-12 space-y-8">
        <p className="text-gray-800 text-lg">
          <strong>Sengol International University (SIU)</strong> offers{" "}
          <strong>Lateral Entry</strong> admission opportunities to eligible
          students who have already completed a diploma or equivalent program
          and wish to continue their education directly into the second year of
          a relevant undergraduate or postgraduate program.
        </p>

        <div>
          <h3
            style={{ color: "#5b4110" }}
            className="text-xl font-semibold text-[#0f172a] mb-2"
          >
            Eligibility Criteria
          </h3>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>
              <strong>Undergraduate Lateral Entry:</strong> Candidates must have
              successfully completed a <strong>3-year diploma</strong> (or
              equivalent) in the relevant discipline from a recognized
              board/institution.
            </li>
            <li>
              <strong>Postgraduate Lateral Entry (where applicable):</strong>
              Candidates must hold a{" "}
              <strong>
                relevant postgraduate diploma or equivalent qualification.
              </strong>
            </li>
          </ul>
        </div>

        <div>
          <h3
            style={{ color: "#5b4110" }}
            className="text-xl font-semibold text-[#0f172a] mb-2"
          >
            Courses Eligible for Lateral Entry
          </h3>
          <p>Lateral Entry is available in select programs such as:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>B.Tech / B.Sc. / BCA</li>
            <li>B.Pharma / BPT</li>
            <li>Nursing & Paramedical Programs</li>
            <li>Management / Computer Applications (PG Level)</li>
            <li>Many more…</li>
          </ul>
        </div>

        <div>
          <h3
            style={{ color: "#5b4110" }}
            className="text-xl font-semibold text-[#0f172a] mb-2"
          >
            Application Process
          </h3>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>
              Interested candidates must apply through the{" "}
              <strong>Lateral Entry Admission Form</strong> (available online &
              offline).
            </li>
            <li>
              Admission is granted based on <strong>academic merit</strong> and
              subject to the availability of seats.
            </li>
            <li>
              Applicants may be required to attend{" "}
              <strong>counselling or interview</strong> as part of the selection
              process.
            </li>
          </ul>
        </div>

        <div>
          <h3
            style={{ color: "#5b4110" }}
            className="text-xl font-semibold text-[#0f172a] mb-2"
          >
            Documents Required
          </h3>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>Diploma/Equivalent Marksheets & Certificate</li>
            <li>Transfer Certificate (if applicable)</li>
            <li>Migration Certificate (if from another board/university)</li>
            <li>Passport-size Photographs</li>
            <li>Any other documents as required by the department</li>
          </ul>
        </div>

        <div>
          <h3
            style={{ color: "#5b4110" }}
            className="text-xl font-semibold text-[#0f172a] mb-2"
          >
            Note:
          </h3>
          <p className="text-gray-700">
            All admissions are subject to university rules and seat
            availability. The university reserves the right to amend eligibility
            or selection criteria without prior notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LateralEntryPage;


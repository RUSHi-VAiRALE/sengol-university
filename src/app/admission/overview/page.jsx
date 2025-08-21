"use client";

import React from "react";
import {
  FaUserGraduate,
  FaListAlt,
  FaClipboardList,
  FaBookOpen,
  FaCalendarAlt,
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";

const AdmissionOverview = () => {
  return (
    <section className="container bg-[#fef8ef] py-16 px-6 lg:px-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#5c3a00] mb-4">
          Admission Overview
        </h2>
        <p className="text-lg text-gray-700">
          Get all the information you need about our admission process,
          requirements, and support for incoming students at Sengol
          International University.
        </p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <InfoCard
          icon={<FaUserGraduate className="text-3xl text-[#5c3a00] mr-4" />}
          title="Eligibility"
          description="Applicants must have completed 10+2 (for UG) or a relevant Bachelor's degree (for PG) with minimum required marks from a recognized board or university."
        />

        <InfoCard
          icon={<FaListAlt className="text-3xl text-[#5c3a00] mr-4" />}
          title="Entrance Exams"
          description="Admissions are primarily based on JEE Main, CUET, or internal entrance tests. Some programs may require interviews or written tests."
        />

        <InfoCard
          icon={<FaClipboardList className="text-3xl text-[#5c3a00] mr-4" />}
          title="Application Process"
          description="Apply online through our university portal by filling out the form, uploading necessary documents, and submitting the application fee."
        />

        <InfoCard
          icon={<FaBookOpen className="text-3xl text-[#5c3a00] mr-4" />}
          title="Program Orientation"
          description="Selected candidates will be invited for orientation where they'll receive course schedules, meet faculty, and complete final enrollment."
        />

        <InfoCard
          icon={<FaCalendarAlt className="text-3xl text-[#5c3a00] mr-4" />}
          title="Admission Timeline"
          description="Applications open in March and close in July. Entrance tests and interviews are conducted in May-June. Classes begin in August."
        />

        <InfoCard
          icon={<FaMoneyCheckAlt className="text-3xl text-[#5c3a00] mr-4" />}
          title="Scholarships & Financial Aid"
          description="We offer merit-based and need-based scholarships. Students with high academic scores or low income can apply during admission."
        />

        <InfoCard
          icon={<FaPhoneAlt className="text-3xl text-[#5c3a00] mr-4" />}
          title="Need Help?"
          description={
            <>
              Call us at <strong>+91-9876543210</strong> <br />
              or email <strong>admissions@sengoluniv.edu.in</strong>
            </>
          }
        />
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
          href="/apply"
          className="inline-flex items-center bg-[#5b4110de] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#5b4120] transition-colors duration-300 text-base"
        >
          Apply Now
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </section>
  );
};

// Info Card Component
const InfoCard = ({ icon, title, description }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:shadow-md transition-all">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-semibold text-[#5c3a00]">{title}</h3>
    </div>
    <div className="text-gray-700 text-base">{description}</div>
  </div>
);

export default AdmissionOverview;

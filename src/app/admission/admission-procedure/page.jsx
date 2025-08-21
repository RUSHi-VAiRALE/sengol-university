"use client";

import React from "react";
import { FaCheckCircle, FaArrowRight, FaUniversity } from "react-icons/fa";
import { MdOutlineUploadFile } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { Card } from "antd";
import bannerImage from "../../../../public/images/banner/breadcrumb-2.jpg";
import Image from "next/image";

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2
      style={{ color: "#5b4110" }}
      className="text-2xl font-semibold text-[#002147] mb-4  pb-2"
    >
      {title}
    </h2>
    {children}
  </section>
);

const AdmissionProcedurePage = () => {
  return (
    <>
      <div className="relative w-full h-[32rem] overflow-hidden">
        {/* Overlayed Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <p className="text-sm md:text-base text-white mb-2">
            Home / Admission Procedure
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
            Admission Procedure
          </h1>
          <p className="text-white text-lg md:text-xl mt-3 max-w-2xl drop-shadow-sm">
            Discover a simple, transparent, and student-friendly admission
            process designed to help you join your desired program with ease and
            clarity.
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
      <div className="bg-gray-100 py-10">
        <div className="container p-4 md:p-8 text-gray-800 leading-relaxed">
          {/* <h1 className="text-3xl font-bold mb-6 text-center text-[#002147]">
            Admission Procedure
          </h1> */}

          <Section title="Overview">
            <p>
              <strong>Sengol International University (SIU)</strong> offers a
              <strong> streamlined and transparent admission process</strong> to
              ensure that prospective students can conveniently apply and gain
              admission to their preferred programs. The university is committed
              to selecting and enrolling students who exhibit{" "}
              <strong> academic excellence, personal integrity,</strong> and a
              strong desire for <strong>holistic development.</strong>
            </p>
            <p className="mt-2">
              Our admission procedure is thoughtfully designed to be
              <strong> student-friendly,</strong> guiding applicants
              step-by-step from initial inquiry to final enrollment, while
              maintaining fairness, transparency, and merit-based selection at
              its core.
            </p>
          </Section>

          <Section title="📩 Step-by-Step Online Admission Process">
            <ol className="list-decimal pl-5 space-y-2">
              <p>
                <strong>For students who prefer offline submission:</strong>
              </p>
              <li>
                <strong>Online Registration:</strong> Visit the official website
                and fill out the online registration form.
              </li>
              <li>
                <strong>Application Submission:</strong> Complete the
                application form with personal, academic, and program-related
                details. Upload required documents.
              </li>
              <li>
                <strong>Document Verification:</strong> Submitted documents are
                verified for eligibility and authenticity.
              </li>
              <li>
                <strong>Entrance Exam / Merit Evaluation:</strong> Depending on
                the program, admission is either entrance-based or merit-based.
              </li>
              <li>
                <strong>Admission Letter:</strong> Selected candidates receive
                an official Admission Letter via email or portal.
              </li>
              <li>
                <strong>Fee Payment:</strong> Pay the prescribed admission fee
                through online/offline mode.
              </li>
              <li>
                <strong>Final Enrollment:</strong> After payment confirmation,
                you are officially enrolled in the program.
              </li>
            </ol>
          </Section>

          <Section title="📝 Step-by-Step Offline Admission Process">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Visit the university campus or authorized admission centers.
              </li>
              <li>
                Collect the printed admission form from the Admission Office.
              </li>
              <li>Fill the form manually with blue/black pen.</li>
              <li>Attach photocopies of required documents.</li>
              <li>
                Submit the completed form at the Admission Office with the
                application fee (cash/DD).
              </li>
              <li>
                Collect the receipt and wait for further communication via
                SMS/email.
              </li>
            </ol>
            <p className="mt-2 text-red-600 font-semibold">
              🛑 <strong>Important:</strong> Always keep a photocopy of your
              filled form and payment receipt.
            </p>
          </Section>

          <Section title="📄 Required Documents">
            <ul className="list-disc pl-5 space-y-1">
              <li>Passport-size photograph</li>
              <li>
                10th & 12th mark sheets and certificates (for UG programs)
              </li>
              <li>Graduation mark sheets (for PG programs)</li>
              <li>Identity proof (Aadhaar/PAN/Passport)</li>
              <li>Transfer/Migration Certificate</li>
              <li>Category certificate (if applicable)</li>
              <li>Entrance exam scorecard (if applicable)</li>
            </ul>
          </Section>

          <Section title="✅ Eligibility Criteria">
            <div className="overflow-x-auto">
              <table className="table-auto w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr style={{ backgroundColor: "#5b4110" }}>
                    <th className="p-2 border text-white">Program Level</th>
                    <th className="p-2 border text-white">
                      Eligibility Criteria
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Undergraduate</td>
                    <td className="p-2 border">
                      10+2 or equivalent with minimum 45–50% (varies by course)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Postgraduate</td>
                    <td className="p-2 border">
                      Graduation in relevant subject with 50–55%
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Diploma</td>
                    <td className="p-2 border">
                      10th / 10+2 depending on course type
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Ph.D./M.Phil.</td>
                    <td className="p-2 border">
                      Postgraduate in relevant subject with minimum 55%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="💳 Payment Procedure">
            <p>
              <strong>Sengol International University (SIU)</strong> offers both
              online and offline modes of fee payment to ensure convenience and
              accessibility for all students.
            </p>
            <h3
              style={{ color: "#5b4110" }}
              className="text-lg font-semibold mt-4 mb-2"
            >
              1. Online Payment
            </h3>

            <ul className="list-disc pl-5 space-y-1">
              <li className="font-bold">Net Banking</li>
              <li className="font-bold">Credit/Debit Card</li>
              <li className="font-bold">
                UPI (Google Pay, PhonePe, Paytm, etc.)
              </li>
              <li className="font-bold">Online Wallets</li>
            </ul>
            <p className="mt-2 font-bold">
              <strong>Steps:</strong>
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>
                Visit the official website and log in to the student portal.
              </li>
              <li>Navigate to the “Fee Payment” section.</li>
              <li>Choose your preferred mode of online payment.</li>
              <li>Complete the transaction and download the fee receipt.</li>
            </ol>

            <h3
              style={{ color: "#5b4110" }}
              className="text-lg font-semibold mt-6 mb-2"
            >
              2. Offline Payment
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong> Demand Draft (DD)</strong> in favor of Sengol
                International University, payable at Sikkim.
              </li>
              <li>
                <strong> Cash Payment</strong> at the university’s
                admission/finance office.
              </li>
              <li>
                <strong>Bank Transfer (NEFT/RTGS)</strong> to the official
                university account.
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Note:
              <li>
                All payments must be made before the specified deadline to
                confirm admission or semester enrollment.
              </li>
              <li>
                Ensure to collect the payment receipt or acknowledgment slip
                after payment.
              </li>
            </p>
          </Section>

          <Section title="🎓 Admission Modes">
            <ul className="list-disc pl-5 space-y-1">
              <li className="font-bold">Merit-Based Admission</li>
              <li className="font-bold">Entrance Exam-Based Admission</li>
              <li className="font-bold">
                Direct Admission (under management quota, if applicable)
              </li>
              <li className="font-bold">
                Lateral Entry (for eligible diploma holders or transfer
                students)
              </li>
            </ul>
          </Section>

          <Section title="🏅 Scholarships">
            <p>
              SIU offers merit-based, need-based, and category-specific
              scholarships. Students can apply during the admission process with
              relevant documents.
            </p>
          </Section>
        </div>
      </div>
    </>
  );
};

export default AdmissionProcedurePage;

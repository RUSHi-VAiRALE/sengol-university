"use client";

import React from "react";
import Banner from "@/components/program/Banner";
import { Divider } from "antd";

const CreditTransfer = () => {
  return (
    <>
      <Banner
        title="Credit Transfer Policy"
        subtitle="Seamless academic mobility and flexibility for eligible students."
      />

      <div className="container mx-auto px-4 py-10">
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            <strong>Sengol International University (SIU)</strong> supports
            student mobility and academic flexibility through its{" "}
            <strong>Credit Transfer Policy,</strong> allowing eligible students
            to continue their education without repetition of previously
            completed coursework.
          </p>

          <div>
            <h3
              style={{ color: "#5b4110" }}
              className="text-xl font-semibold text-[#0f172a] mb-2"
            >
              1. Purpose
            </h3>
            <p>
              To provide opportunities for students to transfer from other
              recognized institutions and integrate into SIU programs without
              academic loss.
            </p>
          </div>
          <Divider />
          <div>
            <h3
              style={{ color: "#5b4110" }}
              className="text-xl font-semibold text-[#0f172a] mb-2"
            >
              2. Eligibility for Credit Transfer
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                The student must be currently enrolled or have studied in a
                <strong> UGC/AICTE/BCI/PCI/NMC-recognized</strong> university or
                institution.
              </li>
              <li>
                The courses and credits completed must be{" "}
                <strong>equivalent or relevant </strong>
                to the curriculum offered by SIU.
              </li>
              <li>
                Minimum <strong>CGPA or percentage criteria</strong> may apply
                as per university norms.
              </li>
            </ul>
          </div>

          <div>
            <h3
              style={{ color: "#5b4110" }}
              className="text-xl font-semibold text-[#0f172a] mb-2"
            >
              3. Acceptable Scenarios
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>Inter-university migration</li>
              <li>Change of course/discipline</li>
              <li>Gap in studies due to personal or medical reasons</li>
              <li>Institution closure or non-recognition</li>
            </ul>
          </div>

          <div>
            <h3
              style={{ color: "#5b4110" }}
              className="text-xl font-semibold text-[#0f172a] mb-2"
            >
              4. Process for Credit Transfer
            </h3>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>
                <strong>Application Submission:</strong> Apply for credit
                transfer during the admission process.
              </li>
              <li>
                <strong>Transcript Review:</strong> Submit academic transcripts,
                course outlines/syllabus for review by the Credit Transfer
                Committee.
              </li>
              <li>
                <strong>Evaluation & Mapping:</strong> SIU faculty maps
                completed credits to equivalent subjects in the current
                curriculum.
              </li>
              <li>
                <strong>Approval & Admission:</strong> Upon approval, the
                student is admitted into the appropriate semester/year.
              </li>
            </ol>
          </div>

          <div>
            <h3
              style={{ color: "#5b4110" }}
              className="text-xl font-semibold text-[#0f172a] mb-2"
            >
              5. Documents Required
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>Original Transcripts/Mark Sheets</li>
              <li>Syllabus or Course Description from previous institution</li>
              <li>Transfer Certificate / Migration Certificate</li>
              <li>Any additional academic records as requested</li>
            </ul>
          </div>

          <div>
            <h3
              style={{ color: "#5b4110" }}
              className="text-xl font-semibold text-[#0f172a] mb-2"
            >
              6. Conditions
            </h3>
            <ul className="list-disc list-inside ml-4">
              <li>
                Maximum <strong>50% of total course credits</strong> may be
                transferred (subject to program rules).
              </li>
              <li>
                No credit shall be transferred for{" "}
                <strong>internships, project work, or thesis, </strong> unless
                approved by the department.
              </li>
              <li>
                Final approval is at the sole discretion of SIU's{" "}
                <strong>Academic Council.</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditTransfer;

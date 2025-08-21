import React from "react";
import Image from "next/image";
import SikkimLogo from "../../../../public/images/about/approval_recognitions_logo.png"; // Update this path as per your project

const ApprovalRecognition = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 rounded-xl shadow-inner">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white bg-[#7b3f00] inline-block px-8 py-3 rounded-md">
          Approval and Recognitions
        </h2>
      </div>

      <div className="border border-red-500 p-6 md:flex items-center gap-6 bg-white rounded-md">
        <div className="border border-red-500 p-4 rounded-md flex-shrink-0">
          <Image
            src={SikkimLogo}
            alt="Govt of Sikkim"
            width={120}
            height={120}
            className="mx-auto"
          />
          <p className="text-center text-sm font-semibold mt-2">
            GOVT. OF SIKKIM
          </p>
        </div>

        <div className="mt-6 md:mt-0">
          <h3 className="text-lg md:text-xl font-bold mb-3">
            Sikkim State Govt. Gazette of Sengol International University
          </h3>
          <a
            href="/pdfs/about/Gazette_Notification.pdf"
            className="text-blue-600 font-semibold underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            | Gazette Notification Copy
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApprovalRecognition;

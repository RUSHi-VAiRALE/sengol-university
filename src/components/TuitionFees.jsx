// components/TuitionFees.jsx
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // For the arrow icon

const tuitionData = [
  {
    type: "Undergraduate Programs",
    sections: [
      {
        faculty: "Faculty of Arts and Sciences",
        fees: [
          "Full-Time Tuition (per semester): $241",
          "Part-Time Tuition (per credit): $141",
        ],
      },
      {
        faculty: "Faculty of Business Studies",
        fees: [
          "Full-Time Tuition (per semester): $241",
          "Part-Time Tuition (per credit): $141",
        ],
      },
    ],
    variant: "v__1", // Custom variant, might imply a slightly different style
  },
  {
    type: "Graduate Programs",
    sections: [
      {
        faculty: "Graduate School/Department",
        fees: [
          "Full-Time Tuition (per semester): $241",
          "Part-Time Tuition (per credit): $141",
        ],
      },
      {
        faculty: "Additional Fees",
        fees: [
          "Technology Fee: $149 per semester",
          "Student Activity Fee: $99 per semester",
        ],
      },
    ],
    variant: null, // No specific variant, use default styling
  },
];

const TuitionFees = () => {
  return (
    <section className="tution rts-section-padding">
      {" "}
      {/* Converted rts-section-padding to Tailwind */}
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4 gap-y-8 lg:gap-y-0">
          {" "}
          {/* Converted .row .align-items-center .g-5 */}
          {/* Left Column: Title, Description, Button */}
          <div className="w-full lg:w-4/12 px-4">
            {" "}
            {/* Converted col-lg-4 */}
            <div className="rts__section--wrapper tfs_section v__7">
              <h2 className="rts__section--title tfs_section-h2 text-3xl md:text-4xl font-bold mb-1 text-gray-900">
                Tuition Fees at Sengol International Universitys
              </h2>
              <p className="rts__section--description text-gray-700 leading-relaxed mb-8">
                At Sengol International Universitys, we are dedicated to
                offering quality education at affordable rates for students from
                diverse backgrounds.
              </p>
              <Link
                href="#" // Replace with actual link for plan details
                className="rts-theme-btn btn-arrow inline-flex items-center bg-[#5b4110de] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#5b4120] transition-colors duration-300"
              >
                Plan Details
                <span className="ml-2">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
          {/* Right Columns: Tuition Boxes */}
          {tuitionData.map((program, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-4/12 px-4">
              {" "}
              {/* Converted col-lg-4 col-md-6 */}
              <div
                className={`tution__single--box p-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] `}
              >
                <h5 className="tution__single--box--title text-2xl font-bold mb-6 text-gray-900">
                  {program.type}
                </h5>
                {program.sections.map((section, secIndex) => (
                  <React.Fragment key={secIndex}>
                    <h3 className="tution__single--box--faculty  ">
                      {section.faculty}
                    </h3>
                    <ul className="tution__single--box--feature space-y-2 text-gray-700">
                      {section.fees.map((fee, feeIndex) => (
                        <li
                          key={feeIndex}
                          className="flex items-center text-gray-700"
                        >
                          {/* <span className="w-2 h-2 bg-[#A37E31] rounded-full mr-3 flex-shrink-0"></span>{" "} */}
                          {/* Bullet point */}
                          <CheckIcon />
                          {fee}
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TuitionFees;

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-check"
      viewBox="0 0 16 16"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
    </svg>
  );
};

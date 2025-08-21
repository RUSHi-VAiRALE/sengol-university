import { Divider } from "antd";
import React from "react";

const objectives = [
  <>
    To prepare students for
    <span className="font-bold"> campus recruitment</span> through rigorous
    training and skill-building.
  </>,
  <>
    To build long-term relationships with{" "}
    <span className="font-bold">
      leading companies, startups, and public sector units.
    </span>
  </>,
  <>
    To assist students in developing{" "}
    <span className="font-bold">
      industry-relevant soft skills, technical knowledge, and professional
      ethics.
    </span>
  </>,
  <>
    To facilitate{" "}
    <span className="font-bold">
      internships, industrial visits, live projects, and career counseling
      sessions.
    </span>
  </>,
];

const keyFunctions = [
  <>
    <span className="font-bold">Placement Drives:</span> Organize on-campus and
    off-campus placement opportunities.
  </>,
  <>
    <span className="font-bold">Training Programs:</span> Conduct soft skills,
    communication, aptitude, reasoning, and interview prep sessions.
  </>,
  <>
    <span className="font-bold">Internship Assistance:</span> Guide students in
    obtaining industry internships across all departments.
  </>,
  <>
    <span className="font-bold">Industry Connect:</span> Maintain relationships
    with recruiters and HR managers through MoUs and tie-ups.
  </>,
  <>
    <span className="font-bold">Career Guidance:</span> Offer personal mentoring
    and career counseling for higher studies and entrepreneurship.
  </>,
  <>
    <span className="font-bold">Resume Development:</span> Help students in
    building impactful CVs and professional online profiles (LinkedIn, etc.).
  </>,
];


const approach = [
  "Aptitude Tests & GD/PI",
  "Corporate Etiquette",
  "Technical Interview Preparation",
  "Mock Interviews & Role Plays",
  "Entrepreneurship Workshops",
];

const TrainingPlacement = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 rounded-xl shadow-inner space-y-10">
      <h1 className="text-4xl underline font-extrabold text-[#5b4110] text-center">
        SENGOL INTERNATIONAL UNIVERSITY
      </h1>
      <h3 className="text-center">🎓 Training & Placement Cell</h3>

      <div className="space-y-4">
        <Divider />
        <h3 className="text-3xl font-bold text-[#5b4110]">Introduction</h3>
        <p className="text-lg text-gray-700">
          The <span className="font-bold"> Training & Placement Cell</span> of
          Sengol International University serves as a vital link between the{" "}
          <span className="font-bold">students, industry, and academia.</span>{" "}
          Our aim is to{" "}
          <span className="font-bold">
            equip students with the skills and opportunities
          </span>{" "}
          required to launch successful careers across various disciplines.
        </p>
      </div>

      <Divider />

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-[#5b4110]">Objectives</h3>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          {objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-[#5b4110]">Key Functions</h3>
        <ul className="list-decimal pl-8 space-y-2 text-2xl text-gray-700">
          {keyFunctions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-[#5b4110]">Our Approach</h3>
        <p>
          The Cell works in close coordination with the{" "}
          <span className="font-bold">
            academic departments, corporate partners, and alumni
          </span>{" "}
          to create a strong ecosystem for placements. Sessions are designed to
          cover:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          {approach.map((item, index) => (
            <li className="font-bold" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TrainingPlacement;

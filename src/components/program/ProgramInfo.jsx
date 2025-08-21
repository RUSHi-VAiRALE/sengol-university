"use client";

import { Divider } from "antd";
import React from "react";

const ProgramInfo = ({
  academicCalendar,
  section,
  objectives,
  objectiveIntro,
}) => {
  if (!academicCalendar || !section || !objectives || !objectiveIntro) {
    return <div className="p-4">No data available</div>;
  }

  return (
    <div className="p-4 md:p-8 space-y-12">
      {/* Dynamic Sections */}
      {section.map((sec, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#5b4110" }}>
            {sec.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed">{sec.content}</p>
          <Divider />
        </section>
      ))}

      {/* Dynamic Objectives Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#5b4110" }}>
          Objective
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">{objectiveIntro}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {objectives.map((obj, index) => (
            <li key={index}>{obj}</li>
          ))}
        </ul>
        <Divider />
      </section>

      {/* Dynamic Academic Calendar */}
      {/* <section>
        <h2
          className="text-2xl text-center font-bold mb-4"
          style={{ color: "#5b4110" }}
        >
          Academic Calendar Engineering 2024-25
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr style={{ backgroundColor: "#5b4110" }}>
                <th className="border border-gray-300 p-2 text-white text-left">
                  Events
                </th>
                <th className="border border-gray-300 p-2 text-white text-left">
                  Tentative Dates
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {academicCalendar.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{item.event}</td>
                  <td className="border border-gray-300 p-2">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}
    </div>
  );
};

export default ProgramInfo;

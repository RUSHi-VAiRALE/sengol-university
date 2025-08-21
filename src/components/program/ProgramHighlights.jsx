"use client";

import React from "react";

const ProgramHighlights = ({
  highlights = [],
  note = null,
  faculty = null,
}) => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-blue-50/50 p-8 rounded-lg shadow-md border border-blue-100"
          >
            <h3 className="text-2xl font-bold text-[#5c3a00] mb-4 flex items-center">
              <span className="mr-3 text-3xl text-[#5c3a00]">{item.icon}</span>
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Optional Note */}
      {note && (
        <div className="mt-8 text-xl font-semibold text-[#5c3a00]">{note}</div>
      )}

      {/* Optional Faculty Section */}
      {faculty && (
        <div className="mt-10 bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-[#5c3a00] mb-4 flex items-center">
            <span className="mr-3 text-3xl text-[#5c3a00]">{faculty.icon}</span>
            {faculty.title}
          </h3>
          <div className="space-y-4 text-gray-700">
            {faculty.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgramHighlights;

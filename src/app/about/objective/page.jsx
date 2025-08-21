import React from "react";

const objectivesData = [
  {
    title: "Serving Students with Quality",
    points: [
      "Understand our students.",
      "Nurture efficient and energetic students.",
      "Help students start, stay and succeed.",
      "Provide GREAT and useful service.",
      "Commitment to continuous quality improvement.",
    ],
  },
  {
    title: "Trustworthiness",
    points: [
      "Communicate openly and honestly.",
      "Demonstrate loyalty.",
      "Maintain confidentiality.",
      "Promoting Teamwork.",
      "Explain “why” and ask “why”.",
    ],
  },
  {
    title: "Accountability",
    points: [
      "Think as a University.",
      "Follow University policies and procedures.",
      "Perform to the vision and strategic plan.",
      "Meet goals and carry out responsibilities.",
      "Adapt to change in support of vision and strategic plan.",
    ],
  },
  {
    title: "Innovation and Creativity",
    points: [
      "Share thoughts and new ideas.",
      "Actively engage and participate.",
      "Constructively challenge status quo.",
      "Think outside the box.",
    ],
  },
  {
    title: "Respect for People",
    points: [
      "Celebrate success.",
      "Inspire and motivate.",
      "Treat everyone with respect and cooperation.",
      "Embrace diversity for unity.",
    ],
  },
];

const Objectives = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 rounded-xl shadow-inner">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#5b4110] mb-4">
          Our Objectives
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The University is committed to these core values, which guide us in
          carrying out our mission and realizing our vision. These values are
          represented through <span className="font-semibold">STAIR</span>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {objectivesData.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition transform hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-[#5b4110] mb-4">
              {section.title}
            </h3>
            <ul>
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;

import React from "react";

const MissionVision = () => {
  const vision = {
    title: "Our Vision",
    description:
      "To emerge as a globally recognized center of academic excellence, innovation, and ethical leadership that nurtures knowledge, fosters creativity, and inspires students to become responsible global citizens committed to shaping a sustainable and inclusive future.",
    svgPath:
      "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
  };

  const mission = {
    title: "Our Mission",
    description: [
      "To provide a transformative educational experience that blends academic rigor with practical knowledge and life skills.",
      "To foster a culture of innovation, inquiry, and research that addresses real-world challenges.",
      "To uphold the values of inclusivity, diversity, ethics, and social responsibility in all aspects of institutional life.",
      "To build strategic collaborations with industry, academia, and global institutions for enriching academic and research opportunities.",
      "To empower students to lead with integrity, vision, and a sense of service to society.",
    ],
    svgPath:
      "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 rounded-xl shadow-inner">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#5b4110] mb-4">
          Vision & Mission
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Sengol International University, our vision and mission shape our
          path to academic and societal excellence.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-1">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]">
          <div className="flex items-center mb-4 text-[#5b4110]">
            <div className="bg-[#f1e3cf] p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d={vision.svgPath} />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{vision.title}</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {vision.description}
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02]">
          <div className="flex items-center mb-4 text-[#5b4110]">
            <div className="bg-[#f1e3cf] p-2 rounded-full mr-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d={mission.svgPath} />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {mission.title}
            </h3>
          </div>
          <ul >
            {mission.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

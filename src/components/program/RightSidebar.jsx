"use client";

import Link from "next/link";

const RightSidebar = () => {
  const schools = [
    {
      text: "School of Engineering & Technology",
      href: "/programs/school_engineering_technology",
    },
    {
      text: "School of Commerce and Management Studies",
      href: "/programs/school_commerce_management_studies",
    },
    {
      text: "School of Computer Science & IT",
      href: "/programs/school_computer_science_it",
    },
    {
      text: "School of Architecture & Planning",
      href: "/programs/school_architecture_planning",
    },
    {
      text: "School of Hotel Management",
      href: "/programs/school_hotel_management",
    },
    {
      text: "School of Library & Information Science",
      href: "/programs/school_library_information_science",
    },
    { text: "School of Science", href: "/programs/school_science" },
    {
      text: "School of Arts and Social Studies",
      href: "/programs/school_arts_social_studies",
    },
    {
      text: "School of Education and Physical Education",
      href: "/programs/school_education_physical_education",
    },
    {
      text: "School of Journalism & Mass Media Communication",
      href: "/programs/school_journalism_mass_media_communication",
    },
    { text: "School of Law", href: "/programs/school_law" },
    { text: "School of Pharmacy", href: "/programs/school_pharmacy" },
    {
      text: "School of Para-Medical Science",
      href: "/programs/school_para_medical_science",
    },
    {
      text: "School of Philosophy and Research",
      href: "/programs/school_philosophy_research",
    },
    { text: "School of Fire & Safety", href: "/programs/school_fire_safety" },
    { text: "School of Animation", href: "/programs/school_animation" },
    {
      text: "School of Vocational Studies",
      href: "/programs/school_vocational_studies",
    },
  ];
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* PhD Commitments Card */}
      <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-6 lg:p-8 hover:shadow-2xl transition-all duration-300">
        <div className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-bold px-6 py-4 rounded-2xl text-center mb-6">
          <h3 className="text-lg lg:text-xl font-bold">OUR COMMITMENTS FOR Ph.D</h3>
        </div>

        <ul className="space-y-4 text-gray-700">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm lg:text-base leading-relaxed">Genuine Research Work.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm lg:text-base leading-relaxed">24*7 Hours Phone Assistance by Guide.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm lg:text-base leading-relaxed">Completion of Research work on time, Degree will be awarded on time.</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm lg:text-base leading-relaxed">
              <span className="font-semibold text-[#8f3a17]">Information Regarding Scholarship:</span>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Top 10 Students will get 50% fee relaxation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
                  <span>NET/SET Cleared Students will get 20% Scholarship.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#8f3a17] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Top 10 Course Work Students will get ₹10,000 each.</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Schools Navigation Card */}
      <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/20 p-6 lg:p-8 hover:shadow-2xl transition-all duration-300">
        <div className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-bold px-6 py-4 rounded-2xl text-center mb-6">
          <h3 className="text-lg lg:text-xl font-bold">All Schools</h3>
        </div>

        <div className="space-y-3">
          {schools.map((school, index) => (
            <Link
              key={index}
              href={school.href}
              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#ad4a16]/10 hover:to-[#8f3a17]/10 transition-all duration-300 border border-transparent hover:border-[#ad4a16]/20"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-[#ad4a16] to-[#8f3a17] rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-sm lg:text-base text-gray-700 group-hover:text-[#8f3a17] transition-colors duration-300 leading-relaxed">
                {school.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

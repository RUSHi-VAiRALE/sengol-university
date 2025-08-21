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
    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
      <div className="bg-[#5b4110] text-white font-semibold px-4 py-2 rounded-md">
        OUR COMMITMENTS FOR Ph.D
      </div>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-2xl leading-relaxed">
        <li>Genuine Research Work.</li>
        <li>24*7 Hours Phone Assistance by Guide.</li>
        <li>
          Completion of Research work on time, Degree will be awarded on time.
        </li>
        <li>
          Information Regarding Scholarship:
          <ul className="list-[circle] pl-6 mt-2 space-y-1">
            <li>Top 10 Students will get 50% fee relaxation.</li>
            <li>NET/SET Cleared Students will get 20% Scholarship.</li>
            <li>Top 10 Course Work Students will get ₹10,000 each.</li>
          </ul>
        </li>
      </ul>

      <div className="bg-[#5b4110] text-white font-semibold px-4 py-2 rounded-md mt-6">
        Sengol International University
      </div>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-2xl leading-relaxed">
        {schools.map((school, index) => (
          <li key={index}>
            <Link href={school.href} className="text-blue-600 hover:underline">
              {school.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;

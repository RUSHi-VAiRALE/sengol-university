"use client";

import React from "react";
import Image from "next/image";
import Image1 from "../../../public/images/about/about-us1.png";

const AboutPage = () => {

  return (
    <div className=" bg-white text-gray-800 ">
      <main className="container mx-auto px-6 py-16 space-y-24">
        <section>
          <h1 className="text-3xl text-center font-extrabold text-[#5b4110] mb-4 underline">
            About Sengol International University
          </h1>
          <div className="grid md:grid-cols-1 gap-8 items-center">
            <Image width={900} src={Image1} alt="Campus" className="rounded-lg shadow-lg" />
            {/* <div>
              <h2 className="text-3xl font-semibold mb-4">
                Our Legacy of Learning
              </h2>
              <p className="mb-4 text-gray-700">
                Founded on innovation and inclusivity, Sengol University fosters
                a community of curious minds.
              </p>
              <p className="text-gray-700">
                With expert faculty and dynamic programs, we prepare students
                for careers and impactful lives.
              </p>
            </div> */}
          </div>
        </section>

        <section>
          <div className="flex-1">
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-bold underline">
                {" "}
                Sengol International University
              </span>{" "}
              is is a State Private University Established by Act No.
              <span className="font-bold"> 14 of 2025</span> Sikkim State
              Legislative Assembly & approved by UGC under section 2 (F) of the
              UGC Act 1956 in 2025.{" "}
              <span className="font-bold underline">
                {" "}
                Sengol International University,
              </span>{" "}
              located in the picturesque state of Sikkim, is a premier
              institution committed to providing world-class education,
              fostering innovation, and nurturing global leaders. Established
              with the vision of promoting academic excellence and holistic
              development,{" "}
              <span className="font-bold">
                {" "}
                Sengol International University
              </span>{" "}
              offers a vibrant and inclusive learning environment where students
              thrive both intellectually and personally.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Situated amidst the serene Himalayas, our campus offers not only a
              scenic setting but also a peaceful atmosphere conducive to
              learning and research. The university blends traditional values
              with modern education, offering a wide spectrum of programs at
              undergraduate, postgraduate, and doctoral levels across diverse
              disciplines including Science & Technology, Commerce & Management,
              Humanities, Social Sciences, Law, Education, Pharmacy,
              Agriculture, Allied Health Sciences, and more.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At{" "}
              <span className="font-bold">
                {" "}
                Sengol International University
              </span>{" "}
              , we believe in empowering students with knowledge, skills, and
              ethical values. Our highly qualified faculty members, modern
              infrastructure, cutting-edge research facilities, and
              industry-integrated curriculum ensure that our students are
              prepared to meet the challenges of a rapidly evolving global
              landscape.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The university emphasizes innovation, sustainability, and
              research-driven education. Through national and international
              collaborations, we strive to provide our students with broader
              academic exposure and global opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-bold">
                {" "}
                Sengol International University
              </span>{" "}
              remains dedicated to shaping responsible citizens and visionary
              professionals who will contribute meaningfully to society. With a
              focus on academic excellence, social responsibility, and global
              perspective, Sengol International University is on its path to
              becoming a center of educational distinction in India and beyond.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

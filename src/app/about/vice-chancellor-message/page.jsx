import React from "react";
import Image from "next/image";
import ViceChairmanImage from "../../../../public/images/faculty/01.jpg"; // Replace with real image or placeholder

const ViceChancellorMessage = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-md space-y-10">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* <div className="w-full lg:w-1/3">
          <Image
            src={ViceChairmanImage}
            alt="Vice Chairman"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div> */}

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-[#5b4110] mb-4">
            Message from the Vice Chancellor
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            It gives me immense pleasure to welcome you to Sengol International
            University, a place where knowledge meets purpose, and where young
            minds are transformed into leaders of tomorrow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today’s rapidly evolving global landscape, higher education must
            transcend traditional boundaries. At Sengol International
            University, we are deeply committed to delivering a comprehensive
            and transformative education. Our approach is student-centric,
            innovation-driven, and ethically grounded. We seek to create an
            environment that fosters not only academic excellence but also
            character, creativity, and leadership.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our university offers a dynamic range of programs across various
            disciplines, designed to equip students with critical thinking
            skills, practical experience, and a lifelong love for learning. We
            believe in the integration of technology, research, and
            interdisciplinary approaches to ensure that our graduates are
            well-prepared to face the challenges of the modern world.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Located in the peaceful and ecologically rich state of Sikkim, our
            campus is an oasis for learning and reflection. With world-class
            infrastructure, advanced laboratories, and smart classrooms, we
            provide a setting that supports both academic and personal
            development. We also take pride in our strong faculty, whose
            dedication, experience, and mentorship are the pillars of our
            academic excellence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our mission is to cultivate global citizens who are not only
            competent professionals but also compassionate and socially
            responsible individuals. To that end, we emphasize experiential
            learning, social engagement, entrepreneurial spirit, and a
            commitment to sustainability and inclusiveness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            International partnerships and industry collaborations further
            enrich our academic fabric, offering students and faculty the
            opportunity to engage in cutting-edge research, global internships,
            and cross-cultural exchange programs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As Vice Chancellor, I am honored to lead this vibrant institution
            into a new era of educational distinction. I invite all aspiring
            students, scholars, and collaborators to join us in our journey
            toward academic innovation, global relevance, and societal impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Let us work together to build a university that not only imparts
            knowledge but inspires change.
          </p>

          <div className="mt-6">
            <span>With warm regards,</span>
            <p className="text-sm text-gray-600">
              Vice Chancellor
              <br /> Sengol International University, Sikkim
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3eadf] p-6 rounded-lg shadow-inner text-center">
        <p className="text-lg font-semibold text-[#5b4110]">
          “We educate not only minds, but hearts — to lead with purpose and
          passion.”
        </p>
      </div>
    </div>
  );
};

export default ViceChancellorMessage;

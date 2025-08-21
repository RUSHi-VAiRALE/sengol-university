import React from "react";
import Image from "next/image";
import DirectorImage from "../../../../public/images/faculty/03.jpg"; // Replace with actual image

const DirectorMessage = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-md space-y-10">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* <div className="w-full lg:w-1/3">
          <Image
            src={DirectorImage}
            alt="Director"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div> */}

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-[#5b4110] mb-4">
            Message from the Registrar
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            It is my pleasure to welcome you to Sengol International University,
            a place where academic excellence meets integrity, and innovation is
            nurtured with care and commitment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As the Registrar, I am proud to be part of a university that is
            dedicated not only to imparting quality education but also to
            fostering a culture of transparency, discipline, and student-centric
            governance. At Sengol International University, our administrative
            systems are designed to be efficient, accessible, and responsive —
            ensuring that every student and faculty member can focus on growth,
            learning, and achievement without barriers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our goal is to support the academic mission of the university
            through seamless administrative services, accurate record keeping,
            and the facilitation of student welfare initiatives. Whether you are
            a student, parent, faculty member, or partner institution, we are
            here to provide you with timely assistance and guidance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sengol International University is growing rapidly as a center of
            learning in Sikkim, and we are committed to upholding the values
            that define us: integrity, inclusiveness, innovation, and service.
            We strive to make every interaction meaningful and every process
            transparent.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I invite you to explore all that Sengol International University has
            to offer and look forward to being part of your academic journey.
          </p>

          <div className="mt-6">
            <span>With warm regards,</span>
            <p className="text-sm text-gray-600">
              Registrar
              <br />
              Sengol International University, Sikkim
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3eadf] p-6 rounded-lg shadow-inner text-center">
        <p className="text-lg font-semibold text-[#5b4110]">
          “Leadership begins with learning. We are here to lead with knowledge,
          compassion, and courage.”
        </p>
      </div>
    </div>
  );
};

export default DirectorMessage;

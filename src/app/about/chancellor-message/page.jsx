import React from "react";
import Image from "next/image";
import ChairmanImage from "../../../../public/images/faculty/02.jpg"; // Add a real image at this path or replace with placeholder

const ChancellorMessage = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-md space-y-10">
      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* <div className="w-full lg:w-1/3">
          <Image
            src={ChairmanImage}
            alt="Chairman"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div> */}

        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-[#5b4110] mb-4">
            Message from the Chancellor
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            It is with immense pride and great pleasure that I welcome you to
            Sengol International University, Sikkim — a vibrant institution
            committed to academic excellence, innovation, and the holistic
            development of our students.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Sengol International University, we believe education is not just
            about the transfer of knowledge, but the transformation of lives.
            Rooted in the rich cultural heritage of Sikkim and driven by global
            standards, our university is a place where tradition meets
            modernity, where students are nurtured to become responsible
            leaders, critical thinkers, and compassionate global citizens.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Sengol International University, we believe education is not just
            about the transfer of knowledge, but the transformation of lives.
            Rooted in the rich cultural heritage of Sikkim and driven by global
            standards, our university is a place where tradition meets
            modernity, where students are nurtured to become responsible
            leaders, critical thinkers, and compassionate global citizens.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our commitment is to provide a dynamic and inclusive learning
            environment supported by a distinguished faculty, cutting-edge
            facilities, and a curriculum designed to meet the evolving demands
            of the 21st century. We strive to nurture intellectual curiosity,
            social responsibility, and a global mindset in our students. By
            encouraging cross-disciplinary exploration, ethical reasoning, and
            creative problem-solving, we help students become resilient,
            adaptable, and visionary leaders of tomorrow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sengol International University is not only an academic institution
            but a community of learners, educators, researchers, and innovators
            who are driven by the shared goal of making a positive impact on
            society. Our university is designed as a space for critical inquiry
            and constructive dialogue, where ideas flourish and diversity is
            celebrated. Through research, collaboration, and civic engagement,
            we aim to address the challenges facing our world and contribute to
            building a more equitable and sustainable future.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As Chancellor, my vision is to see Sengol International University
            emerge as a beacon of knowledge and character — a place where young
            minds are empowered to innovate, lead, and contribute meaningfully
            to society. We are focused on building not only a university of
            excellence, but also a culture of compassion, collaboration, and
            continuous learning.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We welcome students from across the country and around the world to
            join our vibrant community. At Sengol International University, your
            aspirations will be met with encouragement, your curiosity with
            opportunity, and your potential with the resources and support
            needed to achieve greatness.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I warmly invite you to be a part of this journey, and I look forward
            to witnessing the remarkable futures that will be shaped within the
            halls of Sengol International University.
          </p>

          <div className="mt-6">
            <span>With best wishes,</span>
            <p className="text-sm text-gray-600">
              Chancellor
              <br /> Sengol International University, Sikkim
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f3eadf] p-6 rounded-lg shadow-inner text-center">
        <p className="text-lg font-semibold text-[#5b4110]">
          “Education is the cornerstone of a just and progressive society. Let’s
          build it together — one student at a time.”
        </p>
      </div>
    </div>
  );
};

export default ChancellorMessage;

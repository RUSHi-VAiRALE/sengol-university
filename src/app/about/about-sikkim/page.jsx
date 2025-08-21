"use client";

import React from "react";
import Image from "next/image";
import Image1 from "../../../../public/images/about/about_sikkim.jpg";

const AboutSikkimPage = () => {

  return (
    <div className=" bg-white text-gray-800 ">
      <main className="container mx-auto px-6 py-16 space-y-24">
        <section>
          <h1 className="text-3xl text-center font-extrabold text-[#5b4110] mb-4 underline">
            About Sikkim
          </h1>
          <div className="grid md:grid-cols-1 gap-8 items-center">
            <Image src={Image1} alt="About Sikkim" className="rounded-lg shadow-lg" />
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
              Nestled in the lap of the Eastern Himalayas, Sikkim is a jewel of
              northeastern India, renowned for its stunning natural beauty,
              cultural richness, and environmental consciousness. Sharing
              borders with Bhutan, Tibet, and Nepal, this serene state is
              India's least populous yet one of its most progressive and
              peaceful.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sikkim boasts a unique blend of traditions, where diverse
              communities — including the Lepchas, Bhutias, and Nepalis — live
              in harmony. Its capital, Gangtok, is a picturesque hill town known
              for its clean environment, welcoming people, and growing
              educational and technological hubs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As India's first fully organic state, Sikkim is a model of
              sustainable development. Its breathtaking landscapes — from
              snow-capped mountains and alpine meadows to hot springs and
              monasteries — make it a haven for nature lovers and spiritual
              seekers alike.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sikkim also holds strategic importance and plays a vital role in
              India’s cultural and ecological diversity. With a high literacy
              rate and an increasing focus on quality education, it is rapidly
              becoming a preferred destination for students from across India
              and abroad.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At the heart of this progressive and peaceful region,{" "}
              <span className="font-bold">
                {" "}
                Sengol International University
              </span>{" "}
              aspires to carry forward Sikkim’s legacy of harmony,
              sustainability, and intellectual growth.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutSikkimPage;

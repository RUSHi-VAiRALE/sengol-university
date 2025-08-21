// components/NoticeBoard.jsx
import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Piyush Shukla",
    degree: "B.Sc. IT",
    testimonial: "Thanks to the unparalleled mentorship and guidance from my Computer Science teachers at Sengol International University, I've transformed from a student to a certified ethical hacker in cybersecurity.",
    image: "/images/alumni/student1.jpg"
  },
  {
    id: 2,
    name: "Priya Sharma",
    degree: "B.Tech Computer Science",
    testimonial: "The practical approach and industry exposure at Sengol International University helped me secure a great position at a leading tech company.",
    image: "/images/alumni/student2.jpg"
  },
  {
    id: 3,
    name: "Rahul Verma",
    degree: "MBA",
    testimonial: "The business acumen and leadership skills I developed at Sengol International University have been instrumental in my entrepreneurial journey.",
    image: "/images/alumni/student3.jpg"
  },
  {
    id: 4,
    name: "Anjali Patel",
    degree: "B.Sc. Nursing",
    testimonial: "The hands-on training and clinical experience at Sengol International University prepared me perfectly for my career in healthcare.",
    image: "/images/alumni/student4.jpg"
  }
];

const NoticeBoard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="rts__section--title text-xl md:text-2xl font-bold text-gray-800">
            Sengol International University Alumni Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successful graduates about their journey at Sengol International University
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Section - Profile */}
              <div className="lg:w-1/2 bg-gray-50 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-80 h-80 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-5xl">👨‍🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {testimonials[currentIndex].degree}
                  </p>
                </div>
              </div>

              {/* Right Section - Testimonial */}
              <div className="lg:w-1/2 p-12 flex flex-col justify-center relative" style={{ backgroundColor: 'oklch(0.6 0.16 59.3)' }}>
                <div className="absolute top-6 right-6 text-white opacity-30">
                  <FaQuoteLeft size={50} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Alumni Testimonial
                  </h3>
                  
                  <p className="text-white text-lg leading-relaxed mb-6">
                    "{testimonials[currentIndex].testimonial}"
                  </p>
                  
                  <div className="text-white font-semibold">
                    - {testimonials[currentIndex].name} ({testimonials[currentIndex].degree})
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-white' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={prevTestimonial}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-r-lg shadow-lg transition-all duration-300"
              >
                <FaChevronLeft size={20} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={nextTestimonial}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 p-3 rounded-l-lg shadow-lg transition-all duration-300"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;

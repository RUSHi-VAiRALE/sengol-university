"use client";

import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = ({ title = "Frequently Asked Questions", faqData = [] }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="lg:col-span-2 mb-16 space-y-6">
      <h2 className="text-3xl font-bold text-[#5c3a00] mb-6 flex items-center">
        <FaQuestionCircle className="text-[#5c3a00] mr-3 text-3xl" /> {title}
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-5 text-left font-semibold text-lg text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openFAQ === index ? (
                <FaChevronUp className="text-[#5c3a00] ml-2" />
              ) : (
                <FaChevronDown className="text-[#5c3a00] ml-2" />
              )}
            </button>
            {openFAQ === index && (
              <div className="p-5 border-t border-gray-200 bg-white text-gray-700">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

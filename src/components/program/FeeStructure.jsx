"use client";

import React from "react";

const FeeStructure = ({
  heading = "Fee Structure",
  fees = [],
  note = null,
}) => {
  return (
    <section className="bg-white lg:px-24">
      <div className="container mt-10 bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <h3 className="text-2xl font-bold text-[#5c3a00] mb-6 flex items-center">
          💰 {heading}
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-200">
            <thead className="bg-[#fef3c7] text-[#5c3a00]">
              <tr>
                <th className="py-3 px-4 border">Component</th>
                <th className="py-3 px-4 border">Amount (INR)</th>
                <th className="py-3 px-4 border">Frequency</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {fees.map((fee, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4 border">{fee.component}</td>
                  <td className="py-3 px-4 border">{fee.amount}</td>
                  <td className="py-3 px-4 border">{fee.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {note && <p className="mt-4 text-sm text-gray-600">* {note}</p>}
      </div>
    </section>
  );
};

export default FeeStructure;

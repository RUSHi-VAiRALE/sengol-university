import { Divider } from "antd";
import React from "react";

const AcademicCalendar = () => {
  const academicSchedule = [
    { activity: "Admission/Registration", date: "05 July – 30 Aug 2025" },
    { activity: "Orientation Classes (1st Year)", date: "22-25 August 2025" },
    { activity: "Last Date to Submit Admission Forms", date: "20 Aug 2025" },
  ];

  const academicBreaks = [
    { activity: "Winter Break", date: "10 days" },
    { activity: "Summer Break", date: "10 days" },
  ];

  const academicHolidays = [
    {
      sno: 1,
      festival: "Harela Festival",
      date: "16 July 2025",
      day: "Wednesday",
      holidays: 1,
    },
    {
      sno: 2,
      festival: "University Foundation Day",
      date: "17 July 2025",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 3,
      festival: "Independence Day*",
      date: "15 August 2025",
      day: "Friday",
      holidays: 1,
    },
    {
      sno: 4,
      festival: "Raksha Bandhan",
      date: "9–10 August 2025",
      day: "Saturday–Sunday",
      holidays: 2,
    },
    {
      sno: 5,
      festival: "Janmashtami",
      date: "16 August 2025",
      day: "Saturday",
      holidays: 1,
    },
    {
      sno: 6,
      festival: "Gandhi Jayanti",
      date: "2 October 2025",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 7,
      festival: "Ramnavmi / Dussehra",
      date: "1–2 October 2025",
      day: "Wednesday–Thursday",
      holidays: 1,
    },
    {
      sno: 8,
      festival: "Diwali",
      date: "19–24 October 2025",
      day: "Sunday–Friday",
      holidays: 6,
    },
    {
      sno: 9,
      festival: "Igas-Bagwal",
      date: "1 November 2025",
      day: "Saturday",
      holidays: 1,
    },
    {
      sno: 10,
      festival: "Guru Nanak Jayanti",
      date: "5 November 2025",
      day: "Wednesday",
      holidays: 1,
    },
    {
      sno: 11,
      festival: "Uttarakhand Day*",
      date: "9 November 2025",
      day: "Sunday",
      holidays: 1,
    },
    {
      sno: 12,
      festival: "Christmas Day",
      date: "25 December 2025",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 13,
      festival: "Republic Day*",
      date: "26 January 2026",
      day: "Monday",
      holidays: 1,
    },
    {
      sno: 14,
      festival: "Maha Shivaratri",
      date: "16 February 2026",
      day: "Monday",
      holidays: 1,
    },
    {
      sno: 15,
      festival: "Holi (Rang)",
      date: "2–5 March 2026",
      day: "Monday–Thursday",
      holidays: 4,
    },
    {
      sno: 16,
      festival: "Eid-ul-Fitr (Ramzan)**",
      date: "20 March 2026",
      day: "Friday",
      holidays: 1,
    },
    {
      sno: 17,
      festival: "Ram Navami",
      date: "26 March 2026",
      day: "Thursday",
      holidays: 1,
    },
    {
      sno: 18,
      festival: "Mahavir Jayanti",
      date: "31 March 2026",
      day: "Tuesday",
      holidays: 1,
    },
    {
      sno: 19,
      festival: "Dr. Ambedkar Jayanti",
      date: "14 April 2026",
      day: "Tuesday",
      holidays: 1,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 rounded-xl shadow-inner space-y-12">
      <h1 className="text-4xl md:text-5xl underline font-extrabold text-[#5b4110] text-center mb-6">
        SENGOL INTERNATIONAL UNIVERSITY
      </h1>
      <h3 className="text-center">Academic Calendar (Session 2025–26)</h3>
      <Divider />
      {/* Academic Calendar */}
      <div>
        <h3 className="text-3xl font-bold text-[#5b4110] mb-4">
          Academic Calendar
        </h3>
        <table className="w-full border border-gray-300 text-2xl">
          <thead className="bg-gray-200">
            <tr style={{ backgroundColor: "#5b4110" }}>
              <th className="p-4 border text-white">Activity</th>
              <th className="p-4 border text-white">Date</th>
            </tr>
          </thead>
          <tbody>
            {academicSchedule.map((item, index) => (
              <tr key={index} className="border">
                <td className="p-4 border">{item.activity}</td>
                <td className="p-4 border">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Divider />
      {/* Academic Breaks */}
      <div>
        <h3 className="text-3xl font-bold text-[#5b4110] mb-4">
          Academic Breaks (Session 2025–26)
        </h3>
        <table className="w-full border border-gray-300 text-2xl">
          <thead className="bg-gray-200">
            <tr style={{ backgroundColor: "#5b4110" }}>
              <th className="p-4 border text-white">Activity</th>
              <th className="p-4 border text-white">Date</th>
            </tr>
          </thead>
          <tbody>
            {academicBreaks.map((item, index) => (
              <tr key={index} className="border">
                <td className="p-4 border">{item.activity}</td>
                <td className="p-4 border">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Divider />
      {/* Academic Holidays */}
      <div>
        <h3 className="text-3xl font-bold text-[#5b4110] mb-4">
          Academic Holidays (Session 2025–26)
        </h3>
        <table className="w-full border border-gray-300 text-2xl">
          <thead className="bg-gray-200">
            <tr style={{ backgroundColor: "#5b4110" }}>
              <th className="p-4 border text-white">S. No.</th>
              <th className="p-4 border text-white">Festival</th>
              <th className="p-4 border text-white">Date</th>
              <th className="p-4 border text-white">Day</th>
              <th className="p-4 border text-white">Holidays</th>
            </tr>
          </thead>
          <tbody>
            {academicHolidays.map((item) => (
              <tr
                key={item.sno}
                className="border"
              >
                <td className="p-4 border text-center">{item.sno}</td>
                <td className="p-4 border">{item.festival}</td>
                <td className="p-4 border">{item.date}</td>
                <td className="p-4 border">{item.day}</td>
                <td className="p-4 border text-center">{item.holidays}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-right text-lg font-semibold mt-2">
          Total Holidays: 28 Days
        </p>
      </div>
      <Divider />
      {/* Notes Section */}
      <div className="bg-white p-8 rounded-md shadow-md border border-gray-200">
        <h4 className="text-2xl font-semibold mb-4">Notes:</h4>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-2xl">
          <li>75% attendance is mandatory for exam eligibility.</li>
          <li>
            In case, the teaching days are not being completed within the
            provided Academic Calendar, then Deans/ HODs/ Directors should
            arrange extra classes prior to exam schedule positively.
          </li>
          <li>
            Any additional holiday due to local circumstances to the students
            must be compensated with extra classes on weekends/holidays.
          </li>
          <li>Incomplete teaching days must be covered by extra classes.</li>
          <li>Extra holidays must be compensated with weekend classes.</li>
        </ul>
      </div>
    </section>
  );
};

export default AcademicCalendar;

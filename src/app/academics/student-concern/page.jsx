import { Divider } from "antd";
import React from "react";

const conductRules = [
  "Be respectful and polite to all staff and peers.",
  "Do not bring disrepute to the university by your words or actions, inside or outside campus.",
  "Avoid inciting or using violent, threatening, or insulting language.",
  "Maintain regularity and punctuality in all university activities.",
  "Leaving the classroom during lectures is prohibited.",
  "Observe silence in classrooms whether faculty is present or not.",
  "Group gatherings at entrances, pathways, or roads are banned.",
  "Do not misuse reasons like fees or library visits to skip class.",
  "Always carry and display your University Identity Card.",
  "Read university notices and circulars regularly.",
  "Park vehicles in designated areas only.",
  "Behave appropriately at university events.",
  "Smoking, spitting, and littering are prohibited on campus.",
  "Entry into administrative or staff rooms is not allowed without permission.",
  "Any damage to university property will be charged collectively if no individual is identified.",
  "Grievances must be submitted formally via the class teacher or Grievance Committee.",
  "No meetings/functions or circulation of notices without Principal’s written permission.",
  "Media communication requires prior university approval.",
  "Participation in strikes or organizing disruptions will attract strict action.",
  "Students must take exams, tests, and assignments seriously.",
  "Improper conduct in exams or with admission documents is punishable.",
  "Silence is mandatory due to simultaneous courses on campus.",
  "Students must wear proper uniform; non-compliance may be penalized.",
  "Mobile phones are strictly banned inside the campus.",
  "Political activity of any kind is banned; violation can lead to rustication.",
];

const attendanceRules = [
  "Students should attend all classes regularly and punctually.",
  "Students must be punctual to each lecture hour. Students coming late to the class by more than five minutes will not be given attendance for that period.",
  "Although the University prescribes a minimum of 75% of attendance, the University insists on regular attendance in all classes. Students are eligible for scholarships only when they earn more than 90% of attendance.",
  "A student with less than 75% of attendance will not be eligible to write the Semester Examinations of the University.",
  "Students are not permitted to absent themselves without prior permission.",
  "An application for leave must be submitted in the prescribed form well in advance or at least a day before the leave is required.",
  "When absence without prior permission is unavoidable the leave application must be submitted on the day of return to the University after the leave period.",
  "Even with prior permission, if a student absents oneself, even for a single hour, he/she would be considered as absent for the whole session.",
  "Absence without leave for even a part of the day will be counted as absence for one day.",
  "Students without Identity Card & proper Uniform will be marked absent.",
  "If a student absents himself/herself for three consecutive days without leave his/her name will be removed from the rolls.",
  "Removal of the names from the rolls shall entail forfeiture of attendance till the date of re-admission.",
  "In case of any violation of rules and regulations by the student, action initiated against the student may include a warning or a reprimand, awarding a fail mark for an assignment or course, suspension or expulsion from a particular class or from the University, withholding of official documents, withdrawal of campus privileges and any other action which the University authorities deem appropriate at that time.",
];

const libraryRules = [
  "The Library has been opened to all the Students, Faculty and Staff of the University.",
  "Readers will not be allowed to enter the library with their personal belongings.",
  "Readers are prohibited from engaging in any activity which may disturb or distract the attention of other readers and will result in severe disciplinary action.",
  "No reader shall write upon, damage or make marks on any library book. Each student of the University will be issued two tickets. A book will be lent to a reader only in exchange of one of his/her tickets which will be returned back to the reader when he/she returns the book.",
  "Date label and book pockets shall not be tampered with. Serious notice will be taken on any violation of this rule.",
  "Library tickets are not transferable. A reader who misses a ticket shall follow the stipulated process including remittance of Rs.50 as a fine to get another Ticket. In case he/she happens to get the ticket at a later date, the reader should return the same immediately.",
  "A reader who fails to return a book on the due date will be charged a sum of 50 paisa per day as fine till he/she returns the book. Such a reader will not be allowed to use the library till the book is returned and fine paid.",
  "At the end of each semester before receiving the hall ticket, the student should return all the books to the library. Without a clearance certificate (NO DUE) to this effect from the Librarian, the University will not permit a student to write the End Semester Examination.",
  "The Diploma and Certificate/ Provisional shall be issued to the students only after they return all the books and remit dues outstanding against them.",
];

const StudentConcern = () => {
  return (
    <section className="bg-gray-50  py-16 px-6 md:px-10 rounded-xl shadow-inner space-y-10">
      <h1 className="text-4xl underline font-extrabold text-[#5b4110] text-center">
        SENGOL INTERNATIONAL UNIVERSITY
      </h1>
      <h3 className="text-center">RULES AND REGULATIONS</h3>

      <h3 className="text-3xl font-bold text-[#5b4110]">
        Conduct & Discipline
      </h3>
      <Divider />
      <h4 className="text-2xl font-semibold text-[#5b4110]">
        Student Discipline
      </h4>
      <p className="text-lg text-gray-700">
        Students are expected to conduct themselves in a responsible manner and
        uphold the integrity and values of the University. Respect towards
        faculty, staff, and fellow students is mandatory. Any behavior that
        disrupts academic activities or harms the university's environment will
        be subject to disciplinary action.
      </p>
      <h4 className="text-2xl font-semibold text-[#5b4110]">
        Acts of Indiscipline Include (but are not limited to):
      </h4>

      <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
        <li>Ragging or eve teasing in any form</li>
        <li>
          Disruption of classroom activities or disturbance to fellow students
        </li>
        <li>Causing damage to university property</li>
        <li>Possession or consumption of intoxicants, drugs, or weapons</li>
        <li>Misconduct during examinations</li>
        <li>Submitting false information for admission</li>
        <li>Failure to return university property or settle financial dues</li>
      </ul>
      <Divider />
      <h4 className="text-2xl font-semibold text-[#5b4110]">Ban on Ragging</h4>
      <p className="text-lg text-gray-700">
        <span className="font-bold">Ragging is strictly prohibited.</span> Any
        student found involved in ragging will be given an opportunity to
        explain. If unsatisfactory, the student will be expelled immediately.
      </p>
      <p className="text-lg text-gray-700">
        Ragging and eve teasing are criminal offenses under{" "}
        <span className="font-bold">Government of Sikkim law</span>—with
        penalties including:
      </p>
      <ul className="list-disc font-bold pl-8 space-y-2 text-2xl text-gray-700">
        <li>A fine of ₹25,000</li>
        <li>Imprisonment up to two years</li>
      </ul>

      <Divider />

      <h4 className="text-2xl font-semibold text-[#5b4110]">
        Disciplinary Authority
      </h4>
      <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
        <li>All disciplinary powers rest with the Principal.</li>
        <li>The Principal may delegate powers to other university officers.</li>
        <li>The Principal’s decision is final in all disciplinary matters.</li>
      </ul>

      <div className="space-y-4">
        <Divider />
        <h4 className="text-2xl font-semibold text-[#5b4110]">
          Specific Conduct Rules
        </h4>
        <ul className="list-decimal pl-8 space-y-2 text-2xl text-gray-700">
          {conductRules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-[#5b4110]">Attendance Rules</h3>
        <ul className="list-decimal pl-8 space-y-2 text-2xl text-gray-700">
          {attendanceRules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <Divider />

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-[#5b4110]">Library Rules</h3>
        <ul className="list-decimal pl-8 space-y-2 text-2xl text-gray-700">
          {libraryRules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StudentConcern;

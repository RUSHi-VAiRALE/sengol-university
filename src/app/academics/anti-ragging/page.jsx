import { Divider } from "antd";
import React from "react";

const AntiRagging = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10 rounded-xl shadow-inner space-y-10">
      <h1 className="text-4xl font-extrabold underline text-[#5b4110] text-center mb-6">
        SENGOL INTERNATIONAL UNIVERSITY
      </h1>
      <h3 className="text-center">📣 ANTI-RAGGING POLICY STATEMENT</h3>
      <Divider />
      {/* Introduction */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#5b4110]">Introduction</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          Sengol International University is committed to ensuring a safe,
          secure, and nurturing environment for all students. In compliance with
          the guidelines of the
          <span className="font-semibold">
            {" "}
            Hon’ble Supreme Court of India
          </span>{" "}
          and the
          <span className="font-semibold">
            {" "}
            University Grants Commission (UGC)
          </span>
          , the university adopts a{" "}
          <span className="font-semibold">Zero Tolerance Policy</span> against
          Ragging in any form.
        </p>
      </div>
      <Divider />
      {/* What Constitutes Ragging */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#5b4110]">
          What Constitutes Ragging?
        </h3>
        <p className="text-lg text-gray-700">
          As per the UGC regulations, ragging includes—but is not limited to—the
          following:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          <li>Verbal or physical abuse, bullying, or harassment.</li>
          <li>
            Forcing a student to perform actions that cause embarrassment or
            psychological harm.
          </li>
          <li>
            Any act that affects the mental or physical health and
            self-confidence of a fellow student.
          </li>
          <li>
            Preventing a student from attending classes or participating in
            activities through intimidation.
          </li>
        </ul>
      </div>
      <Divider />
      {/* Prohibited Activities */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#5b4110]">
          Prohibited Activities Include:
        </h3>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          <li>Teasing, name-calling, or insulting a student.</li>
          <li>
            Forcing juniors to perform objectionable or humiliating tasks.
          </li>
          <li>
            Creating a hostile academic, residential, or social environment.
          </li>
        </ul>
      </div>
      <Divider />
      {/* Legal and Disciplinary Consequences */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#5b4110]">
          Legal and Disciplinary Consequences
        </h3>
        <p className="text-lg text-gray-700">
          Engaging in ragging is a criminal offense. The following penalties may
          apply:
        </p>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          <li>Immediate suspension from the university.</li>
          <li>Cancellation of admission.</li>
          <li>
            FIR/lawsuit under IPC sections related to criminal intimidation and
            harassment.
          </li>
          <li>
            Debarring from examinations, scholarships, or campus placements.
          </li>
          <li>Expulsion from the university.</li>
        </ul>
      </div>
      <Divider />
      {/* Support Structure */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#5b4110]">Support Structure</h3>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          <li>
            <span className="font-semibold">Anti-Ragging Committee:</span>{" "}
            Oversees policy implementation and conducts inquiry into complaints.
          </li>
          <li>
            <span className="font-semibold">Anti-Ragging Squad:</span> Conducts
            surprise checks, monitors vulnerable locations, and acts
            proactively.
          </li>
          <li>
            <span className="font-semibold">Nodal Officer:</span> Coordinates
            with external bodies and handles grievance redressal.
          </li>
        </ul>
      </div>
      <Divider />
      {/* Complaint Mechanisms */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#5b4110]">
          Complaint Mechanisms
        </h3>
        <ul className="list-disc pl-8 space-y-2 text-2xl text-gray-700">
          <li>
            Students can report anonymously through the
            <span className="font-bold"> Online Grievance Portal </span>
            or by email.
          </li>
          <li>
            A dedicated <span className="font-bold">Anti-Ragging Helpline</span>{" "}
            is operational 24/7.
          </li>
          <li>
            All complaints will be treated confidentially, and strict action
            will be taken.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AntiRagging;

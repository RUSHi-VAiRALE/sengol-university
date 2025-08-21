"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { PharmacyData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const PharmacyProgram = () => {
  const {
    pharmacyData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = PharmacyData;

  const tabDetails = [
    { key: "1", tab: "PHARMACY'S PROGRAM", data: pharmacyData },
  ];
  return (
    <>
      <ProgramsTabs tabDetails={tabDetails} />
      <ProgramInfo
        academicCalendar={academicCalendar}
        section={section}
        objectives={objectives}
        objectiveIntro={objectiveIntro}
      />
    </>
  );
};

export default PharmacyProgram;

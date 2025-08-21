"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import {  ArchitecturePlanningData, LawData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const LawProgram = () => {
  const {
    bachelorsData,
    diplomaData,
    mastersData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = LawData;

  const tabDetails = [
    { key: "1", tab: "BACHELOR'S PROGRAM", data: bachelorsData },
    { key: "2", tab: "MASTER'S PROGRAM", data: mastersData },
    { key: "3", tab: "DIPLOMA PROGRAM", data: diplomaData },
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

export default LawProgram;

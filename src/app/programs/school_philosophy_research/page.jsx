"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { PhilosopyScienceData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const PHDProgram = () => {
  const { phdData, academicCalendar, section, objectives, objectiveIntro } =
    PhilosopyScienceData;

  const tabDetails = [{ key: "1", tab: "PHD'S PROGRAM", data: phdData }];
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

export default PHDProgram;

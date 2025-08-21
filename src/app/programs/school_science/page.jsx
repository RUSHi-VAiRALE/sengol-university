"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { CommerceManagementData, ScienceData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const ScienceProgram = () => {
  const {
    bachelorsData,
    certificateData,
    diplomaData,
    mastersData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = ScienceData;

  const tabDetails = [
    { key: "1", tab: "BACHELOR'S PROGRAM", data: bachelorsData },
    { key: "2", tab: "MASTER'S PROGRAM", data: mastersData },
    { key: "3", tab: "DIPLOMA PROGRAM", data: diplomaData },
    { key: "4", tab: "CERTIFICATE PROGRAM", data: certificateData },
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

export default ScienceProgram;

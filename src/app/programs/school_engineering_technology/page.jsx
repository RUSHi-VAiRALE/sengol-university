"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { EnginneringTechData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const EngineeringTechProgram = () => {
  const {
    bachelorsData,
    bachelorsLateralData,
    certificateData,
    diplomaData,
    mastersData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = EnginneringTechData;

  const tabDetails = [
    { key: "1", tab: "BACHELOR'S PROGRAM", data: bachelorsData },
    { key: "2", tab: "BACHELOR'S LATERAL PROGRAM", data: bachelorsLateralData },
    { key: "3", tab: "MASTER'S PROGRAM", data: mastersData },
    { key: "4", tab: "DIPLOMA PROGRAM", data: diplomaData },
    { key: "5", tab: "CERTIFICATE PROGRAM", data: certificateData },
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

export default EngineeringTechProgram;

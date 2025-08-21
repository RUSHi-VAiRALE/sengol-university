"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { VocationalStudiesData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const VocationalProgram = () => {
  const {
    certificateVocationalData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = VocationalStudiesData;

  const tabDetails = [{ key: "1", tab: "VOCATIONAL STUDIES PROGRAM", data: certificateVocationalData }];
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

export default VocationalProgram;

"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { FireSafetyData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const FireSafetyProgram = () => {
  const { fireSafetyData, academicCalendar, section, objectives, objectiveIntro } =
    FireSafetyData;

  const tabDetails = [{ key: "1", tab: "FIRE SAFETY'S PROGRAM", data: fireSafetyData }];
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

export default FireSafetyProgram;

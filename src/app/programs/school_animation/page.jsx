"use client";

import React from "react";
import ProgramsTabs from "@/components/program/ProgramTabs";
import { AnimationData } from "@/data-store/ProgramData";
import ProgramInfo from "@/components/program/ProgramInfo";

const AnimationProgram = () => {
  const {
    animationMultimediaData,
    academicCalendar,
    section,
    objectives,
    objectiveIntro,
  } = AnimationData;

  const tabDetails = [{ key: "1", tab: "ANIMATION'S PROGRAM", data: animationMultimediaData }];
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

export default AnimationProgram;

"use client";

import React from "react";
import { Tabs } from "antd";
import CourseTable from "@/components/program/CourseTable";

const ProgramsTabs = ({ tabDetails }) => {
  const items = tabDetails.map((tab) => ({
    key: tab.key,
    label: tab.tab,
    children: <CourseTable data={tab.data} />,
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Tabs
        defaultActiveKey="1"
        tabPosition="top"
        type="card"
        items={items}
        className="custom-tabs"
      />
    </div>
  );
};

export default ProgramsTabs;

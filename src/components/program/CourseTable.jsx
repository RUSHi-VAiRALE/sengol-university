  "use client";

  import React, { useState } from "react";
  import { Input, Table, Button, Card } from "antd";
  import { DownloadOutlined } from "@ant-design/icons";

  // ---------------------- Columns Structure ----------------------
  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "key",
      width: "10%",
    },
    {
      title: "Course Name",
      dataIndex: "courseName",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      width: "15%",
    },
    {
      title: "Eligibility",
      dataIndex: "eligibility",
      width: "20%",
    },
    {
      title: "Apply Now",
      dataIndex: "link",
      width: "20%",
      render: (link) => (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
      ),
    },
  ];

  const CourseTable = ({ data }) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
      setSearchText(e.target.value.toLowerCase());
    };

    const filteredData = data.filter((item) =>
      item.courseName.toLowerCase().includes(searchText)
    );

    return (
      <Card className="p-4 md:p-6" style={{ marginBottom: 20 }}>
        <div className="flex justify-end mb-4">
          <Input
            placeholder="Search Course Name"
            value={searchText}
            onChange={handleSearch}
            allowClear
            className="w-1/2"
          />
        </div>
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{ pageSize: 5 }}
            bordered
            className="custom-table"
          />
        </div>
      </Card>
    );
  };

  export default CourseTable;

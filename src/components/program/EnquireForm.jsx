"use client";

import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Checkbox, Row, Col } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import PromoBanner from "../../../public/images/banner/promo_banner.jpg";

const { Option } = Select;

const EnquireForm = () => {
  const [form] = Form.useForm();
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    generateCaptcha(); // Generate once on mount
  }, []);

  const generateCaptcha = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  const handleFinish = (values) => {
    console.log("Submitted values:", values);
    form.resetFields();
    generateCaptcha(); // regenerate after submit
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Left Banner */}
      <div className="bg-[#ffffff] h-full w-full">
        <Image
          src={PromoBanner}
          alt="Promotional Banner"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Enquiry Form */}
      <div className="p-6 lg:p-8 w-full">
        <h2 className="text-2xl font-bold text-center text-[#5c3a00] mb-4">
          ENQUIRE NOW
        </h2>
        <Form
          layout="vertical"
          onFinish={handleFinish}
          form={form}
          className="space-y-3"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter Name *" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, type: "email", message: "Enter valid email" },
            ]}
          >
            <Input
              placeholder="Enter Email Address *"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Row gutter={8}>
            <Col span={6}>
              <Form.Item
                name="countryCode"
                initialValue="+91"
                rules={[{ required: true }]}
              >
                <Select>
                  <Option value="+91">+91</Option>
                  <Option value="+1">+1</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Enter your phone number" }]}
              >
                <Input
                  placeholder="Enter Mobile Number *"
                  prefix={<PhoneOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="otp">
            <Input placeholder="Enter OTP" disabled />
          </Form.Item>

          <Row gutter={8}>
            <Col span={12}>
              <Form.Item name="state" rules={[{ required: true }]}>
                <Select placeholder="Select State *">
                  <Option value="UP">Uttar Pradesh</Option>
                  <Option value="MH">Maharashtra</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="city" rules={[{ required: true }]}>
                <Select placeholder="Select City *">
                  <Option value="noida">Noida</Option>
                  <Option value="mumbai">Mumbai</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="course" rules={[{ required: true }]}>
            <Select placeholder="Select Course *">
              <Option value="btech">B.Tech</Option>
              <Option value="mtech">M.Tech</Option>
              <Option value="bsc">B.Sc</Option>
            </Select>
          </Form.Item>

          {/* Captcha Section */}
          <Row gutter={8} align="middle">
            <Col span={8}>
              <div className="bg-white border rounded px-2 py-1 text-lg text-center font-mono font-semibold">
                {captcha}
              </div>
            </Col>
            <Col span={4}>
              <Button icon={<ReloadOutlined />} onClick={generateCaptcha} />
            </Col>
            <Col span={12}>
              <Form.Item
                name="captcha"
                rules={[{ required: true, message: "Enter captcha" }]}
                className="mb-0"
              >
                <Input placeholder="Enter Captcha" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="consent"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject("Please accept"),
              },
            ]}
          >
            <Checkbox>
              I agree to receive information regarding my enquiry
            </Checkbox>
          </Form.Item>

          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              className="rts-theme-btn w-full bg-yellow-400 text-white font-bold hover:bg-yellow-500"
            >
              Submit Enquiry
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EnquireForm;

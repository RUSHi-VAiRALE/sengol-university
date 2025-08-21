// app/contact/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Button, Form, Input, message, Select } from "antd";
import Image1 from "../../../public/images/contact/0_1.jpg";
import Image2 from "../../../public/images/contact/04.jpg";

const contactData = {
  address: {
    image: Image2,
    title: "Sengol International University Campus",
    location: "Lower Pepthang,PO - Lingmoo, District - Namchi,Sikkim-737134",
  },
  enquiries: [
    {
      type: "Admission Enquiry",
      content:
        "if you have any queries related to admission in any programme at Sengol International University like the process, duration, qualifications, eligibility or just about anything else, please feel free to contact us",
    },
    {
      type: "National Enquiry",
      content:
        "Applicants living in India can get in touch with our team of counsellors with any queries related to admission in any programme at Sengol International University. You can contact us on",
      phones: ["+91-9205299887"],
      email: "admission@sengolinternationaluniversity.edu.in",
      whatsapp: "9205299887",
    },
    {
      type: "International Enquiry",
      content:
        "International Applicants can get in touch with our team of counsellors any queries related to admission in any programme at Sengol International University. You can contact us on",
      phones: ["+91-9205299887"],
      email: "global@sengolinternationaluniversity.edu.in",
      // whatsapp: "8800998881",
    },
    {
      type: "Departmental Enquiry",
      content:
        "You can get in touch with us for any queries related to more information and guidance about different departments or contacting various departments, you may contact us on our board line number",
      phones: ["+91-9205299887"],
      email: "info@sengolinternationaluniversity.edu.in",
    },
  ],
  counsellingCenters: [
    {
      city: "Lucknow",
      address:
        "Sikka House, 1st Floor, 6 La Place Bungalows, Near St. Francis College, Hazratganj, Lucknow-226001",
      phone: "+91-9205883451",
      altPhone: "+91-8448198397",
      email: "admission.lucknow@sengol.edu.in",
    },
    {
      city: "Patna",
      address:
        "Office No 302, 3rd Floor, Grand Plaza, Fraser Road, P.S-Kotwali, Patna-800001",
      phone: "+91-9205883453",
      altPhone: "+91-8448198394",
      email: "admission.patna@sengol.edu.in",
    },
    // {
    //   city: "Patna",
    //   address:
    //     "Office No 302, 3rd Floor, Grand Plaza, Fraser Road, P.S-Kotwali, Patna-800001",
    //   phone: "+91-9205883453",
    //   altPhone: "+91-8448198394",
    //   email: "admission.patna@sengol.edu.in",
    // },
    // Add other centers similarly...
  ],
};

const ContactPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Your message has been sent successfully!");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Please complete all required fields.");
  };

  return (
    <>
      <main className="container mx-auto px-6 py-16 space-y-20">
        <div className="px-4 py-12 space-y-16">
          {/* Section 1: Address + Get In Touch */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className=" lg:col-span-2 space-y-6">
              <Image
                src={contactData.address.image}
                alt="University Campus"
                width={840}
                height={400}
                className="rounded-md shadow"
              />
              <div className="bg-white p-6 rounded shadow space-y-4">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "#5b4110" }}
                >
                  {contactData.address.title}
                </h2>
                <p className="text-gray-600">{contactData.address.location}</p>

                {contactData.enquiries.map((e, idx) => (
                  <div key={idx} className="border-t pt-4">
                    <h3
                      className="font-bold text-[#5c3a00]"
                      style={{ color: "#5b4110" }}
                    >
                      {e.type}
                    </h3>
                    <p className="text-gray-600">{e.content}</p>
                    <ul className="text-gray-700 space-y-1">
                      {e.phones?.map((phone, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <FaPhone /> {phone}
                        </li>
                      ))}
                      {e.email && (
                        <li className="flex items-center gap-2">
                          <FaEnvelope /> {e.email}
                        </li>
                      )}
                      {e.whatsapp && (
                        <li className="text-sm">WhatsApp: {e.whatsapp}</li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Get In Touch Form */}
            {/* Message Form Section */}
            <section className="mb-20 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-12 space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                  Leave Us A <span className="text-[#5c3a00]">Message</span>
                </h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">
                  Have a question, suggestion, or just want to say hello? Fill
                  out the form below, and we'll get back to you as soon as
                  possible.
                </p>

                {/* First Row: Image */}
                <div className="w-full">
                  <Image
                    src={Image1}
                    alt="Students Connecting"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full h-[250px] md:h-[350px] object-cover"
                  />
                </div>

                {/* Second Row: Form */}
                <div className="w-full">
                  <Form
                    form={form}
                    name="contact"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="space-y-5"
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        { required: true, message: "Please input your name!" },
                      ]}
                      className="border rounded py-2"
                    >
                      <Input placeholder="Your Name" size="large" />
                    </Form.Item>

                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your email!" },
                        {
                          type: "email",
                          message: "The input is not a valid E-mail!",
                        },
                      ]}
                      className="border rounded py-2"
                    >
                      <Input placeholder="Your Email" size="large" />
                    </Form.Item>

                    <Form.Item
                      name="subject"
                      rules={[
                        {
                          required: true,
                          message: "Please input the subject!",
                        },
                      ]}
                      className="border rounded py-2"
                    >
                      <Input placeholder="Subject" size="large" />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please input your message!",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={4}
                        placeholder="Your Message"
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item className="mb-0">
                      <Button
                        htmlType="submit"
                        className="w-full rts-theme-btn inline-flex items-center bg-[#5b4110de] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#5b4120] transition-colors duration-300"
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </section>
          </div>

          {/* Section 2: Counseling Centres */}
          {/* <div>
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#5b4110" }}
            >
              Sengol Counseling Centre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactData.counsellingCenters.map((center, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow p-6 space-y-2 border-t-4 border-orange-500"
                >
                  <h4
                    className="text-xl font-bold"
                    style={{ color: "#5b4110" }}
                  >
                    {center.city}
                  </h4>
                  <p>{center.address}</p>
                  <p className="flex items-center gap-2">
                    <FaPhone /> {center.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone /> {center.altPhone}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope /> {center.email}
                  </p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </main>
      {/* Map Section */}
      <section>
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10 pb-4">
            University <span className="text-[#5c3a00]">Location</span>
          </h2>
          <div className="w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.1774642095633!2d88.60839321499453!3d27.325039282945056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5efed4f7285%3A0xf15f080a6c89edfd!2sMG%20Marg%2C%20Gangtok%2C%20Sikkim%2073701!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="University Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

// app/contact/page.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaGraduationCap, FaGlobe, FaBuilding, FaPaperPlane } from "react-icons/fa";
import { Button, Form, Input, message } from "antd";
import Image1 from "../../../public/images/contact/0_1.jpg";
import Image2 from "../../../public/images/contact/04.jpg";
import Banner from "../../components/program/Banner";

const contactData = {
  address: {
    image: Image2,
    title: "Sengol International University Campus",
    location: "Lower Pepthang, PO - Lingmoo, District - Namchi, Sikkim-737134",
  },
  enquiries: [
    {
      type: "Admission Enquiry",
      icon: FaGraduationCap,
      content: "If you have any queries related to admission in any programme at Sengol International University like the process, duration, qualifications, eligibility or just about anything else, please feel free to contact us",
    },
    {
      type: "National Enquiry",
      icon: FaBuilding,
      content: "Applicants living in India can get in touch with our team of counsellors with any queries related to admission in any programme at Sengol International University.",
      phones: ["+91-9205299887"],
      email: "admission@sengolinternationaluniversity.edu.in",
      whatsapp: "9205299887",
    },
    {
      type: "International Enquiry",
      icon: FaGlobe,
      content: "International Applicants can get in touch with our team of counsellors for any queries related to admission in any programme at Sengol International University.",
      phones: ["+91-9205299887"],
      email: "global@sengolinternationaluniversity.edu.in",
    },
    {
      type: "Departmental Enquiry",
      icon: FaBuilding,
      content: "You can get in touch with us for any queries related to more information and guidance about different departments or contacting various departments.",
      phones: ["+91-9205299887"],
      email: "info@sengolinternationaluniversity.edu.in",
    },
  ],
  counsellingCenters: [
    {
      city: "Lucknow",
      address: "Sikka House, 1st Floor, 6 La Place Bungalows, Near St. Francis College, Hazratganj, Lucknow-226001",
      phone: "+91-9205883451",
      altPhone: "+91-8448198397",
      email: "admission.lucknow@sengol.edu.in",
    },
    {
      city: "Patna",
      address: "Office No 302, 3rd Floor, Grand Plaza, Fraser Road, P.S-Kotwali, Patna-800001",
      phone: "+91-9205883453",
      altPhone: "+91-8448198394",
      email: "admission.patna@sengol.edu.in",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#ad4a16]/5">
      {/* Hero Banner */}
      <Banner
        title="Contact Us"
        subtitle="Connect with Sengol International University - Your gateway to academic excellence and personalized support"
      />

      {/* Quick Contact Info */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Phone */}
              <div className="p-6 lg:p-8 text-center group hover:bg-gradient-to-br hover:from-[#ad4a16]/5 hover:to-[#8f3a17]/5 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaPhone className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                <a
                  href="tel:+91-9205299887"
                  className="text-[#ad4a16] font-semibold hover:text-[#8f3a17] transition-colors duration-300"
                >
                  +91-9205299887
                </a>
              </div>

              {/* Email */}
              <div className="p-6 lg:p-8 text-center group hover:bg-gradient-to-br hover:from-[#ad4a16]/5 hover:to-[#8f3a17]/5 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <a
                  href="mailto:info@sengolinternationaluniversity.edu.in"
                  className="text-[#ad4a16] font-semibold hover:text-[#8f3a17] transition-colors duration-300 break-all"
                >
                  info@sengolinternationaluniversity.edu.in
                </a>
              </div>

              {/* Location */}
              <div className="p-6 lg:p-8 text-center group hover:bg-gradient-to-br hover:from-[#ad4a16]/5 hover:to-[#8f3a17]/5 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-sm">
                  Lower Pepthang, PO - Lingmoo<br />
                  District - Namchi, Sikkim-737134
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full">
        {/* Campus Information & Contact Form Section */}
        <section className="py-16 lg:py-24">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 lg:gap-16">
              {/* Campus Information */}
              <div className="xl:col-span-3 space-y-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={contactData.address.image}
                    alt="University Campus"
                    width={1000}
                    height={600}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                      {contactData.address.title}
                    </h2>
                    <p className="text-orange-200 text-lg flex items-start gap-2">
                      <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                      {contactData.address.location}
                    </p>
                  </div>
                </div>

                {/* Enquiry Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactData.enquiries.map((enquiry, idx) => {
                    const IconComponent = enquiry.icon;
                    return (
                      <div
                        key={idx}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                      >
                        <div className="p-6 lg:p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="text-white text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ad4a16] transition-colors duration-300">
                              {enquiry.type}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {enquiry.content}
                          </p>

                          {(enquiry.phones || enquiry.email || enquiry.whatsapp) && (
                            <div className="space-y-3 pt-4 border-t border-gray-100">
                              {enquiry.phones?.map((phone, i) => (
                                <a
                                  key={i}
                                  href={`tel:${phone}`}
                                  className="flex items-center gap-3 text-gray-700 hover:text-[#ad4a16] transition-colors duration-300 group/link"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-lg flex items-center justify-center group-hover/link:from-[#ad4a16] group-hover/link:to-[#8f3a17] transition-all duration-300">
                                    <FaPhone className="text-[#ad4a16] group-hover/link:text-white text-sm" />
                                  </div>
                                  <span className="font-medium">{phone}</span>
                                </a>
                              ))}
                              {enquiry.email && (
                                <a
                                  href={`mailto:${enquiry.email}`}
                                  className="flex items-center gap-3 text-gray-700 hover:text-[#ad4a16] transition-colors duration-300 group/link"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-lg flex items-center justify-center group-hover/link:from-[#ad4a16] group-hover/link:to-[#8f3a17] transition-all duration-300">
                                    <FaEnvelope className="text-[#ad4a16] group-hover/link:text-white text-sm" />
                                  </div>
                                  <span className="font-medium break-all">{enquiry.email}</span>
                                </a>
                              )}
                              {enquiry.whatsapp && (
                                <a
                                  href={`https://wa.me/${enquiry.whatsapp}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors duration-300 group/link"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg flex items-center justify-center group-hover/link:from-green-500 group-hover/link:to-emerald-500 transition-all duration-300">
                                    <FaWhatsapp className="text-green-600 group-hover/link:text-white text-sm" />
                                  </div>
                                  <span className="font-medium">WhatsApp: {enquiry.whatsapp}</span>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="xl:col-span-2">
                <div className="sticky top-8">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] p-6 lg:p-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <FaPaperPlane className="text-white text-2xl" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                          Send us a Message
                        </h2>
                        <p className="text-orange-100">
                          We'd love to hear from you. Get in touch today!
                        </p>
                      </div>
                    </div>

                    <div className="p-6 lg:p-8">
                      <div className="mb-8">
                        <Image
                          src={Image1}
                          alt="Students Connecting"
                          width={500}
                          height={300}
                          className="rounded-xl shadow-lg w-full h-[200px] object-cover"
                        />
                      </div>

                      <Form
                        form={form}
                        name="contact"
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="space-y-6"
                      >
                        <Form.Item
                          name="name"
                          rules={[
                            { required: true, message: "Please input your name!" },
                          ]}
                        >
                          <Input
                            placeholder="Your Full Name"
                            size="large"
                            className="rounded-xl border-2 border-gray-200 focus:border-[#ad4a16] hover:border-[#8f3a17] transition-colors duration-300"
                          />
                        </Form.Item>

                        <Form.Item
                          name="email"
                          rules={[
                            { required: true, message: "Please input your email!" },
                            {
                              type: "email",
                              message: "Please enter a valid email address!",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Your Email Address"
                            size="large"
                            className="rounded-xl border-2 border-gray-200 focus:border-[#ad4a16] hover:border-[#8f3a17] transition-colors duration-300"
                          />
                        </Form.Item>

                        <Form.Item
                          name="subject"
                          rules={[
                            {
                              required: true,
                              message: "Please input the subject!",
                            },
                          ]}
                        >
                          <Input
                            placeholder="Subject"
                            size="large"
                            className="rounded-xl border-2 border-gray-200 focus:border-[#ad4a16] hover:border-[#8f3a17] transition-colors duration-300"
                          />
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
                            rows={5}
                            placeholder="Your Message"
                            className="rounded-xl border-2 border-gray-200 focus:border-amber-500 hover:border-amber-300 transition-colors duration-300 resize-none"
                          />
                        </Form.Item>

                        <Form.Item className="mb-0">
                          <Button
                            htmlType="submit"
                            className="w-full h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] hover:from-[#ad4a16]/90 hover:via-[#8f3a17]/90 hover:to-[#312518]/90 border-none text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                          >
                            <FaPaperPlane />
                            Send Message
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counseling Centers Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#ad4a16]/10 via-[#8f3a17]/10 to-[#312518]/10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sengol <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518]">Counseling Centers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit our counseling centers for personalized guidance and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {contactData.counsellingCenters.map((center, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaMapMarkerAlt className="text-white text-xl" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#ad4a16] transition-colors duration-300">
                        {center.city}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {center.address}
                    </p>

                    <div className="space-y-4">
                      <a
                        href={`tel:${center.phone}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-[#ad4a16] transition-colors duration-300 group/link"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-xl flex items-center justify-center group-hover/link:from-[#ad4a16] group-hover/link:to-[#8f3a17] transition-all duration-300">
                          <FaPhone className="text-[#ad4a16] group-hover/link:text-white" />
                        </div>
                        <span className="font-medium">{center.phone}</span>
                      </a>

                      <a
                        href={`tel:${center.altPhone}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-[#ad4a16] transition-colors duration-300 group/link"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-xl flex items-center justify-center group-hover/link:from-[#ad4a16] group-hover/link:to-[#8f3a17] transition-all duration-300">
                          <FaPhone className="text-[#ad4a16] group-hover/link:text-white" />
                        </div>
                        <span className="font-medium">{center.altPhone}</span>
                      </a>

                      <a
                        href={`mailto:${center.email}`}
                        className="flex items-center gap-3 text-gray-700 hover:text-[#ad4a16] transition-colors duration-300 group/link"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-[#ad4a16]/20 to-[#8f3a17]/20 rounded-xl flex items-center justify-center group-hover/link:from-[#ad4a16] group-hover/link:to-[#8f3a17] transition-all duration-300">
                          <FaEnvelope className="text-[#ad4a16] group-hover/link:text-white" />
                        </div>
                        <span className="font-medium">{center.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 lg:py-24">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                University <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518]">Location</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find us nestled in the beautiful landscapes of Sikkim
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="w-full h-[400px] lg:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.1774642095633!2d88.60839321499453!3d27.325039282945056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a5efed4f7285%3A0xf15f080a6c89edfd!2sMG%20Marg%2C%20Gangtok%2C%20Sikkim%2073701!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University Location Map"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;

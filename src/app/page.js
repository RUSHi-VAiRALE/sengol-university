"use client"; // Enables client-side rendering in Next.js 13+ app directory

// Import modern components
import Preloader from '@/components/Preloader';
import ModernNavbar from '@/components/ModernNavbar';
import ModernBanner from '@/components/ModernBanner';
import AboutUs from '@/components/AboutUs';
import FunFact from '@/components/FunFact';
import AcademicPrograms from '@/components/AcademicPrograms';
import CampusLife from '@/components/CampusLife';
import TuitionFees from '@/components/TuitionFees';
import ScholarshipApplication from '@/components/ScholarshipApplication';
import NoticeBoard from '@/components/NoticeBoard';
import StudentFeedback from '@/components/StudentFeedback';
import BlogSection from '@/components/BlogSection';
import BrandSlider from '@/components/BrandSlider';
import CourseOffer from '@/components/program/courseOffer';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// Import required hooks
import { useState, useEffect } from 'react';

// Home Page Component
export default function Home() {
  // State to manage loading screen visibility
  const [loading, setLoading] = useState(true);

  // useEffect to simulate page loading (can be removed or modified in production)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Show preloader while loading is true */}
      {/* {loading && <Preloader />} */}

      {/* Modern Navigation */}
      {/* <ModernNavbar /> */}

      {/* Main Page Sections */}
      <ModernBanner />

      {/* Modern About Section with enhanced styling */}
      <AboutUs />

      {/* Course Offerings with modern layout */}
      <CourseOffer />

      {/* Fun Facts with modern styling */}
      <FunFact />

      {/* Academic Programs */}
      <AcademicPrograms />

      {/* Campus Life - Re-enabled with modern styling */}
      <CampusLife />

      {/* Scholarship Application */}
      <ScholarshipApplication />

      {/* Notice Board */}
      <NoticeBoard />

      {/* Student Feedback - Re-enabled */}
      <StudentFeedback />

      {/* Blog Section */}
      <BlogSection />

      {/* Brand Slider - Re-enabled */}
      <BrandSlider />

      {/* Footer */}
      {/* <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white">
        <Footer />
        <ScrollToTop />
      </footer> */}
    </>
  );
}
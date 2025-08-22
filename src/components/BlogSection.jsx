// components/BlogSection.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Using fa6 for modern icons. Ensure you have installed react-icons/fa6
// npm install react-icons/fa6
import { FaArrowRight, FaUser, FaCalendarDays } from "react-icons/fa6"; // Changed FaCalendar to FaCalendarDays for a solid calendar icon if available, otherwise FaCalendar is fine.

// Import blog post images (adjust paths as necessary from your /public directory)
import blog1Image from "../../public/images/blog/blog__1.jpg";
import blog2Image from "../../public/images/blog/blog__2.jpg";

// Define custom colors to match the UI image more closely
// You might want to add these to your tailwind.config.js for reusability
const customColors = {
  "light-pink": "#FAE9E9", // Background color for category tag
  "dark-purple": "#8B454F", // Text color for category tag and icons
  "text-main": "#212121", // Main body text color for titles, descriptions
  "text-light": "#666666", // Lighter text for excerpts, dates
};

const blogPosts = [
  {
    id: 1,
    image: blog1Image,
    category: "Campus Life",
    title: "Sengol International University Wins Prestigious Award",
    excerpt: "A recognition of excellence in education and research.",
    author: "Dr. Ramesh Kumar",
    date: "Apr 15, 2025",
    link: "#", // Replace with actual blog post link
  },
  {
    id: 2,
    image: blog2Image,
    category: "Research & Development",
    title: "Sengol International University: New Research Centers",
    excerpt:
      "Our latest strides in advancing educational research and development.",
    author: "Dr. Priya Verma",
    date: "Apr 10, 2025",
    link: "#", // Replace with actual blog post link
  },
  // Add more blog posts here if needed
];

const BlogSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#fffaf2] via-[#f8f4ec] to-[#f7f1e6] py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-52 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-[#D4AF37]/10 via-[#B8860B]/6 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[50rem] h-[50rem] rounded-full bg-gradient-to-tl from-[#CD853F]/8 via-[#A0522D]/4 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-r from-[#D4AF37]/4 to-[#B8860B]/3 rounded-full blur-2xl"></div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 max-w-[1400px] relative">
        {/* Enhanced Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-20 xl:mb-24 2xl:mb-28">
          <div className="rts__section--wrapper--left text-center lg:text-left mb-8 lg:mb-0 flex-1">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 lg:gap-4 xl:gap-5 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 backdrop-blur-sm border border-[#D4AF37]/30 px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full mb-6 lg:mb-8 xl:mb-10">
              <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center">
                <span className="text-white text-lg lg:text-xl xl:text-2xl">📰</span>
              </div>
              <span className="text-sm lg:text-base xl:text-lg font-semibold bg-gradient-to-r from-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent uppercase tracking-wider">
                Latest News & Updates
              </span>
            </div>

            <h2 className="rts__section--title text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 lg:mb-6 xl:mb-8 bg-gradient-to-r from-[#D4AF37] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent leading-tight">
              Latest News & Updates
            </h2>
            <p className="rts__section--description text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto lg:mx-0 leading-relaxed">
              Stay updated with the latest events, announcements, and news from
              our campus community.
            </p>
          </div>

          <div className="rts__section--link lg:ml-8 xl:ml-12">
            <Link
              href="#"
              className="group inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:from-[#B8860B] hover:to-[#D4AF37] text-white font-semibold px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-base lg:text-lg xl:text-xl">View All News</span>
              <span className="ml-3 lg:ml-4 text-lg lg:text-xl xl:text-2xl group-hover:translate-x-1 transition-transform duration-300">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* Enhanced Blog Posts Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <div className="blog__single--item bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:scale-105 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 group relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-20 h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-gradient-to-br from-[#D4AF37]/10 to-[#B8860B]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                <Link
                  href={post.link}
                  className="blog__single--item--link block"
                >
                  <div className="blog__single--item--thumb w-full h-72 lg:h-80 xl:h-96 2xl:h-[28rem] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
                <div className="blog__single--item--meta p-6 lg:p-8 xl:p-10 2xl:p-12 relative z-10">
                  {/* Enhanced Category tag */}
                  <Link
                    href="#"
                    className="blog__cat inline-block text-sm lg:text-base xl:text-lg font-semibold px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 rounded-full mb-4 lg:mb-6 xl:mb-8 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 text-[#D4AF37] hover:from-[#D4AF37]/30 hover:to-[#B8860B]/30 transition-all duration-300 border border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
                  >
                    {post.category}
                  </Link>

                  {/* Enhanced Title */}
                  <h2 className="blog__single--item--title text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3 lg:mb-4 xl:mb-6 leading-tight">
                    <Link
                      href={post.link}
                      className="text-gray-800 hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B8860B] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Enhanced Excerpt */}
                  <p className="blog__single--item--excerpt text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 leading-relaxed mb-6 lg:mb-8 xl:mb-10">
                    {post.excerpt}
                  </p>

                  {/* Enhanced Author and Date Info */}
                  <div className="blog__single--item--info flex flex-wrap gap-x-6 lg:gap-x-8 xl:gap-x-10 gap-y-3 lg:gap-y-4 text-sm lg:text-base xl:text-lg">
                    {/* Enhanced Author section */}
                    <div className="author flex items-center text-gray-600">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                        <FaUser className="text-[#D4AF37] text-sm lg:text-base xl:text-lg" />
                      </div>
                      <Link
                        href="#"
                        className="hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                      >
                        {post.author}
                      </Link>
                    </div>

                    {/* Enhanced Date section */}
                    <div className="date flex items-center text-gray-600">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8860B]/20 rounded-full flex items-center justify-center mr-3 lg:mr-4">
                        <FaCalendarDays className="text-[#D4AF37] text-sm lg:text-base xl:text-lg" />
                      </div>
                      <p className="font-medium">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

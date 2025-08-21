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
    // Section background: changed from bg-gray-50 to white to match image.
    // Padding adjusted to appear like the image's spacing.
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 lg:mb-16">
          {" "}
          {/* Converted .row and .rts__section--wrapper v__8 */}
          <div className="rts__section--wrapper--left text-center md:text-left mb-6 md:mb-0">
            <h2 className="rts__section--title text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Read Our Latest News from Sengol International University
            </h2>
            <p className="rts__section--description text-lg md:text-xl text-gray-700 max-w-2xl md:max-w-none mx-auto md:mx-0">
              Stay updated with the latest events, announcements, and news from
              our campus.
            </p>
          </div>
          <div className="rts__section--link">
            <Link
              href="#" // Replace with actual link to the blog archive page
              className="rts-nbg-btn btn-arrow inline-flex items-center text-gray-800 font-semibold px-1 rounded-md  transition-colors duration-300"
            >
              View All
              <span className="ml-2 text-xl">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* Blog Posts Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <div key={post.id}>
              {" "}
              {/* Removed col-lg-6 col-md-6 as grid handles width */}
              <div className="blog__single--item bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
                <Link
                  href={post.link}
                  className="blog__single--item--link block"
                >
                  <div
                    style={{ height: "280px" }}
                    className="blog__single--item--thumb w-full h-full md:h-72 relative overflow-hidden"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="blog__single--item--meta ">
                  {/* Category tag colors adjusted to match image */}
                  <Link
                    href="#" // Replace with actual category link
                    className="blog__cat inline-block text-sm font-semibold rounded-full mb-3 transition-colors duration-300"
                    style={{
                      backgroundColor: customColors["light-pink"],
                      color: customColors["dark-purple"],
                    }}
                  >
                    {post.category}
                  </Link>
                  {/* Title font-weight adjusted, color from customColors */}
                  <h2
                    className="blog__single--item--title text-xl md:text-2xl font-bold mb-3 leading-tight"
                    style={{ color: customColors["text-main"] }}
                  >
                    <Link
                      href={post.link}
                      className="hover:text-[#5c3a00] transition-colors duration-300" // Blue hover for titles
                    >
                      {post.title}
                    </Link>
                  </h2>
                  {/* Excerpt color from customColors */}
                  <p
                    className="blog__single--item--excerpt leading-relaxed mb-6"
                    style={{ color: customColors["text-light"] }}
                  >
                    {post.excerpt}
                  </p>

                  <div className="blog__single--item--info flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {/* Author section with icon color from customColors */}
                    <div
                      className="author flex items-center"
                      style={{ color: customColors["text-light"] }}
                    >
                      <span
                        className="mr-2 text-xl"
                        style={{ color: customColors["#555"] }}
                      >
                        {" "}
                        {/* Increased icon size, applied color */}
                        <FaUser />
                      </span>
                      <Link
                        href="#" // Replace with actual author profile link
                        className="hover:text-[#5c3a00] text-gray-500 text-xl transition-colors duration-300"
                      >
                        {post.author}
                      </Link>
                    </div>
                    {/* Date section with icon color from customColors */}
                    <div
                      className="date flex items-center"
                      style={{ color: customColors["text-light"] }}
                    >
                      <span
                        className="mr-2 text-xl"
                        style={{ color: customColors["dark-purple"] }}
                      >
                        {" "}
                        {/* Increased icon size, applied color */}
                        <FaCalendarDays />
                      </span>
                      <p>{post.date}</p>
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

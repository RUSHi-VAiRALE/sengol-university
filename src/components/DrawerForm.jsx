"use client";
import {
  FaTimes,
  FaPhone,
  FaLocationArrow,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";

export default function DrawerForm() {
  console.log("window.innerwidth", window.innerWidth);

  const menuData = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/" },
    {
      label: "Academics",
      subItems: [
        { label: "Academic Programs", link: "/" },
        { label: "Admission", link: "/" },
        { label: "Scholarships", link: "/" },
        { label: "Tuition Fee", link: "/" },
        { label: "Faculty", link: "/" },
        { label: "Program Details", link: "" },
      ],
    },
    {
      label: "Events",
      subItems: [
        { label: "Upcoming Events", link: "" },
        { label: "Past Events", link: "" },
      ],
    },
    { label: "Contact Us", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  // const hasSubMenu = menuData.subItems && menuData.subItems.length > 0;
  // console.log("hasSubMenu", hasSubMenu);
  const toggleOpen = (itemLabel) => {
    // if (hasSubMenu) {
    //   setIsOpen(!isOpen);
    // }

    setIsOpen((prevOpenStates) => ({
      ...prevOpenStates, // Copy all existing open states
      [itemLabel]: !prevOpenStates[itemLabel], // Toggle the state for the clicked item
    }));
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-xl text-gray-700 hover:text-red-600"
        >
          <FaTimes />
        </button>
      </div>

      {/* ... your drawer content as before ... */}
      <div className="p-4 text-sm">
        <h2 className="text-lg font-bold mb-4">
          Sengol International University
        </h2>
        <p className="mb-4">
          Offering world-class education with holistic development.
        </p>

        <img
          src="/assets/images/offcanvase.jpg"
          alt="Banner"
          className="rounded mb-4"
        />
        <a
          href="#"
          className="block bg-yellow-500 text-white text-center py-2 rounded"
        >
          Apply Now
        </a>

        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2">
            <FaPhone /> +91 485-826-710
          </div>
          {/* <div className="flex items-center gap-2">
            <FaLocationArrow /> Bihar, India
          </div> */}
        </div>

        <div className="mt-4">
          <p className="font-semibold">Follow Us:</p>
          <div className="flex gap-3 text-lg mt-2">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

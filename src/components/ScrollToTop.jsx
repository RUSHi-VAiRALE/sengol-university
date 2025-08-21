"use client";

import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set button visibility
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-[10px] right-[10px] cursor-pointer z-50 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
        show
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-90"
      }`}
      aria-label="Scroll to top"
    >
      <IoIosArrowUp size={20} className="text-black" />
    </div>
  );
};

export default ScrollToTop;

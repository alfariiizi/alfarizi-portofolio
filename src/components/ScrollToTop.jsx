import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY >= 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed right-3 bottom-3 z-50 sm:right-5 sm:bottom-5 md:right-10 md:bottom-10">
      <button
        onClick={scrollToTop}
        className="rounded-full bg-yellow-500 shadow-lg shadow-black hover:bg-yellow-600">
        {isVisible && <IoIosArrowDropup size={35} />}
      </button>
    </div>
  );
};

export default ScrollToTop;
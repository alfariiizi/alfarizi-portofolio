import React from "react";
import { navToolsContent } from "../data";

const Navtools = ({ refSection }) => {
  const handleClick = (element) => {
    window.scrollTo({
      top: element.current.offsetTop,
      behavior: "smooth",
    });
  };
  const arrRefSection = Object.values(refSection);

  return (
    <section className="relative z-50">
      <div className="flex justify-center">
        <div className="fixed bottom-8 flex items-center justify-center rounded-full border-2 border-black bg-slate-600/30 backdrop-blur-sm dark:bg-slate-100/40">
          {navToolsContent.map((content, index) => (
            <div
              key={index}
              onClick={() => handleClick(arrRefSection[index])}
              className={`${content.customClass} h-full w-full cursor-pointer bg-transparent p-2 text-xl duration-[250ms] hover:bg-slate-500 hover:text-slate-200 md:text-2xl`}>
              {content.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navtools;

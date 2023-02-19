import React from "react";

const ProjectCard = ({ imgSrc, label, desc, href, className }) => {
  return (
    <div>
      <div className="absolute h-[350px] w-[300px] bg-indigo-900 bg-stripes bg-stripes-white dark:bg-inherit dark:bg-stripes-indigo-400"></div>
      <div className="relative -top-3 -left-3 z-10 flex h-[350px] w-[300px] flex-col items-center gap-2 overflow-hidden border-2 border-[#0b2149] bg-gray-200 dark:border-slate-200">
        <a
          href={href}
          target="_blank"
          className="h-[256px] w-full overflow-hidden">
          <img
            src={imgSrc}
            alt=""
            className={`${className} h-full w-full object-cover`}
          />
        </a>
        <p className="font-roboto-mono">{label}</p>
        <p className="h-[4ch] p-2 font-inter text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

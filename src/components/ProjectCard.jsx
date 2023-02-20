import React from "react";

const ProjectCard = ({ imgSrc, label, desc, href, className }) => {
  return (
    <div className=" relative left-2 top-2 h-[350px] w-[300px]">
      <div className="absolute h-[350px] w-[300px] border-2 border-[#0b2149] bg-teal-500 bg-stripes bg-stripes-black dark:border-slate-200"></div>
      <div className="relative -top-3 -left-3 z-10 flex h-full w-full flex-col items-center gap-2 overflow-hidden border-2 border-[#0b2149] bg-gray-200 dark:border-slate-200">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group relative h-[256px] w-full overflow-hidden">
          <img
            src={imgSrc}
            alt=""
            className={`${className} h-full w-full object-cover`}
          />
          <div className="group absolute top-0 left-0 h-0 w-full bg-violet-600/50 duration-200 group-hover:h-full group-hover:backdrop-blur-sm">
            <div className="h-full w-full items-center justify-center opacity-0 group-hover:flex group-hover:opacity-100">
              <p className="font-roboto-mono text-slate-200 hover:text-teal-400">
                Click Me
              </p>
            </div>
          </div>
        </a>
        <p className="font-roboto-mono">{label}</p>
        <p className="h-[4ch] p-2 font-inter text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

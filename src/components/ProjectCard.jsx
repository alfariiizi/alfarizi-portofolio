import React from "react";

const ProjectCard = ({ imgSrc, label, href, className }) => {
  return (
    <div>
      <div className="flex h-[300px] w-[256px] flex-col items-center gap-2 overflow-hidden rounded-lg border-2 border-[#0b2149] bg-gray-200 dark:border-slate-200">
        <a
          href={href}
          className="h-[256px] w-[256px] overflow-hidden bg-blue-500 hover:bg-blue-600">
          <img src={imgSrc} alt="" className={className} />
        </a>
        <p className="font-inter">{label}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const SkillCard = ({ src, skillName, className }) => {
  return (
    <div
      className={`mx-auto flex h-24 w-24 flex-col items-center justify-between gap-5 rounded-lg bg-slate-200 p-4 shadow-sm shadow-slate-700 hover:bg-gray-300 dark:bg-slate-400 dark:hover:bg-gray-500 md:h-40 md:w-40 md:text-base`}>
      <div className="flex h-full items-center justify-center">
        <img src={src} alt="" className={className} />
      </div>
      <h4 className="hidden font-roboto-mono text-sm font-semibold dark:text-black md:block">
        {skillName}
      </h4>
    </div>
  );
};

export default SkillCard;

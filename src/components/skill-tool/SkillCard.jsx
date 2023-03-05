import React from "react";

const SkillCard = ({ src, skillName, className }) => {
  return (
    <div
      className={`mx-auto flex h-24 w-24 flex-col items-center justify-between gap-5 border-2 border-black bg-slate-300 p-4 shadow-sm shadow-slate-700 duration-100 hover:bg-teal-500 dark:border-slate-200 dark:bg-slate-600 dark:hover:bg-teal-500 md:h-40 md:w-40 md:text-base`}>
      <div className="flex h-full items-center justify-center">
        <img src={src} alt="" className={className} />
      </div>
      <h4 className="hidden font-roboto-mono text-sm font-semibold md:block">
        {skillName}
      </h4>
    </div>
  );
};

export default SkillCard;

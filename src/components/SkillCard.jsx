import React from "react";

const SkillCard = ({ src, skillName, className }) => {
  return (
    <div className={`skill-card`}>
      <img src={src} alt="" className={className} />
      <h4 className="hidden font-semibold dark:text-black md:block">
        {skillName}
      </h4>
    </div>
  );
};

export default SkillCard;

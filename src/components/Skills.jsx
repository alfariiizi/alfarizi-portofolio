import React from "react";
import Devider from "./Devider";
import SkillCard from "./SkillCard";
import { tools } from "../data";

const Skills = ({ useRefSection }) => {
  return (
    <div ref={useRefSection} className="">
      <Devider name={"Tools that I use"} />
      <div className="mx-auto px-5 py-8 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
        <div className="m-8 mx-auto grid grid-flow-row grid-cols-3 gap-5 duration-200 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {tools.map((tool, index) => {
            return (
              <SkillCard
                src={tool.imageSrc}
                skillName={tool.name}
                className={tool.customClass}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

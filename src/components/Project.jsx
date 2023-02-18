import React from "react";
import Devider from "./Devider";
import ProjectCard from "./ProjectCard";

import { projects } from "../data";

const Project = () => {
  return (
    <div className="">
      <Devider name={"My Work"} />
      <div className="p-5 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900">
        <div className="mx-auto grid w-3/5 justify-center gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                href={project.link}
                label={project.name}
                className={project.customClass}
                imgSrc={project.imageSrc}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;

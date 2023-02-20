import React from "react";
import Devider from "./Devider";
import ProjectCard from "./ProjectCard";

import { projects } from "../data";

const Project = () => {
  return (
    <div className="">
      <Devider name={"My Work"} />
      <div className="flex w-full justify-center p-5 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900">
        <div className="my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                href={project.link}
                label={project.name}
                desc={project.desc}
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

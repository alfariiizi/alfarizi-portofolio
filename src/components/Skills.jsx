import React from "react";
import Devider from "./Devider";
import SkillCard from "./SkillCard";

import ImgCProgrammingLogo from "../assets/c-programming.png";
import ImgCppLogo from "../assets/cpp.png";
import ImgJavascriptLogo from "../assets/javascript.png";
import ImgPythonLogo from "../assets/python.png";
import ImgPandasLogo from "../assets/pandas.png";
import ImgMatplotlibLogo from "../assets/matplotlib.png";
import ImgSeabornLogo from "../assets/seaborn.png";
import ImgScikitLearnLogo from "../assets/scikit-learn.png";
import ImgQtLogo from "../assets/qt.png";
import ImgStreamlitLogo from "../assets/streamlit.png";
import ImgVulkanLogo from "../assets/vulkan.png";
import ImgOpengGlLogo from "../assets/opengl.png";
import ImgTailwindCssLogo from "../assets/tailwindcss.png";
import ImgReactJsLogo from "../assets/reactjs.png";
import ImgNextJsLogo from "../assets/nextjs.png";

const Skills = () => {
  return (
    <div className="">
      <Devider name={"Tools that I use"} />
      <div className="mx-auto p-5 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
        <div className="m-8 mx-auto grid grid-flow-row grid-cols-3 gap-5 duration-200 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <SkillCard
            src={ImgCProgrammingLogo}
            skillName={"C-Programming"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgCppLogo}
            skillName={"C++"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgJavascriptLogo}
            skillName={"Javascript"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgPythonLogo}
            skillName={"Python"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgPandasLogo}
            skillName={"Pandas"}
            className="w-[50px] md:w-[60px]"
          />
          <SkillCard
            src={ImgMatplotlibLogo}
            skillName={"Matplotlib"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgSeabornLogo}
            skillName={"Seaborn"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgScikitLearnLogo}
            skillName={"Scikit-Learn"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgQtLogo}
            skillName={"QT with Pyside"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgStreamlitLogo}
            skillName={"Streamlit"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgTailwindCssLogo}
            skillName={"TailwindCSS"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgReactJsLogo}
            skillName={"ReactJs"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgNextJsLogo}
            skillName={"NextJs"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgVulkanLogo}
            skillName={"Vulkan"}
            className="w-[60px] md:w-[80px]"
          />
          <SkillCard
            src={ImgOpengGlLogo}
            skillName={"OpenGL"}
            className="w-[60px] md:w-[80px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

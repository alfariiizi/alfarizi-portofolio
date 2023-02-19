import ImgCProgrammingLogo from "./assets/c-programming.png";
import ImgCppLogo from "./assets/cpp.png";
import ImgJavascriptLogo from "./assets/javascript.png";
import ImgPythonLogo from "./assets/python.png";
import ImgPandasLogo from "./assets/pandas.png";
import ImgMatplotlibLogo from "./assets/matplotlib.png";
import ImgSeabornLogo from "./assets/seaborn.png";
import ImgScikitLearnLogo from "./assets/scikit-learn.png";
import ImgQtLogo from "./assets/qt.png";
import ImgStreamlitLogo from "./assets/streamlit.png";
import ImgVulkanLogo from "./assets/vulkan.png";
import ImgOpengGlLogo from "./assets/opengl.png";
import ImgTailwindCssLogo from "./assets/tailwindcss.png";
import ImgReactJsLogo from "./assets/reactjs.png";
import ImgNextJsLogo from "./assets/nextjs.png";

import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

export const projects = [
  {
    name: "Some Text",
    imageSrc: "",
    link: "",
    customClass: "",
  },
  {
    name: "Some Text",
    imageSrc: "",
    link: "",
    customClass: "",
  },
  {
    name: "Some Text",
    imageSrc: "",
    link: "",
    customClass: "",
  },
];

export const tools = [
  // Programming Language
  {
    name: "C-Programming",
    imageSrc: ImgCProgrammingLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "C++",
    imageSrc: ImgCppLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "Javascript",
    imageSrc: ImgJavascriptLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "Python",
    imageSrc: ImgPythonLogo,
    customClass: "w-[60px] md:w-[80px]",
  },

  // ML/DS/DA Related Tools
  {
    name: "Pandas",
    imageSrc: ImgPandasLogo,
    customClass: "w-[50px] md:w-[60px]",
  },
  {
    name: "Matplotlib",
    imageSrc: ImgMatplotlibLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "Seaborn",
    imageSrc: ImgSeabornLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "Scikit-Learn",
    imageSrc: ImgScikitLearnLogo,
    customClass: "w-[60px] md:w-[80px]",
  },

  // Web-app
  {
    name: "QT with Pyside",
    imageSrc: ImgQtLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "Streamlit",
    imageSrc: ImgStreamlitLogo,
    customClass: "w-[60px] md:w-[80px]",
  },

  // Front-end
  {
    name: "TailwindCSS",
    imageSrc: ImgTailwindCssLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "ReactJs",
    imageSrc: ImgReactJsLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "NextJs",
    imageSrc: ImgNextJsLogo,
    customClass: "w-[60px] md:w-[80px]",
  },

  // Computer Graphics
  {
    name: "Vulkan",
    imageSrc: ImgVulkanLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
  {
    name: "OpenGL",
    imageSrc: ImgOpengGlLogo,
    customClass: "w-[60px] md:w-[80px]",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/moh-rizal-alfarizi-3809b9246",
    customClass: "bg-blue-800",
    mobileCustomClass: "text-blue-800 dark:text-blue-400",
    logo: BsLinkedin,
  },
  {
    name: "Github",
    link: "https://github.com/alfariiizi",
    customClass: "bg-slate-700",
    mobileCustomClass: "text-slate-700 dark:text-slate-300",
    logo: BsGithub,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCj7ca13ljdoz3o1sNHwxzWQ",
    customClass: "bg-red-700",
    mobileCustomClass: "text-red-700 dark:text-red-400",
    logo: BsYoutube,
  },
];

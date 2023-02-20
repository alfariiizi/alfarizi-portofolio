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

import ImgCatEngine from "./assets/cat-engine-v1.jpg";
import ImgGuessGame from "./assets/guess-1-20.png";
import ImgPigGame from "./assets/pig-game.png";
import ImgRaportGenerator from "./assets/raport-generator.jpg";
import ImgStrokeApp from "./assets/stroke-app.jpg";
import ImgWeatherApp from "./assets/weather-app.jpg";

export const projects = [
  {
    name: "Guess 1-20",
    desc: "Simple javascript game that the user have to try guess random number from 1 to 20",
    imageSrc: ImgGuessGame,
    link: "https://alfariiizi.github.io/guess-1-20/",
    customClass: "",
  },
  {
    name: "Pig Game",
    desc: "Multiplayer simple javascript game that have the rule which the player who reach score 100 first is the winner",
    imageSrc: ImgPigGame,
    link: "https://alfariiizi.github.io/pig-game/",
    customClass: "",
  },
  {
    name: "Cat-Engine v1",
    desc: "Vulkan API renderer that can render basic mesh",
    imageSrc: ImgCatEngine,
    link: "https://github.com/alfariiizi/cat-engine-v1",
    customClass: "",
  },
  {
    name: "Raport Generator",
    desc: "Raport generator tools that I use for my mom to generate all grade from average value",
    imageSrc: ImgRaportGenerator,
    link: "https://github.com/alfariiizi/raport-generator",
    customClass: "",
  },
  {
    name: "Weather App",
    desc: "Weather forecaster that use data from OpenWeather API and build with Pyside6",
    imageSrc: ImgWeatherApp,
    link: "https://github.com/alfariiizi/Weather-App",
    customClass: "",
  },
  {
    name: "Stroke App",
    desc: "ML Model that can predict whether the user have potentially stroke or not",
    imageSrc: ImgStrokeApp,
    link: "https://github.com/alfariiizi/Stroke-App",
    customClass: "",
  },
];

export const tools = [
  // Programming Language
  {
    name: "C-Programming",
    imageSrc: ImgCProgrammingLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://en.cppreference.com/w/c",
  },
  {
    name: "C++",
    imageSrc: ImgCppLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://en.cppreference.com/w/",
  },
  {
    name: "Javascript",
    imageSrc: ImgJavascriptLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Python",
    imageSrc: ImgPythonLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://www.python.org/",
  },

  // ML/DS/DA Related Tools
  {
    name: "Pandas",
    imageSrc: ImgPandasLogo,
    customClass: "w-[50px] md:w-[60px]",
    link: "https://pandas.pydata.org/",
  },
  {
    name: "Matplotlib",
    imageSrc: ImgMatplotlibLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://matplotlib.org/",
  },
  {
    name: "Seaborn",
    imageSrc: ImgSeabornLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://seaborn.pydata.org/",
  },
  {
    name: "Scikit-Learn",
    imageSrc: ImgScikitLearnLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://scikit-learn.org/stable/",
  },

  // Web-app
  {
    name: "QT with Pyside",
    imageSrc: ImgQtLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://pypi.org/project/PySide6/",
  },
  {
    name: "Streamlit",
    imageSrc: ImgStreamlitLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://streamlit.io/",
  },

  // Front-end
  {
    name: "TailwindCSS",
    imageSrc: ImgTailwindCssLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://tailwindcss.com/",
  },
  {
    name: "ReactJs",
    imageSrc: ImgReactJsLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://reactjs.org/",
  },
  {
    name: "NextJs",
    imageSrc: ImgNextJsLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://nextjs.org/",
  },

  // Computer Graphics
  {
    name: "Vulkan",
    imageSrc: ImgVulkanLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://www.vulkan.org/",
  },
  {
    name: "OpenGL",
    imageSrc: ImgOpengGlLogo,
    customClass: "w-[60px] md:w-[80px]",
    link: "https://www.opengl.org/",
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

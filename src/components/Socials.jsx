import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const Socials = () => {
  const links = {
    linkedIn: "https://www.linkedin.com/in/moh-rizal-alfarizi-3809b9246",
    github: "https://github.com/alfariiizi",
    youtube: "https://www.youtube.com/channel/UCj7ca13ljdoz3o1sNHwxzWQ",
  };

  return (
    <div className="relative z-[100] hidden font-inter text-slate-200 sm:block">
      <ul className="fixed left-0 flex h-screen w-[140px] flex-col justify-center">
        <li>
          <a
            href={links.linkedIn}
            target="_blank"
            className="relative -left-[94px] z-40 flex items-center justify-between bg-blue-800 p-2 transition-all duration-300 hover:left-0">
            LinkedIn
            <BsLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href={links.github}
            target="_blank"
            className="relative -left-[94px] flex items-center justify-between bg-slate-700 p-2 transition-all duration-300 hover:left-0">
            Github
            <BsGithub size={30} />
          </a>
          <a
            href={links.youtube}
            target="_blank"
            className="relative -left-[94px] flex items-center justify-between bg-red-700 p-2 transition-all duration-300 hover:left-0">
            Youtube
            <BsYoutube size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;

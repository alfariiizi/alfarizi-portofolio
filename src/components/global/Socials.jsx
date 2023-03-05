import React from "react";

import { socialLinks } from "../../data";

const Socials = () => {
  return (
    <div className="relative z-[100] hidden font-inter text-slate-200 md:block">
      <ul className="fixed left-0 flex h-screen w-[140px] flex-col justify-center">
        {socialLinks.map((socialLink, index) => (
          <li key={index}>
            <a
              href={socialLink.link}
              target="_blank"
              rel="noreferrer"
              className={`${socialLink.customClass} relative -left-[94px] z-40 flex items-center justify-between bg-blue-800 p-2 transition-all duration-300 hover:left-0`}>
              {socialLink.name}
              <socialLink.logo size={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;

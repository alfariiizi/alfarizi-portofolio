import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkTimesHandler }) => {
  return (
    <div>
      <nav className="relative z-20">
        <div className="md:px-30 fixed top-0 left-0 right-0 flex justify-between border-b-[1px] border-b-slate-800 bg-gradient-to-t from-blue-100/30 to-violet-100/30 px-10 py-7 backdrop-blur-sm duration-200 dark:border-b-slate-200 sm:px-20 lg:px-40">
          <h1 className="font-pixel text-base dark:text-slate-200">ALFARIZI</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-gray-800 hover:text-violet-800 active:text-violet-500 dark:text-slate-100 dark:hover:text-violet-300 dark:active:text-violet-400">
              <BsFillMoonStarsFill size={20} onClick={darkTimesHandler} />
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1PjreIi6SykaaXjCLu7VDKBmazmjFaBMb?usp=sharing"
                className="ml-5 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 p-2 text-gray-200 hover:from-blue-700 hover:to-teal-700 active:from-blue-900 active:to-teal-900"
                target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

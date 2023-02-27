import React from "react";

const Navbar = ({ darkModeComponent }) => {
  console.log(typeof darkModeComponent);
  return (
    <div>
      <nav className="relative z-[100]">
        <div className="fixed top-0 left-0 right-0 flex h-20 w-full items-center justify-between border-b-[1px] border-b-slate-800 bg-gradient-to-t from-blue-100/30 to-violet-100/30 px-4 py-7 backdrop-blur-sm duration-200 dark:border-b-slate-200 sm:px-20 md:px-32 lg:px-40">
          <h1 className="font-pixel text-base dark:text-slate-200">ALFARIZI</h1>
          <ul className="flex h-9 w-full items-center justify-end gap-3">
            <li className="cursor-pointer text-gray-800 hover:text-violet-800 active:text-violet-500 dark:text-slate-100 dark:hover:text-violet-300 dark:active:text-violet-400">
              {darkModeComponent}
            </li>
            <li className="group relative h-full w-20">
              <div className="absolute top-0 left-0 h-full w-full border-2 border-black bg-blue-500 duration-200 bg-stripes bg-stripes-black group-hover:top-1 group-hover:left-1" />
              <div className="relative top-0 left-0 z-10 flex h-full w-full items-center justify-center border-2 border-slate-800 bg-teal-500 text-black duration-200 hover:bg-teal-600 group-hover:-top-1 group-hover:-left-1">
                <a
                  href="https://drive.google.com/drive/folders/1PjreIi6SykaaXjCLu7VDKBmazmjFaBMb?usp=sharing"
                  className="flex h-full w-full items-center justify-center text-center"
                  target="_blank"
                  rel="noreferrer">
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

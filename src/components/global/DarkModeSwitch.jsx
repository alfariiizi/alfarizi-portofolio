import React from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { motion } from "framer-motion";

const DarkModeSwitch = ({ isDarkMode, darkModeHandler }) => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div
      onClick={darkModeHandler}
      className={`flex-start flex h-[30px] w-[60px] rounded-[50px] border-[1px] border-gray-800 bg-zinc-300 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        isDarkMode && "place-content-end"
      }`}>
      <motion.div
        className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}>
        <motion.div whileTap={{ rotate: 360 }}>
          {!isDarkMode ? (
            <RiSunFill className="h-4 w-4 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-4 w-4 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DarkModeSwitch;

import React from "react";

const Devider = ({ name }) => {
  return (
    <div className="bg-[#0b2149] p-5 text-center font-roboto-mono text-xl text-slate-200 md:text-2xl lg:text-3xl">
      <div>{name}</div>
    </div>
  );
};

export default Devider;

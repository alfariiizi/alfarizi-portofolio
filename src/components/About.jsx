import React from "react";
import Devider from "./Devider";

import ImgAbout from "../assets/about.jpeg";

const About = () => {
  return (
    <div>
      <Devider name={"About Me"} />
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 p-5 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900 dark:text-slate-200 md:flex-row md:gap-10 xl:gap-1">
        <div className="lg:px-14 xl:relative xl:left-[-6rem] xl:px-36">
          <div className="max-w-md overflow-hidden rounded-3xl md:max-w-full md:rounded-bl-none md:rounded-tr-none md:rounded-tl-[8rem] md:rounded-br-[8rem]">
            <img src={ImgAbout} alt="" />
          </div>
        </div>
        <div className="mx-auto rounded-xl border-y-4 border-violet-700 p-4 md:max-w-sm md:border-none md:pr-8 lg:pr-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse
          ipsa at enim corporis, tenetur fugit odio minima voluptates dolor!
          Nobis totam optio, inventore et ratione dolorum quasi aut quos? Quasi
          eos, ab adipisci unde earum fugit sapiente voluptates? Magni
          laudantium rem harum, quod nobis beatae et labore iure. Perferendis
          fugiat eveniet voluptate vitae tenetur libero fuga minus alias
          consequuntur! Assumenda repudiandae tempore iusto autem dicta
          accusantium magnam in, voluptates nesciunt adipisci deleniti nisi,
          non, neque nulla accusamus molestiae ut unde ab ad exercitationem!
          Maiores dignissimos pariatur porro rem magnam.
        </div>
      </div>
    </div>
  );
};

export default About;

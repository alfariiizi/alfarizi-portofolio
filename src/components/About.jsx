import React from "react";
import Devider from "./Devider";

import ImgAbout from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="md:h-screen md:w-screen">
      <Devider name={"About Me"} />
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-10 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900 dark:text-slate-200 sm:justify-center md:flex-row md:gap-5 xl:gap-1">
        <div className="hidden md:block lg:mx-14 xl:relative xl:left-[-6rem] xl:mx-36">
          <div className="w-[300px] overflow-hidden rounded-3xl md:w-auto md:max-w-full md:rounded-bl-none md:rounded-tr-none md:rounded-tl-[8rem] md:rounded-br-[8rem]">
            <img src={ImgAbout} alt="about-image" />
          </div>
        </div>
        <div className="mx-auto flex flex-col gap-3 rounded-xl border-x-4 border-[#0b2149] p-4 font-inter text-sm md:max-w-sm md:border-none md:pr-8 md:text-sm lg:pr-16 xl:relative xl:right-[8rem]">
          <p
            className="first-letter:float-left first-letter:mr-3 first-letter:font-aboreto
    first-letter:text-5xl first-letter:font-bold">
            For most part of my study at the univeristy, it's about data and
            lots of data. To do something about the data, I do{" "}
            <strong>feature engineering</strong>,{" "}
            <strong>data visualization</strong>, modeling{" "}
            <strong>machine learning</strong>, and a lot more. For me, doing
            things about data is very fun. It can be lead to something that I
            can not imagine the correlation before.
          </p>
          <p>
            Beside having fun about data. I also do computer graphics. The API
            for computer graphics that I use a lot is{" "}
            <strong>Vulkan API</strong>. It have a lots of boilerplate code, but
            it have full-control about the best way to optimize what I willing
            to render.
          </p>
          <p>
            In my others time, I do build some website. I use{" "}
            <strong>reactjs</strong> and sometimes <strong>nextjs</strong> to
            build website. I also use <strong>tailwindcss</strong> to speed up
            my styling. One of example of my website is like this one that you
            read it right now :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

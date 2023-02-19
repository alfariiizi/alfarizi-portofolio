import React from "react";
import ImgHero from "../assets/hero-alfarizi.png";
import { Circle, Diamond, Donut, CircleGrid } from "react-awesome-shapes";
import { socialLinks } from "../data";

const Hero = () => {
  return (
    <div>
      <div className="flex h-screen w-screen flex-col justify-center px-4 py-28 dark:bg-gradient-to-bl dark:from-slate-800 dark:to-slate-900 dark:text-slate-200">
        <div className="flex flex-col items-center justify-between gap-5 p-6 md:flex-row">
          {/* Hero Profile */}
          <div className="z-[1] mx-auto text-center font-inter">
            <div className="">Physicist | Developer</div>
            <div className="my-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
              Moh Rizal Alfarizi
            </div>
            <p className="mx-auto my-4 max-w-lg text-center text-sm">
              Halo! I'm currently physics student at University of Gadjah Mada
              Indonesia. I love teaching and doing things in the field of{" "}
              <strong>web development</strong> (<em>front-end</em> and{" "}
              <em>back-end</em>), <strong>computer graphics</strong>, and{" "}
              <strong>data science</strong>.
            </p>
          </div>

          {/* Socials (on Mobile) */}
          <div className="flex justify-center gap-6 md:hidden">
            {socialLinks.map((socialLink, index) => (
              <a
                href={socialLink.link}
                key={index}
                className={`${socialLink.mobileCustomClass}`}>
                <socialLink.logo size={25} />
              </a>
            ))}
          </div>

          {/* Hero Image */}
          <div>
            <Circle
              //   color="linear-gradient(135deg, #7d7b92, #6366f1)"
              color="#6366f1"
              size={["100px", "100px", "150px", "150px"]}
              zIndex={0}
              className="absolute left-4 top-24"
            />
            <Diamond
              //   color="linear-gradient(135deg, #FC766AFF, #c7afad)"
              color="#FC766AFF"
              size={["80px", "80px", "120px", "120px"]}
              zIndex={0}
              className="absolute right-2 bottom-4 hidden sm:right-6 sm:bottom-10 sm:block"
            />
            <Donut
              color="#11EFD1FF"
              size={["60px", "60px", "100px", "100px"]}
              zIndex={0}
              className="absolute right-6 top-[130px] hidden sm:block"
            />
            <CircleGrid
              color="#11EFD1FF"
              size={["100px", "100px", "150px", "150px"]}
              zIndex={0}
              className="md:botton-2 absolute right-2 bottom-2 sm:left-24 sm:bottom-4 md:left-1/3 xl:left-1/2 xl:bottom-0"
            />
            <div className="relative z-10 mx-auto overflow-hidden rounded-full bg-black md:relative md:top-0 md:left-0 md:rounded-none md:bg-transparent">
              <img
                src={ImgHero}
                alt=""
                className="z-10 w-[200px] md:w-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import html from "../../public/assets/html-1.svg";
import css from "../../public/assets/css-3.svg";
import javascript from "../../public/assets/logo-javascript.svg";
import material from "../../public/assets/material-ui-1.svg";
import reactNative from "../../public/assets/react-native-1.svg";
import reactLogo from "../../public/assets/react-2.svg";
import TailwindCss from "../../public/assets/tailwind-css-2.svg";
import Angular from "../../public/assets/angular-icon-1.svg";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center bg-[var(--background-color)] mt-5 md:mt-0">
      <div className="max-w-screen-xl w-full mx-auto p-5">
        <h1 className="text-[var(--accent-color)]">My Skills.</h1>
        <div className="flex flex-wrap justify-between mt-2.5 p-5">
          {/* ... repeating the following structure for each skill */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center space-x-5 text-[var(--accent-color)]">
              <Image src={html} alt="html logo" className="w-7.5" />
              <p className="text-xl">Html</p>
            </div>
            {/* ... add other skills here */}
          </div>
          {/* ... end of repeating structure */}
          <div className="flex flex-col space-y-5 hidden md:block">
            <div className="flex items-center space-x-5 text-[var(--accent-color)]">
              <BsGithub className="text-[var(--accent-color)] w-7.5 h-7.5" />
              <p className="text-xl">Git/Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

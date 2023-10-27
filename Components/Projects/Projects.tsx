import React from "react";
import Ecom from "../../public/assets/Ecom.png";
import searchTheImage from "../../public/assets/searchtheimage.png";
import WeatherImage from "../../public/assets/WeatherForecast.png";
import TasksApp from "../../public/assets/Tasks-app.png";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-[var(--background-color)] w-full min-h-[80vh]">
      <div className="max-w-screen-xl mx-auto w-full p-5">
        <h1 className="text-[var(--accent-color)]">Projects</h1>
        <div className="space-y-20">
          {/* ... repeating the following structure for each project */}
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 items-center">
            <Image src={Ecom} alt="" className="w-full md:w-[600px]" />
            <div className="mt-[-20px] pl-0 md:pl-8">
              <h2 className="mb-5 text-[var(--accent-color)]">Ecom.in</h2>
              <p className="mb-5 text-[var(--accent-color)]">
                Ecom.in is a fashion e-commerce website...
                {/* trimmed for brevity */}
              </p>
              <div className="flex gap-5 mt-2.5">
                <a
                  href="https://github.com/shreyashkothavale/Ecom.in"
                  target="_blank"
                  className="flex items-center gap-2 border border-[var(--button-color)] p-4 rounded-lg text-[var(--button-color)]"
                >
                  Code
                  <BsGithub />
                </a>
                <a
                  href="https://shreyashkothavale.github.io/Ecom.in/"
                  target="_blank"
                  className="flex items-center gap-2 bg-[var(--button-color)] p-4 rounded-lg text-[var(--button-text-color)]"
                >
                  Live Preview
                  <span className="mb-1">
                    <BsBoxArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* ... end of repeating structure */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

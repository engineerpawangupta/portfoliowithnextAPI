import React from "react";
import AboutImg from "../../public/assets/clement-helardot-95YRwf6CNw8-unsplash.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-100 w-full min-h-[80vh] flex items-center">
      <div className="about-container max-w-screen-xl mx-auto w-full flex items-center lg:p-4">
        <div className="container flex gap-x-12">
          <Image className="flex-1 w-[350px] h-[350px] rounded-lg shadow-md lg:hidden" src={AboutImg} alt="" />
          <div className="about-me flex-1">
            <h1 className="text-teal-500">About Me</h1>
            <p className="text-xl text-teal-500 lg:text-base">
              Hi I am Shreyas Kothavale, a 23-year-old Front-End developer living
              in Maharashtra, India...
              {/* Rest of the content */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

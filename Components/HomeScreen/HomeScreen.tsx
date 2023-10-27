import React from "react";
import profileImg from "../../public/assets/MyImage.png";
import { Link } from "react-scroll";
import Image from "next/image";

const HomeScreen = () => {
  return (
    <div className="bg-[var(--background-color)] min-h-[80vh] w-full flex items-center">
      <div className="homescreen-container max-w-screen-xl mx-auto w-full flex items-center md:flex-col-reverse md:mt-5 md:text-center">
        <div className="heading flex-4 mt-5 md:mt-20">
          <p className="text-[var(--accent-color)]">👋 Hi, I am Shreyas Kothavale.</p>
          <h1 className="text-[var(--accent-color)] text-9xl md:text-5xl">Front-End Developer</h1>
          <p className="text-[var(--accent-color)] text-xl font-normal">
            A self-motivated frontend web developer from
            Maharashtra, India. Interested in exploring things, I like to work on
            exciting projects.
          </p>
          <div className="contact-links flex gap-x-12 items-center justify-center md:justify-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="contactbtn bg-[var(--button-color)] text-[var(--button-text-color)] rounded-lg py-3 px-6"
            >
              Contact Me
            </Link>
            {/* <a href={Resume} target="_blank" download className="resumeBtn border-[var(--button-color)] text-[var(--button-color)] rounded-lg py-3 px-6">
              Resume
            </a> */}
          </div>
        </div>
        <div className="profile flex-2 justify-end">
          <Image className="w-[350px] rounded-full md:w-[200px]" src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

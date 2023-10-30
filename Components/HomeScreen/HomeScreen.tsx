import React from "react";
import profileImg from "../../public/assets/MyImage.jpeg";
import { Link } from "react-scroll";
import Image from "next/image";

const HomeScreen = () => {
  return (
    <div className="homescreen my-8 md:my-16 lg:my-28">
      <div className="homescreen-container">
        <div className="heading">
          <p >👋 Hi, I am Pawan Kumar.</p>
          <h1 className="font-bold">Front-End Engineer</h1>
          <p >
            With over 2+ years of hands-on experience, I've been instrumental in crafting web applications🖥 that are scalable, mobile-responsive, and maintainable.
            My expertise lies in web development, with a focus on creating visually appealing and flexible website designs. Dive into my GitHub📒 to explore my contributions and projects.
          </p>
          <div className="contact-links">
            <Link
              className="contactbtn"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
            <a
              //  href={Resume}
              target="_blank" download className="resumeBtn ">
              Resume
            </a>
          </div>
        </div>
        <div className="profile">
          <Image src={profileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

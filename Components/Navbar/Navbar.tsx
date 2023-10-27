import React, { useState } from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiSun, HiMoon, HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // const switchSound = new Audio(toggleSound);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const theme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
    // switchSound.play();
  };
  const closeMenu = () => {
    setIsVisible(false);
  };
  const lightMode = () => {
    setIsDarkMode(false);
    document.body.setAttribute("data-theme", "light");
    // switchSound.play();
  };
  const darkMode = () => {
    setIsDarkMode(true);
    document.body.setAttribute("data-theme", "dark");
    // switchSound.play();
  };

  return (
    <div className="h-20 w-full flex items-center sticky top-0 z-50">
      <div className="absolute w-full h-full bg-gradient-to-r from-[#44ff9a] via-[#8b44ff] to-[#ebff70] blur-[1.2rem] opacity-30"></div>
      <div className="relative w-full h-full backdrop-blur-md bg-[var(--navbar-color)] flex">
        <div className={`w-full max-w-screen-xl mx-auto flex items-center px-5 ${isVisible ? "active" : ""}`}>
          <div className="text-[var(--accent-color)] text-lg font-bold flex-1">Shreyas.</div>
          <div className="menu cursor-pointer z-50">
            {isVisible ? (
              <HiXMark className="text-[var(--accent-color)] text-3xl" onClick={closeMenu} />
            ) : (
              <HiBars3 className="text-[var(--accent-color)] text-3xl" onClick={() => setIsVisible(true)} />
            )}
          </div>
          <div className={`links flex flex-2 items-center ${isVisible ? "absolute w-[60vw] h-screen top-0 right-0 bg-[var(--background-color)] flex-col p-20 shadow-md transition-transform transform translate-x-0" : "transform translate-x-full transition-transform opacity-0 invisible"}`}>
            {/* navbar-links and other components... (unchanged) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-[#1f1f20] w-full min-h-[150px] flex items-center md:justify-around" id="footer">
      <div className="form-container w-full max-w-screen-xl mx-auto flex items-center justify-between md:min-h-[12vh] md:flex-col">
        <div className="icons flex gap-x-6">
          {/* Icons ... */}
        </div>
        <p className="text-white">
          Made with <span className="text-[#4d2382] text-lg">❤ </span> by Shreyas
        </p>
        <div className="gotohome cursor-pointer md:hidden">
          <Link to="home" smooth={true} duration={500} className="no-underline text-white">
            <FiArrowUp size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

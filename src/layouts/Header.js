import { useEffect, useState } from "react";
import { scrollSection } from "../utilits";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Check if desktop (width >= 1040px based on existing media queries)
      const isDesktop = window.innerWidth >= 1040;

      if (isDesktop) {
        setIsScrolled(currentScrollY > 70);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", scrollSection);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", scrollSection);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const headerClasses = `devman_tm_header ${isScrolled ? "scrolled" : ""}`;

  return (
    <div className={headerClasses}>
      <div className={`header_overlay ${isScrolled ? "active" : ""}`} aria-hidden="true" />
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
            <a className="dark" href="#">
              <img src="img/logo/dark.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              {/* <li>
                <a href="#service">Service</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
              {/* <li>
                <a href="#blog">Blog</a>
              </li> */}
              <li className="download_cv">
                <a href="img/cv/1.jpg" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

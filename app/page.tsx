

"use client";
import { Element } from "react-scroll";
import ConfettiExplosion from "react-confetti-explosion";
import Navbar from "../Components/Navbar/Navbar";
import React, { useEffect } from "react";
import HomeScreen from "../Components/HomeScreen/HomeScreen";
// import HomeScreen from "../Components/HomeScreen/HomeScreen";
// import Skills from "../Components/Skills/Skills";
// import About from "../Components/About/About";
// import Projects from "../Components/Projects/Projects";
// import Footer from "../Components/Footer/Footer";


export default function Index() {
  const [allPosts, setAllPosts] = React.useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(allPosts, 'allPosts')
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="z-30">
          <ConfettiExplosion width={4000} particleCount={80} />
        </div>
        <Element name="home">
          <HomeScreen />
        </Element>
        {/* <Element name="skills">
          <Skills />
        </Element> */}
        {/* <Element name="about">
          <About />
        </Element> */}
        {/* <Element name="projects">
          <Projects />
        </Element> */}
        {/* <Element name="contact">
          <Footer />
        </Element>  */}
      </div>
    </>
  )
}


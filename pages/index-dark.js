import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import CounterSection from "../src/components/CounterSection";
import Features from "../src/components/Features";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Skills from "../src/components/Skills";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
const IndexDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout>
      <Head>
        <title>Devman | Home</title>
      </Head>
      <MobileHeader />
      <Header />
      <Home />
      <Features />
      <About />
      <CounterSection />
      <Portfolio />
      <Skills />
      {/* <Service /> */}
      {/* <Process /> */}
      {/* <Testimonials /> */}
      {/* <Partners dark /> */}
      <Contact />
      {/* <Blog /> */}
      {/* <Copyright /> */}
      <Mouse />
      <ScrollTop />
    </Layout>
  );
};
export default IndexDark;

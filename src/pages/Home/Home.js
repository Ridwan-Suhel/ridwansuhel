import React from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import MoreProject from "../Project/MoreProject/MoreProject";

const Home = () => {
  return (
    <>
      <main className="">
        <Hero />
        <Projects />
        <MoreProject />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import "./Hero.css";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto hero-title">
        <h1 className="text-3xl md:text-5xl text-left md:text-center leading-tight mt-10">
          Ridwan Suhel <br className="hidden lg:block" />
          Frond-End Web Developer <br className="hidden lg:block" />
          Based In Bangladesh
        </h1>

        <div className="card-wrapper mt-16">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;

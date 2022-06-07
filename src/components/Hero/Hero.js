import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroCard from "./HeroCard";
import { gsap } from "gsap";

const Hero = () => {
  let heroSection = useRef(null);

  useEffect(() => {
    console.log(heroSection);
    gsap.to(heroSection.current, {
      duration: 1,
      css: { visibility: "visible", opacity: 1 },
    });
  }, []);

  return (
    <section ref={heroSection} className="py-10 hero-section">
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

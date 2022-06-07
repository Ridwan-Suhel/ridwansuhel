import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroCard from "./HeroCard";
import { gsap, Power2 } from "gsap";

const Hero = () => {
  let tl = useRef();
  let heroSection = useRef(null);
  let heroTitle = useRef(null);
  let heroTitle2 = useRef(null);
  let text = useRef(null);

  useEffect(() => {
    gsap.to(heroSection.current, {
      duration: 1,
      css: { visibility: "visible", opacity: 1 },
    });

    // gsap.to(heroTitle.current, {
    //   duration: 1,
    //   y: 0,
    // });
    // gsap.to(heroTitle2.current, {
    //   duration: 1,
    //   y: 0,
    // });

    tl.current = gsap.timeline();

    tl.current.to(heroTitle.current, { duration: 0.7, y: 0 });

    tl.current.to(".text", { y: 0, stagger: 0.2 }, "<");
  }, []);

  return (
    <section ref={heroSection} className="py-10 hero-section">
      <div className="container mx-auto hero-title">
        <h1
          ref={heroTitle}
          className="heroTitle text-3xl md:text-5xl text-left md:text-center leading-tight mt-10"
        >
          Ridwan Suhel <br className="hidden lg:block" />
          Frond-End Web Developer <br className="hidden lg:block" />
          Based In Bangladesh
        </h1>
        {/* <h1
          ref={heroTitle2}
          className="heroTitle text-3xl md:text-5xl text-left md:text-center leading-tight mt-10"
        >
          Ridwan Suhel <br className="hidden lg:block" />
          Frond-End Web Developer <br className="hidden lg:block" />
          Based In Bangladesh
        </h1> */}

        <ul className="mt-16 text-lg text-center">
          <li className="text" ref={text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="text" ref={text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="text" ref={text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </li>
          <li className="text" ref={text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </li>
        </ul>

        <div className="card-wrapper mt-16">
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;

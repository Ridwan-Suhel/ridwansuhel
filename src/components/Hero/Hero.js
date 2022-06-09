import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroCard from "./HeroCard";
import { gsap, Power3 } from "gsap";
import ridwanAvatar from "../../images/ridwan-avatar.png";
import resume from "../../resume/ridwan-hussen-web-developer-resume.pdf";
import { DownloadIcon } from "@heroicons/react/outline";
const Hero = () => {
  let tl = useRef();
  let heroSection = useRef(null);
  let heroTitle = useRef(null);

  useEffect(() => {
    gsap.to(heroSection.current, {
      duration: 0.7,
      css: { visibility: "visible", opacity: 1 },
    });

    gsap.to(heroTitle.current, {
      duration: 1,
      delay: 0.7,
      "clip-path": "polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
    });

    tl.current = gsap.timeline();

    tl.current.to(".text", {
      duration: 0.8,
      delay: 0.7,
      y: 0,
      rotate: 0,
      stagger: 0.2,
      ease: Power3,
    });
  }, []);

  return (
    <section ref={heroSection} className="py-10 hero-section">
      <div className="container mx-auto px-4 md:px-0 hero-title">
        <div
          ref={heroTitle}
          className="heroTitleTxt text-2xl md:text-5xl text-left md:text-center leading-tight mt-10"
        >
          <h1 className="text md:block">Ridwan Suhel</h1>
          <h1 className="text md:block">Frond-End Web Developer</h1>
          <h1 className="text md:block">Based In Bangladesh</h1>
        </div>

        <div className="card-wrapper mt-16">
          <HeroCard />
        </div>
      </div>

      <div className="hidden md:flex p-2 justify-center items-center toastBox fixed bottom-0 right-5 z-20 w-[265px] h-[50px] bg-neutral rounded-t">
        <div className="flex  items-center mt-1">
          <div class="avatar-ridwan mr-2">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={ridwanAvatar}
              alt="ridwan suhel"
            />
          </div>
          <a
            href={resume}
            download="ridwan-hussen-web-developer-resume"
            className="hire-btn"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center toastBox fixed bottom-4 right-2 z-20 w-[40px] h-[40px] bg-neutral rounded-full">
        <a
          href={resume}
          download="ridwan-hussen-web-developer-resume"
          rel="noopener noreferrer"
        >
          <DownloadIcon className="w-5 h-5 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

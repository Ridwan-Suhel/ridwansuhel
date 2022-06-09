import React, { useEffect, useRef } from "react";
import ridwansuhel from "../../images/ridwan-suhel.png";
import { Icon } from "@iconify/react";
import "./About.css";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../../components/Footer/Footer";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainContainer = useRef(null);

  useEffect(() => {
    const social1 = ".social1";
    const social2 = ".social2";
    const social3 = ".social3";
    const social4 = ".social4";

    gsap.fromTo(
      mainContainer.current,
      { opacity: 0, visibility: "hidden" },
      { duration: 1, opacity: 1, visibility: "visible" }
    );
    gsap.fromTo(
      ".about-hero-bg2",
      { width: "0%", x: "0%" },
      { duration: 3, width: "400%", x: "100%" }
    );
    gsap.fromTo(
      ".about-hero",
      { width: "100%", x: "100%", visibility: "hidden" },
      {
        delay: 0.7,
        x: "0%",
        duration: 0.5,
        width: "100%",
        visibility: "visible",
      }
    );
    gsap.to(".img-wrapper", {
      delay: 1,
      duration: 0.5,
      ease: Power3,
      css: { transform: "scale(1)", opacity: 1 },
    });

    gsap.fromTo(
      ".about-me",
      { y: 90, opacity: 0 },
      {
        duration: 1,
        delay: 1.2,
        y: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".about-me-txt1",
      { y: 90, opacity: 0 },
      {
        duration: 0.6,
        delay: 1.4,
        y: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".about-me-txt2",
      { y: 90, opacity: 0 },
      {
        duration: 0.6,
        delay: 0.2,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-me-txt2",
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      [social1, social2, social3, social4],
      { y: 170 },
      {
        y: 0,
        duration: 0.7,

        stagger: 0.2,
        scrollTrigger: {
          trigger: ".social-ul",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <main ref={mainContainer} className="main-container overflow-hidden">
        <section className="about-section relative">
          <div className="about-hero h-[270px] bg-[#E9E9E9] w-full"></div>
          <div className="about-hero-bg2 h-[270px] bg-[#000000] w-full absolute top-0 left-0"></div>
          {/* page container  */}
          <div className="container mx-auto px-4 md:px-0 about-title z-2 relative">
            <div className="img-wrapper w-[270px] h-[270px] border-8 shadow border-base-100 rounded-full mt-[-135px] mx-auto">
              <img
                className="object-cover w-full "
                src={ridwansuhel}
                alt="ridwan-suhel"
              />
            </div>

            <div className="md:w-3/4 pb-10 mx-auto about-content-wrapper mt-10 flex justify-between items-center ">
              <div className="intro-wrapper md:w-3/5 ">
                <h2 className="about-me text-2xl mb-8 font-bold">About Me</h2>
                <p className="text-xl about-me-txt1 mb-8">
                  Hello there, I'm <strong> Ridwan Hussen Suhel</strong> . I am
                  a Web Developer, with a good knowledge of HTML/CSS, React JS,
                  Node JS, and Expertise with Bootstrap, Tailwind CSS,
                  Javascript, and Sass/Scss.
                </p>
                <p className="text-xl about-me-txt2">
                  I am experienced with converting any design file to HTML CSS
                  with a fully <strong>responsive design</strong>. As a junior
                  web developer, I have developed web-based applications from
                  design to code and implemented backend technologies like Node
                  js, Express js, MongoDB, and so on for my projects. I love and
                  enjoy what I do and always looking for an opportunity to do
                  better and achieve greatness.
                </p>
              </div>
              <div className="about-social md:w-2/5">
                <ul className="text-2xl text-right social-ul">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ridwan-suhel"
                    className="social1"
                  >
                    <li>
                      <Icon
                        className="w-8 h-8 ml-auto"
                        icon="akar-icons:github-outline-fill"
                      />
                    </li>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="linkedin.com/in/ridwan-suhel/"
                    className="social2"
                  >
                    <li>
                      <Icon
                        className="w-8 h-8 ml-auto"
                        icon="teenyicons:linkedin-outline"
                      />
                    </li>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/RidwanSuhel"
                    className="social3"
                  >
                    <li>
                      <Icon
                        className="w-8 h-8 ml-auto"
                        icon="iconoir:twitter"
                      />
                    </li>
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/RidwanSuhel/"
                    className="social4"
                  >
                    <li>
                      <Icon
                        className="w-8 h-8 ml-auto"
                        icon="icon-park-outline:facebook-one"
                      />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
          {/* page container end */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;

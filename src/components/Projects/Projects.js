import React, { useEffect, useRef } from "react";
import "./Projects.css";
import project1 from "../../images/pr-1.png";
import project2 from "../../images/pr-2.png";
import project3 from "../../images/pr-3.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  let prTitleTxt = useRef(null);
  let prTitleTxt2 = useRef(null);

  useEffect(() => {
    const titleTrigger = [prTitleTxt.current, prTitleTxt2.current];
    gsap.fromTo(
      titleTrigger,
      { y: 90, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: titleTrigger,
        },
      }
    );
  }, []);

  return (
    <section className="py-20 project-section">
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="portfolio-bottom mb-10">
          <div>
            <p
              ref={prTitleTxt}
              className="text-gray-400 mb-2 text-left md:text-center text-xl"
            >
              Projects
            </p>
            <h1 ref={prTitleTxt2} className="text-xl text-left md:text-center ">
              My Recent works That I love to Show.
            </h1>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {/* single-card  */}
          <a
            href="https://toolsplaza.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 flex"
          >
            <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
              <figure className="card-top">
                <img src={project1} alt="Gadgetly" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">ToolsPlaza!</h2>
                <p className="mb-2">
                  ToolsPlaza is a tools manufacturer website. This website made
                  with <strong>Node js</strong>, express js,{" "}
                  <strong>react js, react-router</strong>, Bootstrap, Firebase
                  Authentication.
                </p>
                <p>
                  Admin role added &amp; user can add product, delete product,
                  update product &amp; more
                </p>
              </div>
            </div>
          </a>
          {/* single-card  */}
          <a
            href="https://gadgetly-3045d.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 flex"
          >
            <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
              <figure className="card-top">
                <img src={project2} alt="Tutorplus" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Gadgetly!</h2>
                <p className="mb-2">
                  Gadgetly is the wearhouse type simple website. This website
                  made with <strong>Node js</strong>, express js,{" "}
                  <strong>react js, react-router</strong>, Bootstrap, Firebase
                  Authentication.
                </p>
                <p>
                  A user can add product, delete product, update product &amp;
                  more
                </p>
              </div>
            </div>
          </a>
          {/* single-card  */}
          <a
            href="https://ridwan-suhel.github.io/maEng/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 flex"
          >
            <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
              <figure className="card-top">
                <img src={project3} alt="Tutorplus" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">MaEng!</h2>
                <p className="mb-2">
                  MaEng is an Electro Mechanical Solution &amp; Service provider
                  website. This website made with<strong>Bootstrap </strong>
                  ,CSS, HTML, <strong>Responsive website</strong>, jQuery.
                </p>
                <p>
                  This is multipage website &amp; fully responsive for all
                  device.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

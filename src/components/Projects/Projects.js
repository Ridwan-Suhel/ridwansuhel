import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import project1 from "../../images/pr-1.png";
import project2 from "../../images/pr-2.png";
import project3 from "../../images/pr-3.png";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const [projectInfo, setProjectInfo] = useState([]);

  let projectsTl = useRef();
  let prTitleTxt = useRef(null);
  let prTitleTxt2 = useRef(null);
  let proj1 = useRef(null);
  let proj2 = useRef(null);
  let proj3 = useRef(null);

  useEffect(() => {
    const titleTrigger = [prTitleTxt.current, prTitleTxt2.current];

    gsap.fromTo(
      titleTrigger,
      { y: 10, opacity: 0 },
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

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      gsapAnim();
    }, 1000);
  }, []);

  const fetchData = async () => {
    await fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectInfo(data);
      });
  };
  const gsapAnim = () => {
    const projectDiv1 = ".projectDiv1";
    const projectDiv2 = ".projectDiv2";
    const projectDiv3 = ".projectDiv3";
    gsap.fromTo(
      [projectDiv1, projectDiv2, projectDiv3],
      { y: 170, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,

        stagger: 0.2,
        scrollTrigger: {
          trigger: ".trigger-container",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  };

  return (
    <section className="py-20 project-section">
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="portfolio-top mb-10">
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
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 trigger-container">
          {/* single-card  */}

          {projectInfo.map((project) => (
            <a
              ref={proj2}
              href="https://gadgetly-3045d.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`col-span-1 flex ${project.projectDivClass}`}
              key={project.id}
            >
              <div className="rounded single-card w-full bg-base-100 shadow border border-primary">
                <figure className="card-top">
                  <img src={project.image} alt="Tutorplus" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p className="mb-2">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

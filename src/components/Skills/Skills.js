import React, { useEffect } from "react";
import "./Skills.css";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const technicalSkills = [
    { skill: "HTML/HTML5" },
    { skill: "CSS/CSS3" },
    { skill: "Javascript" },
  ];
  const frameworkSkills = [
    { skill: "React Js" },
    { skill: "Node js/Express js" },
    { skill: "Tailwind" },
    { skill: "Bootstrap" },
  ];
  const familiarSkills = [
    { skill: "Jquery" },
    { skill: "Gsap" },
    { skill: "SASS/SCSS" },
  ];
  const otherkSkills = [
    { skill: "Git/Github" },
    { skill: "Firebase Authentication" },
    { skill: "Wordpress " },
    { skill: "Figma UI/UX, & more" },
  ];

  useEffect(() => {
    const skillTitle1 = ".skills-title-txt1";
    const skillTitle2 = ".skills-title-txt2";
    const box1 = ".box1";
    const box2 = ".box2";
    const box3 = ".box3";
    const box4 = ".box4";

    gsap.fromTo(
      [skillTitle1, skillTitle2],
      { y: 170, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skills-title-wrapper",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      [box1, box2, box3, box4],
      { y: 170, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".skill-card-wrapper",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="py-20 skills-section ">
      <div className="container mx-auto px-4 md:px-0 ">
        <div className="skills-title-wrapper lg:text-center">
          <h2 className="skills-title-txt1 text-2xl font-bold">Skills</h2>
          <p className="text-lg skills-title-txt2">
            Check my skills list that I love to work with.
          </p>
        </div>
        <div className="skill-card-wrapper grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-16">
          <div className="skill-box shadow border rounded p-5 box1">
            <div>
              <h2 className="text-xl mb-5">Technical Skills</h2>

              {technicalSkills.map((skill) => (
                <p className="text-lg text-gray-500 mb-1">{skill.skill}</p>
              ))}
            </div>
          </div>

          <div className="skill-box shadow border rounded p-5 box2">
            <div>
              <h2 className="text-xl mb-5">Framework/Library Skills</h2>

              {frameworkSkills.map((skill) => (
                <p className="text-lg text-gray-500 mb-1">{skill.skill}</p>
              ))}
            </div>
          </div>

          <div className="skill-box shadow border rounded p-5 box3">
            <div>
              <h2 className="text-xl mb-5">Familiar Skills</h2>

              {familiarSkills.map((skill) => (
                <p className="text-lg text-gray-500 mb-1">{skill.skill}</p>
              ))}
            </div>
          </div>
          <div className="skill-box shadow border rounded p-5 box4">
            <div>
              <h2 className="text-xl mb-5">Otherk Skills</h2>

              {otherkSkills.map((skill) => (
                <p className="text-lg text-gray-500 mb-1">{skill.skill}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

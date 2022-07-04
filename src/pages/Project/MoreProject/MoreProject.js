import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MoreProject.css";
import MoreProjectCard from "./MoreProjectCard";
import gsap, { Bounce, Power1, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MoreProject = () => {
  const [prData, setPrData] = useState([]);

  let moreprTitleTxt = useRef(null);
  let moreprTitleTxt2 = useRef(null);

  useEffect(() => {
    // const titleTrigger = [moreprTitleTxt.current, moreprTitleTxt2.current];
    const title1 = ".title-1";
    const title2 = ".title-2";

    gsap.fromTo(
      [title1, title2],
      { y: 170, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    callData();
    setTimeout(() => {
      animGsap();
    }, 100);
  }, []);

  const callData = async () => {
    await fetch("moreProject.json")
      .then((res) => res.json())
      .then((data) => {
        setPrData(data);
      });
  };

  const animGsap = () => {
    const project1 = ".mProjectDiv1";
    const project2 = ".mProjectDiv2";
    const project3 = ".mProjectDiv3";
    const project4 = ".mProjectDiv4";
    const project5 = ".mProjectDiv5";
    gsap.fromTo(
      [project1, project2, project3, project4, project5],
      { y: 170, opacity: 0 },
      {
        y: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".mrprTrigger-container",
          start: "top 90%",
          toggleActions: "restart none none reverse",
        },
      }
    );
  };

  return (
    <section className="ff-merri mb-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="wrapper">
          <h2
            ref={moreprTitleTxt}
            className="text-gray-400 mb-1 text-left text-xl title-1"
          >
            Check more projects
          </h2>
          <p ref={moreprTitleTxt2} className="text-lg text-left title-2">
            Here are some more works. If you are interested then feel free to
            visit.
          </p>
        </div>

        <div className="mrprTrigger-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 pt-10">
          {prData.map((data, index) => (
            <MoreProjectCard key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProject;

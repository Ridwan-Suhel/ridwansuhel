import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./Loading/Loading";
import "./ProjectDetails.css";
import { Icon } from "@iconify/react";
import gsap, { Power3 } from "gsap";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // const [projDetails, setProjDetails] = useState({});

  const url = `https://nameless-mountain-09052.herokuapp.com/projects/${projectId}`;

  const { isLoading, data: projects } = useQuery("projects", () =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    setTimeout(() => {
      gsap.fromTo(
        ".projTitle",
        { y: 70, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".projTitle2",
        { y: 70, opacity: 0 },
        {
          duration: 1,
          delay: 0.3,
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".projTitle3",
        { y: 70, opacity: 0 },
        {
          duration: 1,
          delay: 0.5,
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".technology-wrapper",
        { y: 70, opacity: 0 },
        {
          duration: 1,
          delay: 0.7,
          y: 0,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".technology-links",
        { y: 70, opacity: 0 },
        {
          duration: 1,
          delay: 0.9,
          y: 0,
          opacity: 1,
        }
      );

      const projectDiv1 = ".projectDiv1";
      const projectDiv2 = ".projectDiv2";
      const projectDiv3 = ".projectDiv3";
      gsap.fromTo(
        [projectDiv1, projectDiv2, projectDiv3],
        { y: 70, opacity: 0 },
        {
          y: 0,
          duration: 0.7,
          opacity: 1,
          delay: 0.5,

          stagger: 0.2,
          scrollTrigger: {
            trigger: ".ss-container",
            start: "top 90%",
            toggleActions: "restart none none reverse",
          },
        }
      );
    }, 100);
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="ProjectDetails-section mt-10 ">
      <div className="container mx-auto p-5 md:p-10 bg-[#0097e629] rounded-lg">
        <div className="details-wrapper md:flex justify-between">
          <div className="project-detail-part md:w-3/6  w-full">
            <h2 className="text-xl mb-4 projTitle">
              Project Name: <strong>{projects.title}</strong>
            </h2>
            <div>
              <h2 className="text-xl mb-3 projTitle2">About Project:</h2>
              <p className="text-md projTitle3"> {projects.description}</p>
            </div>
            <div className="mt-4 technology-wrapper">
              <h2 className="text-xl mb-3">Technologies used</h2>
              <div className="flex gap-3 flex-wrap">
                {projects?.technology?.map((tech) => (
                  <small className="py-1 px-3 border border-primary rounded inline">
                    {tech}
                  </small>
                ))}
              </div>
            </div>

            <div className="mt-6 technology-links">
              <h2 className="text-xl mb-3">Related Links</h2>
              <div className="md:flex gap-3 text-indigo-600">
                <a
                  href={projects?.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md  flex mt-2"
                >
                  <span>Live Link</span> <Icon icon="bx:link-external" />
                </a>
                <a
                  href={projects?.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md flex mt-2"
                >
                  <span>Client Side Link</span> <Icon icon="bx:link-external" />
                </a>

                {projects?.serverLink && (
                  <a
                    href={projects?.serverLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md flex mt-2"
                  >
                    <span>Server Side Link</span>{" "}
                    <Icon icon="bx:link-external" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="proj-img-wrapper w-full mt-8 md:mt-0  md:w-3/6">
            <img
              src={projects.image}
              className="object-cover w-full"
              alt="img"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 px-4">
        <div className="proj-screenshot-wrapper">
          <h2 className="text-xl mb-4">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ss-container">
            {projects.imagess.map((img) => (
              <div
                className={`border shadow p-5  ${projects?.projectDivClass}`}
              >
                <img src={img} alt="imageSS" className="border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

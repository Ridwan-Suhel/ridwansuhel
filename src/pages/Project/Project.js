import React from "react";
import Projects from "../../components/Projects/Projects";
import MoreProject from "./MoreProject/MoreProject";

const Project = () => {
  return (
    <main>
      <div className="project-section">
        <div className="">
          <Projects />
        </div>
      </div>
      <MoreProject />
    </main>
  );
};

export default Project;

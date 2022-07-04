import React from "react";
import Footer from "../../components/Footer/Footer";
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
      <Footer />
    </main>
  );
};

export default Project;

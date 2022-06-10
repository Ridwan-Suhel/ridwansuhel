import React from "react";
import Projects from "../../components/Projects/Projects";

const Project = () => {
  return (
    <main>
      <section className="py-5 project-section">
        <div className="container mx-auto px-4 md:px-0 project-title">
          <Projects />
        </div>
      </section>
    </main>
  );
};

export default Project;

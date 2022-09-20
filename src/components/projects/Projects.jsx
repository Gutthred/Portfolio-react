import React from "react";
import Repo from './githubRepo'



const Projects = () => {
  return (
    <section className="projects__container" id="projects">
      <h2>Projetos</h2>
      <section className="project__container">
      <Repo/>
      </section>
    </section>
  );
  
};

export default Projects;

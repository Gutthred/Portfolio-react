import React from "react";
import Repo from './githubRepo'



const Projects = () => {
  return (
    <section id="projects">
      <h2>Projetos</h2>
      <section className="projects__container">
      <Repo/>
      </section>
    </section>
  );
};

export default Projects;

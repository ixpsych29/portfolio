import React from "react";
import { projects } from "../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faProjectDiagram } from "@fortawesome/fontawesome-free-solid";

const Projects = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faProjectDiagram} /> Projects
      </h4>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="highlight">{project.title}</div>
          {project.works.map((work, index) => (
            <p key={index}>- {work}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Projects;

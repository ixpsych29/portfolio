import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/fontawesome-free-solid";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faBriefcase} /> Experience
      </h4>
      {experiences.map((experience, index) => (
        <div key={index} className="project">
          <div className="highlight">{experience.title}</div>
          {experience.works.map((work, index) => (
            <p key={index}>- {work}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;

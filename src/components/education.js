import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/fontawesome-free-solid";
import { education } from "../data/education";

const Education = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faUserGraduate} /> Education
      </h4>
      {education.map((edu, index) => (
        <div key={index}>- {edu}</div>
      ))}
    </div>
  );
};

export default Education;

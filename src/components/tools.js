import React from "react";
import { tools } from "../data/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/fontawesome-free-solid";

const Tools = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faCodeBranch} /> Tools & More
      </h4>
      {tools.map((tool, index) => (
        <div key={index}>- {tool}</div>
      ))}
    </div>
  );
};

export default Tools;

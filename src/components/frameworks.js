import React from "react";
import { frameworks } from "../data/frameworks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/fontawesome-free-solid";

const Frameworks = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faCodeBranch} /> Frameworks
      </h4>
      {frameworks.map((framwork, index) => (
        <div key={index}>- {framwork}</div>
      ))}
    </div>
  );
};

export default Frameworks;

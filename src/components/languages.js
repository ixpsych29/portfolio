import React from "react";
import { languages } from "../data/languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/fontawesome-free-solid";

const Languages = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faCode} /> Languages
      </h4>
      {languages.map((language, index) => (
        <div key={index}>- {language}</div>
      ))}
    </div>
  );
};

export default Languages;

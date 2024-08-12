import React from "react";
import { cloudPlatforms } from "../data/cloud";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/fontawesome-free-solid";

const CloudPlatforms = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faCloud} /> Cloud Platforms
      </h4>
      {cloudPlatforms.map((cloudPlatform, index) => (
        <div key={index}>- {cloudPlatform}</div>
      ))}
    </div>
  );
};

export default CloudPlatforms;

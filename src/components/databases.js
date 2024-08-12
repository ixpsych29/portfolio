import React from "react";
import { databases } from "../data/databases";
import { faDatabase } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Databases = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faDatabase} /> Databases
      </h4>
      {databases.map((database, index) => (
        <div key={index}>- {database}</div>
      ))}
    </div>
  );
};

export default Databases;

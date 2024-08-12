import React from "react";
import { commands } from "../data/commands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/fontawesome-free-solid";

const Commands = () => {
  return (
    <div className="content">
      <h4 className="highlight">
        <FontAwesomeIcon icon={faTerminal} /> Commands
      </h4>
      {commands.map((command, index) => {
        return (
          <div key={index} className="command">
            <p className="command-name">{command.name}</p>
            <p className="command-description">- {command.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Commands;

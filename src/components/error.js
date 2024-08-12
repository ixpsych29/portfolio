import { faExclamationCircle } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Error = () => {
  return (
    <p className="content">
      <span className="highlight">
        <FontAwesomeIcon icon={faExclamationCircle} /> OOPS!
      </span>{" "}
      Command not found. Type <span className="highlight">man</span> to see the
      list of available commands
    </p>
  );
};

export default Error;

import React from "react";
import TerminalHeader from "./terminalHeader";
import TerminalBody from "./terminalBody";

const Terminal = () => {
  return (
    <div
      className="terminal"
      onClick={() => document.getElementById("input-field").focus()}
    >
      <TerminalHeader />
      <TerminalBody />
    </div>
  );
};

export default Terminal;

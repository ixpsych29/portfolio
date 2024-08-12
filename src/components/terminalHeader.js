import React from "react";

const TerminalHeader = () => {
  return (
    <div className="terminal-header">
      <div className="terminal-title highlight">
        muhammad-abdullah@fullstack-developer: ~/Portfolio
      </div>
      <div className="circles-container">
        <p className="green-circle"></p>
        <p className="yellow-circle"></p>
        <p className="red-circle"></p>
      </div>
    </div>
  );
};

export default TerminalHeader;

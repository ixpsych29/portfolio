import React, { useState } from "react";

const Input = ({ handleCommand }) => {
  const [value, setValue] = useState("");

  const commands = [
    "man",
    "intro",
    "education",
    "languages",
    "frameworks",
    "cloud",
    "databases",
    "tools",
    "projects",
    "experience",
    "reload",
    "clear",
  ];

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const command = commands.find((com) =>
        com.startsWith(e.target.value.trim().toLowerCase())
      );
      if (command) {
        setValue(command);
      }
    } else if (e.key === "Enter") {
      handleCommand(value);
      setValue("");
    }
  };

  return (
    <div className="input-container">
      <p className="highlight">
        muhammad-abdullah@fullstack-developer: ~/Portfolio:
      </p>
      <input
        type="text"
        className="input-field"
        id="input-field"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autocomplete="off"
      />
    </div>
  );
};

export default Input;

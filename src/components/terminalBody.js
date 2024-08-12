import React, { useState } from "react";
import Input from "./input";
import TerminalIntro from "./terminalIntro";
import Commands from "./commands";
import Languages from "./languages";
import Intro from "./intro";
import Frameworks from "./frameworks";
import CloudPlatforms from "./cloud";
import Error from "./error";
import Databases from "./databases";
import Tools from "./tools";
import Projects from "./projects";
import Education from "./education";
import Experience from "./experience";

const TerminalBody = () => {
  const [components, setComponents] = useState([]);

  const handleCommand = (command) => {
    if (command.toLowerCase().trim() === "reload") {
      window.location.reload();
    } else if (command.toLowerCase().trim() === "clear") {
      setComponents([]);
    } else {
      switch (command.toLowerCase().trim()) {
        case "man":
          setComponents((prevComponents) => [...prevComponents, <Commands />]);
          break;
        case "intro":
          setComponents((prevComponents) => [...prevComponents, <Intro />]);
          break;
        case "education":
          setComponents((prevComponents) => [...prevComponents, <Education />]);
          break;
        case "experience":
          setComponents((prevComponents) => [
            ...prevComponents,
            <Experience />,
          ]);
          break;
        case "languages":
          setComponents((prevComponents) => [...prevComponents, <Languages />]);
          break;
        case "frameworks":
          setComponents((prevComponents) => [
            ...prevComponents,
            <Frameworks />,
          ]);
          break;
        case "cloud":
          setComponents((prevComponents) => [
            ...prevComponents,
            <CloudPlatforms />,
          ]);
          break;
        case "databases":
          setComponents((prevComponents) => [...prevComponents, <Databases />]);
          break;
        case "tools":
          setComponents((prevComponents) => [...prevComponents, <Tools />]);
          break;
        case "projects":
          setComponents((prevComponents) => [...prevComponents, <Projects />]);
          break;
        default:
          setComponents((prevComponents) => [...prevComponents, <Error />]);
          break;
      }
    }
  };

  return (
    <div className="terminal-body">
      <TerminalIntro />
      <div className="output-container">{components}</div>
      <Input handleCommand={handleCommand} />
    </div>
  );
};

export default TerminalBody;

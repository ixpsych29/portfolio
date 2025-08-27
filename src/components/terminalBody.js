import React, { useState, useEffect, useRef } from 'react';
import Input from './input';
import TerminalIntro from './terminalIntro';
import Commands from './commands';
import Languages from './languages';
import Intro from './intro';
import Frameworks from './frameworks';
import CloudPlatforms from './cloud';
import Error from './error';
import Databases from './databases';
import Tools from './tools';
import Projects from './projects';
import Education from './education';
import Experience from './experience';

const TerminalBody = () => {
  const [components, setComponents] = useState([]);
  const outputContainerRef = useRef(null);
  const terminalBodyRef = useRef(null);

  // Always scroll to bottom when new output is added
  useEffect(() => {
    if (components.length > 0) {
      const terminalBody = terminalBodyRef.current;
      if (terminalBody) {
        // Always scroll to the bottom to show new output
        setTimeout(() => {
          terminalBody.scrollTop = terminalBody.scrollHeight;
        }, 150);
      }
    }
  }, [components]);

  const handleCommand = (command) => {
    if (command.toLowerCase().trim() === 'reload') {
      window.location.reload();
    } else if (command.toLowerCase().trim() === 'clear') {
      setComponents([]);
    } else {
      switch (command.toLowerCase().trim()) {
        case 'man':
          setComponents((prevComponents) => [...prevComponents, <Commands />]);
          break;
        case 'intro':
          setComponents((prevComponents) => [...prevComponents, <Intro />]);
          break;
        case 'education':
          setComponents((prevComponents) => [...prevComponents, <Education />]);
          break;
        case 'experience':
          setComponents((prevComponents) => [
            ...prevComponents,
            <Experience />,
          ]);
          break;
        case 'languages':
          setComponents((prevComponents) => [...prevComponents, <Languages />]);
          break;
        case 'frameworks':
          setComponents((prevComponents) => [
            ...prevComponents,
            <Frameworks />,
          ]);
          break;
        case 'cloud':
          setComponents((prevComponents) => [
            ...prevComponents,
            <CloudPlatforms />,
          ]);
          break;
        case 'databases':
          setComponents((prevComponents) => [...prevComponents, <Databases />]);
          break;
        case 'tools':
          setComponents((prevComponents) => [...prevComponents, <Tools />]);
          break;
        case 'projects':
          setComponents((prevComponents) => [...prevComponents, <Projects />]);
          break;
        default:
          setComponents((prevComponents) => [...prevComponents, <Error />]);
          break;
      }
    }
  };

  return (
    <div className='terminal-body' ref={terminalBodyRef}>
      <TerminalIntro />
      <div className='output-container' ref={outputContainerRef}>
        {components}
      </div>
      <Input handleCommand={handleCommand} />
    </div>
  );
};

export default TerminalBody;

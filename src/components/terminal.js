import React, { useEffect, useState } from 'react';
import TerminalHeader from './terminalHeader';
import TerminalBody from './terminalBody';

const Terminal = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Focus the input field after terminal loads
      setTimeout(() => {
        const inputField = document.getElementById('input-field');
        if (inputField) {
          inputField.focus();
        }
      }, 800); // Wait for entrance animation to complete
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const inputField = document.getElementById('input-field');
    if (inputField) {
      inputField.focus();
      // Add a subtle focus effect
      inputField.style.transform = 'scale(1.02)';
      setTimeout(() => {
        inputField.style.transform = 'scale(1)';
      }, 200);
    }
  };

  return (
    <div
      className={`terminal ${isLoaded ? 'terminal-loaded' : ''}`}
      onClick={handleClick}
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded
          ? 'translate(-50%, -50%)'
          : 'translate(-50%, -50%) scale(0.95)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <TerminalHeader />
      <TerminalBody />
    </div>
  );
};

export default Terminal;

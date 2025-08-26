import React, { useState, useEffect, useRef } from 'react';

const Input = ({ handleCommand }) => {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  // Auto-focus the input field when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const commands = [
    'man',
    'intro',
    'education',
    'languages',
    'frameworks',
    'cloud',
    'databases',
    'tools',
    'projects',
    'experience',
    'reload',
    'clear',
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const command = commands.find((com) =>
        com.startsWith(e.target.value.trim().toLowerCase())
      );
      if (command) {
        setValue(command);
      }
    } else if (e.key === 'Enter') {
      handleCommand(value);
      setValue('');
      // Re-focus after command execution
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 100);
    }
  };

  // Calculate input width based on content length
  const getInputWidth = () => {
    const minWidth = 200; // Minimum width
    const charWidth = 12; // Approximate width per character
    const calculatedWidth = Math.max(minWidth, value.length * charWidth);
    return `${calculatedWidth}px`;
  };

  return (
    <div className='input-container'>
      <p className='highlight'>
        muhammad-abdullah@fullstack-developer: ~/Portfolio:
      </p>
      <input
        ref={inputRef}
        type='text'
        className='input-field'
        id='input-field'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete='off'
        style={{
          width: getInputWidth(),
          minWidth: '200px',
          maxWidth: '80vw',
        }}
      />
    </div>
  );
};

export default Input;

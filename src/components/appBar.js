import React from "react";
import { socialMediaLinks } from "../data/socialMedia";
import resumeFile from "../assets/resume.pdf";
import resume from "../assets/resume.svg";

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-links-wrapper">
        {socialMediaLinks.map((link, index) => {
          return (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="app-link"
            >
              <img src={link.icon} alt={link.name} />
            </a>
          );
        })}
        <a
          href={resumeFile}
          download="M_Abdullah_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
        >
          <img src={resume} alt="Download My Resume" />
        </a>
      </div>
    </div>
  );
};

export default AppBar;

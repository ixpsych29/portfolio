import { faUserAlt } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Intro = () => {
  return (
    <div className="command">
      <div className="intro ">
        <div>
          <h4 className="highlight">
            <FontAwesomeIcon icon={faUserAlt} /> About Me
          </h4>
        </div>
        <div>
          <p>
            - Hello! My name is{" "}
            <span className="highlight">Muhammad Abdullah</span>. I am from{" "}
            <span className="highlight">Lahore, Pakistan</span>
          </p>
          <p>
            - I am a{" "}
            <span className="highlight">Fullstack Software Engineer</span>{" "}
            mainly focusing on Web Applications.
          </p>
          <p>
            - A <span className="highlight">MERN Stack Maestro</span>, coding
            faster than a speeding bullet and debugging more powerfully than a
            locomotive.
          </p>
          <p>
            - I'm a <span className="highlight">PUCIT</span> grad from batch{" "}
            <span className="highlight">2019-23</span>.
          </p>
          <p>
            - I like <span className="highlight">Memes</span> and love to write{" "}
            <span className="highlight">Articles</span>.
          </p>
          <p>
            - Explore the <span className="highlight">LinkVerse</span> below to
            connect with me on any platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

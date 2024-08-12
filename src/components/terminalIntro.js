import React from "react";

const TerminalIntro = () => {
  return (
    <div className="terminal-intro">
      Hi! I am <span className="highlight">Muhammad Abdullah</span>. I am a
      full-time <span className="highlight">Software Engineer</span> and{" "}
      <span className="highlight">Freelancer</span>.<br></br>
      Type <span className="highlight">man</span> to see the list of commands.
      <br></br>
      Press <span className="highlight">tab</span> to auto-complete the command.
    </div>
  );
};

export default TerminalIntro;

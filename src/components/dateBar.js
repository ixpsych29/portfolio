import React from "react";
import { useState, useEffect } from "react";

const DateBar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    function formatTime(date) {
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      return date.toLocaleString("en-US", options);
    }

    function updateTime() {
      const now = new Date();
      const timeString = formatTime(now);
      setTime(timeString);
    }

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="date-bar">
      <p>{time}</p>
    </div>
  );
};

export default DateBar;

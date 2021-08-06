import React, { useState, useEffect } from "react";
import "./PresetBtn.scss";

export default function PresetBtn({ preset }) {
  const [totalTime, setTotalTime] = useState("");

  useEffect(() => {
    const calcTotalTime = () => {
      const entryTimeArr = preset.intervals.map((entry) => entry.timeInSeconds);
      const totalSeconds = entryTimeArr.reduce((acc, time) => acc + time);
      const formattedTotalTime = new Date(1000 * totalSeconds)
        .toISOString()
        .substr(11, 8);
      console.log(formattedTotalTime);
      setTotalTime(formattedTotalTime);
    };

    calcTotalTime();
  }, []);

  return (
    <div className="preset-btn">
      <div className="preset-btn-details">
        <h3>{preset.name}</h3>
        <h4>{`Creator: ${preset.user}`}</h4>
        <h4>{`Total Time: ${preset.totalTimeFormatted}`}</h4>
      </div>
    </div>
  );
}

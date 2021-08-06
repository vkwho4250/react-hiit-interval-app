import React, { useState } from "react";
import Interval from "./Interval";
import "./IntervalDisplay.scss";

export default function IntervalDisplay() {
  const [focusIndex, setFocusIndex] = useState(8);
  const [allIntervals, setAllIntervals] = useState([]);

  return (
    <section id="interval-display-container">
      <h3>Your Workout</h3>
      <div className="interval-display">
        {allIntervals.map((interval, index) => {
          return (
            <Interval
              key={index}
              interval={interval}
              index={index}
              totalIntervals={allIntervals.length - 2}
              focusIndex={focusIndex}
            />
          );
        })}
      </div>
    </section>
  );
}

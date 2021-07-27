import React, { useState } from "react";
import Interval from "./Interval";
import "./IntervalDisplay.scss";

export default function IntervalDisplay() {
  const [focusIndex, setFocusIndex] = useState(8);
  const [allIntervals, setAllIntervals] = useState([
    {
      type: "prep",
      name: "prep",
      timeInSeconds: 20,
      timeFormatted: "0:20",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },
    {
      type: "work",
      name: "work",
      timeInSeconds: 60,
      timeFormatted: "1:00",
    },
    {
      type: "rest",
      name: "rest",
      timeInSeconds: 30,
      timeFormatted: "0:30",
    },

    {
      type: "cool",
      name: "cool",
      timeInSeconds: 10,
      timeFormatted: "0:10",
    },
  ]);

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

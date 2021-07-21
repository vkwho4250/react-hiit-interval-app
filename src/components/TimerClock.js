import React from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";

export default function TimerClock() {
  return (
    <div className="timer-clock-container">
      <div className="timer-clock">
        <div className="timer-nav">
          <button className="timer-nav-btn timer-nav-back">
            <KeyboardArrowUp className="arrow arrow-up" />
          </button>
          <button className="timer-nav-btn timer-nav-forward">
            <KeyboardArrowDown className="arrow arrow-down" />
          </button>
        </div>
        <div className="timer-wheel"></div>
        <div className="timer-display">
          <h2>Work</h2>
          <h1>5:00</h1>
          <h3>25:00</h3>
        </div>
      </div>
      <div className="timer-button-container">
        <button>Start Session</button>
        <button>End Session</button>
      </div>
    </div>
  );
}

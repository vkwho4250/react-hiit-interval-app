import React from "react";
import "./Timer.scss";

import TimerClock from "./TimerClock";

export default function Timer() {
  return (
    <section id="timer" className="page">
      <TimerClock />
    </section>
  );
}

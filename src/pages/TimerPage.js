import React from "react";
import Timer from "../components/Timer/Timer";
import Intervals from "../components/Intervals/IntervalDisplay";

import "./TimerPage.scss";

export default function TimerPage() {
  return (
    <div id="timer-page">
      <Timer />
      <Intervals />
    </div>
  );
}

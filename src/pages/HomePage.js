import React from "react";
import "./HomePage.scss";
import ClassicIntervalBtn from "../components/HomeMenuBtns/ClassicIntervalBtn";
import DynamicTimerBtn from "../components/HomeMenuBtns/DynamicTimerBtn";

export default function HomePage() {
  return (
    <div id="home-page">
      <h1>HIIT Workout Timer</h1>
      <div className="menu-container">
        <div className="timer-btns-container">
          <ClassicIntervalBtn />
          <DynamicTimerBtn />
        </div>
        <div className="preset-container"></div>
      </div>
    </div>
  );
}

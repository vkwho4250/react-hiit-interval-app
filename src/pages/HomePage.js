import React from "react";
import "./HomePage.scss";
import ClassicIntervalBtn from "../components/HomeMenuBtns/ClassicIntervalBtn";
import DynamicTimerBtn from "../components/HomeMenuBtns/DynamicTimerBtn";
import PresetSelector from "../components/HomeMenuBtns/Presets/PresetSelector";

export default function HomePage() {
  return (
    <div id="home-page">
      <h1>HIIT Workout Timer</h1>
      <div className="menu-container">
        <div className="timer-btns-container">
          <ClassicIntervalBtn />
          <DynamicTimerBtn />
        </div>
        <PresetSelector />
      </div>
    </div>
  );
}

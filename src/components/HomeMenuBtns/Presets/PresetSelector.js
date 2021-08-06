import React from "react";
import "./PresetSelector.scss";
import PresetBtn from "./PresetBtn";

export default function PresetSelector() {
  const testObject = {
    user: "John",
    presetName: "HIIT Jumping",
    preset: [
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
        type: "cool",
        name: "cool",
        timeInSeconds: 10,
        timeFormatted: "0:10",
      },
    ],
  };

  return (
    <div className="preset-selector">
      <div className="btn-header">
        <h2>Presets</h2>
      </div>
      <div className="preset-options"></div>
      <div className="preset-container">
        <div className="preset-grid-container">
          <PresetBtn />
          <PresetBtn />
          <PresetBtn />
        </div>
      </div>
    </div>
  );
}

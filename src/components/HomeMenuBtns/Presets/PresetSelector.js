import React, { useState } from "react";
import "./PresetSelector.scss";
import PresetBtn from "./PresetBtn";

import testPresets from "../../../testData";

export default function PresetSelector() {
  const [testing, setTesting] = useState(testPresets);

  return (
    <div className="preset-selector">
      <div className="btn-header">
        <h2>Presets</h2>
      </div>
      <div className="preset-options"></div>
      <div className="preset-container">
        <div className="preset-grid-container">
          {testing.map((preset, index) => {
            return <PresetBtn key={index} preset={preset} />;
          })}
        </div>
      </div>
    </div>
  );
}

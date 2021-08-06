import React, { useState } from "react";
import "./ClassicIntervalBtn.scss";
import { Timer, Bookmark } from "@material-ui/icons";

export default function ClassicIntervalBtn() {
  return (
    <div className="classic-interval-btn home-menu-btn">
      <div className="btn-header-footer btn-header">
        <Timer className="m-ui-icon" />
        <h2>Classic Interval Timer</h2>
      </div>

      <div className={`btn-details-container`}>
        <div className="description">
          <h3>Set:</h3>
          <ul>
            <li className="rounds">
              <div className="type-dot"></div>
              <p>Number of Rounds</p>
            </li>
            <li className="prep">
              <div className="type-dot"></div>
              <p>Prep Time</p>
            </li>
            <li className="work">
              <div className="type-dot"></div>
              <p>Work Time</p>
            </li>
            <li className="rest">
              <div className="type-dot"></div>
              <p>Rest Time</p>
            </li>
            <li className="cool">
              <div className="type-dot"></div>
              <p>Cooling Time</p>
            </li>
          </ul>
        </div>

        <div className="btn-header-footer">
          <Bookmark className="m-ui-icon bookmark" />
          <p>Save your custom timer as a preset</p>
        </div>
      </div>
    </div>
  );
}

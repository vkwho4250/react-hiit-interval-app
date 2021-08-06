import React from "react";
import "./DynamicTimerBtn.scss";
import { LowPriority, Bookmark } from "@material-ui/icons";

export default function DynamicTimerBtn() {
  return (
    <div className="dynamic-timer-btn home-menu-btn">
      <div className="btn-header-footer btn-header">
        <LowPriority className="m-ui-icon" />
        <h2>Dynamic Timer</h2>
      </div>
      <div className={`btn-details-container`}>
        <div className="description">
          <h3>Fully customizable interval timer</h3>
          <p>Add, edit, and arrange intervals to your liking</p>
        </div>
        <div className="btn-header-footer">
          <Bookmark className="m-ui-icon bookmark" />
          <p>Save your custom timer as a preset</p>
        </div>
      </div>
    </div>
  );
}

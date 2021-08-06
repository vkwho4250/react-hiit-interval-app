import React from "react";
import "./ClassicTimerPage.scss";
import Entry from "../components/Entry/Entry";

export default function ClassicTimerPage() {
  return (
    <div id="classic-timer-page">
      <div className="page-header">
        <h1>Classic Interval Timer</h1>
      </div>
      <div className="content-flex-container">
        <div className="entries-container">
          <Entry type="prep" />
          <Entry type="work" />
          <Entry type="rest" />
          <Entry type="cool" />
        </div>
        <div className="rounds-container"></div>
      </div>
    </div>
  );
}

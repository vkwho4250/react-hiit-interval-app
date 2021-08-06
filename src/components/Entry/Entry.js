import React from "react";
import "./Entry.scss";
import NumScroller from "./NumScroller";

export default function Entry({ type }) {
  return (
    <div className={`entry ${type}`}>
      <h2>{type}</h2>
      <div className="num-scroller-container">
        <NumScroller />
        <h3>:</h3>
        <NumScroller />
      </div>
    </div>
  );
}

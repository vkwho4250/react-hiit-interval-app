import React from "react";
import "./Interval.scss";

export default function Interval({
  interval,
  index,
  totalIntervals,
  focusIndex,
}) {
  return (
    <div className={`interval ${focusIndex === index ? "inFocus" : ""}`}>
      <div className={`interval-header ${interval.type}`}>
        <div className="type-dot"></div>

        {focusIndex === index && (
          <div className="interval-details">
            <h1>
              {interval.name}
              <span>{interval.timeFormatted}</span>
            </h1>
          </div>
        )}
        {(interval.type === "work" || interval.type === "rest") && (
          <h2 className="fraction">
            {index}/{totalIntervals}
          </h2>
        )}
        {(interval.type === "prep" || interval.type === "cool") && (
          <h2 className="fraction">{interval.type}</h2>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import "./TimerClock.scss";

export default function TimerClock() {
  const [firstStart, setFirstStart] = useState(true);
  const [totalSeconds, setTotalSeconds] = useState(null);
  const [commandTimer, setCommandTimer] = useState("pause");
  const [minuteDisplay, setMinuteDisplay] = useState("0");
  const [secondsDisplay, setSecondsDisplay] = useState("00");
  const [totalTimeDisplay, setTotalTimeDisplay] = useState({
    minute: "0",
    seconds: "0",
  });

  useEffect(() => {
    const updateTimer = (input) => {
      setMinuteDisplay(String(Math.floor(input / 60)));
      setSecondsDisplay(
        (input % 60).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
        }),
      );
    };

    const runTimer = () => {
      console.log(totalSeconds);

      if (
        totalSeconds >= 0 &&
        totalSeconds !== null &&
        commandTimer === "run"
      ) {
        setTimeout(() => {
          console.log(totalSeconds);
          updateTimer(totalSeconds);
          setTotalSeconds((prevValue) => prevValue - 1);
        }, 1000);

        console.log("updated timer");
      } else {
        console.log("end timer");
      }
    };

    runTimer();
  }, [totalSeconds, commandTimer]);

  useEffect(() => {
    const initializeTimer = (input) => {
      console.log("intitializing");

      let minute = String(Math.floor(input / 60));
      let seconds = (input % 60).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });

      setTotalSeconds(input);
      setMinuteDisplay(minute);
      setSecondsDisplay(seconds);
      setTotalTimeDisplay({
        minute: minute,
        seconds: seconds,
      });
    };

    initializeTimer(30);
  }, [firstStart]);

  const handleStartTimer = () => {
    console.log(commandTimer);
    if (commandTimer === "run") {
      setCommandTimer("pause");
    } else {
      setCommandTimer("run");
    }
  };

  const handleStopTimer = () => {
    if (commandTimer === "stop") {
      setFirstStart(!firstStart);
      setCommandTimer("pause");
    } else {
      setCommandTimer("stop");
      setTotalSeconds(0);
      setMinuteDisplay("0");
      setSecondsDisplay("00");
      setTotalTimeDisplay({
        minute: "0",
        seconds: "00",
      });
    }
  };

  return (
    <div className="timer-clock-container">
      <div className="timer-clock">
        <div className="timer-nav">
          <button className="timer-nav-btn timer-nav-back">
            <KeyboardArrowUp className="arrow arrow-up" />
          </button>
          <button className="timer-nav-btn timer-nav-forward">
            <KeyboardArrowDown className="arrow arrow-down" />
          </button>
        </div>
        <div className="timer-wheel"></div>
        <div className="timer-display">
          <h2>Work</h2>
          <h1>{`${minuteDisplay}:${secondsDisplay}`}</h1>
          <h4>Total Time</h4>
          <h3>{`${totalTimeDisplay.minute}:${totalTimeDisplay.seconds}`}</h3>
        </div>
      </div>
      <div className="timer-button-container">
        <button onClick={handleStartTimer}>
          {commandTimer === "run" ? "Pause Session" : "Start Session"}
        </button>
        <button onClick={handleStopTimer}>
          {commandTimer === "stop" ? "Restart Session" : "Stop Session"}
        </button>
      </div>
    </div>
  );
}

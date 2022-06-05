import "./Clock.css";
import React, { useContext, useEffect, useState } from "react";
import TimeContext from "../Context/TimeContext";
import {
  AiFillCaretRight,
  AiFillPauseCircle,
  AiFillSetting,
} from "react-icons/ai";
function Clock(props) {
  /* const { second, setSecond } = useContext(TimeContext); */
  const { second, setSecond } = useContext(TimeContext);
  const [message, setMessage] = useState(false);
  const [timer, setTimer] = useState(false);

  const timerStartHandler = (e) => {
    e.preventDefault();
    setTimer(true);
  };
  const timerStopHandler = (e) => {
    e.preventDefault();
    setTimer(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timer || second < 0) {
        return;
      } else if (second === 0) {
        setMessage(true);
      } else if (second > 0) {
        setSecond(second - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer, second, setSecond]);

  useEffect(() => {
    if (message === true) {
      alert("Time is Up");
    }
  }, [message]);

  const minuteAvg = Math.floor(second / 60);
  const secondAvg = Math.round(second % 60);
  const timerMinute = minuteAvg < 10 ? "0" + minuteAvg : minuteAvg;
  const timerSecond = secondAvg < 10 ? "0" + secondAvg : secondAvg;

  return (
    <div className="clock-container">
      <div className="clock">
        {timerMinute}:{timerSecond}
      </div>
      <div className="buttons">
        <button className="start-btn" onClick={timerStartHandler}>
          <AiFillCaretRight />
        </button>
        <button className="pause-btn" onClick={timerStopHandler}>
          <AiFillPauseCircle />
        </button>
        <button
          className="setting-btn"
          onClick={() => {
            props.setSettings(true);
          }}
        >
          <AiFillSetting />
        </button>
      </div>
    </div>
  );
}

export default Clock;

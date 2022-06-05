import React, { useContext, useState } from "react";
import TimeContext from "../Context/TimeContext";
import "./Settings.css";
import { AiFillBackward } from "react-icons/ai";
const Settings = (props) => {
  const { second, setSecond } = useContext(TimeContext);

  const [minute, setMinute] = useState();
  const minuteChangeHandler = (e) => {
    setMinute(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (minute >= 0) {
      setSecond(minute * 60);
      props.setSettings(false);
    } else {
      alert("Please enter a value");
    }
  };
  return (
    <div className="settings-container">
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="input">Set Minute</label>
        <input
          type="number"
          min={0}
          id="input"
          onChange={minuteChangeHandler}
        />
        <button className="button set">Set</button>
      </form>
      <button className="button" onClick={() => props.setSettings(false)}>
        <AiFillBackward />
      </button>
    </div>
  );
};
export default Settings;

import { useState } from "react";
import "./App.css";
import Clock from "./Clock/Clock";
import TimeContext from "./Context/TimeContext";
import Settings from "./Settings/Settings";
function App() {
  const [settings, setSettings] = useState(false);
  const [second, setSecond] = useState(0);
  return (
    <TimeContext.Provider
      value={{
        second,
        setSecond,
      }}
    >
      <div className="App">
        {!settings && <Clock setSettings={setSettings} />}
        {settings && <Settings setSettings={setSettings} />}
      </div>
    </TimeContext.Provider>
  );
}

export default App;

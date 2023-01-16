import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import DodoList from "./components/DotoList/DotoList";
import MiniCalendar from "./components/MiniCalendar/MiniCalendar";
import TimeTable from "./components/TimeTable/TimeTable";
import "./App.scss";

function App() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      const newTime: Date = new Date();
      setTime(newTime);
    }, 10000);
  }, []);

  return (
    <div className="timeWindow">
      <div id="cont1">
        <TimeTable />
      </div>
      <div id="cont2">
        <MiniCalendar time={time} />
      </div>
      <div id="cont3">
        <DodoList />
      </div>
    </div>
  );
}

export default App;

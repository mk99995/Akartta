import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import DodoList from "./components/DotoList/DotoList";
import MiniCalendar from "./components/MiniCalendar/MiniCalendar";
import TimeTable from "./components/TimeTable/TimeTable";
import "./App.scss";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="timeWindow">
      <div id="cont1">
        <TimeTable />
      </div>
      <div id="cont2">
        <MiniCalendar />
      </div>
      <div id="cont3">
        <DodoList />
      </div>
    </div>
  );
}

export default App;

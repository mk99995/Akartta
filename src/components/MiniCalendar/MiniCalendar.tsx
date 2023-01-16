import "./MiniCalendar.scss";
import { useState } from "react";
import { L } from "@tauri-apps/api/event-2a9960e7";

const MiniCalendar = ({ time }: { time: Date }): JSX.Element => {
  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  const [dayds, setDays] = useState<number[]>([]);

  let selectedDay: number = time.getDate();

  const buildMonth = (selectedDay: Date): number[] => {
    let monthDays: number[] = [];
    let days: number = daysInMonth(time.getMonth(), time.getFullYear());
    let firstDay: Date = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth()
    );
    let daysBefore: number = 7 - firstDay.getDay() - 1;
    console.log(daysBefore, firstDay.getDay());

    for (let i = -daysBefore; i < 42 - daysBefore; i++) {
      console.log(i);

      firstDay.setDate(i);
      console.log(firstDay.getDate());

      monthDays.push(firstDay.getDate());
    }
    return monthDays;
  };
  let test = new Date(2023, 0, 14);
  console.log(test);

  console.log(buildMonth(test));

  return <div className="MiniCalendar window">{}</div>;
};

export default MiniCalendar;

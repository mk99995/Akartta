import "./MiniCalendar.scss";
import { useState } from "react";
import { L } from "@tauri-apps/api/event-2a9960e7";

const MiniCalendar = ({ time }: { time: Date }): JSX.Element => {
  // function daysInMonth(month: number, year: number) {
  //   return new Date(year, month + 1, 0).getDate();
  // }

  const [selectedDay, setSelectedDay] = useState<Date>(time);

  const buildMonth = (selectedDay: Date): Date[] => {
    let monthDays: Date[] = [];
    // let daysInSelectedMonth: number = daysInMonth(
    //   selectedDay.getFullYear(),
    //   selectedDay.getMonth()
    // );

    //get days before begingin of month
    let daysBefore: number;
    let firstDay: Date = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      1
    );
    console.log(firstDay);

    let firstWeekday = firstDay.getDay();
    if (firstWeekday === 0) {
      daysBefore = 5;
    } else if (firstWeekday === 1) {
      daysBefore = 6;
    } else {
      daysBefore = firstWeekday - 2;
    }

    //get days after month
    let lastDay: Date = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth() + 1,
      0
    );
    console.log(lastDay.getDay());
    let daysAfter: number = 7 - lastDay.getDay();
    console.log(daysAfter);

    console.log(lastDay.getDate());

    //add days to display in miniCalendar
    for (let i = -daysBefore; i <= lastDay.getDate() + daysAfter; i++) {
      let pushedDate = new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        i
      );

      // if (pushedDate.getDay()) {

      // }

      monthDays.push(pushedDate);
    }
    return monthDays;
  };

  return (
    <div className="MiniCalendar window">
      <p className="month">
        {selectedDay.toLocaleString("en-us", { month: "long" }) +
          " | " +
          selectedDay.getFullYear()}
      </p>
      {buildMonth(selectedDay).map((day) => (
        <div
          className="day"
          onClick={() => {
            setSelectedDay(day);
          }}
        >
          {day.getDate()}
        </div>
      ))}
    </div>
  );
};

export default MiniCalendar;

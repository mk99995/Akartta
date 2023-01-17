import "./MiniCalendar.scss";
import { useState } from "react";
import { L } from "@tauri-apps/api/event-2a9960e7";

const MiniCalendar = ({
  time,
  selectedDay,
  setSelectedDay,
}: {
  time: Date;
  selectedDay: Date;
  setSelectedDay: any;
}): JSX.Element => {
  interface dateWithStyle {
    date: Date;
    style: string;
  }

  const buildMonth = (selectedDay: Date): dateWithStyle[] => {
    let monthDays: dateWithStyle[] = [];

    //get days before begingin of month
    let daysBefore: number;
    let firstDay: Date = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      1
    );

    let firstWeekday: number = firstDay.getDay();
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
    let daysAfter: number = 7 - lastDay.getDay();

    //add days to display in miniCalendar
    let currentDate: Date = new Date(
      time.getFullYear(),
      time.getMonth(),
      time.getDate()
    );
    for (let i = -daysBefore; i <= lastDay.getDate() + daysAfter; i++) {
      let pushedDate: Date = new Date(
        selectedDay.getFullYear(),
        selectedDay.getMonth(),
        i
      );

      let styles: string = "day";

      if (i <= 0 || i > lastDay.getDate()) {
        styles += " offMonth";
      }

      if (pushedDate.getTime() === selectedDay.getTime()) {
        styles += " selected";
      }

      if (pushedDate.getTime() === currentDate.getTime()) {
        styles += " current";
      }

      let dateStyle: dateWithStyle = { date: pushedDate, style: styles };
      monthDays.push(dateStyle);
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
      <div className="week-day">Mon</div>
      <div className="week-day">Tue</div>
      <div className="week-day">Wed</div>
      <div className="week-day">Thu</div>
      <div className="week-day">Fri</div>
      <div className="week-day">Sat</div>
      <div className="week-day">Sun</div>
      {buildMonth(selectedDay).map((day, index) => (
        <div
          key={index}
          className={day.style}
          onClick={() => {
            setSelectedDay(day.date);
          }}
        >
          {day.date.getDate()}
        </div>
      ))}
    </div>
  );
};

export default MiniCalendar;

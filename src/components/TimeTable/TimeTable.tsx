import "./TimeTable.scss";
import Hour from "./Hour";
import React, { useState } from "react";
import { a } from "@tauri-apps/api/dialog-15855a2f";
import { Rnd } from "react-rnd";

const TimeTable = (): JSX.Element => {
  const [hourList, setHourList] = useState<number[]>([]);
  const renderTimeTable = (start: number, hours: number): JSX.Element[] => {
    let timeTable: JSX.Element[] = [];
    if (start >= hours) {
      return [<></>];
    }
    for (let i = start; i < hours; i++) {
      let odd: string = "";

      if (i % 2 !== 0) {
        odd = " odd";
      }

      timeTable.push(
        <React.Fragment key={i}>
          <tr>
            <td className="number">{}</td>
            <td className={`first${odd}`}>{}</td>
          </tr>

          <tr>
            <td className="number half-hour">{i + ":30"}</td>
            <td className={`second${odd}`}>{}</td>
          </tr>
          <tr>
            <td className="number"></td>
            <td className={`third${odd}`}>{}</td>
          </tr>
          <tr>
            <td className="number">{i === hours - 1 ? "" : i + 1 + ":00"}</td>
            <td className={`fourth${odd}`}>{}</td>
          </tr>
        </React.Fragment>
      );
    }
    return timeTable;
  };

  return (
    <div className="TimeTable window">
      <table>
        <tbody>{renderTimeTable(5, 24)}</tbody>
        <Rnd
          className="asd"
          position={{ x: 100, y: 100 }}
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: 200,
          }}
        >
          Rnd
        </Rnd>
      </table>
    </div>
  );
};

export default TimeTable;

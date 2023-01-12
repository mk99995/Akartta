import React from "react";
import { ListItem } from "../interface";

const DotoItems = ({
  listItems,
  setListItems,
}: {
  listItems: ListItem[];
  setListItems: any;
}): JSX.Element => {
  return (
    <div className="">
      {listItems.map((item, index) => {
        return (
          <>
            <p key={index}>{item.content}</p>
          </>
        );
      })}
    </div>
  );
};

export default DotoItems;

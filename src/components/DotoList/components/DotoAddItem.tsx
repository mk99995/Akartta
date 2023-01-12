import React from "react";
import { useState } from "react";
import { ListItem } from "../interface";

const DotoAddItem = ({
  listItems,
  setListItems,
}: {
  listItems: ListItem[];
  setListItems: any;
}): JSX.Element => {
  const [text, setText] = React.useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleAdd = (): void => {
    let addedItem: ListItem = { order: "noOrder", content: text };
    setListItems(listItems.concat(addedItem));
  };
  return (
    <>
      <input type={"text"} onChange={handleInput}></input>
      <button onClick={handleAdd}>Add</button>
      <button
        onClick={() => {
          console.log(listItems);
        }}
      >
        Show
      </button>
    </>
  );
};

export default DotoAddItem;

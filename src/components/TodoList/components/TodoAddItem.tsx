import React from "react";
import { useState } from "react";
import { ListItem } from "../interface";

const TodoAddItem = ({
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
    setText("");
  };
  return (
    <div className="TodoAddItem">
      <input type={"text"} onInput={handleInput} value={text} />
      <button onClick={handleAdd}>Add</button>
      <button
        onClick={() => {
          console.log(listItems);
        }}
      >
        Show
      </button>
    </div>
  );
};

export default TodoAddItem;

import React from "react";
import { useState } from "react";
import { ListItem } from "../interface";

const TodoAddItem = ({
  listItems,
  setListItems,
}: {
  listItems: string[];
  setListItems: any;
}): JSX.Element => {
  const [text, setText] = React.useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const handleAdd = (): void => {
    let addedItem: string = text;
    //check if the first character are numbers in addedItem

    if (/^\d+$/.test(text.split(". ")[0])) {
      let addedText: string = text.split(".")[1];
      let order: number = Number(text.split(".")[0]);
      if (order <= listItems.length) {
        let a = listItems.slice(0, order - 1);
        console.log("a: ", a);
        let b = [addedText];
        console.log("b: ", b);
        let c = listItems.slice(order - 1, listItems.length);
        console.log("c: ", c);
        console.log(...a, ...b, ...c);

        setListItems([...a, ...b, ...c]);

        console.log(listItems);
        return;
      }
      // addedItem.content = addedItem.content.substring(
      //   text.split(".")[0].length + 1
      // );
      // addedItem.order > listItems.length
      //   ? (addedItem.order = listItems.length)
      //   : null;
    }

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

import React from "react";
import { useState } from "react";
import "./TodoList.scss";
import TodoAddItem from "./components/TodoAddItem";
import TodoItems from "./components/TodoItems";
import { ListItem } from "./interface";

const TodoList = (): JSX.Element => {
  const [listItems, setListItems] = useState<string[]>([]);

  return (
    <div className="TodoList window">
      <TodoItems listItems={listItems} setListItems={setListItems} />
      <TodoAddItem listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default TodoList;

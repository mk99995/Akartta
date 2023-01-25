import React from "react";
import { ListItem } from "../interface";
import "../../../../node_modules/react-grid-layout/css/styles.css";
import "../../../../node_modules/react-resizable/css/styles.css";
import GridLayout, { Layout } from "react-grid-layout";
import { useState } from "react";

const TodoItems = ({
  listItems,
  setListItems,
}: {
  listItems: string[];
  setListItems: any;
}): JSX.Element => {
  const handleDelete = (deletedIndex: number): void => {
    console.log(deletedIndex);
    let asd = listItems;
    console.log(asd);
    let zxc = asd.slice(deletedIndex, 1);
    console.log(zxc);

    setListItems(listItems.filter((item, index) => index !== deletedIndex));
  };

  const [todoLayout, setTodoLayout] = useState<Layout[]>([
    { i: "1", x: 1, y: 1, w: 1, h: 1 },
    { i: "2", x: 1, y: 2, w: 1, h: 1 },
    { i: "3", x: 1, y: 3, w: 1, h: 1 },
  ]);

  return (
    <div className="TodoItems">
      <GridLayout
        className="layout"
        // layout={todoLayout}
        onDragStop={(layout) => setTodoLayout(layout)}
        cols={1}
        rowHeight={30}
        width={1200}
        // onLayoutChange={(layout) => {
        //   // if(layout)
        //   // setTodoLayout(layout);
        //   // console.log(Object.values(todoLayout[0])[2]);
        // }}
      >
        {listItems.map((item, index) => {
          return (
            <p key={index.toString()}>
              {Object.values(todoLayout[index])[3] + 1 + ". " + item}
              <button onClick={(): void => handleDelete(index)}>x</button>
            </p>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default TodoItems;

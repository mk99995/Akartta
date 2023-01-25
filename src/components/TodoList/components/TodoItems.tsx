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
  let layout: Layout[] = listItems.map((item, index) => {
    return { i: index.toString(), x: 1, y: index, w: 1, h: 1 };
  });

  const [todoLayout, setTodoLayout] = useState<Layout[]>(layout);

  return (
    <div className="TodoItems">
      <GridLayout
        className="layout"
        cols={1}
        rowHeight={30}
        width={1200}
        onLayoutChange={(layout) => {
          setTodoLayout(layout);
        }}
      >
        {listItems.map((item, index) => {
          return (
            <p key={index.toString()}>
              {todoLayout[index]
                ? Object.values(todoLayout[index])[3] + 1 + ". " + item
                : ""}
              <button onClick={(): void => handleDelete(index)}>x</button>
            </p>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default TodoItems;

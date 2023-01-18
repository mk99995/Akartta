import React from "react";
import { ListItem } from "../interface";
import "../../../../node_modules/react-grid-layout/css/styles.css";
import "../../../../node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";

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

  return (
    <div className="TodoItems">
      <GridLayout
        className="layout"
        onDragStop={() => console.log("asd")}
        cols={1}
        rowHeight={30}
        width={1200}
      >
        {listItems.map((item, index) => {
          return (
            <p key={index} data-grid={{ x: index, y: -1, w: 1, h: 1 }}>
              {index + 1 + ". " + item}
              <button onClick={(): void => handleDelete(index)}>x</button>
            </p>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default TodoItems;

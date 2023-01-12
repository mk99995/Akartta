import React from "react";
import { ListItem } from "../interface";

const DotoItems = ({
  listItems,
  setListItems,
}: {
  listItems: ListItem[];
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
    <div className="DotoItems">
      {listItems.map((item, index) => {
        return (
          <p key={index}>
            {item.content}
            <button onClick={(): void => handleDelete(index)}>x</button>
          </p>
        );
      })}
    </div>
  );
};

export default DotoItems;

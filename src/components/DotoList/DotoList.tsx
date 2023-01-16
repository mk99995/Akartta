import React from "react";
import { useState } from "react";
import "./DotoList.scss";
import DotoAddItem from "./components/DotoAddItem";
import DotoItems from "./components/DotoItems";
import { ListItem } from "./interface";

const DodoList = (): JSX.Element => {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  return (
    <div className="DotoList window">
      <DotoItems listItems={listItems} setListItems={setListItems} />
      <DotoAddItem listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default DodoList;

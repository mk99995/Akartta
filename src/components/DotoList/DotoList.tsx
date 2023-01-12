import React from "react";
import { useState } from "react";
import "./DotoList.scss";
import DotoAddItem from "./components/DotoAddItem";
import DotoItems from "./components/DotoItems";
import { ListItem } from "./interface";

const DodoList = (): JSX.Element => {
  const [listItems, setListItems] = React.useState<ListItem[]>([]);

  return (
    <div className="DotoList">
      <DotoAddItem listItems={listItems} setListItems={setListItems} />
      <DotoItems listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default DodoList;

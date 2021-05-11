import React from "react";
import ListItem from "./ListItem";

function List({ list, deleteList }) {
  return (
    <div>
      {list.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          email={item.email}
          deleteList={deleteList}
        />
      ))}
    </div>
  );
}

export default List;

import React from "react";
import ListItem from "./ListItem";

function List({ list, deleteList }) {
  if (list.length > 0) {
    return (
      <section className="list">
        <h2>확인 리스트</h2>
        {list.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            item={item}
            deleteList={deleteList}
          />
        ))}
      </section>
    );
  }
  return <></>;
}

export default List;

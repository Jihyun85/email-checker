import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

function ListItem({ id, item, deleteList }) {
  return (
    <li>
      <a href="/">{item.email}</a>
      <p>
        {item.smtp_check ? (
          <>
            <FaRegCheckCircle />
            <p>유효합니다.</p>
          </>
        ) : (
          <>
            <FaRegTimesCircle />
            <p>유효하지 않습니다.</p>
          </>
        )}
      </p>
      <MdDelete onClick={() => deleteList(id)} />
    </li>
  );
}

export default ListItem;

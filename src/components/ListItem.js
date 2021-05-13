import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { Item } from "../styles/components/Item";
import styled from "styled-components";

const CustomItem = styled(Item)`
  justify-content: space-between;
`;

const ItemResult = styled.div`
  display: flex;
  align-items: center;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
`;

function ListItem({ id, item, deleteList }) {
  return (
    <CustomItem>
      <a href="/">{item.email}</a>
      <ItemResult>
        {item.smtp_check ? (
          <Result>
            <FaRegCheckCircle />
            <p>유효</p>
          </Result>
        ) : (
          <Result>
            <FaRegTimesCircle />
            <p>유효하지 않음</p>
          </Result>
        )}
      </ItemResult>
      <DeleteBtn
        type="button"
        onClick={() => deleteList(id)}
        aria-label="해당 이메일 삭제하기"
      >
        <MdDelete />
      </DeleteBtn>
    </CustomItem>
  );
}

export default ListItem;

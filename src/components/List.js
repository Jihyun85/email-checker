import React from "react";
import styled from "styled-components";
import { Subtitle } from "../styles/components/Subtitle";
import ListItem from "./ListItem";
import xlsx from "xlsx";
import { SmallGreenBtn } from "../styles/components/Button";

const ListSection = styled.section`
  position: relative;
`;

const XlsxBtn = styled(SmallGreenBtn)`
  position: absolute;
  top: 0;
  right: 0;
`;

function List({ list, deleteList }) {
  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet(list);

  xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

  if (list.length > 0) {
    return (
      <ListSection className="list">
        <Subtitle>확인 리스트</Subtitle>
        <XlsxBtn
          type="button"
          onClick={() => xlsx.writeFile(wb, "email-validation.xlsx")}
        >
          xlsx로 다운로드
        </XlsxBtn>
        {list.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            item={item}
            deleteList={deleteList}
          />
        ))}
      </ListSection>
    );
  }
  return <></>;
}

export default List;

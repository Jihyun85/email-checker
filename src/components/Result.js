import React from "react";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { Subtitle } from "../styles/components/Subtitle";

const ResultSection = styled.section`
  margin-bottom: 50px;
`;

const ResultBox = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const DataList = styled.dl``;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
`;

const ItemTitle = styled.dt`
  font-weight: 600;
  &:after {
    content: " :";
  }
`;

const ItemData = styled.dd`
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px 0;

  p {
    margin-left: 5px;
  }
`;

function Result({ result }) {
  if (result !== null) {
    return (
      <ResultSection className="result">
        <Subtitle>확인 결과</Subtitle>
        <ResultBox>
          <DataList>
            <ItemBox>
              <ItemTitle>확인 요청 이메일 주소</ItemTitle>
              <ItemData>{result.email}</ItemData>
            </ItemBox>
            <ItemBox>
              <ItemTitle>유효여부</ItemTitle>
              <ItemData>
                {result.smtp_check ? (
                  <>
                    <FaRegCheckCircle style={{ color: "green" }} />
                    <p>유효합니다.</p>
                  </>
                ) : (
                  <>
                    <FaRegTimesCircle style={{ color: "red" }} />
                    <p>유효하지 않습니다.</p>
                  </>
                )}
              </ItemData>
            </ItemBox>
          </DataList>
        </ResultBox>
      </ResultSection>
    );
  }

  return <></>;
}

export default Result;

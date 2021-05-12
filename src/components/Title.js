import React from "react";
import styled from "styled-components";
import { customMedia } from "../styles/customMedia";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const HeaderTitle = styled.h1`
  color: black;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.smTitle};

  ${customMedia.greaterThan("smBreakpoint")`
    font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  `}

  ${customMedia.greaterThan("mdBreakpoint")`
    font-size: ${({ theme }) => theme.fontSizes.lgTitle};
  `}
`;

function Title() {
  return (
    <HeaderContainer>
      <HeaderTitle>Email Checker</HeaderTitle>
    </HeaderContainer>
  );
}

export default Title;

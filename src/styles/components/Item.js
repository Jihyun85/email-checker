import styled from "styled-components";

import { customMedia } from "../customMedia";

export const Item = styled.li`
  display: flex;
  align-items: center;

  background-color: #d6ebff;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 3px 10px;

  &:hover {
    background-color: #add8ff;
  }

  ${customMedia.greaterThan("mdBreakpoint")`
    padding: 5px 20px;
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
`;

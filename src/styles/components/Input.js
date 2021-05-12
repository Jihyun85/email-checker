import styled from "styled-components";
import { customMedia } from "../customMedia";

export const TextInput = styled.input`
  margin-right: 2px;
  border-bottom: 3px solid black;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: border-color 200ms ease-in-out;

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.hoverBlue};
  }

  &::placeholder {
    ${customMedia.greaterThan("lgBreakpoint")`
      font-size: ${({ theme }) => theme.fontSizes.md};
    `}
  }

  ${customMedia.greaterThan("lgBreakpoint")`
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
`;

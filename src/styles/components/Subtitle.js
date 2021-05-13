import styled from "styled-components";
import { customMedia } from "../customMedia";

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 5px;

  ${customMedia.greaterThan("mdBreakpoint")`
    font-size: ${({ theme }) => theme.fontSizes.xl};
  `}
`;

import styled from "styled-components";
import { customMedia } from "../customMedia";

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  cursor: pointer;

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.event.focusBorder};
  }

  ${customMedia.greaterThan("mdBreakpoint")`
    padding: 7px 15px;
  `}

  ${customMedia.greaterThan("lgBreakpoint")`
    padding: 10px 20px;
    font-size: ${({ theme }) => theme.fontSizes.md};
  `}
`;

export const BlueBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.mainColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBlue};
  }
`;

export const LightBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.hoverGray};

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SmallBtn = styled.button`
  padding: 3px 5px;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
  cursor: pointer;

  &:focus-visible {
    box-shadow: ${({ theme }) => theme.event.focusBorder};
  }

  ${customMedia.greaterThan("mdBreakpoint")`
    padding: 5px 10px;
  `}
`;

export const SmallGreenBtn = styled(SmallBtn)`
  color: white;
  background-color: ${({ theme }) => theme.colors.green};
`;

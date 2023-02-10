import styled from "styled-components";
import { COLORS } from "../../theme";

export const Button = styled.button<{
  w: string;
  h: string;
  bg?: string;
  margin?: string;
}>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-color: ${({ bg }) => bg || COLORS.green[900]};
  border-radius: 3px;
  margin: ${({ margin }) => margin || "none"};
  border: none;
  transition: 500ms;
  &:hover {
    cursor: pointer;
    opacity: calc(0.9);
  }
`;

export const TitleButton = styled.span<{ color?: string }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ color }) => color || "#FFFF"};
`;

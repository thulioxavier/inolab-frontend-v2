import styled from "styled-components";
import InputMask from "react-input-mask";
import CurrencyInput from "react-currency-input-field";
import { COLORS } from "../../theme";

interface SubtitleBuilderProps {
  isBold?: boolean;
}

export const SubtitleBuilder = (isBold: boolean) =>
  styled("small")<SubtitleBuilderProps>({
    fontSize: "0.5625rem",
    fontWeight: isBold ? 900 : 500,
  });

export const InputContent = styled.div<{
  display?: string;
  w?: string;
  direction?: string;
}>`
  width: ${({ w }) => w || "100%"};
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ direction }) => direction || "column"};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const InputLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  color: #333333;
`;

export const Required = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #c01c30;
`;

export const Tooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 24px;
  height: 24px;

  border-radius: 50%;
  border: 0.5px solid #e6e6ef;

  background-color: #fff;

  cursor: pointer;
  position: relative;
`;

export const InputCurrency = styled(CurrencyInput)<{ borderColor?: string }>`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ borderColor }) => borderColor || "#E6E6EF"};
  font-size: 16px;
  border-radius: 3px;

  &::placeholder {
    color: #7f7f7f;
  }

  &:focus {
    border-color: #00c49a;
  }
`;

export const InputToMask = styled(InputMask)<{
  borderColor?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}>`
  width: 100%;
  height: 45px;
  padding: 12px 16px;
  border: 1px solid ${({ borderColor }) => borderColor || "#E6E6EF"};
  font-size: 16px;
  border-radius: 3px;

  ${({ iconLeft }) =>
    iconLeft
      ? `
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      `
      : null}

  ${({ iconRight }) =>
    iconRight
      ? `
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      `
      : null}

  &::placeholder {
    color: #7f7f7f;
  }

  &:focus {
    border-color: #00c49a;
  }
`;

export const Input = styled.input<{
  borderColor?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
}>`
  width: 100%;
  height: 45px;
  padding: 12px 16px;
  border: 1px solid ${({ borderColor }) => borderColor || "transparent"};
  font-size: 16px;
  border-radius: 3px;
  outline: none;
  background-color: #f6f6f6;

  ${({ iconLeft }) =>
    iconLeft
      ? `
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      `
      : null}

  ${({ iconRight }) =>
    iconRight
      ? `
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      `
      : null}

  &::placeholder {
    color: #7f7f7f;
    font-size: 14px;
  }

  &:focus {
    border-color: ${COLORS.green[900]};
  }
`;

export const IconArea = styled.div<{
  iconLeft?: boolean;
  iconRight?: boolean;
  isBoder?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  background-color: #f6f6f6;
  border: 1px solid transparent;
  ${({ iconLeft }) =>
    iconLeft
      ? `
        border-right: none;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `
      : `
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    `}

  ${({ iconRight }) =>
    iconRight
      ? `
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: none;
      `
      : `
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      `}
`;

export const Error = styled.span`
  font-size: 10px;
  color: ${COLORS.red[900]};
`;

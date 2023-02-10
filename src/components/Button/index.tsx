import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  w: string;
  h: string;
  bg?: string;
  margin?: string;
  title: string;
  color?: string;
}

export const Button = ({ w, h, bg, margin, title, color, ...rest }: Button) => {
  return (
    <S.Button w={w} h={h} bg={bg} margin={margin} color={color} {...rest}>
      <S.TitleButton>{title}</S.TitleButton>
    </S.Button>
  );
};

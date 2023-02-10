import React, { InputHTMLAttributes, useState } from 'react';
import { IoIosHelp } from 'react-icons/io';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  borderColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  required?: boolean;
  mask?: string;
  info?: string;
  error?: string;
}

export function Input({
  label,
  borderColor,
  leftIcon,
  rightIcon,
  required,
  mask,
  info,
  error,
  ...rest
}: InputProps) {
  const [isBoder, setIsBorder] = useState<boolean>(true);
  return (
    <S.InputContent>
      <S.Row>
        <S.InputLabel>
          {required ? <S.Required>*</S.Required> : null}
          {label}
        </S.InputLabel>
        {info ? (
          <S.Tooltip>
            <IoIosHelp size={24} data-tip={info} />
          </S.Tooltip>
        ) : null}
      </S.Row>
      <S.Row>
        {leftIcon && <S.IconArea isBoder={isBoder} iconLeft>{leftIcon}</S.IconArea>}
        {mask ? (
          <S.InputToMask
            mask={mask}
            iconLeft={!!leftIcon}
            iconRight={!!rightIcon}
            borderColor={borderColor}
            {...rest}
          />
        ) : (
          <S.Input
            onFocus={() => setIsBorder(true)}
            iconLeft={!!leftIcon}
            iconRight={!!rightIcon}
            borderColor={borderColor}
            {...rest}
          />
        )}
        {rightIcon && <S.IconArea iconRight>{rightIcon}</S.IconArea>}
      </S.Row>
      <S.Error>{error}</S.Error>
    </S.InputContent>
  );
}

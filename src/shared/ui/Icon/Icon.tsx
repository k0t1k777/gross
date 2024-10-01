import React from 'react';
import { IconProps } from 'src/shared/consts/types';
import 'src/shared/ui/Icon/Icon.scss';
import Icons from 'src/shared/ui/Icon/icons/sprite.svg';

export const Icon = ({ id, className }: IconProps) => {
  return (
    <svg className={`svg ${className  ? className : ''}`}>
      <use href={`${Icons}#${id}`}></use>
    </svg>
  );
};

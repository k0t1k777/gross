import React from 'react';
import { IconProps } from 'src/shared/consts/types';
import 'src/shared/ui/Icon/Icon.scss';
import Icons from 'src/shared/ui/Icon/icons/sprite.svg';

export const Icon: React.FC<IconProps> = ({ id, className }) => {
  return (
    <svg className={`svg ${className}`}>
      <use href={`${Icons}#${id}`}></use>
    </svg>
  );
};

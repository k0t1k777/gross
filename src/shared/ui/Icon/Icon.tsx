import React from 'react';
import 'src/shared/ui/Icon/Icon.scss';
import Icons from 'src/shared/ui/Icon/icons/sprite.svg';

interface IconProps {
  id: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ id, className = 'svg' }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${Icons}#${id}`}></use>
    </svg>
  );
};

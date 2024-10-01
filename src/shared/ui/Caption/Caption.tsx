import { CaptionProps } from 'src/shared/consts/types';
import 'src/shared/ui/Caption/Caption.scss';

export const Caption = ({ name, className }: CaptionProps) => {
  return (
    <div className={`container ${className ? className : ''}`}>
      <p className='text'>{name}</p>
    </div>
  );
};

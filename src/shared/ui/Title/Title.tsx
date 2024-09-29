import { TitleProps } from 'src/shared/consts/types';
import 'src/shared/ui/Title/Title.scss';

export const Title = (props: TitleProps) => {
  const { className, text } = props;

  return <h1 className={`title ${className}`}>{text}</h1>;
};

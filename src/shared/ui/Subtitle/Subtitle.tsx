import { SubtitleProps } from 'src/shared/consts/types';
import 'src/shared/ui/Subtitle/Subtitle.scss';

export const Subtitle = (props: SubtitleProps) => {
  const { className, text } = props;

  return <p className={`subtitle ${className ? className : ''}`}>{text}</p>;
};

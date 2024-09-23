import { SubtitleProps } from 'src/shared/consts/types';
import 'src/shared/ui/Subtitle/Subtitle.scss';

export const Subtitle: React.FC<SubtitleProps> = (props) => {
  const { className, text } = props;

  return <p className={`subtitle ${className}`}>{text}</p>;
};

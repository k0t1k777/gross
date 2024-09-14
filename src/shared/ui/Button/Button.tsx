import { ButtonProps } from 'src/shared/consts/types';
import 'src/shared/ui/Button/Button.scss'

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, type = 'button', ...otherProps } = props;

  return (
    <button className={`button ${className}`} type={type} {...otherProps}>
      {children}
    </button>
  );
};

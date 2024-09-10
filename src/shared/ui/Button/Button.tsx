import 'src/shared/ui/Button/Button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, type = 'button', ...otherProps } = props;

  return (
    <button className={`button ${className}`} type={type} {...otherProps}>
      {children}
    </button>
  );
};

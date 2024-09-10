import 'src/shared/ui/Input/Input.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  inputType?: string;
  inputName: string;
  inputValue?: string | number;
  inputError?: string;
  inputInfo?: string;
  inputLabelText?: string;
}

export const Input: React.FC<InputProps> = ({
  inputClass,
  inputType = 'text',
  inputName,
  inputValue,
  inputError,
  inputInfo,
  inputLabelText,
  ...otherProps
}) => {
  return (
    <>
      {inputLabelText && (
        <label
          htmlFor={inputName}
          tabIndex={-1}
          className={`input__label ${inputError ? 'input__label_error' : ''}`}
        >
          {inputLabelText}
        </label>
      )}
      <input
        className={`input ${inputClass} ${inputError ? 'input_error' : ''}`}
        type={inputType}
        name={inputName}
        value={inputValue || ''}
        autoComplete="off"
        onChange={() => {}}
        {...otherProps}
      />
      {inputError ? (
        <span className="input__text input__text_error">{inputError}</span>
      ) : (
        <span className="input__text input__text_info">{inputInfo}</span>
      )}
    </>
  );
};

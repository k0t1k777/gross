import { InputProps } from 'src/shared/consts/types';
import 'src/shared/ui/Input/Input.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

export const Input = ({
  isValid,
  inputClass,
  inputType = 'text',
  inputName,
  inputValue,
  inputError,
  inputInfo,
  inputLabelText,
  ...otherProps
}: InputProps) => {
  return (
    <>
      {inputLabelText && (
        <div className='input__label_container'>
          <label
            htmlFor={inputName}
            tabIndex={-1}
            className={`input__label ${inputError ? 'input__label_error' : ''}`}
          >
            {inputLabelText}
          </label>
          <div
            className={`input__container-svg ${
              isValid ? 'input__container-svg_ok' : ''
            }`}
          >
            <Icon id='valid' className='svg__valid' />
          </div>
        </div>
      )}
      <input
        className={`input ${inputClass} ${inputError ? 'input_error' : ''}`}
        type={inputType}
        name={inputName}
        value={inputValue || ''}
        autoComplete='off'
        onChange={() => {}}
        {...otherProps}
      />
      {inputError ? (
        <span className='input__text input__text_error'>{inputError}</span>
      ) : (
        <span className='input__text input__text_info'>{inputInfo}</span>
      )}
    </>
  );
};

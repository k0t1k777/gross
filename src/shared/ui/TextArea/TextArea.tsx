import { TextAreaProps } from 'src/shared/consts/types';
import 'src/shared/ui/TextArea/TextArea.scss';

export const TextArea = ({
  textAreaClass,
  textAreaName,
  textAreaValue,
  textAreaLabelText,
  ...otherProps
}: TextAreaProps) => {
  return (
    <>
      {textAreaLabelText && (
        <div className='textarea__label_container'>
          <label
            htmlFor={textAreaName}
            tabIndex={-1}
            className='textarea__label'
          >
            {textAreaLabelText}
          </label>
        </div>
      )}
      <textarea
        className={`textarea ${textAreaClass}`}
        name={textAreaName}
        value={textAreaValue || ''}
        autoComplete='off'
        onChange={() => {}}
        {...otherProps}
      />
    </>
  );
};

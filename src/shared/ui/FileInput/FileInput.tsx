import { FileInputProps } from 'src/shared/consts/types';
import { useFileInput } from 'src/shared/hooks/useFileInput';
import 'src/shared/ui/FileInput/FileInput.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

export const FileInput = ({
  inputClass,
  inputName,
  onFileChange,
  ...otherProps
}: FileInputProps) => {
  const { fileName, handleFileChange, handleDragOver, handleDrop } =
    useFileInput(onFileChange);

  return (
    <div className={`file-input ${inputClass}`}>
      <div
        className='file-input__drop-zone'
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type='file'
          name={inputName}
          className='file-input__hidden'
          onChange={handleFileChange}
          {...otherProps}
        />
        <div
          className='file-input__content'
          onClick={() => {
            const inputElement = document.querySelector(
              `input[name="${inputName}"]`
            ) as HTMLInputElement;
            inputElement?.click();
          }}
        >
          <Icon id='upload' />
          <span className='file-input__text'>
            {fileName || 'Выберите или перетащите файл'}
          </span>
        </div>
      </div>
    </div>
  );
};

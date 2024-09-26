import React, { useState } from 'react';
import { FileInputProps } from 'src/shared/consts/types';
import 'src/shared/ui/FileInput/FileInput.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

export const FileInput = ({
  inputClass,
  inputName,
  onFileChange,
  ...otherProps
}: FileInputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      if (onFileChange) {
        onFileChange(file);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      if (onFileChange) {
        onFileChange(file);
      }
    }
  };

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
          <Icon id='upload' className='svg__upload'/>
          <span className='file-input__text'>
            {fileName || 'Выберите или перетащите файл'}
          </span>
        </div>
      </div>
    </div>
  );
};

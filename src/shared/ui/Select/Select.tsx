import React, { useState } from 'react';
import { SelectProps } from 'src/shared/consts/types';
import 'src/shared/ui/Select/Select.scss';

const Select: React.FC<SelectProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelectChange = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className='select'>
      {label && (
        <label className={`select__label ${error ? 'select__label_error' : ''}`}>
          {label}
        </label>
      )}
      <div className='select__dropdown' onClick={() => setIsOpen(prev => !prev)}>
        <span className='select__selected'>
          {selectedValue || 'Выберите...'}
        </span>
        <div className={`select__icon ${isOpen ? 'select__icon_open' : ''}`} />
      </div>
      {isOpen && (
        <ul className='select__options'>
          {options.map(option => (
            <li
              key={option.value}
              className='select__option'
              onClick={() => handleSelectChange(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {error && <span className='select__error'>{error}</span>}
    </div>
  );
};

export default Select;

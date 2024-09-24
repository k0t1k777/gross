import React, { useRef, useState } from 'react';
import { SelectProps } from 'src/shared/consts/types';
import useOutsideClick from 'src/shared/libs/helpers/useOutsideClick';
import 'src/shared/ui/Select/Select.scss';

const Select: React.FC<SelectProps> = ({
  label,
  options,
  selectedValue,
  error,
  handleSelectChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  useOutsideClick(ref, toggleOpen);

  function toggleOpen() {
    setIsOpen(prev => !prev);
  }

  return (
    <div className='select' ref={isOpen ? ref : null}>
      {label && (
        <label className={`select__label ${error ? 'select__label_error' : ''}`}>
          {label}
        </label>
      )}
      <div className='select__dropdown' onClick={toggleOpen}>
        <span className='select__selected'>
          {selectedValue  ? selectedValue : 'Выберите вакансию'}
        </span>
        <div className={`select__icon ${isOpen ? 'select__icon_open' : ''}`} />
      </div>
      {isOpen && (
        <ul className='select__options'>
          {options.map(option => (
            <li
              key={option}
              className='select__option'
              onClick={() => {
                handleSelectChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      {error && <span className='select__error'>{error}</span>}
    </div>
  );
};

export default Select;

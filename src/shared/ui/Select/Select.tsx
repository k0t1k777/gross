import React, { useRef, useState } from 'react';
import { SelectProps } from 'src/shared/consts/types';
import useOutsideClick from 'src/shared/libs/helpers/useOutsideClick';
import 'src/shared/ui/Select/Select.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';
import { motion, AnimatePresence } from 'framer-motion';

const Select: React.FC<SelectProps> = ({
  isValid,
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
    setIsOpen((prev) => !prev);
  }

  return (
    <div className='select' ref={isOpen ? ref : null}>
      {label && (
        <div className='select__label_container'>
        <label className={`select__label ${error && 'select__label_error'}`}>
          {label}
        </label>
        <div
        className={`select__container-svg ${
          isValid ? 'select__container-svg_ok' : ''
        }`}
      >
        <Icon id='valid' className='svg__valid' />
      </div>
    </div>
        
      )}
      <div
        className={`select__dropdown ${isOpen && 'select__dropdown_open'}`}
        onClick={toggleOpen}
      >
        <span className='select__selected'>
          {selectedValue ? selectedValue : 'Выберите вакансию'}
        </span>
        <div className={`select__icon ${isOpen && 'select__icon_open'}`}>
          <Icon id='arrow-select' className='svg__select' />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className='select__options'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.6 } }}
          >
            {options.map((option) => (
              <motion.li
                key={option}
                className='select__option'
                onClick={() => {
                  handleSelectChange(option);
                  setIsOpen(false);
                }}
                whileHover={{ scale: 1.05 }}
                exit={{
                  scale: [1, 1.2, 0],
                  opacity: [1, 0],
                  transition: { duration: 0.6 },
                }}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {error && <span className='select__error'>{error}</span>}
    </div>
  );
};

export default Select;

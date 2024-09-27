import { useState } from 'react';
import { CheckboxProps } from 'src/shared/consts/types';
import 'src/shared/ui/Checkbox/Checkbox.scss';

const Checkbox = ({ label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className='checkbox-container'>
      <input
        className='checkbox-input'
        type='checkbox'
        checked={isChecked}
        onChange={handleCheckboxChange}
        id='customCheckbox'
      />
      <label htmlFor='customCheckbox' className='checkbox-label'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

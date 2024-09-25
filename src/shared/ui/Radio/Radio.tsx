import { RadioProps } from 'src/shared/consts/types';
import 'src/shared/ui/Radio/Radio.scss';
import { Icon } from 'src/shared/ui/Icon/Icon';

export const Radio: React.FC<RadioProps> = ({
  isValid,
  radioName,
  selectedValue,
  radioLabelText,
  onChange,
}) => {
  return (
    <div className='radio'>
      {radioLabelText && (
        <div className='radio__label_container'>
          <label
            className='radio__label'
          >
            {radioLabelText}
          </label>
          <div
            className={`radio__container-svg ${
              isValid ? 'radio__container-svg_ok' : ''
            }`}
          >
            <Icon id='valid' className='svg__valid' />
          </div>
        </div>
      )}
      <div className='radio__options'>
        <label className='radio__option'>
          <input
            className='radio__input'
            type='radio'
            name={radioName}
            value='male'
            checked={selectedValue === 'male'}
            onChange={onChange}
          />
          <span className='radio__custom'></span>
          Мужской
        </label>
        <label className='radio__option'>
          <input
            className='radio__input'
            type='radio'
            name={radioName}
            value='female'
            checked={selectedValue === 'female'}
            onChange={onChange}
          />
          <span className='radio__custom'></span>
          Женский
        </label>
      </div>
    </div>
  );
};

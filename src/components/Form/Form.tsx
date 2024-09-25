import 'src/components/Form/Form.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Input } from 'src/shared/ui/Input/Input';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';
import useFormAndValidation from 'src/shared/libs/helpers/useFormAndValidation';
import { validationSchemaAuthForms } from 'src/shared/consts/validationSchemas';
import Select from 'src/shared/ui/Select/Select';
import { PROFESSION_DATA } from 'src/shared/consts/constants';
import { Radio } from 'src/shared/ui/Radio/Radio';

const Form = () => {
  const {
    form,
    errors,
    validity,
    isFormValid,
    handleChange,
    handleRadioChange,
    handleSelectChange,
  } = useFormAndValidation(
    {
      username: '',
      profession: '',
      userdate: '',
      gender: '',
    },
    validationSchemaAuthForms
  );

  return (
    <section className='form'>
      <Subtitle text={'Работа твоей мечты'} className='subtitle__form' />
      <div className='form__wrapper'>
        <div className='form__container'>
          <Select
            label='Вакансия *'
            options={PROFESSION_DATA}
            selectedValue={form.profession}
            handleSelectChange={handleSelectChange}
            isValid={validity.profession}
          />
          <div className='form__input-wrapper'>
            <Input
              inputClass='input__form'
              inputName='username'
              inputType='username'
              inputValue={form.username}
              inputLabelText='ФИО *'
              placeholder='Константиновский Константин Александрович'
              onChange={handleChange}
              inputError={errors.username}
              isValid={validity.username}
            />
          </div>
          <div className='form__input_container_mini'>
            <div className='form__input_container_mini-flex'>
              <div>
                <Input
                  inputClass='input__form'
                  inputName='userdate'
                  inputType='date'
                  inputValue={form.userdate}
                  inputLabelText='Дата рождения *'
                  placeholder='28.07.2002'
                  onChange={handleChange}
                  inputError={errors.userdate}
                  style={{ width: '255px' }}
                  isValid={validity.userdate}
                />
              </div>
              <div>
                <Radio
                  isValid={validity.gender}
                  radioName='gender'
                  selectedValue={form.gender}
                  radioError={errors.gender}
                  radioLabelText='Пол'
                  onChange={handleRadioChange}
                />
              </div>
            </div>
          </div>
          <Button
            className='button__button-form'
            type='submit'
            disabled={!isFormValid}
          >
            Отправить
          </Button>
        </div>
        <div className='form__info'>
          <h2 className='form__info_title'>Наша суперцель </h2>
          <p className='form__info_text'>
            <span>— стать любимым магазином для каждой российской семьи.</span>{' '}
            <span className='form__info_span'>
              Сотни тысяч наших сотрудников ежедневно работают над её
              достижением.
            </span>{' '}
            <span>
              Мы уверены, что в ближайшие годы достигнем этого и будет здорово,
              если вместе с тобой.
            </span>
          </p>
          <div className='form__container_number'>
            <h3 className='form__number'>+7 (926) 433-14-16</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

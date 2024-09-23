import 'src/components/Form/Form.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Input } from 'src/shared/ui/Input/Input';
import { Subtitle } from 'src/shared/ui/Subtitle/Subtitle';
import useFormAndValidation, {
  FormFields,
} from 'src/shared/libs/helpers/useFormAndValidation';
import { validationSchemaAuthForms } from 'src/shared/consts/validationSchemas';
// import Select from 'src/shared/ui/Select/Select';

const Form = () => {
  const {
    form,
    errors,
     isFormValid,
    handleChange,
  } = useFormAndValidation<FormFields>(
    {
      username: '',
    },
    validationSchemaAuthForms
  );

  return (
    <section className='form'>
      <Subtitle text={'Работа твоей мечты'} className='subtitle__form' />
      <div className='form__wrapper'>
        <div className='form__container'>
          {/* <Select label='Вакансия *'/> */}
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
            />
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

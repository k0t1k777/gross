import 'src/pages/Form/Form.scss';
import { Button } from 'src/shared/ui/Button/Button';
import { Input } from 'src/shared/ui/Input/Input';
import useFormAndValidation from 'src/shared/libs/helpers/useFormAndValidation';
import { validationSchemaAuthForms } from 'src/shared/consts/validationSchemas';
import { Select } from 'src/shared/ui/Select/Select';
import { PROFESSION_DATA } from 'src/shared/consts/constants';
import { Radio } from 'src/shared/ui/Radio/Radio';
import { TextArea } from 'src/shared/ui/TextArea/TextArea';
import { FileInput } from 'src/shared/ui/FileInput/FileInput';
import { Icon } from 'src/shared/ui/Icon/Icon';
import Checkbox from 'src/shared/ui/Checkbox/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Title } from 'src/shared/ui/Title/Title';

const Form = () => {
  const navigate = useNavigate();

  const {
    form,
    errors,
    validity,
    isFormValid,
    handleChange,
    handleRadioChange,
    handleSelectChange,
    handleCheckboxChange,
  } = useFormAndValidation(
    {
      username: '',
      profession: '',
      userdate: '',
      userphone: '',
      useremail: '',
      checkboxCapcha: false,
      checkboxAgry: false,
    },
    validationSchemaAuthForms
  );

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;
    if (
      !/^[0-9]*$/.test(char) &&
      !(char === 'Backspace' || char === 'Delete')
    ) {
      event.preventDefault();
    }
  };

  function goNext() {
    console.log('goNext: ');
    navigate('/form/wait-you');
  }

  const handlePhoneFocus = () => {
    if (!form.userphone) {
      const event = {
        target: {
          name: 'userphone',
          value: '+79',
        },
      } as React.ChangeEvent<HTMLInputElement>;
      handleChange(event);
    }
  };

  return (
    <section className='form'>
      <Title text={'Работа твоей мечты'} className='subtitle__form' />
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
            <div className='form__wrapper_input_item'>
              <Input
                inputClass='input__form'
                inputName='userdate'
                inputType='date'
                inputValue={form.userdate}
                inputLabelText='Дата рождения *'
                placeholder='28.07.2002'
                onChange={handleChange}
                inputError={errors.userdate}
                isValid={validity.userdate}
              />
            </div>
            <div className='form__wrapper_input_item'>
              <Radio
                isValid={validity.gender}
                radioName='gender'
                selectedValue={form.gender}
                radioLabelText='Пол'
                onChange={handleRadioChange}
              />
            </div>
          </div>
          <div className='form__input_container_mini'>
            <div className='form__wrapper_input_item'>
              <Input
                inputClass='input__form'
                inputName='userphone'
                inputType='tel'
                inputValue={form.userphone}
                inputLabelText='Контактый телефон *'
                placeholder='+7'
                onChange={handleChange}
                inputError={errors.userphone}
                isValid={validity.userphone}
                onKeyDown={handleKeyPress}
                onFocus={handlePhoneFocus}
                maxLength={12}
              />
            </div>
            <div className='form__wrapper_input_item'>
              <Input
                inputClass='input__form'
                inputName='useremail'
                inputType='email'
                inputValue={form.useremail}
                inputLabelText='Электронная почта *'
                placeholder='Ведите email'
                onChange={handleChange}
                isValid={validity.useremail}
                inputError={errors.useremail}
              />
            </div>
          </div>
          <div className='form__input-wrapper'>
            <TextArea
              textAreaClass='input__form'
              textAreaName='textarea'
              textAreaValue={form.textarea}
              textAreaLabelText='Резюме'
              onChange={handleChange}
            />
          </div>
          <div className='form__input-wrapper'>
            <FileInput
              inputClass='custom-file-input'
              inputName='fileUpload'
              onFileChange={(file) => console.log(file)}
            />
          </div>
          <div className='form__input_container_mini'>
            <div className='form__input_container_wrapper'>
              <p className='form__capcha'>Капча</p>
              <div className='form__agry'>
                <div className='form__container_wrapper'>
                  <div className='form__wrapper_input_item'>
                    <div className='form__wrapper_input_item-checkbox'>
                      <Checkbox
                        checkboxName='checkboxCapcha'
                        checkboxLabel='я не робот'
                        isChecked={form.checkboxCapcha}
                        handleCheckboxChange={handleCheckboxChange}
                      />
                      <Icon id='capcha' />
                    </div>
                  </div>
                  <div className='form__wrapper_input_item'>
                    <p className='form__required'>
                      * поля для обязательного заполнения
                    </p>
                  </div>
                </div>
                <div style={{ position: 'relative' }}>
                  <Checkbox
                    checkboxName='checkboxAgry'
                    isChecked={form.checkboxAgry}
                    checkboxClass='checkbox-label_type_agry'
                    handleCheckboxChange={handleCheckboxChange}
                    checkboxLabel='я подтверждаю согласие на обработку персональных данных и
                    принимаю условия рассмотрения обращений *'
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            className='button__button-form'
            type='submit'
            disabled={!isFormValid}
            onClick={goNext}
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

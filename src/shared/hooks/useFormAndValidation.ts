import { useEffect, useState } from 'react';
import * as Yup from 'yup';

// кастомный хук для для формы и валидация

export interface FormFields {
  username?: string;
  profession?: string;
  userdate?: string;
  gender?: string;
  userphone?: string;
  useremail?: string;
  textarea?: string;
  checkboxCapcha?: boolean;
  checkboxAgry?: boolean;
}

export interface Errors {
  [key: string]: string;
}

const useFormAndValidation = (
  initialState: FormFields,
  validationSchema: Yup.ObjectSchema<FormFields>
) => {
  const [form, setForm] = useState<FormFields>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [validity, setValidity] = useState<{ [key: string]: boolean }>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isActiveInput, setIsActiveInput] = useState<{
    [key: string]: boolean;
  }>({});

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setIsActiveInput({ [evt.target.name]: true });
  };

  const handleBlur = () => {
    setIsActiveInput({});
  };

  const updateFormInput = (data: Partial<FormFields>) => {
    setForm((prevForm) => ({
      ...prevForm,
      ...data,
    }));
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
    localStorage.removeItem('form');
  };

  const handleChange = async (
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const input = evt.target;
    const updatedForm = { ...form, [input.name]: input.value || undefined };
    setForm(updatedForm);
    await handleValidation(input.name);
  };

  const handleSelectChange = async (selectedValue: string) => {
    const updatedForm = { ...form, profession: selectedValue };
    setForm(updatedForm);
    await handleValidation('profession');
  };

  const handleRadioChange = async (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = evt.target;
    const updatedForm = { ...form, gender: input.value || undefined };
    setForm(updatedForm);
    await handleValidation(input.name);
  };

  const handleCheckboxChange = async (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = evt.target;
    const updatedForm = { ...form, [input.name]: input.checked };
    setForm(updatedForm);
    await handleValidation(input.name);
  };

  const handleValidation = async (inputName: string) => {
    try {
      await validationSchema.validateAt(inputName, form);
      setErrors((prevErrors) => ({ ...prevErrors, [inputName]: '' }));
      setValidity((prevValidity) => ({ ...prevValidity, [inputName]: true }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setIsFormValid(false);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [inputName]: error.message,
        }));
        setValidity((prevValidity) => ({
          ...prevValidity,
          [inputName]: false,
        }));
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const char = event.key;
    if (
      !/^[0-9]*$/.test(char) &&
      !(char === 'Backspace' || char === 'Delete')
    ) {
      event.preventDefault();
    }
  };

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

  useEffect(() => {
    const isValid =
      Object.values(form).every((value) => value !== '' && value !== false) &&
      !Object.values(errors).some((value) => value !== '');

    setIsFormValid(isValid);
  }, [form, errors]);

  return {
    form,
    validity,
    errors,
    isFormValid,
    isActiveInput,
    setForm,
    setErrors,
    handleKeyPress,
    handlePhoneFocus,
    handleRadioChange,
    handleChange,
    handleSelectChange,
    resetForm,
    handleFocus,
    handleBlur,
    updateFormInput,
    handleCheckboxChange,
  };
};

export default useFormAndValidation;

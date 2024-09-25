import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export interface FormFields {
  username?: string;
  profession?: string;
  userdate?: string;
}

export interface Errors {
  [key: string]: string;
}

const useFormAndValidation = (
  initialState: FormFields,
  validationSchema: Yup.ObjectSchema<FormFields>,
) => {
  const [form, setForm] = useState<FormFields>(() => {
    const savedForm = localStorage.getItem('form');
    return savedForm ? JSON.parse(savedForm) : initialState;
  });
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

  const handleValidation = async (input: HTMLInputElement) => {
    try {
      await validationSchema.validateAt(input.name, form);
      setErrors((prevErrors) => ({ ...prevErrors, [input.name]: '' }));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setIsFormValid(false);
        setErrors((prevErrors) => ({
          ...prevErrors,
          [input.name]: error.message,
        }));
      }
    }
  };

  const handleChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const updatedValue = input.value;
  
    const updatedForm = { ...form, [input.name]: updatedValue };
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
    await handleValidation(input);
  };
  
  
  const handleSelectChange = (selectedValue: string) => {
    const updatedForm = { ...form, profession: selectedValue };
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
  };

  useEffect(() => {
    const isValid =
      Object.values(form).every((value) => value !== '') &&
      !Object.values(errors).some((value) => value !== '');
    setIsFormValid(isValid);
  }, [form, errors]);

  return {
    form,
    setForm,
    errors,
    setErrors,
    isFormValid,
    handleChange,
    handleSelectChange,
    resetForm,
    handleFocus,
    handleBlur,
    updateFormInput,
    isActiveInput,
  };
};

export default useFormAndValidation;

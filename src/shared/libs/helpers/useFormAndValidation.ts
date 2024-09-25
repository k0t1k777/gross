import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export interface FormFields {
  username?: string;
  profession?: string;
  userdate?: string;
  gender?: string;
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
  // const [validity, setValidity] = useState<{ [key: string]: boolean }>({});
  const [validity, setValidity] = useState<{ [key: string]: boolean }>({
    username: false,
    profession: false,
    userdate: false,
  });
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
        setValidity((prevValidity) => ({ ...prevValidity, [inputName]: false }));
      }
    }
  };
  

  const handleChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const updatedValue = input.value;
  
    const updatedForm = { ...form, [input.name]: updatedValue };
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
    await handleValidation(input.name);
  };
    
  const handleSelectChange = async (selectedValue: string) => {
    const updatedForm = { ...form, profession: selectedValue };
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
    await handleValidation('profession');
  };

  const handleRadioChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const updatedValue = input.value;
      const updatedForm = { ...form, gender: updatedValue };
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
    await handleValidation(input.name);
  };

  // useEffect(() => {
  //   const validateAllFields = async () => {
  //     for (const field in form) {
  //       await handleValidation(field);
  //     }
  //   };
  //   validateAllFields();
  // }, []); 

  useEffect(() => {
    const isValid =
      Object.values(form).every((value) => value !== '') &&
      !Object.values(errors).some((value) => value !== '');
    setIsFormValid(isValid);
  }, [form, errors]);

  return {
    form,
    setForm,
    validity,
    errors,
    setErrors,
    isFormValid,
    handleRadioChange,
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

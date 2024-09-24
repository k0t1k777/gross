import { useEffect, useState } from 'react';
import * as Yup from 'yup';

export interface FormFields {
  username?: string;
  profession?: string;
  selectedOption?: string;
}

export interface SearchFormFields {
  search: string;
}

export interface Errors {
  [key: string]: string;
}

interface UseFormAndValidationProps<T> {
  form: T;
  setForm: React.Dispatch<React.SetStateAction<T>>;
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  isFormValid: boolean;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleSelectChange: (selectedObj: Partial<T>) => void;
  resetForm: () => void;
  handleFocus: (evt: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  updateFormInput: (data: Partial<T>) => void;
  isActiveInput: { [key: string]: boolean };
}

const useFormAndValidation = <T extends Record<string, any>>(
  initialState: T,
  validationSchema: Yup.ObjectSchema<T>,
): UseFormAndValidationProps<T> => {
  const [form, setForm] = useState<T>(() => {
    const savedForm = localStorage.getItem('form');
    return savedForm ? JSON.parse(savedForm) : initialState;
  });
  console.log('form: ', form);
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isActiveInput, setIsActiveInput] = useState<{
    [key: string]: boolean;
  }>({});

  const handleFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setIsActiveInput({ [evt.target.name]: true });
    setForm((prevForm) => ({
      ...prevForm,
      activeInput: evt.target.name,
    }));
  };

  const handleBlur = () => {
    setIsActiveInput({});
    setForm((prevForm) => ({
      ...prevForm,
      activeInput: '',
    }));
  };

  const updateFormInput = (data: Partial<T>) => {
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

  const handleValidation = async (input: HTMLInputElement, formData: T) => {
    try {
      await validationSchema.validateAt(input.name, formData);
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
    const updatedForm = { ...form, [input.name]: input.value };
    setForm(updatedForm);
    localStorage.setItem('form', JSON.stringify(updatedForm));
    await handleValidation(input, updatedForm);
  };
  
  const handleSelectChange = (selectedObj: Partial<FormFields>) => {
    setForm(prevState => ({
      ...prevState,
      ...selectedObj,
    }));
    
    localStorage.setItem('form', JSON.stringify({
      ...form,
      ...selectedObj,
    }));
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

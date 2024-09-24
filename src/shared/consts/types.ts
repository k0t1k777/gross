import { FormFields } from '../libs/helpers/useFormAndValidation';

export interface CaptionProps {
  name: string;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export interface IconProps {
  id: string;
  className?: string;
}

export interface SubtitleProps {
  text: string;
  className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  inputType?: string;
  inputName: string;
  inputValue?: string | number;
  inputError?: string;
  inputInfo?: string;
  inputLabelText?: string;
}

export interface SelectProps {
  label: string;
  options: string[];
  selectedValue?: string;
  handleSelectChange: (selectedObj: Partial<FormFields>) => void;
  error?: string;
}
export interface CaptionProps {
  name: string;
  className?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  inputType?: string;
  inputName: string;
  inputValue?: string | number;
  inputError?: string;
  inputInfo?: string;
  inputLabelText?: string;
  isValid?: boolean;
}

export interface TextAreaProps
extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  textAreaClass?: string;
  textAreaName: string;
  textAreaValue?: string | number;
  textAreaLabelText?: string;
}

export interface SelectProps {
  label: string;
  options: string[];
  selectedValue?: string;
  handleSelectChange: (selectedValue: string) => void;
  error?: string;
  isValid?: boolean;
}

export interface RadioProps {
  radioLabelText?: string;
  radioName?: string;
  selectedValue?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  radioError?: string;
  isValid?: boolean;
}

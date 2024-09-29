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
  isValid?: boolean;
  handleSelectChange: (selectedValue: string) => void;
}

export interface RadioProps {
  radioLabelText?: string;
  radioName?: string;
  selectedValue?: string;
  radioError?: string;
  isValid?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export interface FileInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClass?: string;
  inputName: string;
  inputValue?: string | null;
  onFileChange?: (file: File) => void;
}

export interface CheckboxProps {
  checkboxLabel: string;
  checkboxName: string;
  checkboxError?: string;
  isChecked?: boolean;
  checkboxClass?: string;
  handleCheckboxChange?: (evt: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

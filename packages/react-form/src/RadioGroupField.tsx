import { InputHTMLAttributes } from 'react';
import useField from './useField';

export interface RadioGroupFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value?: string;
}

export default function RadioGroupField(props: RadioGroupFieldProps) {
  const { name, label, value, ...otherProps } = props;
  const { field, setValue } = useField(name);

  const id = crypto.randomUUID();

  const handleChange = () => {
    setValue(value);
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        checked={field.value === value}
        onChange={handleChange}
        onBlur={field.onBlur}
        {...otherProps}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

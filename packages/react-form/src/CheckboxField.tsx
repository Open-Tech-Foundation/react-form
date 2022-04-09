import { ChangeEvent, InputHTMLAttributes } from 'react';
import useField from './useField';

export interface CheckboxFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value?: string;
}

export default function CheckboxField(props: CheckboxFieldProps) {
  const { name, label, value, ...otherProps } = props;
  const { field, setValue } = useField(name);

  const id = crypto.randomUUID();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v: boolean | string[] = e.target.checked;

    if (value) {
      if (e.target.checked) {
        v = field.value ? [...(field.value as string[]), value] : [value];
      } else {
        v = (field.value as string[]).filter((i) => i !== value);
      }
    }

    setValue(v);
  };

  const isChecked = () => {
    if (value && Array.isArray(field.value)) {
      return (field.value as string[]).includes(value as string);
    }

    return Boolean(field.value);
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked()}
        onChange={handleChange}
        onBlur={field.onBlur}
        {...otherProps}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
}

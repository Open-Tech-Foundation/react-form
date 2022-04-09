import { InputHTMLAttributes } from 'react';
import { useField } from '.';

export type FieldType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'number'
  | 'password'
  | 'range'
  | 'search'
  | 'tel'
  | 'text'
  | 'textarea'
  | 'time'
  | 'week';

export interface FieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  type?: FieldType;
}

export default function Field(props: FieldProps) {
  const { name, type, ...otherProps } = props;
  const { field } = useField(name);

  if (type === 'textarea') {
    return (
      <textarea
        name={name}
        value={field.value as string}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...otherProps}
      />
    );
  }

  return (
    <input
      type={type || 'text'}
      name={name}
      value={field.value as string | number}
      onChange={field.onChange}
      onBlur={field.onBlur}
      {...otherProps}
    />
  );
}

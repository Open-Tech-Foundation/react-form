import { ChangeEvent, InputHTMLAttributes, type ReactNode } from 'react';
import { useField } from '.';

export interface SelectFieldProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  multiple?: boolean;
  children: ReactNode;
}

export default function SelectField(props: SelectFieldProps) {
  const { name, multiple, children, ...otherProps } = props;
  const { field, setValue } = useField(name);
  const value = field.value === undefined ? (multiple ? [] : '') : field.value;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let value;
    if (multiple) {
      const options = e.target.options;
      value = [];
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
    } else {
      value = e.currentTarget.value;
    }
    setValue(value);
  };

  return (
    <select
      multiple={multiple}
      name={name}
      value={value as string | string[]}
      onChange={handleChange}
      onBlur={field.onBlur}
      {...otherProps}
    >
      {children}
    </select>
  );
}

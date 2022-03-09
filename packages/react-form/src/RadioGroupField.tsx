import { ChangeEvent, useMemo } from 'react';
import useField from './useField';

interface Props {
  name: string;
  label: string;
  value?: string;
}

export default function RadioGroupField(props: Props): React.ReactNode {
  const { name, label, value, ...otherProps } = props;
  const { field, setValue } = useField(name);

  // @ts-ignore
  const id = crypto.randomUUID();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return useMemo(
    () => (
      <>
        <input
          type="radio"
          id={id}
          name={name}
          checked={field.value === value}
          onChange={handleChange}
          {...otherProps}
        />
        <label htmlFor={id}>{label}</label>
      </>
    ),
    [field.value]
  );
}

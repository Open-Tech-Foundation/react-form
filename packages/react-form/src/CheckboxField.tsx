import { ChangeEvent } from 'react';
import useField from './useField';

interface Props {
  name: string;
  label: string;
  value?: string;
}

export default function CheckboxField(props: Props): React.ReactNode {
  const { name, label, value, ...otherProps } = props;
  const { field, setValue } = useField(name, { multiple: Boolean(value) });

  // @ts-ignore
  const id = crypto.randomUUID();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let v: boolean | string[];

    if (value) {
      if (e.target.checked) {
        v = [...(field.value as string[]), value];
      } else {
        v = (field.value as string[]).filter((i) => i !== value);
      }
    } else {
      v = e.target.checked;
    }

    setValue(v);
  };

  const isChecked = () => {
    if (typeof field.value === 'boolean') return field.value;
    return (field.value as string[]).includes(value as string);
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

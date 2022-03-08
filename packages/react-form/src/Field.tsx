import { useMemo } from 'react';
import { useField } from '.';

type FieldType =
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'tel'
  | 'text'
  | 'textarea'
  | 'time'
  | 'week';

interface Props {
  name: string;
  type: FieldType;
}

export default function Field(props: Props): JSX.Element {
  const { name, type, ...otherProps } = props;
  const { field } = useField(name);

  if (type === 'textarea') {
    return useMemo(
      () => (
        <textarea
          name={name}
          value={field.value}
          onChange={field.onChange}
          {...otherProps}
        />
      ),
      [field.value]
    );
  }

  return useMemo(
    () => (
      <input
        type={type || 'text'}
        name={name}
        value={field.value}
        onChange={field.onChange}
        {...otherProps}
      />
    ),
    [field.value]
  );
}

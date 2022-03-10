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

export default function Field(props: Props): React.ReactNode {
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

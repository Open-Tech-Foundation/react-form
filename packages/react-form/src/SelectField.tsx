import { ChangeEvent, useMemo } from 'react';
import { useField } from '.';

interface Props {
  name: string;
  multiple?: boolean;
  children: React.ReactNode;
}

export default function SelectField(props: Props): React.ReactNode {
  const { name, multiple, children, ...otherProps } = props;
  const { field, setValue } = useField(name, { multiple });

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

  return useMemo(
    () => (
      <select
        multiple={multiple}
        name={name}
        value={field.value as string | string[]}
        onChange={handleChange}
        {...otherProps}
      >
        {children}
      </select>
    ),
    [field.value]
  );
}

import type { InputHTMLAttributes } from 'react';
import { useField } from '.';

export interface DatalistFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: string[];
}

export default function DatalistField(props: DatalistFieldProps) {
  const { name, options, ...otherProps } = props;
  const { field } = useField(name);
  const listId = crypto.randomUUID();

  return (
    <>
      <input
        list={listId}
        name={name}
        value={field.value as string | string[]}
        onChange={(e) => field.onChange(e.target.value)}
        {...otherProps}
      />
      <datalist id={listId}>
        {options &&
          options.map((s, i) => <option key={listId + i} value={s} />)}
      </datalist>
    </>
  );
}

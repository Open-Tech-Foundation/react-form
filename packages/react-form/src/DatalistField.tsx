import { useMemo } from 'react';
import { useField } from '.';

interface Props {
  name: string;
  options: string[];
  children: React.ReactNode;
}

export default function DatalistField(props: Props): React.ReactNode {
  const { name, options, children, ...otherProps } = props;
  const { field } = useField(name);
  const listId = crypto.randomUUID();

  return useMemo(
    () => (
      <>
        <input
          list={listId}
          name={name}
          value={field.value as string | string[]}
          onChange={field.onChange}
          {...otherProps}
        />
        <datalist id={listId}>
          {options &&
            options.map((s, i) => <option key={listId + i} value={s} />)}
        </datalist>
      </>
    ),
    [field.value]
  );
}

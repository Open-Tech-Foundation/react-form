import { useMemo } from 'react';
import { useField } from '.';

interface Props {
  name: string;
  component: ('input' | 'textarea') | JSX.Element;
  type: string;
}

export default function Field(props: Props): JSX.Element {
  const { name, type, component, ...otherProps } = props;
  const { field } = useField(name);

  if (typeof component === 'string' && component === 'input') {
    return useMemo(
      () => (
        <input
          type={type}
          name={name}
          value={field.value}
          onChange={field.onChange}
          {...otherProps}
        />
      ),
      [field.value]
    );
  }

  if (typeof component === 'string' && component === 'textarea') {
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

  const compProps = {
    name,
    value: field.value,
    onChange: field.onChange,
    ...otherProps,
  };

  return useMemo(
    () => <component.type {...component.props} {...compProps} />,
    [field.value]
  );
}

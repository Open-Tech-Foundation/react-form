---
sidebar_position: 7
---

```ts
useField(name: string): {
    field: {
        value: Values;
        onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
        onBlur: () => void;
    };
    error: string | undefined;
    setValue: (v: unknown) => void;
};
```

The `useField` is a custom React `hook` function.

This hook is used to build `custom` field components for the form.

The `hook` function returns an `object` containing a `field` object, an `error` message, and a helper function, `setValue`.

## Usage

```jsx
import { useField } from '@opentf/react-form';

function MyCustomField({ name }) {
  const { field, error } = useField(name);

  return (
    <>
      <input
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
        value={field.value}
      />
      <div style={{ color: 'red' }}>{error}</div>
    </>
  );
}
```

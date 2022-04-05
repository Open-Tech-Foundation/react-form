---
sidebar_position: 7
---

```ts
useFieldArray(name: string): {
    fields: string[];
    push: (obj: unknown) => void;
    remove: (index: number) => void;
};
```

The `useFieldArray` is a custom React `hook` function.

This hook is used to build `dynamic` fields for the form.

The hook returns an object containing `fields`, `push`, and `remove` props.

The `fields` is an array of strings made up of array `name` appended with `indexes`, useful for naming form fields.

The `push` and `remove` functions are used to add and remove fields from the array.

## Usage

```jsx
import { useFieldArray } from '@open-tech-world/react-form';

function MyCustomFields({ name }) {
  const { fields, push, remove } = useFieldArray(name);
  const myFields = fields.map((f, i) => (
    <>
      <Field key={i} name={f} />
      <button type="button" onClick={() => remove(i)}>
        ❌
      </button>
    </>
  ));

  return (
    <>
      {myFields}
      <button type="button" onClick={() => push('')}>
        Add
      </button>
    </>
  );
}

<MyCustomFields name="items" />
```

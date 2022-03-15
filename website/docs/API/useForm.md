---
sidebar_position: 6
---

The `useForm` is a custom React `hook` function.

It is used to get the form `context` objects.

The function will return `values` & `errors` objects and a helper function, `getFieldError`.

### values

The object contains all the field's values

### errors

The object contains `error` messages for the form fields, which are returned from the result of the `validation` function.

### getFieldError()

`getFieldError: (path: string) => string | undefined;`

The function is used to get the field's `error` message.

The form field's name is given to the function as a `path` argument.

## Usage

```jsx
import { useForm } from '@open-tech-world/react-form';

function fn() {
  const { values, errors, getFieldError } = useForm();
  const errorMsg = getFieldError('name');
  console.log(values);
  console.log(errors);
  console.log(errorMsg);
}
```

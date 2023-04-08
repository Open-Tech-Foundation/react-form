---
sidebar_position: 10
---

The `useFormContext` is a custom React `hook` function.

It is used to get the form `context` objects.

The function will return `values`, `errors`, and `visited` objects.

### values

The object contains all the field's values

### errors

The object contains `error` messages for the form fields, which are returned from the result of the `validation` function.

### visited

The object contains the same shape as `values` object with boolean values.

## Usage

```jsx
import { useFormContext } from '@opentf/react-form';

const { values, errors, visited } = useFormContext();
```

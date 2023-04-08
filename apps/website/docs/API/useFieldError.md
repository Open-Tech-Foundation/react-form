---
sidebar_position: 9
---

```ts
useFieldError(path: string): string | undefined;
```

The `useFieldError` is a custom React `hook` function.

This hook is used to get a field's error message for the form.

Pass a field's `name` as `path` argument.

The `hook` function returns an error message when the field is `visited` or `touched`.

## Usage

```jsx
import { useFieldError } from '@opentf/react-form';

const error = useFieldError(path);
```

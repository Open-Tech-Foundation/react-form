---
sidebar_position: 5
title: <SelectField />
heading: <SelectField />
---

It renders an HTML `<select>` element and binds its value to the form state.

## Props:

| Name     | Type            | Required | Default   | Description                                                  |
| -------- | --------------- | -------- | --------- | ------------------------------------------------------------ |
| name     | string          | Yes      | undefined | It is used to map the input value to the form state.         |
| children | React.ReactNode | Yes      | undefined | The `<option>` elements must be nested inside the component. |
| multiple | boolean         | No       | false     | It is used specify whether multiple options can be selected. |

:::info
Any additional props supplied to the component will be passed on to the input element.
:::

## Usage

```jsx
import { SelectField } from '@opentf/react-form';

<SelectField name="select">
  <option value="">Select</option>
  <option value="value 1">Label 1</option>
  <option value="value 2">Label 2</option>
</SelectFeild>
```

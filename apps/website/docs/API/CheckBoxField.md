---
sidebar_position: 3
title: <CheckboxField />
heading: <CheckboxField />
---

It renders an HTML `<input>` element of type `checkbox` and binds its value to the form state.

By default, the `value` of the `checkbox` field will be of the type `boolean`.

## Props:

| Name  | Type   | Required | Default   | Description                                                                                                                                     |
| ----- | ------ | -------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| name  | string | Yes      | undefined | It is used to map the input value to the form state.                                                                                            |
| label | string | Yes      | ''        | It renders a `label` element next to the checkbox. <br />The `label` will be associated with the `checkbox` using a dynamically generated `ID`. |
| value | string | No       | undefined | If the prop is given a string value, then the `checkbox` field value will be an `array`.                                                        |

:::info
Any additional props supplied to the component will be passed on to the input element.
:::

## Usage

```jsx
import { CheckboxField } from '@opentf/react-form';

<CheckboxField name="name" label="Label Text" />

// For checkbox group
<CheckboxField name="group1" label="Label 1" value="value 1" />
<CheckboxField name="group1" label="Label 2" value="value 2" />
<CheckboxField name="group1" label="Label 3" value="value 3" />
```

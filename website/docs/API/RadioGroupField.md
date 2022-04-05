---
sidebar_position: 4
title: <RadioGroupField />
heading: <RadioGroupField />
---

It renders an HTML `<input>` element of type `radio` and binds its value to the form state.

## Props:

| Name  | Type   | Required | Default   | Description                                                                                                                                        |
| ----- | ------ | -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name  | string | Yes      | undefined | It is used to map the input value to the form state.                                                                                               |
| label | string | Yes      | ''        | It renders a `label` element next to the `radio` input. <br />The `label` will be associated with the `radio` input using a dynamically generated `ID`. |
| value | string | Yes      | undefined | It's used to identify which radio button in a group is selected.                                                                                   |

:::info
Any additional props supplied to the component will be passed on to the input element.
:::

## Usage

```jsx
import { RadioGroupField } from '@open-tech-world/react-form';

<RadioGroupField name="group1" label="Label 1" value="value 1" />
<RadioGroupField name="group1" label="Label 2" value="value 2" />
<RadioGroupField name="group1" label="Label 3" value="value 3" />
```
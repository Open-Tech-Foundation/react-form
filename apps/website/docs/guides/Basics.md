---
sidebar_position: 1
---

import BasicFormSource from '!!raw-loader!@site/src/examples/BasicForm';
import {SandBox} from '@opentf/react-sandbox';

## `<Form />`

The `root` component for all the `input` fields.

The required `onSubmit` prop is used to receive the values of the form when submitted.

The `initialValues` prop can be used to set initial values for the form.

:::tip
Always initialize the form with the `initialValues` prop to avoid `React` dev warnings, and to get `TypeScript` support.
:::

## `<Field />`

It renders an input element and binds its value to the form state.

It supports the HTML `<input>` element and the `<textarea>` element.

It uses the `name` prop to map the input value.

:::caution
It does not support the `checkbox`, `radio` & `file` input types; instead, use the [`<CheckboxField />`](/api/checkboxfield), [`<RadioGroupField />`](/api/radiogroupfield), & [`<FileField />`](/api/fileField) components.
:::

### Example

<SandBox deps={["@opentf/react-form"]} code={BasicFormSource} />

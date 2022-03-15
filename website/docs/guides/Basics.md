---
sidebar_position: 1
---

import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';
import BasicForm from '@site/src/examples/BasicForm';
import BasicFormSource from '!!raw-loader!@site/src/examples/BasicForm';
import BasicForm2 from '@site/src/examples/BasicForm2';
import BasicForm2Source from '!!raw-loader!@site/src/examples/BasicForm2';

## `<Form />`

The `root` component for all the `input` fields.

The required `onSubmit` prop is used to receive the values of the form when submitted.

The `initialValues` prop can be used to set initial values for the form.

## `<Field />`

It renders an input element and binds its value to the form state.

It supports the HTML `<input>` element and the `<textarea>` element.

It uses the `name` prop to map the input value.

:::caution
It does not support the `checkbox` and `radio` input types; instead, use the [`<CheckboxField />`](/api/checkboxfield) and [`<RadioGroupField />`](/api/radiogroupfield) components.
:::

### Example

<CodeBlock className="language-jsx">{BasicFormSource}</CodeBlock>

<BrowserWindow>
  <BasicForm />
</BrowserWindow>

### Example (Initial values)

<CodeBlock className="language-jsx">{BasicForm2Source}</CodeBlock>

<BrowserWindow>
  <BasicForm2 />
</BrowserWindow>

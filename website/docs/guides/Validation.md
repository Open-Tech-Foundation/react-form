---
sidebar_position: 2
---

import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '@site/src/components/BrowserWindow';
import ValidationForm from '@site/src/examples/ValidationForm';
import ValidationFormSource from '!!raw-loader!@site/src/examples/ValidationForm';

Generally, forms do have two types of validation. They are:

- ✔️ Form-level validation

- ❌ Field-level validation (Currently not supported)

## Form-level validation

By default, form validation happens when an input field blurs or the form submission is attempted.

The `<Form>` component `validate` prop is used to set the validate function.

The validating function can be either `sync` or `async`

The function will be called with the form `values`. If validation `fails`, it should return an object containing error messages in the shape of form fields.

### Example

<CodeBlock className="language-jsx">{ValidationFormSource}</CodeBlock>

<BrowserWindow>
  <ValidationForm />
</BrowserWindow>

---
sidebar_position: 3
title: Validation & Errors
slug: validation-errors
---

import {SandBox} from '@opentf/react-sandbox';
import ErrorsFormSource from '!!raw-loader!@site/src/examples/ErrorsForm';
import ErrorMsgSource from '!!raw-loader!@site/src/examples/ErrorMsg';

Generally, forms do have two types of validation. They are:

- ✔️ Form-level validation

- ❌ Field-level validation (Currently not supported)

## Form-level validation

By default, form validation happens when an input field `blurs` or the form submission is attempted.

The `<Form>` component `validate` prop is used to set the validation function.

The function will be called with the form `values`. If validation `fails`, it should return an object containing error messages in the shape of form fields.

The `errors` object returned from the validation function is used to display errors in the form.

:::info
The validating function can be either `sync` or `async`
:::

## useFieldError()

The form field's `error` message can be obtained from the `useFieldError` hook function.

The field `name` or `path` is passed to the hook.

The hook function returns an `error` from the `errors` object when the field is `visited/touched`.

### Example

:::info
Try submitting the form without values to get validation errors shown.
:::

<SandBox deps={["@opentf/react-form"]} files={{'/ErrorMsg.js': ErrorMsgSource}} code={ErrorsFormSource} consoleType="Advanced" />

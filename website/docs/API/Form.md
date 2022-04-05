---
sidebar_position: 1
title: <Form />
heading: <Form />
---

The `root` component for all the `input` fields.

It renders an HTML `<form>` element.

## Props:

| Name          | Type                                 | Required | Default   | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------- | ------------------------------------ | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | React.ReactNode                      | Yes      | undefined | The input fields to render in the form component.                                                                                                                                                                                                                                                                                                                                                 |
| onSubmit      | (values: Values) => void             | Yes      | undefined | The form submit handler. <br /> The `values` parameter is an object contains all the form fields values.                                                                                                                                                                                                                                                                                          |
| initialValues | Values                               | No       | {}        | The initial values for the form state.                                                                                                                                                                                                                                                                                                                                                            |
| validate      | (values: Values) => `Errors<Values>` | No       | undefined | The function is used to validate the form when an input field blurs or the form submission is attempted. <br /><br /> The `values` parameter is an object that contains all the form fields values. <br /><br /> If there are errors in the form, the function must return an object containing error messages in the shape of fields. <br /><br /> The function can be either `sync` or `async`. |

:::info
Here, the `Values` refers to the Javascript object type (`{}`) based on the `initialValues` prop type.
:::

## Usage

```jsx
import { Form } from '@open-tech-world/react-form';

<Form onSubmit={(values) => {}} initialValues={{}} validate={(values) => {}}>
  {/* Fields */}
</Form>;
```

---
sidebar_position: 1
title: <Form />
heading: <Form />
---

The `root` component for all the `input` fields.

It renders an HTML `<form>` element.

## Props:

| Name          | Type                         | Required | Default | Description                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | ---------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | React.ReactNode              | Yes      | null    | The input fields to render in the form component.                                                                                                                                                                                                                                                                                                                         |
| onSubmit      | (values: ObjType) => void    | Yes      | null    | The form submit handler. <br /> The `values` parameter is an object contains all the form fields values.                                                                                                                                                                                                                                                                  |
| initialValues | ObjType                      | No       | {}      | The initial values for the form state.                                                                                                                                                                                                                                                                                                                                    |
| validate      | (values: ObjType) => ObjType | No       | null    | The function is used to validate the form when an input field blurs or the form submission is attempted. <br /> The `values` parameter is an object that contains all the form fields values. <br /> If there are errors in it, the function must return an object containing error messages in the shape of fields. <br /> The function can be either `sync` or `async`. |

:::info
Here, the `ObjType` refers to the Javascript plain object type (`{}`).
:::

## Usage

```jsx
import { Form } from '@open-tech-world/react-form';

function MyForm() {
  return (
      <Form onSubmit={(values) => {}} initialValues={{}} validate={(values) => {}}>
        {/* fields */}
      </Form>;
  )
}
```

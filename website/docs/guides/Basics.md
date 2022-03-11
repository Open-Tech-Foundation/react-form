### `<Form />`

The root component for all the input fields in a form.

The required `onSubmit` prop is used to receive the values of the form when submitted.

The `initialValues` prop can be used to set initial values for the form.

### `<Field />`

It renders an input element and binds its value to the form state.

It supports the HTML `<input>` element and the `textarea` element.

It uses the `name` prop to map the input value.

:::caution

It does not support the `checkbox` and `radio` input types; instead, use the `<CheckboxField/>` and `<RadioGroupField/>` components.

:::

### Example

```tsx
<Form onSubmit={(values) => console.log(values)}>
  <Field name="userName" />
  <Field name="email" type="email" />
  <button type="submit">Submit</button>
</Form>
```

Values:

```json
{
  "userName": "",
  "email": ""
}
```

### Example (Initial values)

```tsx
<Form
  initialValues={{ userName: 'abc' }}
  onSubmit={(values) => console.log(values)}
>
  <Field name="userName" />
  <Field name="email" type="email" />
  <button type="submit">Submit</button>
</Form>
```

Values:

```json
{
  "userName": "abc",
  "email": ""
}
```

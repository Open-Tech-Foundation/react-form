### `<Form />`

The root component for all the input fields in a form.

The required `onSubmit` prop is used to receive the values of the form when submitted.

The `initialValues` prop can be used to set initial values for the form.

### `<Field />`

It renders an input component and binds its value to the form state.

It supports HTML input (excluding checkbox and radio), select, textarea, and custom React input components.

It uses the `name` prop to map the input value.

### Example

```tsx
<Form onSubmit={(values) => console.log(values)}>
  <Field name="userName" component="input" type="text" />
  <button type="submit">Submit</button>
</Form>
```

Values:

```json
{
    "userName": ""
}
```

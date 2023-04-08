import { Form, Field } from '@opentf/react-form';

export default function App() {
  return (
    <Form
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 4));
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Name is required!';
        }
        if (!values.email) {
          errors.email = 'Email is required!';
        }
        return errors;
      }}
    >
      <div>
        <label>Name: </label>
        <Field name="name" />
      </div>

      <br />

      <div>
        <label>Email: </label>
        <Field name="email" type="email" />
      </div>

      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}

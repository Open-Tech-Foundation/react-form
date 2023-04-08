import { Form, Field } from '@opentf/react-form';
import ErrorMsg from './ErrorMsg';

export default function App() {
  return (
    <Form
      initialValues={{ name: '', email: '' }}
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
        <ErrorMsg path="name" />
      </div>

      <br />

      <div>
        <label>Email: </label>
        <Field name="email" type="email" />
        <ErrorMsg path="email" />
      </div>

      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}

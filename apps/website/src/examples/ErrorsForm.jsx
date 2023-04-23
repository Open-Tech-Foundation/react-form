import { Form, Field } from '@opentf/react-form';
import ErrorMsg from './ErrorMsg';

export default function App() {
  return (
    <Form
      initialValues={{ name: '', email: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        }
        return errors;
      }}
    >
      <div>
        <label>Name: </label>
      </div>
      <div>
        <Field name="name" />
        <ErrorMsg path="name" />
      </div>
      <br />
      <div>
        <label>Email: </label>
      </div>
      <div>
        <Field name="email" type="email" />
        <ErrorMsg path="email" />
      </div>
      <br />
      <button type="submit">Submit</button>
    </Form>
  );
}

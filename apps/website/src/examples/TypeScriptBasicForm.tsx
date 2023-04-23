import { Form, Field } from '@opentf/react-form';

interface FormValues {
  name: string;
  email: string;
}

export default function App() {
  const initialValues: FormValues = { name: '', email: '' };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
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

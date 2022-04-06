import { Form, Field } from '@open-tech-world/react-form';

interface FormValues {
  name: string;
  email: string;
}

export default function App() {
  const initialValues: FormValues = { name: '', email: '' };

  return (
    <Form
      initialValues={initialValues}
      onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
    >
      <div>
        <label>Name: </label>
        <Field name="name" />
      </div>

      <div>
        <label>Email: </label>
        <Field name="email" type="email" />
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}

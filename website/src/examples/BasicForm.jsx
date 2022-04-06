import { Form, Field } from '@open-tech-world/react-form';

export default function App() {
  return (
    <Form onSubmit={(values) => alert(JSON.stringify(values, null, 4))}>
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

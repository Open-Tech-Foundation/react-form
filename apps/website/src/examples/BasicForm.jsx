import { Form, Field } from '@opentf/react-form';

export default function App() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
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

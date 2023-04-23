import { Form, FileField } from '@opentf/react-form';

export default function App() {
  return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div>
        <FileField name="file" />
      </div>

      <br />

      <div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
}

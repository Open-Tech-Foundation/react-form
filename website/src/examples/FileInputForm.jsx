import { Form, FileField } from '@open-tech-world/react-form';

export default function App() {
  return (
    <Form
      onSubmit={(values) => {
        if (values.file && values.file.length > 0) {
          alert(values.file[0].name + ' Uploaded!');
        } else {
          alert('No file selected!');
        }
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

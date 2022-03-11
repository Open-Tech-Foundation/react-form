import { Form, Field } from '@open-tech-world/react-form';
import Values from './Values';

export default function BasicForm2() {
  return (
    <>
      <Form initialValues={{name: 'xxx'}} onSubmit={(values) => console.log(values)}>
        <div>
          <label>Name: </label>
          <Field name="name" />
        </div>
        <div>
          <label>Email: </label>
          <Field name="email" type="email" />
        </div>
        <button type="submit">Submit</button>
        <Values />
      </Form>
    </>
  );
}

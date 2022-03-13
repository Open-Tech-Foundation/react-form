import { Form, Field } from '@open-tech-world/react-form';
import Values from './Values';

export default function BasicForm() {
  return (
    <Form onSubmit={(values) => alert(JSON.stringify(values, '', 4))}>
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
  );
}

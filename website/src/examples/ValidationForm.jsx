import { Form, Field } from '@open-tech-world/react-form';
import Values from './Values';

export default function ValidationForm() {
  return (
    <Form
      onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
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

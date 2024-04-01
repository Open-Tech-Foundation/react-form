import { Form, Field } from '../../../packages/react-form/src';
import FormContext from './FormContext';
import RenderCount from './RenderCount';

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
      <FormContext />
      <RenderCount />
    </Form>
  );
}

import { Form, Field, SelectField } from '../../../packages/react-form/src';
import FormContext from './FormContext';
import RenderCount from './RenderCount';

export default function App() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <SelectField name="browser">
        <option value=""></option>
        <option value="chrome">Chrome</option>
        <option value="firefox">Firefox</option>
        <option value="opera">Opera</option>
      </SelectField>
      <button type="submit">Submit</button>
      <FormContext />
    </Form>
  );
}

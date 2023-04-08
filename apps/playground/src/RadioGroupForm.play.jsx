import { RadioGroupField, Form } from '../../../packages/react-form/src';
import FormContext from './FormContext';
import RenderCount from './RenderCount';

export default function CheckboxForm() {
  return (
    <Form
      initialValues={{ contact: 'email' }}
      onSubmit={(values) => console.log(values)}
    >
      <fieldset>
        <legend>Please select your preferred contact method:</legend>
        <RadioGroupField name="contact" label="Email" value="email" />
        <br />
        <RadioGroupField name="contact" label="Phone" value="phone" />
        <br />
        <RadioGroupField name="contact" label="Mail" value="mail" />
      </fieldset>
      <br />
      <button type="submit">Submit</button>

      <br />
      <FormContext />
    </Form>
  );
}

import { Form, RadioGroupField } from '@open-tech-world/react-form';
import FormContext from './FormContext';

export default function App() {
  return (
    <div className="App">
      <Form
        initialValues={{ contact: 'email' }}
        onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
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
    </div>
  );
}

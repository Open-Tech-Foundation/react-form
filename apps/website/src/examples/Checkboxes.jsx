import { Form, CheckboxField } from '@opentf/react-form';
import FormContext from './FormContext';

export default function App() {
  return (
    <div className="App">
      <Form
        onSubmit={(values) => console.log(values)}
        initialValues={{
          newsletter: true,
          interests: ['art'],
          agreement: false,
        }}
      >
        <fieldset>
          <legend>Choose your interests</legend>
          <CheckboxField name="interests" label="Art" value="art" />
          <br />
          <CheckboxField name="interests" label="Coding" value="coding" />
          <br />
          <CheckboxField name="interests" label="Music" value="music" />
        </fieldset>
        <br />
        <div>
          <CheckboxField name="newsletter" label="Send newsletter" />
          <br />
          <CheckboxField name="agreement" label="I agree" />
        </div>
        <br />
        <button type="submit">Submit</button>
        <FormContext />
      </Form>
    </div>
  );
}

import { Form, SelectField } from '@opentf/react-form';
import FormContext from './FormContext';

export default function App() {
  return (
    <div className="App">
      <Form
        initialValues={{ location: { city: 'Chennai' } }}
        onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
      >
        <div>
          <div>Location</div>
          <SelectField name="location.city">
            <option value="">Select</option>
            <option value="Chennai">Chennai</option>
            <option value="London">London</option>
            <option value="Madrid">Madrid</option>
            <option value="New York">New York</option>
            <option value="Tokyo">Tokyo</option>
          </SelectField>
        </div>

        <br />

        <div>
          <div>Please choose one or more pets:</div>
          <SelectField name="pets" multiple size="4">
            <optgroup label="4-legged pets">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster" disabled>
                Hamster
              </option>
            </optgroup>
            <optgroup label="Flying pets">
              <option value="parrot">Parrot</option>
              <option value="macaw">Macaw</option>
              <option value="albatross">Albatross</option>
            </optgroup>
          </SelectField>
        </div>
        <br />
        <button type="submit">Submit</button>
        <br />
        <FormContext />
      </Form>
    </div>
  );
}

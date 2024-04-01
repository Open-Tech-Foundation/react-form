import { Form, Field, SelectField } from '@opentf/react-form';
import FormContext from './FormContext';
import ErrorMsg from './ErrorMsg';

export default function App() {
  return (
    <div className="App">
      <Form
        initialValues={{ name: '', email: '', city: '' }}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = '*Required';
          }
          if (!values.email) {
            errors.email = '*Required';
          }
          return errors;
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div>
              <label>Name</label>
              <Field name="name" />
              <ErrorMsg path="name" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMsg path="email" />
            </div>
            <div>
              <label>City</label>
              <SelectField name="city">
                <option value="">Select</option>
                <option value="Chennai">Chennai</option>
                <option value="London">London</option>
                <option value="Madrid">Madrid</option>
                <option value="New York">New York</option>
                <option value="Tokyo">Tokyo</option>
              </SelectField>
            </div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <FormContext />
          </div>
        </div>
      </Form>
    </div>
  );
}

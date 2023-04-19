import { Form, Field, SelectField } from '@opentf/react-form';
import FormContext from './FormContext';
import { MUISelectField, MUITextField } from './MUI';
import { Button, MenuItem } from '@mui/material';

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
          return errors;
        }}
      >
        <table>
          <tbody>
            <tr>
              <td></td>
              <td align="center">Native</td>
              <td align="center">MUI</td>
            </tr>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <Field name="name" />
              </td>
              <td>
                <MUITextField name="name" label="Name" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                <Field name="email" type="email" />
              </td>
              <td>
                <MUITextField name="email" label="Email" type="email" />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <SelectField name="city">
                  <option value="">Select</option>
                  <option value="Chennai">Chennai</option>
                  <option value="London">London</option>
                  <option value="Madrid">Madrid</option>
                  <option value="New York">New York</option>
                  <option value="Tokyo">Tokyo</option>
                </SelectField>
              </td>
              <td>
                <MUISelectField name="city" label="City">
                  <MenuItem value="">Choose</MenuItem>
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="London">London</MenuItem>
                  <MenuItem value="Madrid">Madrid</MenuItem>
                  <MenuItem value="New York">New York</MenuItem>
                  <MenuItem value="Tokyo">Tokyo</MenuItem>
                </MUISelectField>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
              <td>
                <Button type="submit" variant="contained" size="small">
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        <FormContext />
      </Form>
    </div>
  );
}

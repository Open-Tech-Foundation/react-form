import { Form, Field } from '@opentf/react-form';
import FormContext from './FormContext';

export default function App() {
  return (
    <div style={{ padding: '15px' }}>
      <Form
        initialValues={{ userName: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.userName) {
            errors.userName = '*Required';
          }
          if (!values.password) {
            errors.password = '*Required';
          }
          return errors;
        }}
        onSubmit={(values) => console.log(values)}
      >
        <div>
          <label>Username: </label>
          <Field name="userName" />
        </div>

        <br />

        <div>
          <label>Password: </label>
          <Field name="password" type="password" />
        </div>

        <br />
        <button type="submit">Submit</button>
        <FormContext />
      </Form>
    </div>
  );
}

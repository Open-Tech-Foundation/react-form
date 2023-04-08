import { Form, Field } from '@opentf/react-form';
import { capitalize } from '@opentf/es-utils';
import * as yup from 'yup';

import ErrorMsg from './ErrorMsg';
import FormContext from './FormContext';

export default function App() {
  return (
    <div className="App">
      <Form
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
        validate={async (values) => {
          const errors = {};
          let schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(8).max(15).required(),
            confirmPassword: yup
              .string()
              .oneOf([yup.ref('password'), null], 'Passwords must match'),
          });

          try {
            await schema.validate(values, { abortEarly: false });
          } catch (err) {
            err.inner.map((i) => (errors[i.path] = capitalize(i.message)));
          }
          return errors;
        }}
      >
        <div>
          <div>Name: </div>
          <Field name="name" />
          <ErrorMsg path="name" />
        </div>

        <br />

        <div>
          <div>Email: </div>
          <Field name="email" type="email" />
          <ErrorMsg path="email" />
        </div>

        <br />

        <div>
          <div>Password: </div>
          <Field name="password" type="password" />
          <ErrorMsg path="password" />
        </div>

        <br />

        <div>
          <div>Confirm Password: </div>
          <Field name="confirmPassword" type="password" />
          <ErrorMsg path="confirmPassword" />
        </div>

        <br />
        
        <button type="submit">Submit</button>

        <br />

        <FormContext />
      </Form>
    </div>
  );
}

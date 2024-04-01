import { Form, Field, useFieldError } from '@opentf/react-form';
import { set } from '@opentf/std';
import { z } from 'zod';
import FormContext from './FormContext';

const Schema = z.object({
  userName: z.string().min(1, '*Required'),
  password: z.string().min(8),
});

function zodErrors(schema, values) {
  const errors = {};
  const result = schema.safeParse(values);
  if (!result.success) {
    result.error.issues.forEach((i) => set(errors, i.path.join('.'), i.message));
  }

  return errors;
}

function ErrorMsg({ path }) {
  const error = useFieldError(path);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return null;
}

export default function App() {
  return (
    <div style={{ padding: '15px' }}>
      <Form
        initialValues={{
          userName: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
        validate={async (values) => {
          return zodErrors(Schema, values);
        }}
      >
        <div>
          <div>Username: </div>
          <Field name="userName" />
          <ErrorMsg path="userName" />
        </div>
        <br />
        <div>
          <div>Password: </div>
          <Field name="password" type="password" />
          <ErrorMsg path="password" />
        </div>
        <br />
        <button type="submit">Submit</button>
        <br />
        <FormContext />
      </Form>
    </div>
  );
}

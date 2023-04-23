import { Form, useField, useFormActions } from '@opentf/react-form';

export default function App() {
  const ResetBtn = () => {
    const { reset } = useFormActions();

    return (
      <button type="button" onClick={() => reset({name: 'XXX', email: 'xxx@example.com'})}>
        Reset
      </button>
    );
  };

  const TextField = ({ name, type, label }) => {
    const { field, error } = useField(name);

    return (
      <div>
        <div>{label}</div>
        <input
          type={type}
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
          onBlur={field.onBlur}
        />
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  };

  return (
    <Form
      initialValues={{ name: '', email: '' }}
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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <TextField name="name" label="Name" />
      <TextField name="email" type="email" label="Email" />
      <br />
      <button type="submit">Submit</button>
      <ResetBtn />
    </Form>
  );
}

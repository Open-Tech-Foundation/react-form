import {
  Form,
  Field,
  useFormActions,
  useField,
} from '../../../packages/react-form/src';
import FormContext from './FormContext';

export default function App() {
  const ResetBtn = () => {
    const { reset } = useFormActions();

    return (
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    );
  };

  const TextField = ({ name }) => {
    const { field, error } = useField(name);

    return (
      <div>
        <input
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
      initialValues={{ name: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = '*Required';
        }
        return errors;
      }}
      onSubmit={(values) => console.log(values)}
    >
      <TextField name="name" />
      <button type="submit">Submit</button>
      <ResetBtn />
      <FormContext />
    </Form>
  );
}

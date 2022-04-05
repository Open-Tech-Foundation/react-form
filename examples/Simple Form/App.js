import { Form, Field } from '@open-tech-world/react-form';
import FormContext from './FormContext';

export default function App() {
  return (
    <div className="App">
      <Form onSubmit={(values) => alert(JSON.stringify(values, '', 4))}>
        <div>
          <label>Name: </label>
          <Field name="name" />
        </div>

        <br />
        
        <div>
          <label>Email: </label>
          <Field name="email" type="email" />
        </div>
        
        <br />
        
        <button type="submit">Submit</button>
        
        <FormContext />
      </Form>
    </div>
  );
}

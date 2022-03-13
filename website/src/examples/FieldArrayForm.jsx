import { Form, Field, FieldArray } from '@open-tech-world/react-form';
import Values from './Values';

export default function FieldArrayForm() {
  return (
    <Form
      initialValues={{ tasks: ['Task 1'] }}
      onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
    >
      <div>
        <div>Project Name:</div>
        <Field name="projectName" />
      </div>

      <br />

      <div>
        <div>Tasks:</div>
        <FieldArray
          name="tasks"
          component={({ fields, push, remove }) => {
            const tasks = fields.map((f, i) => (
              <div key={f}>
                <Field name={f} />
                <button
                  type="button"
                  onClick={() => remove(i)}
                  style={{ marginLeft: '15px' }}
                >
                  ❌
                </button>
              </div>
            ));

            return (
              <>
                {tasks}
                <br />
                <button type="button" onClick={() => push('')}>
                  Add Task
                </button>
              </>
            );
          }}
        />
      </div>

      <br />
      <button type="submit">Submit</button>

      <Values />
    </Form>
  );
}

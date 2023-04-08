import { Form, Field, useFieldArray } from '@opentf/react-form';

const TasksField = () => {
  const { fields, push, remove } = useFieldArray('tasks');
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
      <br />
      <br />
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
};

export default function App() {
  return (
    <Form
      initialValues={{ tasks: ['Task 1'] }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 4));
      }}
    >
      <div>
        <div>Project Name:</div>
        <Field name="projectName" />
      </div>

      <br />

      <div>
        <div>Tasks:</div>
        <TasksField />
      </div>

      <br />

      <button type="submit">Submit</button>
    </Form>
  );
}

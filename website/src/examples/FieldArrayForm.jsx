import { Form, Field, useFieldArray } from '@open-tech-world/react-form';

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
        console.log(values);
      }}
    >
      <div>
        <div>Project Name:</div>
        <Field name="projectName" />
      </div>

      <div>
        <div>Tasks:</div>
        <TasksField />
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}

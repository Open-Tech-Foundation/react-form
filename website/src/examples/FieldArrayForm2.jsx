import { Form, Field, useFieldArray } from '@open-tech-world/react-form';

const MembersField = () => {
  const { fields, push, remove } = useFieldArray('members');
  const members = fields.map((f, i) => (
    <fieldset>
      <legend>Member - {i + 1}</legend>
      <div>
        <div>Name</div>
        <Field name={`${f}.name`} />
      </div>

      <div>
        <div>Email</div>
        <Field name={`${f}.email`} type="email" />
      </div>

      <button type="button" onClick={() => remove(i)}>
        ❌ Remove
      </button>
    </fieldset>
  ));

  return (
    <div>
      <div>{members}</div>
      <button type="button" onClick={() => push({})}>
        Add Member
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Form
      initialValues={{ members: [{}] }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div>
        <div>Members:</div>
        <MembersField />
      </div>

      <button type="submit">Submit</button>
    </Form>
  );
}

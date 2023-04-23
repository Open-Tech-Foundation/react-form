import { Form, Field, useFieldArray } from '../../../packages/react-form/src';

const MembersField = () => {
  const { fields, push, remove } = useFieldArray('members');
  const members = fields.map((f, i) => (
    <fieldset style={{ marginTop: '10px' }} key={i}>
      <legend>Member - {i + 1}</legend>
      <div>
        <div>Name</div>
        <Field name={`${f}.name`} />
      </div>

      <div>
        <div>Email</div>
        <Field name={`${f}.email`} type="email" />
      </div>

      <br />
      <button type="button" onClick={() => remove(i)}>
        ❌ Remove
      </button>
      <br />
    </fieldset>
  ));

  return (
    <div>
      <div>{members}</div>
      <br />
      <button type="button" onClick={() => push({ name: '', email: '' })}>
        Add Member
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div style={{ padding: '15px' }}>
      <Form
        initialValues={{
          teamName: 'My Team',
          members: [{ name: '', email: '' }],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <div>
          <div>
            <label>Team Name:</label>
          </div>
          <Field name="teamName" />
        </div>
        <br />
        <div>
          <div>Members:</div>
          <MembersField />
        </div>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

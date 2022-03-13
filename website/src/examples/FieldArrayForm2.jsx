import { Form, Field, FieldArray } from '@open-tech-world/react-form';
import Values from './Values';

export default function FieldArrayForm() {
  const MembersField = ({ fields, push, remove }) => {
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

        <br />
        <button type="button" onClick={() => remove(i)}>
          ❌ Remove
        </button>
      </fieldset>
    ));

    return (
      <div>
        {members}
        <br />
        <button type="button" onClick={() => push({})}>
          Add Member
        </button>
      </div>
    );
  };

  return (
    <Form
      initialValues={{ members: [{}] }}
      onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
    >
      <div>
        <div>Members:</div>
        <FieldArray name="members" component={MembersField} />
      </div>

      <br />
      <button type="submit">Submit</button>

      <Values />
    </Form>
  );
}

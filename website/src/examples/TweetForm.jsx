import { Form, useField } from '@open-tech-world/react-form';
import Values from './Values';

function TweetField({ name }) {
  const { field } = useField(name);
  return (
    <div style={{ width: '250px', height: '150px' }}>
      <label>What's happening?</label>
      <div>
        <textarea
          {...field}
          placeholder="Type here..."
          style={{ width: '100%' }}
          rows="5"
          maxLength={140}
        />
        <div style={{ textAlign: 'right' }}>
          {field.value.length} / 140 Characters
        </div>
      </div>
    </div>
  );
}

export default function TweetForm() {
  return (
    <Form onSubmit={(values) => console.log(values)}>
      <TweetField name="tweet" />
      <button type="submit">Tweet</button>
      <Values />
    </Form>
  );
}

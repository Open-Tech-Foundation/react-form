import { Form } from '@opentf/react-form';
import TweetField from './TweetField';

export default function TweetForm() {
  return (
    <Form
      initialValues={{ tweet: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.tweet) {
          errors.tweet = '*Required';
        }
        return errors;
      }}
      onSubmit={(values) => console.log(values)}
    >
      <label>What's happening?</label>
      <TweetField name="tweet" />
      <button type="submit">Tweet</button>
    </Form>
  );
}

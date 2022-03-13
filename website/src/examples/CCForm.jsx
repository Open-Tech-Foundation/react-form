import { Field, Form, useField } from '@open-tech-world/react-form';
import Values from './Values';

function CCNumberField({ name }) {
  const { field, setValue } = useField(name);
  return (
    <input
      {...field}
      placeholder="0000-0000-0000-0000"
      maxLength="19"
      onChange={(e) => {
        if (e.target.value.length <= 19) {
          const format = e.target.value
            .replace(/[^0-9]/g, '')
            .replace(/(.{4})/g, '$1-');

          setValue(format.slice(0, 19));
        }
      }}
    />
  );
}

function ExpiryDateField({ name }) {
  const { field, setValue } = useField(name);
  return (
    <input
      {...field}
      style={{ width: '5em' }}
      placeholder="MM / YY"
      maxLength="7"
      onChange={(e) => {
        if (e.target.value.length < 8) {
          const format = e.target.value
            .replace(/[^0-9]/g, '')
            .replace(/(.{2})/g, '$1 / ');
          setValue(format.slice(0, 7));
        }
      }}
    />
  );
}

export default function CCForm() {
  return (
    <Form onSubmit={(values) => alert(JSON.stringify(values, '', 4))}>
      <div>
        <div>Name on the card</div>
        <Field name="name" placeholder="Name" />
      </div>

      <div>
        <div>Card Number</div>
        <CCNumberField name="ccNumber" />
      </div>

      <div>
        <div>Expiry Date</div>
        <ExpiryDateField name="expiryDate" />
      </div>

      <div>
        <div>CVC</div>
        <Field
          name="cvc"
          maxLength="3"
          style={{ width: '3em' }}
          placeholder="CVC"
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
      
      <Values />
    </Form>
  );
}

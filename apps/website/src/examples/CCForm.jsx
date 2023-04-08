import { Field, Form, useField } from '@opentf/react-form';

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
        if (e.target.value.length <= 7) {
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

      <br />

      <div>
        <div>Card Number</div>
        <CCNumberField name="ccNumber" />
      </div>

      <br />

      <div>
        <div>Expiry Date</div>
        <ExpiryDateField name="expiryDate" />
      </div>

      <br />

      <div>
        <div>CVC</div>
        <Field
          name="cvc"
          maxLength="3"
          style={{ width: '3em' }}
          placeholder="CVC"
        />
      </div>

      <br />

      <button type="submit">Submit</button>
    </Form>
  );
}

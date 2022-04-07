import { Form, useField } from '@open-tech-world/react-form';
import {
  Checkbox,
  ComboBox,
  PrimaryButton,
  SelectableOptionMenuItemType,
  TextField,
  Toggle
} from '@fluentui/react';
import FormContext from './FormContext';

const FluentTextField = ({ name, ...otherProps }) => {
  const { field, error } = useField(name);

  return <TextField errorMessage={error} {...field} {...otherProps} />;
};

const FluentCheckboxField = ({ name, ...otherProps }) => {
  const { field, setValue } = useField(name);
  return (
    <Checkbox
      {...field}
      {...otherProps}
      onChange={(ev, checked) => setValue(checked)}
      defaultChecked={Boolean(field.value)}
    />
  );
};

const FluentToggleField = ({ name, ...otherProps }) => {
  const { field, setValue } = useField(name);
  return (
    <Toggle
      {...field}
      {...otherProps}
      onChange={(ev, checked) => setValue(checked)}
      defaultChecked={Boolean(field.value)}
    />
  );
};

const FluentComboBoxField = ({ name, ...otherProps }) => {
  const { field, error, setValue } = useField(name, {
    multiple: otherProps.multiSelect
  });
  return (
    <ComboBox
      errorMessage={error}
      {...field}
      {...otherProps}
      onChange={(ev, option) => {
        let value;
        if (otherProps.multiSelect) {
          value = [...field.value];
          if (option.selected) {
            value.push(option.text);
          } else {
            value = value.filter((i) => i !== option.text);
          }
        } else {
          value = option.text;
        }
        setValue(value);
      }}
    />
  );
};

export default function App() {
  const options = [
    {
      key: 'Header1',
      text: 'First heading',
      itemType: SelectableOptionMenuItemType.Header
    },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    {
      key: 'divider',
      text: '-',
      itemType: SelectableOptionMenuItemType.Divider
    },
    {
      key: 'Header2',
      text: 'Second heading',
      itemType: SelectableOptionMenuItemType.Header
    },
    { key: 'E', text: 'Option E' },
    { key: 'F', text: 'Option F', disabled: true },
    { key: 'G', text: 'Option G' },
    { key: 'H', text: 'Option H' },
    { key: 'I', text: 'Option I' },
    { key: 'J', text: 'Option J' }
  ];

  return (
    <div className="App">
      <Form
        initialValues={{ check1: true, toggle1: true, comboBox1: '', comboBox2: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required!';
          }
          if (!values.email) {
            errors.email = 'Required!';
          }
          if (!values.password) {
            errors.password = 'Required!';
          }
          if (!values.comboBox1) {
            errors.comboBox1 = 'Required!';
          }
          return errors;
        }}
        onSubmit={(values) => alert(JSON.stringify(values, '', 4))}
      >
        <div>
          <label>Name: </label>
          <FluentTextField name="name" />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <FluentTextField name="email" type="email" />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <FluentTextField
            name="password"
            type="password"
            canRevealPassword
            revealPasswordAriaLabel="Show password"
          />
        </div>
        <br />
        <div>
          <FluentCheckboxField name="check1" label="Check 1" />
        </div>
        <br />
        <div>
          <FluentCheckboxField name="check2" label="Check 2" />
        </div>
        <br />
        <div>
          <FluentComboBoxField
            name="comboBox1"
            label="Combo Box 1"
            options={options}
          />
        </div>
        <br />
        <div>
          <FluentComboBoxField
            name="comboBox2"
            label="Combo Box 2"
            options={options}
            multiSelect
          />
        </div>
        <br />
        <div>
          <FluentToggleField name="toggle1" label="Toggle 1" />
        </div>
        <br />
        <div>
          <FluentToggleField name="toggle2" label="Toggle 2" />
        </div>
        <br />
        <PrimaryButton type="submit" text="Submit" />

        <br />

        <FormContext />
      </Form>
    </div>
  );
}

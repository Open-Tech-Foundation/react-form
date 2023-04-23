import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from '@mui/material';
import { Form, useField } from '@opentf/react-form';
import FormContext from './FormContext';

const MUITextField = ({ name, label }) => {
  const { field, error } = useField(name);
  return (
    <TextField
      error={Boolean(error)}
      label={label}
      helperText={error}
      {...field}
      onChange={(e) => field.onChange(e.target.value)}
    />
  );
};

const MUICheckboxField = ({ name, label }) => {
  const { field } = useField(name);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={Boolean(field.value)}
          onChange={(e) => field.onChange(e.target.checked)}
          onBlur={field.onBlur}
        />
      }
      label={label}
    />
  );
};

const MUISwitchField = ({ name, label }) => {
  const { field } = useField(name);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={Boolean(field.value)}
          onChange={(e) => field.onChange(e.target.checked)}
          onBlur={field.onBlur}
        />
      }
      label={label}
    />
  );
};

const MUISelectField = ({ name, label, children }) => {
  const { field, error } = useField(name);
  return (
    <FormControl fullWidth error={Boolean(error)}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
        onBlur={field.onBlur}
      >
        {children}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default function App() {
  return (
    <Box p={3}>
      <Form
        initialValues={{ text: '', checkbox: false, switch: true, select: '' }}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          const errors = {};
          if (!values.text) {
            errors.text = '*Required';
          }
          if (!values.select) {
            errors.select = '*Required';
          }
          return errors;
        }}
      >
        <Box mt={2}>
          <MUITextField name="text" label="Text" />
        </Box>

        <Box mt={2}>
          <MUICheckboxField name="checkbox" label="CheckBox" />
        </Box>

        <Box mt={2}>
          <MUISwitchField name="switch" label="Switch" />
        </Box>

        <Box mt={2}>
          <MUISelectField name="select" label="Select">
            <MenuItem value="">Choose</MenuItem>
            <MenuItem value="option 1">Option 1</MenuItem>
            <MenuItem value="option 2">Option 2</MenuItem>
            <MenuItem value="option 3">Option 3</MenuItem>
          </MUISelectField>
        </Box>

        <Box mt={2}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>

        <br />

        <FormContext />
      </Form>
    </Box>
  );
}

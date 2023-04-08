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
import { Form, useField } from '../../../packages/react-form/src';
import FormContext from './FormContext';

const MUITextField = ({ name, label }) => {
  const { field, error } = useField(name);
  return (
    <TextField
      error={Boolean(error)}
      label={label}
      helperText={error}
      value={field.value}
      onChange={(e) => field.onChange(e.target.value)}
      onBlur={field.onBlur}
    />
  );
};

const MUICheckboxField = ({ name, label }) => {
  const { field, setValue } = useField(name);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={Boolean(field.value)}
          onChange={(e) => {
            setValue(e.target.checked);
          }}
        />
      }
      label={label}
    />
  );
};

const MUISwitchField = ({ name, label }) => {
  const { field, setValue } = useField(name);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={Boolean(field.value)}
          onChange={(e) => {
            setValue(e.target.checked);
          }}
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
        onChange={(e) => field.onChange(e.target.value)}
        value={field.value}
      >
        {children}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default function App() {
  return (
    <div className="App">
      <Form
        initialValues={{ name: '', switch1: false, select1: '', check1: false }}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required!';
          }
          if (!values.select1) {
            errors.select1 = 'Required!';
          }
          return errors;
        }}
      >
        <Box mt={2}>
          <MUITextField name="name" label="Name" />
        </Box>

        <Box mt={2}>
          <MUICheckboxField name="check1" label="Check 1" />
        </Box>

        <Box mt={2}>
          <MUISwitchField name="switch1" label="Switch 1" />
        </Box>

        <Box mt={2}>
          <MUISelectField name="select1" label="Select">
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
    </div>
  );
}

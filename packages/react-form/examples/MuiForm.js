import {
  Button,
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Form, useField } from '../src/index';
import Values from './Values';

const MuiTextField = ({ name }) => {
  const { field, error } = useField(name);
  return (
    <TextField
      error={Boolean(error)}
      label="Name"
      helperText={error}
      {...field}
    />
  );
};

const MuiCheckboxField = ({ name }) => {
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
      label="Check 1"
    />
  );
};

const MuiSwitchField = ({ name }) => {
  const { field, setValue } = useField(name);

  return (
    <FormControlLabel
      control={
        <Switch
          onChange={(e) => {
            setValue(e.target.checked);
          }}
        />
      }
      label="Switch 1"
    />
  );
};

export default function MuiForm() {
  return (
    <>
      <Typography variant="h6">MUI Form:</Typography>
      <Box mt={5}>
        <Form
          onSubmit={(values) => console.log(values)}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required!';
            }
            return errors;
          }}
        >
          <Box mt={2}>
            <MuiTextField name="name" />
          </Box>

          <Box mt={2}>
            <MuiCheckboxField name="check1" />
          </Box>

          <Box mt={2}>
            <MuiSwitchField name="switch1" />
          </Box>

          <Box mt={2}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>

          <Values />
        </Form>
      </Box>
    </>
  );
}

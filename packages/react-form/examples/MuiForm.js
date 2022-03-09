import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Form, useField } from '../src/index';
import Values from './Values';

const MuiTextField = ({ name }) => {
  const { field, error } = useField(name);
  return (
    <TextField
      {...field}
      error={Boolean(error)}
      label="Name"
      helperText={error}
      onChange={(v) => {
        console.log('The value is ', v);
        field.onChange(v);
      }}
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
            <button type="submit">Submit</button>
          </Box>

          <Values />
        </Form>
      </Box>
    </>
  );
}

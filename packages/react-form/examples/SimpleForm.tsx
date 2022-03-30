import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Form, Field } from '../src/index';
import Values from './Values';

export default function SimpleForm() {
  return (
    <>
      <Typography variant="h6">Simple Form:</Typography>
      <Box mt={5}>
        <Form
          onSubmit={(values) => console.log(values)}
          initialValues={{ name: 'g' }}
        >
          <Box mt={2}>
            <Box>Name: </Box>
            <Field name="name" />
          </Box>

          <Box mt={2}>
            <Box>Email: </Box>
            <Field name="email" type="email" />
          </Box>

          <Box mt={2}>
            <Box>Feedback: </Box>
            <Field name="feedback" type="textarea" rows="10" cols="50" />
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

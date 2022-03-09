import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Form, DatalistField } from '../src/index';
import Values from './Values';

export default function OtherFieldsForm() {
  return (
    <>
      <Typography variant="h6">Other Fields Form:</Typography>
      <Box mt={5}>
        <Form onSubmit={(values) => console.log(values)}>
          <Box mt={2}>
            <label>Datalist:</label>
          </Box>
          <Box mt={2}>
            <DatalistField
              name="browser"
              options={[
                'Chrome',
                'Firefox',
                'Internet Explorer',
                'Opera',
                'Safari',
                'Microsoft Edge',
              ]}
            />
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

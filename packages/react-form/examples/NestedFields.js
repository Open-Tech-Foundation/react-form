import { Box } from '@mui/system';
import { Typography, Divider } from '@mui/material';
import { Field, Form, SelectField } from '../src';
import Values from './Values';
import ErrorMsg from './ErrorMsg';
import { useEffect } from 'react';

export default function NestedFields() {
  const initialState = { address: { city: 'Chennai' } };

  return (
    <Box>
      <Form
        onSubmit={(values) => console.log(values)}
        initialValues={initialState}
        validate={(values) => {
          const errors = {};
          if (!values.address.line1) {
            errors.address = {};
            errors.address.line1 = 'Line 1 is required!';
          }
          return errors;
        }}
      >
        <Box mt={2}>
          <Box>Name</Box>
          <Field name="name" />
        </Box>

        <Box mt={2}>
          <Box>Mobile</Box>
          <Field name="mobile" />
        </Box>

        <Box mt={2}>
          <Typography variant="h6">Address</Typography>
          <Divider />
        </Box>

        <Box mt={2}>
          <Box>Line 1</Box>
          <Field name="address.line1" />
          <ErrorMsg path="address.line1" />
        </Box>

        <Box mt={2}>
          <Box>Line 2</Box>
          <Field name="address.line2" />
        </Box>

        <Box mt={2}>
          <Box>City</Box>
          <SelectField name="address.city">
            <option value="">Select</option>
            <option value="Chennai">Chennai</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
          </SelectField>
        </Box>

        <Box mt={2}>
          <Box>Pincode</Box>
          <Field name="address.pincode" />
        </Box>

        <Box mt={2}>
          <button type="submit">Submit</button>
        </Box>
        <Values />
      </Form>
    </Box>
  );
}

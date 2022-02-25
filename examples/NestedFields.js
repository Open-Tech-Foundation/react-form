import { Box } from "@mui/system";
import { Typography, Divider } from "@mui/material";
import { Field, Form } from "../src";
import Values from "./Values";
import ErrorMsg from "./ErrorMsg";

export default function NestedFields() {
  return (
    <Box>
      <Form
        onSubmit={(values) => console.log(values)}
        initialState={{ address: { city: "Chennai" } }}
        validate={(values) => {
          const errors = {};
          if (!values.address.line1) {
            errors.address = {};
            errors.address.line1 = "Line 1 is required!";
          }
          return errors;
        }}
      >
        <Box mt={2}>
          <Box>Name</Box>
          <Field name="name" component="input" type="text" />
        </Box>

        <Box mt={2}>
          <Box>Mobile</Box>
          <Field name="mobile" component="input" type="text" />
        </Box>

        <Box mt={2}>
          <Typography variant="h6">Address</Typography>
          <Divider />
        </Box>

        <Box mt={2}>
          <Box>Line 1</Box>
          <Field name="address.line1" component="input" type="text" />
          <ErrorMsg path="address.line1" />
        </Box>

        <Box mt={2}>
          <Box>Line 2</Box>
          <Field name="address.line2" component="input" type="text" />
        </Box>

        <Box mt={2}>
          <Box>City</Box>
          <Field
            name="address.city"
            component={
              <select>
                <option value="">Select</option>
                <option value="Chennai">Chennai</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
              </select>
            }
            type="text"
          />
        </Box>

        <Box mt={2}>
          <Box>Pincode</Box>
          <Field name="address.pincode" component="input" type="text" />
        </Box>

        <Box mt={2}>
          <button type="submit">Submit</button>
        </Box>
        <Values />
      </Form>
    </Box>
  );
}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, RadioGroupField } from "../src/index";
import Values from "./Values";

export default function RadioGroupForm() {
  return (
    <>
      <Typography variant="h6">Checkbox Form:</Typography>
      <Box mt={5}>
        <Form
          onSubmit={(values) => console.log(values)}
          initialState={{ contact: 'email' }}
        >
          <Box mt={2}>
            <fieldset>
              <legend>Please select your preferred contact method:</legend>
              <Box p={1}>
                <RadioGroupField name="contact" label="Email" value="email" />
              </Box>
              <Box p={1}>
                <RadioGroupField name="contact" label="Phone" value="phone" />
              </Box>
              <Box p={1}>
                <RadioGroupField name="contact" label="Mail" value="mail" />
              </Box>
            </fieldset>
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

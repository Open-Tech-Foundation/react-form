import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, CheckboxField } from "../src/index";
import Values from "./Values";

export default function CheckboxForm() {
  return (
    <>
      <Typography variant="h6">Checkbox Form:</Typography>
      <Box mt={5}>
        <Form
          onSubmit={(values) => console.log(values)}
          initialState={{ newsletter: true, interests: ['art'] }}
        >
          <Box mt={2}>
            <fieldset>
              <legend>Choose your interests</legend>
              <Box p={1}>
                <CheckboxField name="interests" label="Art" value="art" />
              </Box>
              <Box p={1}>
                <CheckboxField name="interests" label="Coding" value="coding" />
              </Box>
              <Box p={1}>
                <CheckboxField name="interests" label="Music" value="music" />
              </Box>
            </fieldset>
          </Box>

          <Box mt={2}>
            <CheckboxField name="newsletter" label="Send newsletter" />
          </Box>

          <Box mt={2}>
            <CheckboxField name="agreement" label="I agree" />
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

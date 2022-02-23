import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Field, useForm } from "../src/index";

function Values() {
  const { formValues } = useForm();
  return <pre>{JSON.stringify(formValues, null, 4)}</pre>;
}

export default function SimpleForm() {
  return (
    <>
      <Typography variant="h6">Simple Form:</Typography>
      <Box mt={5}>
        <Form initialState={{ name: "ganapathy" }}>
          <div>
            <label>Name: </label>
            <Field name="name" component="input" type="text" required />
          </div>

          <div>
            <label>Email: </label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>

          <Values />
        </Form>
      </Box>
    </>
  );
}

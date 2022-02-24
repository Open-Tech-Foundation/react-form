import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Field, useForm } from "../src/index";

function Values() {
  const { values } = useForm();
  return <pre>{JSON.stringify(values, null, 4)}</pre>;
}

function ErrorMsg({ path }) {
  const { errors } = useForm();

  if (errors[path]) {
    return <Box sx={{ color: "error.main" }}>{errors[path]}</Box>;
  }

  return null;
}

export default function Validations() {
  return (
    <>
      <Typography variant="h6">Validations:</Typography>
      <Box mt={5}>
        <Form
          onSubmit={(values) => console.log(values)}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "Name is required";
            }

            if (!values.email) {
              errors.email = "Email is required";
            }

            return errors;
          }}
        >
          <Box mt={2}>
            <Box>Name: </Box>
            <Field name="name" component="input" type="text" />
            <ErrorMsg path="name" />
          </Box>

          <Box mt={2}>
            <Box>Email: </Box>
            <Field name="email" component="input" type="email" />
            <ErrorMsg path="email" />
          </Box>

          <Box mt={2}>
            <Box>Password: </Box>
            <Field name="password" component="input" type="password" />
          </Box>

          <Box mt={2}>
            <Box>Confirm Password: </Box>
            <Field name="passwordConfirm" component="input" type="password" />
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

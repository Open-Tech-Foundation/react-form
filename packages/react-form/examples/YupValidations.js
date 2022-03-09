import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as yup from "yup";

import { Form, Field } from "../src/index";
import ErrorMsg from "./ErrorMsg";
import Values from "./Values";

export default function YupValidations() {
  return (
    <>
      <Typography variant="h6">Yup Validations:</Typography>
      <Box mt={5}>
        <Form
          onSubmit={(values) => console.log(values)}
          validate={async (values) => {
            const errors = {};
            let schema = yup.object().shape({
              name: yup.string().required(),
              email: yup.string().email().required(),
              password: yup.string().min(8).max(15).required(),
              confirmPassword: yup
                .string()
                .oneOf([yup.ref('password'), null], 'Passwords must match'),
            });

            try {
              await schema.validate(values, { abortEarly: false });
            } catch (err) {
              err.inner.map((i) => (errors[i.path] = i.message));
            }
            return errors;
          }}
        >
          <Box mt={2}>
            <Box>Name: </Box>
            <Field name="name" />
            <ErrorMsg path="name" />
          </Box>

          <Box mt={2}>
            <Box>Email: </Box>
            <Field name="email" type="email" />
            <ErrorMsg path="email" />
          </Box>

          <Box mt={2}>
            <Box>Password: </Box>
            <Field name="password" type="password" />
            <ErrorMsg path="password" />
          </Box>

          <Box mt={2}>
            <Box>Confirm Password: </Box>
            <Field name="confirmPassword" type="password" />
            <ErrorMsg path="confirmPassword" />
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

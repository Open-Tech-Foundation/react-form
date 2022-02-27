import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Field, FieldArray, Form } from "../src";
import ErrorMsg from "./ErrorMsg";
import Values from "./Values";

export default function FieldArrayForm() {
  return (
    <Box>
      <Typography variant="h6">Field Array Form:</Typography>
      <Form
        initialState={{ tasks: ["Task1"] }}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          const errors = {};
          if (values.tasks.length === 0) {
            errors._tasks = "Atleast one task is required";
          }
          const taskErrors = values.tasks.map((t, i) => {
            if (!t) {
              return "Required!";
            }
            return;
          });
          if (
            taskErrors.length > 0 &&
            taskErrors.some((i) => typeof i === "string")
          ) {
            errors.tasks = taskErrors;
          }

          return errors;
        }}
      >
        <Box mt={2}>
          <Box>Project Name:</Box>
          <Field name="projectName" component="input" type="text" />
        </Box>
        <FieldArray
          name="tasks"
          component={({ fields, push, remove }) => {
            const tasks = fields.map((f, i) => (
              <Box key={f} mt={2}>
                <Field name={f} component="input" type="text" />
                <button onClick={() => remove(i)}>Remove</button>
                <ErrorMsg path={f} />
              </Box>
            ));

            return (
              <Box mt={2}>
                <Typography variant="body1">Tasks:</Typography>
                {tasks}
                <Box mt={2}>
                  <button type="button" onClick={() => push("")}>
                    Add Task
                  </button>
                </Box>
              </Box>
            );
          }}
        />

        <ErrorMsg path="_tasks" />

        <FieldArray
          name="members"
          component={({ fields, push, remove }) => {
            const members = fields.map((f, i) => (
              <Box key={f} mt={2}>
                <Field
                  name={`${f}.name`}
                  component="input"
                  type="text"
                  placeholder="Name"
                />
                <Field
                  name={`${f}.email`}
                  component="input"
                  type="email"
                  placeholder="Email"
                />
                <button onClick={() => remove(i)}>Remove</button>
              </Box>
            ));

            return (
              <Box mt={2}>
                <Typography variant="body1">Members:</Typography>
                {members}
                <Box mt={2}>
                  <button type="button" onClick={() => push("")}>
                    Add Member
                  </button>
                </Box>
              </Box>
            );
          }}
        />

        <Box mt={2}>
          <button type="submit">Submit</button>
        </Box>

        <Values />
      </Form>
    </Box>
  );
}

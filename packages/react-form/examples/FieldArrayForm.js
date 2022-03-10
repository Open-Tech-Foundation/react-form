import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Field, FieldArray, Form } from '../src';
import ErrorMsg from './ErrorMsg';
import Values from './Values';

export default function FieldArrayForm() {
  return (
    <Box>
      <Typography variant="h6">Field Array Form:</Typography>
      <Form
        initialValues={{ tasks: ['Task1'] }}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          const errors = {};
          if (!values.tasks || values.tasks?.length === 0) {
            errors._tasks = 'Atleast one task is required';
          }

          if (values.tasks) {
            const taskErrors = values.tasks.map((t, i) => {
              if (!t) {
                return 'Required!';
              }
              return;
            });
            if (
              taskErrors.length > 0 &&
              taskErrors.some((i) => typeof i === 'string')
            ) {
              errors.tasks = taskErrors;
            }
          }

          if (values.members) {
            const memberErrors = values.members.map((m, i) => {
              if (!m.email) {
                return {email: 'Email is required!'};
              }
              return;
            });
            if (
              memberErrors.length > 0 &&
              memberErrors.some((i) => typeof i === 'object')
            ) {
              errors.members = memberErrors;
            }
          }

          return errors;
        }}
      >
        <Box mt={2}>
          <Box>Project Name:</Box>
          <Field name="projectName" />
        </Box>
        <FieldArray
          name="tasks"
          component={({ fields, push, remove }) => {
            const tasks = fields.map((f, i) => (
              <Box key={f} mt={2}>
                <Field name={f} />
                <Box component="span" ml={1}>
                  <button type="button" onClick={() => remove(i)}>
                    ❌
                  </button>
                </Box>
                <ErrorMsg path={f} />
              </Box>
            ));

            return (
              <Box mt={2}>
                <Typography variant="body1">Tasks:</Typography>
                {tasks}
                <ErrorMsg path="_tasks" />
                <Box mt={2}>
                  <button type="button" onClick={() => push('')}>
                    Add Task
                  </button>
                </Box>
              </Box>
            );
          }}
        />

        <FieldArray
          name="members"
          component={({ fields, push, remove }) => {
            const members = fields.map((f, i) => (
              <Box sx={{ border: 1 }}  key={f} mt={2} p={2}>
                <Box>
                  <Box>Name</Box>
                  <Field
                    name={`${f}.name`}
                    component="input"
                    type="text"
                    placeholder="Name"
                  />
                </Box>
                <Box mt={2}>
                  <Box>Email</Box>
                  <Field
                    name={`${f}.email`}
                    component="input"
                    type="email"
                    placeholder="Email"
                  />
                  <ErrorMsg path={`${f}.email`} />
                </Box>
                <Box mt={2}>
                  <button type="button" onClick={() => remove(i)}>
                  ❌ Remove member
                  </button>
                </Box>
              </Box>
            ));

            return (
              <Box mt={2}>
                <Typography variant="body1">Members:</Typography>
                {members}
                <Box mt={2}>
                  <button type="button" onClick={() => push('')}>
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

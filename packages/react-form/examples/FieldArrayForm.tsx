import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Field, Form, useFieldArray } from '../src';
import { Errors } from '../src/types';
import ErrorMsg from './ErrorMsg';
import Values from './Values';

export default function FieldArrayForm() {
  const TasksField = () => {
    const { fields, push, remove } = useFieldArray('tasks');
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
  };

  const MembersField = () => {
    const { fields, push, remove } = useFieldArray('members');
    const members = fields.map((f, i) => (
      <Box sx={{ border: 1 }} key={f} mt={2} p={2}>
        <Box>
          <Box>Name</Box>
          <Field name={`${f}.name`} placeholder="Name" />
        </Box>
        <Box mt={2}>
          <Box>Email</Box>
          <Field name={`${f}.email`} type="email" placeholder="Email" />
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
          <button type="button" onClick={() => push({ name: '', email: '' })}>
            Add Member
          </button>
        </Box>
      </Box>
    );
  };

  interface FormValues {
    projectName: string;
    tasks: string[];
    _tasks?: string;
    members: {
      name: string;
      email: string;
    }[];
  }

  const initialValues: FormValues = {
    projectName: '',
    tasks: ['Task1'],
    members: [],
  };

  return (
    <Box>
      <Typography variant="h6">Field Array Form:</Typography>
      <Form
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validate={(values) => {
          const errors: Errors<FormValues> = {};

          if (!values.projectName) {
            errors.projectName = 'Name is required!';
          }

          if (!values.tasks || values.tasks?.length === 0) {
            errors._tasks = 'Atleast one task is required';
          }

          if (values.tasks) {
            const taskErrors = values.tasks.map((t) => {
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
            const memberErrors = values.members.map((m) => {
              if (!m.email) {
                return { email: 'Email is required!' };
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
          <ErrorMsg path="projectName" />
        </Box>
        <TasksField />
        <MembersField />

        <Box mt={2}>
          <button type="submit">Submit</button>
        </Box>

        <Values />
      </Form>
    </Box>
  );
}

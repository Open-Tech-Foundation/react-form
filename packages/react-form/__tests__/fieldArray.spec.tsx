import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, useFieldArray, Form } from '../src';
import ErrorMsg from './ErrorMsg';
import { Errors } from '../src/types';

describe('Field Array', () => {
  test('Create array of fields and validate them', async () => {
    let formValues: unknown;

    const TasksField = () => {
      const { fields, push, remove } = useFieldArray('tasks');
      const tasks = fields.map((f, i) => (
        <div key={i}>
          <label htmlFor={f + i}>Name {i}</label>
          <Field id={f + i} name={f} />
          <button type="button" onClick={() => remove(i)}>
            Remove
          </button>
          <ErrorMsg path={f} />
        </div>
      ));

      return (
        <>
          {tasks}
          <ErrorMsg path="_tasks" />
          <button type="button" onClick={() => push('')}>
            Add Task
          </button>
        </>
      );
    };

    interface FormValues {
      tasks: string[];
      _tasks?: string;
    }

    render(
      <Form
        initialValues={{ tasks: [], _tasks: '' }}
        onSubmit={(values) => (formValues = values)}
        validate={(values) => {
          const errors: Errors<FormValues> = {};
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

          return errors;
        }}
      >
        <TasksField />
        <button type="submit">Submit</button>
      </Form>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(
        screen.getByText('Atleast one task is required')
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }));
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(screen.getByText('Required!')).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText('Name 0'), {
      target: { value: 'task 1' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    await waitFor(() => {
      expect(formValues).toEqual({ tasks: ['task 1'], _tasks: '' });
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }));
    await waitFor(() => {
      expect(screen.getAllByRole('textbox')).toHaveLength(2);
    });
  });
});

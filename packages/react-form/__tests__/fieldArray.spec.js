import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, FieldArray, Form, useField } from '../src';
import ErrorMsg from './ErrorMsg';

describe('Field Array', () => {
  test('Create array of fields and validate them', async () => {
    let formValues;

    render(
      <Form
        onSubmit={(values) => (formValues = values)}
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

          return errors;
        }}
      >
        <FieldArray
          name="tasks"
          component={({ fields, push, remove }) => {
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
          }}
        />
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
      expect(formValues).toEqual({ tasks: ['task 1'] });
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }));
    expect(screen.getAllByRole('textbox')).toHaveLength(2);
  });
});

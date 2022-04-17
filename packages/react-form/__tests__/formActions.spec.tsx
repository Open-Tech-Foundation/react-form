import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Field, Form } from '../src';

describe('Form Actions', () => {
  test('Reset the form on submit without initialValues', async () => {
    let formValues: unknown;

    const App = () => {
      return (
        <Form
          onSubmit={(values, { reset }) => {
            formValues = values;
            reset();
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'xxx' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: 'xxx' });
    });
    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toHaveValue('');
    });
  });

  it('Reset the form on submit with initialValues', async () => {
    interface FormValues {
      name: string;
    }
    let formValues: FormValues;

    const App = () => {
      return (
        <Form
          initialValues={{ name: 'g' }}
          onSubmit={(values, { reset }) => {
            formValues = values;
            reset();
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: 'React' });
    });
    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toHaveValue('g');
    });
  });

  it('Reset the form on submit with new initialValues', async () => {
    interface FormValues {
      name: string;
    }
    let formValues: FormValues;

    const App = () => {
      return (
        <Form
          initialValues={{ name: 'g' }}
          onSubmit={(values, { reset }) => {
            formValues = values;
            reset({ name: 'xxx' });
          }}
        >
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <button type="submit" />
        </Form>
      );
    };
    render(<App />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(formValues).toEqual({ name: 'React' });
    });
    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toHaveValue('xxx');
    });
  });
});
